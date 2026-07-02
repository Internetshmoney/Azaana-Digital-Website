function getAvailableSlots(payload) {
  const dateValue = sanitize(payload.date, 20);
  if (!dateValue) throw new Error('Date is required.');

  const calendar = getCalendar();
  const dayStart = new Date(dateValue + 'T00:00:00');
  const dayEnd = new Date(dateValue + 'T23:59:59');
  const events = calendar.getEvents(dayStart, dayEnd);

  const slots = buildSlots(dateValue).filter(function (slot) {
    const start = combineDateTime(dateValue, slot);
    const end = new Date(start.getTime() + CONFIG.BOOKING_DURATION_MINUTES * 60000);
    return !overlaps(start, end, events);
  });

  return { slots: slots };
}

function createBooking(payload) {
  assertNoSpam(payload);
  const name = sanitize(payload.name, 120);
  const email = assertEmail(payload.email);
  const businessName = sanitize(payload.businessName, 160);
  const purpose = sanitize(payload.purpose, 1600);
  const dateValue = sanitize(payload.date, 20);
  const timeValue = sanitize(payload.time, 10);
  if (!name || !businessName || !purpose || !dateValue || !timeValue) throw new Error('Please complete every booking field.');

  const available = getAvailableSlots({ date: dateValue }).slots;
  if (available.indexOf(timeValue) === -1) throw new Error('That time is no longer available. Please choose another slot.');

  const start = combineDateTime(dateValue, timeValue);
  const end = new Date(start.getTime() + CONFIG.BOOKING_DURATION_MINUTES * 60000);
  const calendar = getCalendar();
  const event = calendar.createEvent('Azaana Digital Consultation - ' + name, start, end, {
    description: 'Client: ' + name + '\nEmail: ' + email + '\nBusiness: ' + businessName + '\nPurpose: ' + purpose,
    guests: email,
    sendInvites: true,
  });

  const sheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.BOOKINGS);
  sheet.appendRow([uuid(), name, email, businessName, purpose, dateValue, timeValue, CONFIG.TIMEZONE, event.getId(), 'booked', new Date()]);

  const clientBody = 'Hi ' + name + ',\n\nYour free consultation with Azaana Digital is booked for ' + dateValue + ' at ' + timeValue + ' (' + CONFIG.TIMEZONE + ').\n\nWe look forward to speaking with you.\n\nAzaana Digital';
  const adminBody = 'New consultation booked.\n\nName: ' + name + '\nEmail: ' + email + '\nBusiness: ' + businessName + '\nDate: ' + dateValue + '\nTime: ' + timeValue + '\nPurpose: ' + purpose;
  GmailApp.sendEmail(email, 'Your Azaana Digital consultation is booked', clientBody);
  GmailApp.sendEmail(CONFIG.ADMIN_EMAIL, 'New consultation booked: ' + name, adminBody, { replyTo: email });

  return { booked: true, eventId: event.getId() };
}
