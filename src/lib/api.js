const endpoint = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function callAppsScript(action, payload = {}) {
  if (!endpoint) {
    throw new Error('Missing VITE_GOOGLE_SCRIPT_URL. Add your Google Apps Script Web App URL to .env.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({ action, payload }),
  });

  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.message || 'Something went wrong. Please try again.');
  }
  return result.data;
}

export function submitNewsletter(payload) {
  return callAppsScript('newsletter.subscribe', payload);
}

export function submitContact(payload) {
  return callAppsScript('contact.submit', payload);
}

export function getAvailableSlots(payload) {
  return callAppsScript('booking.availableSlots', payload);
}

export function createBooking(payload) {
  return callAppsScript('booking.create', payload);
}
