export type ProjectAccent = 'cyan' | 'amber' | 'rose' | 'emerald';
export type ProjectLinkKind = 'github' | 'live' | 'linkedin' | 'demo';

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectEmbed {
  kind: 'linkedin';
  sourceUrl: string;
  embedUrl: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  narrative: string;
  role: string;
  category: string;
  period: string;
  status: string;
  accent: ProjectAccent;
  featured: boolean;
  technologies: string[];
  metrics: ProjectMetric[];
  outcome: string;
  bullets: string[];
  proofLinks: ProjectLink[];
  embed?: ProjectEmbed;
}

const extractLinkedInActivityId = (url: string) => {
  const activityFromUrn = url.match(/urn:li:activity:(\d+)/);
  if (activityFromUrn) {
    return activityFromUrn[1];
  }

  const activityFromSlug = url.match(/activity-(\d+)/);
  if (activityFromSlug) {
    return activityFromSlug[1];
  }

  return null;
};

const buildLinkedInEmbed = (
  url: string,
  title: string,
  caption: string
): ProjectEmbed | undefined => {
  const activityId = extractLinkedInActivityId(url);

  if (!activityId) {
    return undefined;
  }

  return {
    kind: 'linkedin',
    sourceUrl: url,
    embedUrl: `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}?compact=1`,
    title,
    caption,
  };
};

const ragLinkedIn =
  'https://www.linkedin.com/posts/niloy18_ai-rag-openai-activity-7374974465614602240-P2lM';
const resumeParserLinkedIn =
  'https://www.linkedin.com/feed/update/urn:li:activity:7353819262479712257/';
const ddosLinkedIn =
  'https://www.linkedin.com/posts/niloy18_machinelearning-cybersecurity-xgboost-activity-7394524123223289856-MUMM';

export const projects: Project[] = [
  {
    id: 'rag-medical-chatbot',
    title: 'Medical RAG Chatbot',
    eyebrow: 'Featured case study',
    summary:
      'A full-stack medical QA chatbot that retrieves relevant PDF context before generating grounded answers.',
    narrative:
      'This build turns medical PDFs into searchable embeddings, stores them in Pinecone, retrieves the strongest context for each question, and hands that context to an OpenAI-powered response layer through a Flask interface.',
    role: 'Built ingestion, retrieval, prompt flow, and demo surface end to end.',
    category: 'GenAI',
    period: '2025',
    status: 'LinkedIn walkthrough + GitHub repo',
    accent: 'cyan',
    featured: true,
    technologies: ['Python', 'Flask', 'LangChain', 'OpenAI', 'Pinecone', 'RAG'],
    metrics: [
      { label: 'Pipeline', value: 'PDF to vector search' },
      { label: 'Model layer', value: 'OpenAI-powered QA' },
      { label: 'Surface', value: 'Interactive web demo' },
    ],
    outcome:
      'Grounded responses with retrieval-first context assembly, designed for higher trust than plain chat completion.',
    bullets: [
      'Converts documents into embeddings and stores them in Pinecone for semantic lookup.',
      'Retrieves the most relevant chunks before answer generation to keep responses tied to source material.',
      'Packages the full flow into a usable chatbot experience instead of leaving it as a notebook prototype.',
    ],
    proofLinks: [
      { label: 'GitHub', href: 'https://github.com/niloy37/chatbotAI', kind: 'github' },
      { label: 'LinkedIn demo', href: ragLinkedIn, kind: 'linkedin' },
    ],
    embed: buildLinkedInEmbed(
      ragLinkedIn,
      'Medical RAG Chatbot walkthrough',
      'Official LinkedIn embed'
    ),
  },
  {
    id: 'resume-parser',
    title: 'Resume Parser with NLP',
    eyebrow: 'Featured case study',
    summary:
      'Explainable resume screening system that combines NLP extraction with rule-based candidate evaluation.',
    narrative:
      'Built around spaCy and a rule-based inference layer, this project parses resumes from multiple formats and produces structured signals, candidate scoring, and transparent HIRE / CONSIDER / REJECT style outputs.',
    role: 'Designed the parsing flow, inference logic, and demo-ready interface.',
    category: 'NLP',
    period: '2025',
    status: 'LinkedIn walkthrough + GitHub repo',
    accent: 'amber',
    featured: true,
    technologies: ['Python', 'spaCy', 'Flask', 'NLP', 'Rules Engine', 'HTML/CSS'],
    metrics: [
      { label: 'Inputs', value: 'PDF / DOCX / TXT' },
      { label: 'Outputs', value: 'Explainable scoring' },
      { label: 'Interface', value: 'Drag-and-drop UI' },
    ],
    outcome:
      'Turns unstructured resumes into readable, auditable hiring signals instead of opaque classifier output.',
    bullets: [
      'Extracts entities such as skills and experience using NLP rather than relying only on brittle string matching.',
      'Uses explicit rule logic to keep hiring decisions interpretable for human review.',
      'Packages the pipeline in a polished UI suitable for demonstrations and screening workflows.',
    ],
    proofLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/niloy37/resume-parser/tree/master',
        kind: 'github',
      },
      { label: 'LinkedIn demo', href: resumeParserLinkedIn, kind: 'linkedin' },
    ],
    embed: buildLinkedInEmbed(
      resumeParserLinkedIn,
      'Resume parser walkthrough',
      'Official LinkedIn embed'
    ),
  },
  {
    id: 'ddos-detection',
    title: 'Real-Time DDoS Detection Pipeline',
    eyebrow: 'Featured case study',
    summary:
      'End-to-end network anomaly detection system with live capture, feature extraction, and XGBoost inference.',
    narrative:
      'Built around CIC-IDS2019 traffic data, the system captures traffic with tshark, extracts 80 network-flow features, and serves fast predictions through a Flask dashboard that surfaces IPs, protocols, confidence, and classification results.',
    role: 'Built the ML pipeline, inference integration, and monitoring dashboard.',
    category: 'Applied ML',
    period: '2025',
    status: 'LinkedIn walkthrough + GitHub repo',
    accent: 'rose',
    featured: true,
    technologies: ['Python', 'XGBoost', 'Flask', 'tshark', 'scikit-learn', 'CIC-IDS2019'],
    metrics: [
      { label: 'Accuracy', value: '99%' },
      { label: 'Features', value: '80 flow signals' },
      { label: 'Latency', value: 'Sub-ms prediction' },
    ],
    outcome:
      'Combines offline model quality with an operational interface that makes the output usable in real time.',
    bullets: [
      'Captures and processes live network traffic rather than limiting the project to offline evaluation.',
      'Uses XGBoost for strong tabular performance on security signals.',
      'Surfaces inference confidence and traffic context through a dashboard suitable for demonstrations.',
    ],
    proofLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/niloy37/ddos-detection-XGboost',
        kind: 'github',
      },
      { label: 'LinkedIn demo', href: ddosLinkedIn, kind: 'linkedin' },
    ],
    embed: buildLinkedInEmbed(
      ddosLinkedIn,
      'Real-time DDoS detection walkthrough',
      'Official LinkedIn embed'
    ),
  },
  {
    id: 'padchest-thesis',
    title: 'PadChest X-ray Classification Thesis',
    eyebrow: 'Featured case study',
    summary:
      'Undergraduate thesis focused on classifying 11 chest X-ray findings with a custom CNN and comparative experimentation.',
    narrative:
      'The thesis work involved cleaning and preparing the PadChest dataset, building and tuning a custom CNN, and comparing models across clinically meaningful findings including COPD signs, scoliosis, pleural effusion, and other chest radiograph conditions.',
    role: 'Led the dataset preparation, modeling, and evaluation workflow as thesis work.',
    category: 'Research',
    period: '2024',
    status: 'GitHub repo',
    accent: 'emerald',
    featured: true,
    technologies: ['Python', 'PyTorch', 'CNN', 'PadChest Dataset', 'Jupyter', 'scikit-learn'],
    metrics: [
      { label: 'Accuracy', value: '96%' },
      { label: 'Findings', value: '11 classes' },
      { label: 'Focus', value: 'Clinical imaging' },
    ],
    outcome:
      'Demonstrates comfort with long-form research execution, rigorous experimentation, and medical imaging workflows.',
    bullets: [
      'Built and tuned a custom CNN for multi-class chest X-ray classification.',
      'Worked through dataset preparation and evaluation rather than treating training data as ready-made.',
      'Connected research framing with practical implementation on a real medical dataset.',
    ],
    proofLinks: [
      { label: 'GitHub', href: 'https://github.com/niloy37/Thesis', kind: 'github' },
    ],
  },
  {
    id: 'recommendation-system',
    title: 'Recommendation System',
    eyebrow: 'Archive',
    summary:
      'Product recommendation app built with text vectorization, NLP, and Streamlit for interactive exploration.',
    narrative:
      'A lightweight recommendation surface focused on turning text-based product signals into ranked suggestions in a usable web interface.',
    role: 'Built the ranking logic and Streamlit demo surface.',
    category: 'Applied ML',
    period: '2024',
    status: 'Live demo + GitHub repo',
    accent: 'cyan',
    featured: false,
    technologies: ['Python', 'Streamlit', 'NLP', 'Pandas', 'Scikit-learn'],
    metrics: [
      { label: 'Surface', value: 'Streamlit app' },
      { label: 'Core', value: 'Text vectorization' },
      { label: 'Use case', value: 'Product ranking' },
    ],
    outcome: 'Transforms recommendation logic into an interactive app rather than a static notebook.',
    bullets: [
      'Built around interactive ranking and recommendation exploration.',
      'Uses practical NLP features to drive product similarity and selection.',
    ],
    proofLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/niloy37/RecommenderSystemPython',
        kind: 'github',
      },
      {
        label: 'Live demo',
        href: 'https://recommendersystempython-niloy37.streamlit.app',
        kind: 'live',
      },
    ],
  },
  {
    id: 'covid-xray',
    title: 'Multiclass COVID X-ray Classification',
    eyebrow: 'Archive',
    summary:
      'DenseNet-based chest X-ray classification project with feature extraction for COVID-related recognition.',
    narrative:
      'An earlier medical imaging project focused on extracting useful DenseNet features and pushing validation performance on chest X-ray classification.',
    role: 'Implemented model experimentation and evaluation.',
    category: 'Computer Vision',
    period: '2023',
    status: 'GitHub repo',
    accent: 'emerald',
    featured: false,
    technologies: ['Python', 'CNN', 'DenseNet', 'Computer Vision'],
    metrics: [
      { label: 'Validation', value: '97%' },
      { label: 'Model family', value: 'DenseNet' },
      { label: 'Domain', value: 'Medical imaging' },
    ],
    outcome: 'Shows early traction in computer vision and performance-driven experimentation.',
    bullets: [
      'Explored feature extraction in DenseNet architectures.',
      'Focused on chest X-ray disease recognition performance and evaluation.',
    ],
    proofLinks: [{ label: 'GitHub', href: 'https://github.com/niloy37/CNN', kind: 'github' }],
  },
  {
    id: 'charitable',
    title: 'CharitAble Fundraising Platform',
    eyebrow: 'Archive',
    summary:
      'Donation and fundraising prototype for nonprofit-style campaigns using PHP, MySQL, and front-end web fundamentals.',
    narrative:
      'A solo-built web prototype featuring campaign creation, user authentication, donation tracking, and profile views.',
    role: 'Implemented the product end to end as a solo project.',
    category: 'Web',
    period: '2022',
    status: 'GitHub repo',
    accent: 'amber',
    featured: false,
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    metrics: [
      { label: 'Auth', value: 'Register / login' },
      { label: 'Core', value: 'Campaign CRUD' },
      { label: 'Tracking', value: 'Donation logs' },
    ],
    outcome:
      'Demonstrates full-stack project ownership before the later shift toward AI-focused systems.',
    bullets: [
      'Supports user registration, login, campaign posting, and donation history.',
      'Built as a solo implementation with raw PHP and MySQL.',
    ],
    proofLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/niloy37/Donation-and-Fundraising-Website',
        kind: 'github',
      },
    ],
  },
  {
    id: 'unity-carrom',
    title: 'Unity Carrom Board Game',
    eyebrow: 'Archive',
    summary:
      'Physics-based digital carrom prototype with AI play, local multiplayer, and C# gameplay systems.',
    narrative:
      'A solo Unity build focused on game feel, realistic board interactions, and playable turn-based logic.',
    role: 'Built gameplay scripts, turn flow, and interaction logic.',
    category: 'Interactive',
    period: '2023',
    status: 'GitHub repo',
    accent: 'rose',
    featured: false,
    technologies: ['C#', 'Unity', 'Physics', 'Gameplay Systems'],
    metrics: [
      { label: 'Modes', value: 'AI + local multiplayer' },
      { label: 'Engine', value: 'Unity' },
      { label: 'Focus', value: 'Physics simulation' },
    ],
    outcome: 'A good example of building polished interaction systems outside the AI space.',
    bullets: [
      'Implemented turn management, controls, and playable AI support.',
      'Focused on tactile board physics and replayable local gameplay.',
    ],
    proofLinks: [
      { label: 'GitHub', href: 'https://github.com/niloy37/unity-carrom', kind: 'github' },
    ],
  },
  {
    id: 'persistent-bloom-filter',
    title: 'Persistent Bloom Filter',
    eyebrow: 'Archive',
    summary:
      'Custom data-structure implementation inspired by Persistent Bloom Filter research for efficient large-scale querying.',
    narrative:
      'A data-structures-oriented project that explores compact querying through a practical implementation tied to published work.',
    role: 'Implemented the data structure and research-oriented translation into code.',
    category: 'Algorithms',
    period: '2022',
    status: 'GitHub repo',
    accent: 'cyan',
    featured: false,
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    metrics: [
      { label: 'Theme', value: 'Probabilistic querying' },
      { label: 'Origin', value: 'Paper-inspired build' },
      { label: 'Use case', value: 'Large datasets' },
    ],
    outcome: 'Highlights comfort with theory-backed implementations in addition to product-facing work.',
    bullets: [
      'Implements a Persistent Bloom Filter variant from academic literature.',
      'Focuses on efficient membership-style querying for large-scale datasets.',
    ],
    proofLinks: [
      { label: 'GitHub', href: 'https://github.com/niloy37/PBF1-python', kind: 'github' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archiveProjects = projects.filter((project) => !project.featured);
export const archiveCategories = [
  'All',
  ...Array.from(new Set(archiveProjects.map((project) => project.category))),
];
