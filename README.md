# Azaana Digital

A production-ready website for **Azaana Digital**, a premium digital agency helping businesses, startups, and professionals build modern websites, automate workflows, launch AI-powered solutions, and grow their online presence.

The project uses the official logo file provided by Stephanie and keeps the architecture modular so the site can later grow into service pages, case studies, payments, a client portal, CMS-powered blog, and an admin dashboard.

## Quick Start

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

> Note: Node.js and npm must be installed on your computer before running these commands.

## Environment Setup

Copy [.env.example](.env.example) into a new file named `.env`.

```txt
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
VITE_SITE_URL=https://azaanadigital.com
VITE_ADMIN_EMAIL=hello@azaanadigital.com
```

The site can run visually without the Google Apps Script URL, but newsletter, contact, and booking submissions need `VITE_GOOGLE_SCRIPT_URL`.

## Project Structure

```txt
public/
  logo.png              Official Azaana Digital logo
  robots.txt            Search engine crawling rules
  sitemap.xml           SEO sitemap
  _redirects            Cloudflare Pages SPA fallback
  404.html              GitHub Pages SPA fallback

src/
  components/
    common/             Reusable Button, Card, Container, Logo, SectionHeading
    forms/              Newsletter, Contact, Consultation forms
    layout/             Navbar and Footer
    sections/           Home page sections
  data/                 Services, portfolio, testimonials, blog placeholders
  lib/                  API client, constants, validation helpers
  pages/                Route-level pages
  styles/               Tailwind CSS entry

google-apps-script/     Free backend using Sheets, Calendar, and Gmail
docs/                   Setup, deployment, and testing guides
```

## Important Files

- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [index.html](index.html)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [public/logo.png](public/logo.png)
- [public/robots.txt](public/robots.txt)
- [public/sitemap.xml](public/sitemap.xml)
- [vercel.json](vercel.json)

## Main Pages

- Home: `/`
- Services: `/services`
- Portfolio: `/portfolio`
- About: `/about`
- Blog: `/blog`
- Blog post template: `/blog/:slug`
- Contact: `/contact`
- Free consultation booking: `/book`
- Privacy policy: `/privacy`
- Terms: `/terms`

## Frontend Features

- Sticky responsive navigation
- Mobile hamburger menu
- Premium hero section
- Service cards
- Portfolio placeholders
- Why choose us section
- Testimonials
- Newsletter signup
- Contact form
- Consultation booking interface
- Blog listing and post template
- Footer with logo, links, services, contact, social icons, and newsletter
- SEO metadata
- Open Graph and Twitter card tags
- JSON-LD structured data
- `robots.txt`
- `sitemap.xml`
- Responsive layout
- Accessible labels, semantic HTML, and visible focus states

## Google Apps Script Backend

Backend files live in [google-apps-script](google-apps-script/).

Main backend files:

- [google-apps-script/Config.gs](google-apps-script/Config.gs)
- [google-apps-script/Code.gs](google-apps-script/Code.gs)
- [google-apps-script/Security.gs](google-apps-script/Security.gs)
- [google-apps-script/Newsletter.gs](google-apps-script/Newsletter.gs)
- [google-apps-script/Contact.gs](google-apps-script/Contact.gs)
- [google-apps-script/Booking.gs](google-apps-script/Booking.gs)
- [google-apps-script/Calendar.gs](google-apps-script/Calendar.gs)
- [google-apps-script/Email.gs](google-apps-script/Email.gs)

Backend capabilities:

- Store newsletter subscribers in Google Sheets
- Store contact messages in Google Sheets
- Send contact messages to Gmail
- Retrieve active newsletter subscribers
- Send newsletters through Gmail
- Check Google Calendar availability
- Create consultation calendar events
- Send booking confirmation emails
- Log backend activity

## Google Sheets Tabs

The Apps Script creates these sheets automatically:

- `Subscribers`
- `Contact Messages`
- `Bookings`
- `Newsletter Logs`
- `Audit Logs`

## Documentation

- [Environment variables](docs/environment-variables.md)
- [Google Sheets setup](docs/google-sheets-setup.md)
- [Google Calendar setup](docs/google-calendar-setup.md)
- [Apps Script deployment](docs/apps-script-deployment.md)
- [Deployment guide](docs/deployment-guide.md)
- [GitHub upload guide](docs/github-upload-guide.md)
- [Testing checklist](docs/testing-checklist.md)

## Deployment

The project is ready for free deployment on:

- Cloudflare Pages
- Vercel
- GitHub Pages

Build command:

```bash
npm run build
```

Output directory:

```txt
dist
```

Required production environment variable:

```txt
VITE_GOOGLE_SCRIPT_URL
```

Recommended production environment variables:

```txt
VITE_SITE_URL
VITE_ADMIN_EMAIL
```

## Future Growth

The current architecture is ready for:

- Service detail pages
- Case studies
- CMS or MDX blog publishing
- Stripe or Paystack payments
- Client portal
- Admin dashboard
- Analytics
- CRM integration
- More automation workflows

## Quality Notes

The project is structured for performance and maintainability:

- Route-level code splitting with `React.lazy`
- Static-first frontend hosting
- Minimal dependencies
- Tailwind utility classes
- Reusable data-driven components
- Google Apps Script as a free backend
- No Firebase or paid database required
