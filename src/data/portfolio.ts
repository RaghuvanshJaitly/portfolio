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
      title: 'Stock Market Analytics + API',
      eyebrow: 'From SQLite queries to a PostgreSQL API',
      summary: 'A Python project that ingests historical stock data with yfinance into PostgreSQL. It supports SQL reports in a CLI and serves trading-volume queries through FastAPI, with database integration tests and GitHub Actions CI. Earlier regression experiments compare predictions with simple baselines.',
      lesson: 'The regression experiments taught me to check simple baselines. Building the data pipeline, API, and tests is teaching me how the rest of the system fits together.',
      details: ['Historical data ingestion + PostgreSQL upserts', 'Parameterized SQL + window functions', 'FastAPI endpoints + Pydantic validation', 'PostgreSQL integration tests with pytest', 'GitHub Actions CI', 'Regression experiments + baseline comparison'],
      tech: ['Python', 'pandas', 'PostgreSQL', 'FastAPI', 'SQL', 'scikit-learn', 'pytest', 'GitHub Actions'],
      url: 'https://github.com/RaghuvanshJaitly/yahoo-finance',
      status: 'Building',
    },
    {
      number: '02',
      title: 'Fake Job Detector',
      eyebrow: 'From text experiments to batch predictions',
      summary: 'A text classification project that flags potentially fraudulent job postings for review. I compare TF-IDF pipelines using Multinomial Naive Bayes and logistic regression, keep identical descriptions together when splitting data, and examine the tradeoff between missed fraud and false alarms.',
      lesson: 'At a 0.10 threshold, the Naive Bayes baseline reached 88% fraud precision and 69% recall on validation data. Lowering the threshold caught more fraud, with more false alarms.',
      details: ['TF-IDF + classifier comparison', 'Description-based group splits', 'Precision, recall + confusion matrices', 'Validation-based threshold tuning', 'Saved pipeline + batch prediction', 'Batch threshold test with pytest'],
      tech: ['Python', 'pandas', 'scikit-learn', 'joblib', 'pytest', 'Matplotlib'],
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
