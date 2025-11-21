
---

# **2️⃣ Frontend README (`client/README.md`)**

```markdown
# TinyLink Frontend

This is the frontend for **TinyLink**, a URL shortener application.  
It is built with **React**, **Vite**, and **Tailwind CSS**.

---

## Features

- Dashboard to view all links
- Create short links with optional custom codes
- Display generated short URL after creation
- Delete links
- Copy short URLs to clipboard
- View statistics for each link

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Fetch API

---

## Folder Structure

client/
├── src/
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ └── StatsPage.jsx
│ ├── components/
│ │ ├── LinkForm.jsx
│ │ └── LinksTable.jsx
│ ├── App.jsx
│ └── api.js
├── tailwind.config.js
├── vite.config.js
└── package.json


---

## Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd client

2. Install dependencies
npm install

3. Setup Environment Variables

Create a .env file:

VITE_API_URL=http://localhost:3001


Replace the URL if your backend is hosted elsewhere.

4. Start the Development Server
npm run dev


Server runs on http://localhost:5173.

Pages
Dashboard (/)

Shows all links in a table

Create new link

Copy or delete links

Shows short URL and notifications after creation

Stats Page (/code/:code)

Displays details of a single link

Total clicks

Last clicked time

Created time

Original URL

Notes

Dashboard and Stats pages are fully responsive.

All API requests use src/api.js helper.

Notifications are shown on link creation and copy actions