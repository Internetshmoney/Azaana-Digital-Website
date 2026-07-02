function getCalendar() {
  return CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
}

function combineDateTime(dateValue, timeValue) {
  const parts = String(timeValue).split(':');
  const date = new Date(dateValue + 'T00:00:00');
  date.setHours(Number(parts[0]), Number(parts[1] || 0), 0, 0);
  return date;
}

function overlaps(start, end, events) {
  return events.some(function (event) {
    return start < event.getEndTime() && end > event.getStartTime();
  });
}

function buildSlots(dateValue) {
  const slots = [];
  const date = new Date(dateValue + 'T00:00:00');
  if (CONFIG.BUSINESS_DAYS.indexOf(date.getDay()) === -1) return slots;

  for (let hour = CONFIG.BUSINESS_START_HOUR; hour < CONFIG.BUSINESS_END_HOUR; hour++) {
    [0, 30].forEach(function (minute) {
      const label = String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
      slots.push(label);
    });
  }
  return slots;
}
