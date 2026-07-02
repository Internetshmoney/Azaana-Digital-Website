function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const action = body.action;
    const payload = body.payload || {};

    if (!action) return jsonResponse(false, null, 'Missing action.');
    ensureSheets();

    const routes = {
      'newsletter.subscribe': subscribeNewsletter,
      'newsletter.list': listSubscribers,
      'newsletter.send': sendNewsletter,
      'contact.submit': submitContact,
      'booking.availableSlots': getAvailableSlots,
      'booking.create': createBooking,
    };

    if (!routes[action]) return jsonResponse(false, null, 'Unknown action.');
    const data = routes[action](payload);
    logAudit(action, payload.email || '', 'success', '');
    return jsonResponse(true, data, 'OK');
  } catch (error) {
    logAudit('error', '', 'failed', error.message);
    return jsonResponse(false, null, error.message);
  }
}

function doGet() {
  return jsonResponse(true, { status: 'Azaana Digital Apps Script backend is running.' }, 'OK');
}

function jsonResponse(ok, data, message) {
  return ContentService.createTextOutput(JSON.stringify({ ok, data, message }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSpreadsheet() {
  return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
}

function ensureSheets() {
  const ss = getSpreadsheet();
  const schemas = {};
  schemas[CONFIG.SHEETS.SUBSCRIBERS] = ['ID', 'First Name', 'Email', 'Source', 'Subscribed At', 'Status', 'Last Newsletter Sent At'];
  schemas[CONFIG.SHEETS.CONTACTS] = ['ID', 'Name', 'Email', 'Subject', 'Message', 'Submitted At', 'Status'];
  schemas[CONFIG.SHEETS.BOOKINGS] = ['ID', 'Name', 'Email', 'Business Name', 'Purpose', 'Date', 'Time', 'Timezone', 'Calendar Event ID', 'Status', 'Created At'];
  schemas[CONFIG.SHEETS.NEWSLETTER_LOGS] = ['ID', 'Subject', 'Sent At', 'Recipient Count', 'Status', 'Notes'];
  schemas[CONFIG.SHEETS.AUDIT_LOGS] = ['ID', 'Action', 'Email', 'Status', 'Timestamp', 'Details'];

  Object.keys(schemas).forEach(function (name) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    if (sheet.getLastRow() === 0) sheet.appendRow(schemas[name]);
  });
}

function uuid() {
  return Utilities.getUuid();
}
