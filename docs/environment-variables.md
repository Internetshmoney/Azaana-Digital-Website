# Environment Variables

Frontend variables:

```txt
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
VITE_SITE_URL=https://azaanadigital.com
VITE_ADMIN_EMAIL=hello@azaanadigital.com
```

Apps Script settings in `google-apps-script/Config.gs`:

```js
SPREADSHEET_ID
CALENDAR_ID
ADMIN_EMAIL
TIMEZONE
BUSINESS_DAYS
BUSINESS_START_HOUR
BUSINESS_END_HOUR
BOOKING_DURATION_MINUTES
BOOKING_BUFFER_MINUTES
```
