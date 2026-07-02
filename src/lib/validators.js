export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateRequired(fields) {
  return Object.entries(fields).reduce((errors, [key, value]) => {
    if (!String(value || '').trim()) {
      errors[key] = 'This field is required.';
    }
    return errors;
  }, {});
}
