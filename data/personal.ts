export const siteConfig = {
  siteUrl: 'https://niloy37.github.io/portfolio',
  ogImage: 'https://niloy37.github.io/portfolio/og-image.svg',
  tagline: 'AI/ML engineer and research-driven builder shipping LLM, retrieval, and applied ML systems.',
};

export const personalInfo = {
  name: 'Niloy Rahman',
  initials: 'NR',
  headline: 'AI/ML Engineer for LLM Systems, Retrieval, and Applied Research',
  subtitle:
    'MSc Computational Sciences candidate building production-minded AI products with research depth in NLP, computer vision, and evaluation.',
  location: 'Toronto, Ontario, Canada',
  email: 'niloyrahman1337@gmail.com',
  phone: '+1 705-921-9299',
  resume: 'assets/resume.pdf',
  availability:
    'Open to AI/ML engineering, applied research, and platform roles where rigorous experimentation meets real product delivery.',
  bio: [
    'I work at the intersection of research and product, translating experiments in LLMs, embeddings, and model evaluation into usable systems.',
    'Recent work spans RAG pipelines, explainable NLP tooling, cybersecurity inference pipelines, and medical imaging research, with a strong bias toward reproducibility and clear technical communication.',
  ],
  focusAreas: [
    'LLMs and RAG',
    'Benchmarking and Evaluation',
    'NLP and Knowledge Systems',
    'Computer Vision',
    'Production ML Pipelines',
    'Research Communication',
  ],
  proofStrip: [
    { label: 'Current', value: 'Research Assistant @ NeXNet Lab' },
    { label: 'Recent', value: 'ML Engineer Intern @ Sequencr AI' },
    { label: 'Education', value: 'MSc Computational Sciences' },
    { label: 'Strength', value: 'Research + shipping mindset' },
  ],
  socials: {
    github: 'https://github.com/niloy37',
    linkedin: 'https://www.linkedin.com/in/niloy18/',
    email: 'mailto:niloyrahman1337@gmail.com',
  },
};

export const experience = [
  {
    title: 'Research Assistant (Intern)',
    organization: 'NeXNet Research Lab, Laurentian University',
    location: 'Sudbury, ON',
    period: 'Sep 2025 - Present',
    summary:
      'Contributing to applied research on LLMs, faithfulness of attention, and benchmark creation under the supervision of Dr. Williams.',
    bullets: [
      'Conduct literature reviews and synthesize findings to shape project direction and uncover research gaps.',
      'Prepare, clean, and validate experimental datasets to support reliable benchmark and model evaluation work.',
      'Collaborate with graduate researchers on sprint reviews, reports, and paper-oriented research artifacts.',
    ],
    tags: ['LLMs', 'Benchmarking', 'Research', 'Data Prep'],
  },
  {
    title: 'Machine Learning Engineer Intern',
    organization: 'Sequencr AI',
    location: 'Remote / Vancouver, BC',
    period: 'Jun 2025 - Aug 2025',
    summary:
      'Designed and deployed production-grade ML pipelines for marketing-focused generative AI systems, including whitespace discovery and FAQ extraction.',
    bullets: [
      'Built clustering and novelty-scoring pipelines using HDBSCAN, all-MiniLM embeddings, TF-IDF, and vector similarity.',
      'Automated ingestion, preprocessing, and embedding workflows to improve reproducibility and scale.',
      'Focused on shipping applied ML systems with clear operational handoff instead of only model experimentation.',
    ],
    tags: ['Python', 'Embeddings', 'HDBSCAN', 'Vector Search'],
  },
  {
    title: 'Support Engineer',
    organization: 'Banglalink Digital Communications Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'May 2023 - Jan 2024',
    summary:
      'Supported backend operations and issue resolution for the MyBL application platform with an emphasis on release quality and operational continuity.',
    bullets: [
      'Ran UAT, documented defects, and coordinated fixes with development teams.',
      'Managed push notification workflows and monitored feature performance after release.',
      'Built a strong habit of debugging production issues with clear communication across teams.',
    ],
    tags: ['UAT', 'Backend Support', 'Release Quality', 'Ops'],
  },
  {
    title: 'Software Developer Intern',
    organization: 'Python Partners',
    location: 'Dhaka, Bangladesh',
    period: 'Jun 2023 - Oct 2023',
    summary:
      'Developed Python-based backend and data-processing modules, with early exposure to ML workflow validation and API integration.',
    bullets: [
      'Built validation flows for machine learning pipelines and data integrity checks.',
      'Integrated REST APIs for real-time prediction services and backend workflows.',
      'Worked across practical software engineering concerns alongside model-facing systems.',
    ],
    tags: ['Python', 'REST APIs', 'Data Validation', 'Backend'],
  },
];

export const education = [
  {
    degree: 'MSc in Computational Sciences',
    institution: 'Laurentian University',
    location: 'Sudbury, ON',
    period: '2024 - 2025',
    description:
      'Graduate study focused on AI, machine learning, and computational methods with research-oriented applications.',
  },
  {
    degree: 'BSc in Computer Science and Engineering',
    institution: 'North South University',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2018 - Apr 2022',
    description: 'Graduated with GPA 3.81/4.00 and strong grounding in software engineering, algorithms, and applied computing.',
  },
];

export const awards = [
  {
    title: 'Summa Cum Laude',
    organization: 'North South University',
    detail: '26th Convocation recognition for academic excellence.',
  },
  {
    title: 'Merit-Based Tuition Scholarship',
    organization: 'Financial Aid Office, NSU',
    detail: 'Received up to 50% tuition scholarship based on academic performance.',
  },
];
