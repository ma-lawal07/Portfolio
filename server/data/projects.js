// Seed data. To add a project, append an object here and run `npm run seed`.
// Categories drive the project filters automatically.
export const CATEGORIES = ['Networking', 'Cloud', 'Software', 'Data / AI', 'Tech × people'];

export const PROJECTS = [
  {
    name: 'CyberSafe', featured: true, award: '2nd of 30 teams · University competition',
    cats: ['Software', 'Tech × people'], shot: 'app screenshot',
    desc: 'A React web app offering a secure, interactive learning environment — modular learning paths, family and community features, and AI-powered lessons — addressing UN SDGs 4 and 16.',
    bullets: [
      'Led requirements gathering, architecture design, backend implementation and the final presentation.',
      'Implemented secure authentication with OAuth and JWT, plus encryption and secure data workflows.',
    ],
    tech: ['React', 'OAuth', 'JWT', 'Encryption'],
  },
  {
    name: 'StockAhead', featured: true,
    cats: ['Data / AI', 'Software'], image: '/projects/stockahead.png',
    desc: 'An interactive retail forecasting application that forecasts weekly sales for 20 products and generates replenishment suggestions using simulated inventory inputs.',
    bullets: [
      'Cleaned and analysed a dataset containing 541,909 retail transaction records; compared random forest forecasts with simple baselines using chronological evaluation.',
      'Demonstrated a 19.36% reduction in test mean absolute error using a four-week moving average against the previous-week baseline, and explored stock availability versus inventory levels through adjustable scenarios.',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
  },
  {
    name: 'Bank Campaign Prioritisation', featured: true,
    cats: ['Data / AI', 'Software'], image: '/projects/bank-campaign.png',
    desc: 'An explainable campaign-targeting demo built on 45,211 historical bank-marketing records, comparing logistic regression, random forest and gradient boosting.',
    bullets: [
      'Evaluated ranking under a 10% contact budget; the validation-selected calibrated random forest achieved 1.34× lift over random selection on held-out historical records.',
      'Implemented leakage-aware preprocessing, probability calibration, prediction-sensitivity explanations, review flags, reproducible training and automated metric tests.',
    ],
    tech: ['Python', 'Scikit-learn', 'Streamlit'],
  },
  {
    name: 'Formula 1 Data Dashboard', featured: true,
    cats: ['Data / AI', 'Software'], image: '/projects/f1-dashboard.png',
    desc: 'A full-stack dashboard replaying historical Formula 1 race data, with lap-time comparisons, tyre performance charts and a selected-driver leaderboard.',
    bullets: [
      'Connected a React frontend to a FastAPI backend using REST endpoints and WebSockets, with start, pause and reset controls.',
      'Processed historical race data using FastF1 and pandas, handling missing lap times, excluding pit laps from pace charts and caching sessions to speed up subsequent loads.',
    ],
    tech: ['React', 'Chart.js', 'Python', 'FastAPI', 'pandas', 'WebSockets', 'FastF1'],
  },
  {
    name: 'Cloud-Based IT Support System', featured: false,
    cats: ['Cloud', 'Software'],
    desc: 'Backend lead for a cloud-based application enabling users to submit, track and resolve IT support tickets — backend APIs and database design for users, tickets and workflow status, Azure AD authentication with role-based access control, Azure deployment, and a dashboard tracking resolution times and issue categories.',
    bullets: [],
    tech: ['Azure', 'Azure AD', 'Node.js', 'Firebase'],
  },
].map((p, i) => ({ order: i, ...p }));
