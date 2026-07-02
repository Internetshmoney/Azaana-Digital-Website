function subscribeNewsletter(payload) {
  assertNoSpam(payload);
  const firstName = sanitize(payload.firstName, 80);
  const email = assertEmail(payload.email);
  if (!firstName) throw new Error('First name is required.');

  const sheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.SUBSCRIBERS);
  const data = sheet.getDataRange().getValues();
  const exists = data.some(function (row, index) {
    return index > 0 && String(row[2]).toLowerCase() === email;
  });

  if (exists) return { subscribed: true, duplicate: true };

  sheet.appendRow([uuid(), firstName, email, 'website', new Date(), 'active', '']);
  GmailApp.sendEmail(email, 'Welcome to Azaana Digital', 'Thanks for subscribing. We will send practical notes on websites, automation, AI, and brand growth.');
  return { subscribed: true, duplicate: false };
}

function listSubscribers() {
  const sheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.SUBSCRIBERS);
  const values = sheet.getDataRange().getValues().slice(1);
  return values
    .filter(function (row) { return row[5] === 'active'; })
    .map(function (row) {
      return { firstName: row[1], email: row[2] };
    });
}

function sendNewsletter(payload) {
  const subject = sanitize(payload.subject, 160);
  const body = sanitize(payload.body, 15000);
  if (!subject || !body) throw new Error('Newsletter subject and body are required.');

  const subscribers = listSubscribers();
  subscribers.forEach(function (subscriber) {
    GmailApp.sendEmail(subscriber.email, subject, 'Hi ' + subscriber.firstName + ',\n\n' + body + '\n\nAzaana Digital');
  });

  const logSheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.NEWSLETTER_LOGS);
  logSheet.appendRow([uuid(), subject, new Date(), subscribers.length, 'sent', '']);
  return { sent: subscribers.length };
}
