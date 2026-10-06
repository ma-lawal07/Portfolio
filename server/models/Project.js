import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  featured: { type: Boolean, default: false },
  award: String,
  cats: { type: [String], default: [] },
  shot: String,   // placeholder caption shown until `image` is set
  image: String,  // optional screenshot URL for featured cards
  desc: { type: String, required: true },
  bullets: { type: [String], default: [] },
  tech: { type: [String], default: [] },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
