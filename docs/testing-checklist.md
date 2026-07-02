# Testing Checklist

## UX

- Navbar works on desktop and mobile.
- All CTAs route to the correct pages.
- Booking form shows available time slots.
- Contact and newsletter forms show success and error states.

## Accessibility

- Keyboard can reach every interactive element.
- Focus states are visible.
- Images have useful alt text or are decorative.
- Heading hierarchy is logical.
- Form fields have labels.

## SEO

- Title and meta description are present.
- Open Graph and Twitter tags are present.
- `robots.txt` exists.
- `sitemap.xml` exists.
- JSON-LD structured data exists.

## Performance

- Run `npm run build`.
- Check bundle size.
- Run Lighthouse after deployment.
- Confirm no large unoptimized images beyond the supplied logo.

## Backend

- Newsletter subscriber is added to Google Sheets.
- Duplicate subscriber does not create a duplicate row.
- Contact form stores a row and sends email.
- Booking flow checks calendar availability.
- Booking creates a calendar event and sends both emails.
