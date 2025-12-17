# SocietyERP - Admin Dashboard SPA

A static Single Page Application for managing residential society operations.

## Features

- 📊 **Dashboard** - Overview of collections, payments, and complaints
- 💰 **Billing & Payments** - Manage invoices and payment tracking
- ⚠️ **Defaulters** - Track overdue payments
- 🔄 **Reconciliation** - Bank statement matching
- 📈 **Reports** - Financial and operational reports
- 📋 **Audit Logs** - System activity tracking
- 📝 **Complaints** - Resident issue management
- 🏢 **Vendors** - Vendor and contract management
- 👷 **Vendor Workforce** - Staff tracking
- ⏰ **Attendance** - Attendance monitoring
- 🏠 **Residents** - Resident directory
- 👤 **Users & Roles** - Access management

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** (CDN) - Utility-first styling
- **Font Awesome** (CDN) - Icons
- **Vanilla JavaScript** - Hash-based SPA router

## Project Structure

```
spa/
├── index.html          # Main SPA shell
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── router.js       # Hash-based router
│   └── pages.js        # Page content (auto-generated)
└── README.md
```

## Getting Started

### Local Development

1. Simply open `index.html` in a browser, or
2. Use a local server:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8080
```

Then open http://localhost:8080

### Deploy to Cloud

This static SPA can be deployed to any static hosting:

- **Netlify**: Drag & drop the `spa` folder
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3**: Upload as static website
- **Firebase Hosting**: `firebase deploy`

## Navigation

The SPA uses hash-based routing:

- `#dashboard` - Dashboard
- `#billing` - Billing & Payments
- `#defaulters` - Defaulters
- `#reconciliation` - Reconciliation
- `#reports` - Reports
- `#audit-logs` - Audit Logs
- `#complaints` - Complaints
- `#vendors` - Vendors
- `#vendor-workforce` - Vendor Workforce
- `#attendance` - Attendance
- `#residents` - Residents
- `#users-roles` - Users & Roles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
