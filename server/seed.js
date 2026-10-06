import mongoose from 'mongoose';
import { connect } from './db.js';
import Project from './models/Project.js';
import { PROJECTS } from './data/projects.js';

if (!(await connect())) process.exit(1);
await Project.deleteMany({});
await Project.insertMany(PROJECTS);
console.log(`Seeded ${PROJECTS.length} projects`);
await mongoose.disconnect();
