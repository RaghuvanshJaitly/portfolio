export const portfolio = {
  name: 'Raghuvansh Jaitly',
  shortName: 'Rag',
  location: 'Halifax, Nova Scotia',
  email: 'raghuvanshjaitly098@gmail.com',
  links: {
    github: 'https://github.com/RaghuvanshJaitly',
    linkedin: 'https://www.linkedin.com/in/raghuvansh-jaitly-4202b1415/',
    resume: '/Resume_oct26.pdf',
  },
  projects: [
    {
      number: '01',
      title: 'Stock Market Analytics + ML',
      eyebrow: 'From SQLite queries to questioning the model',
      summary: 'A Python stock analytics application that grew as I did: from ingesting market data and designing a database to feature engineering, regression experiments, and honest model evaluation.',
      lesson: "The naive baseline sometimes beat the regression model. That was the useful result: complexity doesn't earn correctness.",
      details: ['Historical data ingestion', 'SQL analytics', 'Time-series handling', 'Feature engineering', 'Chronological splits', 'Residual + error analysis'],
      tech: ['Python', 'Pandas', 'NumPy', 'SQLite', 'SQL', 'scikit-learn', 'Matplotlib', 'yfinance'],
      url: 'https://github.com/RaghuvanshJaitly/yahoo-finance',
      status: 'Case study',
    },
    {
      number: '02',
      title: 'Fake Job Detector',
      eyebrow: 'Classification experiment in progress',
      summary: 'A system for exploring whether a job posting is likely legitimate or fraudulent. It is also a reason to get serious about messy data, class imbalance, and the cost of being wrong.',
      lesson: 'Currently moving from regression into practical classification: comparing simple baselines, interrogating errors, and learning when precision and recall pull in different directions.',
      details: ['Exploratory analysis', 'Text + categorical features', 'Classification', 'Class imbalance', 'Confusion matrices', 'Potential NLP approaches'],
      tech: ['Python', 'Pandas', 'scikit-learn', 'Jupyter'],
      url: 'https://github.com/RaghuvanshJaitly/fake_job_detector',
      status: 'Building',
    },
  ],
  experience: [
    {
      role: 'AI & Data Solutions Associate',
      org: 'EOK Consults',
      date: 'April 2026 to August 2026',
      note: 'Early professional experience working through technical problems, data, AI-related work, and practical solutions.',
    },
    {
      role: 'Residence Assistant',
      org: 'Dalhousie University',
      date: 'January 2024 to April 2024',
      note: 'Supporting residents, navigating conflict, solving unexpected problems, and being someone people could rely on when calm judgment mattered.',
    },
    {
      role: 'Community Mentor',
      org: 'Dalhousie University',
      date: 'September 2023 to December 2023',
      note: 'Helping students find resources and community, supporting events, and building trust with people from different backgrounds.',
    },
    {
      role: 'Server & Bartender',
      org: 'The Local · Besharam Bar & Grill',
      date: 'April 2025 to Present',
      note: 'A different kind of problem-solving: communicate quickly, stay organized in the chaos, work as a team, and keep calm when the room gets busy.',
    },
  ],
}

export const learning = [
  ['Machine Learning', 8, 'learning deeply'], ['Statistics', 6, 'strengthening fundamentals'],
  ['Data Engineering', 6, 'building experience'], ['Cloud / AWS', 5, 'learning'],
  ['MLOps', 4, 'the destination'], ['Guitar', 3, 'questionable but improving'],
] as const
