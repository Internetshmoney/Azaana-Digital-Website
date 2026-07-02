# Google Sheets Setup

1. Create a new Google Sheet named `Azaana Digital Operations`.
2. Copy the spreadsheet ID from the URL.
3. Paste it into `CONFIG.SPREADSHEET_ID` inside `google-apps-script/Config.gs`.
4. Deploy and run any backend action once. The script will create these sheets automatically:

```txt
Subscribers
Contact Messages
Bookings
Newsletter Logs
Audit Logs
```

## Subscribers

```txt
ID, First Name, Email, Source, Subscribed At, Status, Last Newsletter Sent At
```

## Contact Messages

```txt
ID, Name, Email, Subject, Message, Submitted At, Status
```

## Bookings

```txt
ID, Name, Email, Business Name, Purpose, Date, Time, Timezone, Calendar Event ID, Status, Created At
```
