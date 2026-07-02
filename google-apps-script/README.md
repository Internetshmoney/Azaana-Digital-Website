# Azaana Digital Google Apps Script Backend

Create a Google Sheet, copy its ID, then paste it into `Config.gs`.

Deploy the script as a Web App:

1. Open Apps Script.
2. Add each `.gs` file from this folder.
3. Set `SPREADSHEET_ID`, `CALENDAR_ID`, and `ADMIN_EMAIL` in `Config.gs`.
4. Click Deploy > New deployment > Web app.
5. Execute as: Me.
6. Access: Anyone.
7. Copy the Web App URL into `VITE_GOOGLE_SCRIPT_URL`.

The frontend sends actions to one endpoint:

- `newsletter.subscribe`
- `newsletter.list`
- `newsletter.send`
- `contact.submit`
- `booking.availableSlots`
- `booking.create`
