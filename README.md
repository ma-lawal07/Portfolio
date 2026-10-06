# Mariam Lawal — Portfolio (MERN)

MongoDB · Express · React (Vite) · Node. Built from the "Portfolio Final" design in Claude Design.

```
server/   Express API + Mongoose models (Project), seed data
client/   React app; styles/industry.css holds the design tokens
```

## Run locally

```bash
npm install
cp server/.env.example server/.env   # set MONGODB_URI (local or Atlas)
npm run seed                         # optional: load projects into MongoDB
npm run dev                          # API on :5000, site on http://localhost:5173
```

If MongoDB can't be reached or has no projects, `GET /api/projects` serves the
bundled seed data from `server/data/projects.js`, so the site works without a database.

## Production

```bash
npm run build && npm start           # Express serves client/dist on :5000
```

## Content

- **Projects** — edit `server/data/projects.js`, then `npm run seed`. Set `featured: true`
  for a large card, `award` for the badge, and `image` for a screenshot URL.
- **Headshot** — add `client/public/headshot.jpg`.
- **CV** — add `client/public/cv.pdf`.
- **Experience, skills, certifications, links** — `client/src/profile.js`.
