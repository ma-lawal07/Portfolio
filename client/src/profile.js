// Static profile content. Projects come from the API (/api/projects).
export const PROFILE = {
  name: 'Mariam Lawal',
  email: 'mariambrims07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mariamlawal07',
  github: 'https://github.com/ma-lawal07',
  cv: '/cv.pdf',
  headshot: '/headshot.jpg',
};

export const STATS = [
  ['Degree', 'BSc CS · Predicted 2:1 · June 2027'],
  ['Industry year', 'Support Engineer, CliniSys'],
  ['Certified', 'Azure AZ-900 · AI-900'],
  ['Based in', 'Guildford, Surrey'],
];

export const EXPERIENCE = [
  {
    role: 'Support Engineer', org: 'CliniSys · Woking', dates: 'May 2025 – June 2026',
    points: [
      'Resolved 800+ technical support tickets across user support, applications, security and engineering, prioritising issues by urgency and business impact.',
      'Used Python scripts to investigate application issues, validate information and support troubleshooting of business-critical systems.',
      'Assisted with Microsoft 365 user accounts, permissions and access management, following security and operational procedures.',
      'Collaborated with users, engineers and application teams to investigate problems, explain solutions and coordinate issue resolution.',
    ],
  },
  {
    role: 'Student Ambassador', org: 'University of Surrey · Guildford', dates: 'May 2023 – Present',
    points: [
      'Delivered 15+ presentations explaining technical modules and projects to prospective students and non-technical audiences.',
      'Engaged with 300+ prospective students and parents, identifying their questions and tailoring explanations to their interests.',
      'Supported event coordination for 1,000+ attendees, managing schedules and working with colleagues to keep activities running smoothly.',
    ],
  },
];

export const SKILLS = [
  ['Programming & databases', 'Python, JavaScript, SQL, T-SQL'],
  ['Data & machine learning', 'pandas, scikit-learn, data cleaning, exploratory analysis, forecasting, classification, model evaluation'],
  ['Software development', 'React, Node.js, Express.js, FastAPI, Firebase, REST APIs, WebSockets, Git & GitHub'],
  ['Cloud & IT', 'Microsoft Azure, Microsoft Entra ID / Azure AD, Microsoft 365 administration, access management, networking fundamentals, troubleshooting'],
  ['Tools', 'Streamlit, ServiceNow, VS Code'],
];

export const CERTS = [
  ['Microsoft Azure Fundamentals', 'AZ-900'],
  ['Microsoft Azure AI Fundamentals', 'AI-900'],
  ['IKEEP Intrapreneurial Knowledge Exchange Enterprise Pathway', null],
];
