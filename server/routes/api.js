import { Router } from 'express';
import Project from '../models/Project.js';
import { isConnected } from '../db.js';
import { CATEGORIES, PROJECTS } from '../data/projects.js';

const router = Router();

router.get('/projects', async (req, res, next) => {
  try {
    let projects = isConnected() ? await Project.find().sort({ order: 1 }).lean() : [];
    // Empty or unreachable database: fall back to the bundled seed data.
    if (!projects.length) projects = PROJECTS;
    res.json({ categories: CATEGORIES, projects });
  } catch (err) { next(err); }
});

export default router;
