# Google Calendar Setup

Use your primary calendar or create a dedicated calendar named `Azaana Digital Consultations`.

1. Open Google Calendar.
2. Create or select the consultation calendar.
3. Open settings for the calendar.
4. Copy the Calendar ID.
5. Paste it into `CONFIG.CALENDAR_ID` in `google-apps-script/Config.gs`.

Default booking assumptions:

```txt
Timezone: Africa/Lagos
Days: Monday-Friday
Hours: 9:00 AM-5:00 PM
Duration: 30 minutes
Buffer: 15 minutes reserved for future extension
```

The script checks existing events before returning available slots and rechecks before creating a new booking.
