import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { connect } from './db.js';
import api from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 5000;
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../client/dist');

app.use(cors());
app.use(express.json({ limit: '20kb' }));
app.use('/api', api);

// In production, serve the built React app from the same origin.
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get(/^\/(?!api).*/, (req, res) => res.sendFile(path.join(dist, 'index.html')));
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

await connect();
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
