function submitContact(payload) {
  assertNoSpam(payload);
  const name = sanitize(payload.name, 120);
  const email = assertEmail(payload.email);
  const subject = sanitize(payload.subject, 160);
  const message = sanitize(payload.message, 2000);
  if (!name || !subject || !message) throw new Error('Please complete every contact field.');

  const sheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.CONTACTS);
  sheet.appendRow([uuid(), name, email, subject, message, new Date(), 'new']);

  const adminBody = [
    'New Azaana Digital inquiry',
    '',
    'Name: ' + name,
    'Email: ' + email,
    'Subject: ' + subject,
    '',
    message,
  ].join('\n');

  GmailApp.sendEmail(CONFIG.ADMIN_EMAIL, 'New inquiry: ' + subject, adminBody, { replyTo: email });
  GmailApp.sendEmail(email, 'We received your message', 'Hi ' + name + ',\n\nThanks for contacting Azaana Digital. We received your message and will reply manually soon.\n\nAzaana Digital');
  return { submitted: true };
}
