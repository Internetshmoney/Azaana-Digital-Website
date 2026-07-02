# Google Apps Script Deployment

1. Go to [script.google.com](https://script.google.com).
2. Create a new project named `Azaana Digital Backend`.
3. Add every `.gs` file from `google-apps-script/`.
4. Update `Config.gs`.
5. Click Deploy > New deployment.
6. Select Web app.
7. Set Execute as: Me.
8. Set Who has access: Anyone.
9. Deploy and authorize permissions for Sheets, Calendar, and Gmail.
10. Copy the Web App URL.
11. Add it to `.env` as `VITE_GOOGLE_SCRIPT_URL`.

Apps Script endpoint actions:

```txt
newsletter.subscribe
newsletter.list
newsletter.send
contact.submit
booking.availableSlots
booking.create
```

Note: Gmail has daily sending limits. For a large newsletter list, migrate email sending to a dedicated email provider later.
