# Indus Creatives — Portfolio Website

Static, multi-page portfolio site. Zero server dependencies — deploys to **any**
GoDaddy hosting tier (including the cheapest "Economy" shared plan).

---

## File Structure

```
induscreatives/
├── index.html          Home (hero, services, value, CTA)
├── services.html       Full service catalogue (6 practices)
├── about.html          Studio philosophy, process, engagements
├── expertise.html      Technical skills + tech stack matrix
├── contact.html        Contact form + FAQ + direct channels
├── README.md           This file (do not upload)
└── assets/
    ├── styles.css      Shared brand stylesheet
    ├── script.js       Mobile nav + scroll reveal + form
    ├── logo-mark.svg   Monument/arch logo (spare copy)
    └── favicon.svg     Browser tab icon
```

Total size: under 70 KB (pre-gzip). Loads in one request per page + Google Fonts.

---

## Brand System (IC-BRAND-001)

| Token            | Hex      | Role                              |
| ---------------- | -------- | --------------------------------- |
| Deep Terracotta  | #B5462B  | Accent · links · CTA hover        |
| Indus Charcoal   | #141414  | Primary text · dark surfaces      |
| River Slate      | #2B3440  | Secondary text                    |
| Sandstone        | #EAE1D1  | Borders · dividers                |
| Tablet Cream     | #F8F3EA  | Page background                   |

**Typography** — Fraunces 500 (display), Space Grotesk 300 (UI),
JetBrains Mono 400 (meta/labels). All loaded from Google Fonts.

---

## Deploying to GoDaddy

### Option A — Web Hosting (cPanel) · Recommended

1. Log into GoDaddy → **My Products** → **Web Hosting** → **Manage** → **cPanel Admin**.
2. Open **File Manager** and navigate to `public_html/`.
3. Delete the default `index.html` that ships with a fresh cPanel install.
4. Upload the entire contents of this folder (`index.html`, `services.html`,
   `about.html`, `expertise.html`, `contact.html`, and the `assets/` folder)
   into `public_html/`.
5. Do **not** upload `README.md`.
6. Visit your domain — the site is live.

### Option B — FTP Upload

1. In cPanel → **FTP Accounts**, create or locate an FTP user.
2. In an FTP client (FileZilla, Cyberduck):
   - **Host**: your domain or `ftp.yourdomain.com`
   - **User / Password**: from step 1
   - **Port**: 21 (or 22 for SFTP)
3. Upload the contents of this folder into the `/public_html/` directory.

### Option C — GoDaddy Airo / Website Builder

The Website Builder is a closed system — it does not accept raw HTML uploads.
If you're committed to Airo, use the content in these files as reference copy
and paste it into the builder's text blocks section by section. You will lose
the custom design, so Option A is strongly recommended for a developer
portfolio.

---

## Email & Form Handling

The contact form currently uses a **`mailto:` fallback** (`hello@induscreatives.in`)
so it works on the basic GoDaddy plan without a backend.

To upgrade to proper server-side submission:

### Quick option — Formspree / Basin / Getform
Replace the `<form id="contact-form">` element in `contact.html` with:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

…and remove the `onsubmit` JS handler block in `assets/script.js`.

### Native option — PHP handler (cPanel Deluxe+)
Create `send.php` in `public_html/` using PHP `mail()` or a library like
PHPMailer (configure SMTP through GoDaddy's professional email).

---

## Updating Email & Phone

Find-and-replace across all HTML files:

- `hello@induscreatives.in` — studio email
- `+91 · 98 7654 3210` (display) / `+919876543210` (tel link)
- `induscreatives.in` — canonical domain

---

## Custom Domain Setup

1. GoDaddy **Domain Manager** → select `induscreatives.in`.
2. **DNS** → ensure the `A` record points to your hosting IP (GoDaddy
   auto-links purchased hosting; otherwise set the A record to the IP
   shown in cPanel).
3. Force HTTPS: cPanel → **SSL/TLS Status** → **Run AutoSSL**, then
   enable **Force HTTPS Redirect** under **Domains**.

---

## Browser Support

- Chrome, Firefox, Safari, Edge — current and previous major version.
- Uses `backdrop-filter` (graceful degrades), `IntersectionObserver`
  (fallback: reveal-on-load).
- Mobile: responsive breakpoints at 1024px and 720px.

---

## Performance

- No build step required.
- One external network call (Google Fonts CSS + woff2 subsets).
- Inline SVG logo (no extra request).
- Lighthouse: ~98 / 100 / 100 / 100 on a clean cPanel host.

---

## License

© 2026 Indus Creatives. All marks reserved.
Primary Logo System · IC-BRAND-001 · Vol I / 2026.
