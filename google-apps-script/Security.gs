function sanitize(value, maxLength) {
  return String(value || '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength || 1000);
}

function assertEmail(email) {
  const clean = sanitize(email, 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
    throw new Error('Please enter a valid email address.');
  }
  return clean;
}

function assertNoSpam(payload) {
  if (payload.website) throw new Error('Spam protection triggered.');
  if (payload.startedAt && payload.submittedAt && Number(payload.submittedAt) - Number(payload.startedAt) < 2500) {
    throw new Error('Please wait a moment before submitting.');
  }
}

function logAudit(action, email, status, details) {
  try {
    const sheet = getSpreadsheet().getSheetByName(CONFIG.SHEETS.AUDIT_LOGS);
    if (sheet) sheet.appendRow([uuid(), action, email, status, new Date(), details]);
  } catch (error) {
    // Avoid blocking user-facing requests if audit logging fails.
  }
}
