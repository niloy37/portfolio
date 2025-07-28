export const projects = [
  {
    id: 1,
    title: "AI Recommendation System",
    description: "Advanced recommendation system using collaborative filtering and deep learning techniques. Built with Python and Streamlit for real-time recommendations.",
    longDescription: "A sophisticated recommendation system that leverages both collaborative filtering and content-based filtering approaches. The system uses deep neural networks to learn user preferences and item features, providing personalized recommendations with high accuracy.",
    image: "/assets/projects/recommender-system.jpg",
    technologies: ["Python", "Streamlit", "TensorFlow", "Pandas", "Scikit-learn", "NumPy"],
    category: "Machine Learning",
    featured: true,
    links: {
      live: "https://recommendersystempython-niloy37.streamlit.app",
      github: "https://github.com/niloy37/recommender-system",
      demo: "https://recommendersystempython-niloy37.streamlit.app"
    },
    highlights: [
      "Implemented hybrid recommendation algorithms",
      "Real-time recommendation engine",
      "Interactive Streamlit dashboard",
      "Scalable architecture for large datasets"
    ]
  },
  {
    id: 2,
    title: "RAG-Enhanced Chatbot",
    description: "Retrieval-Augmented Generation chatbot that combines large language models with dynamic knowledge retrieval for accurate, context-aware responses.",
    longDescription: "An advanced conversational AI system that implements Retrieval-Augmented Generation (RAG) to provide accurate, contextual responses by combining the power of large language models with real-time information retrieval from curated knowledge bases.",
    image: "/assets/projects/rag-chatbot.jpg",
    technologies: ["Python", "LangChain", "OpenAI GPT", "Vector DB", "FAISS", "Streamlit"],
    category: "Natural Language Processing",
    featured: true,
    links: {
      github: "https://github.com/niloy37/rag-chatbot",
    },
    highlights: [
      "Implemented RAG architecture",
      "Vector database integration",
      "Real-time knowledge retrieval",
      "Context-aware responses"
    ]
  },
  {
  id: 3,
  title: "Resume Parser with NLP",
  description: "Smart resume screening system combining advanced NLP with a rule‑based inference engine for explainable candidate evaluation.",
  longDescription: "Built a comprehensive resume parsing framework that leverages spaCy for named entity recognition and contextual skill extraction, alongside a custom rule‑based inference engine. The system processes PDFs, DOCX, and TXTs to produce HIRE/CONSIDER/REJECT decisions with confidence scores and human‑readable explanations, all within a responsive glassmorphism UI.",
  image: "/assets/projects/resume-parser.jpg",
  technologies: ["Python", "NLP", "spaCy", "Flask", "JavaScript", "HTML/CSS"],
  category: "Knowledge Representation",
  featured: true,
  links: {
    github: "https://github.com/niloy37/resume-parser/tree/master",
    docs: "https://www.linkedin.com/feed/update/urn:li:activity:7353819262479712257/"
  },
  highlights: [
    "spaCy-powered named entity recognition for skills & experience extraction",
    "Custom rule-based inference engine for transparent decision logic",
    "Confidence scoring with detailed, human-readable explanations",
    "Responsive glassmorphism UI with drag-and-drop resume upload"
  ]
},
{
  id: 4,
  title: "CharitAble – Donation & Fundraising Prototype",
  description: "Solo‑built PHP/MySQL prototype for user registration, campaign posting, and donation tracking.",
  longDescription: "Developed as a junior‑year project using raw PHP and MySQL. Implements user authentication (register/login), campaign creation, donation processing, user profiles, and detailed donation logs—all in a clean, functional prototype.",
  image: "/assets/projects/cv-pipeline.jpg",
  technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  category: "Web Development",
  featured: false,
  links: {
    github: "https://github.com/niloy37/Donation-and-Fundraising-WebsiteA"
  },
  highlights: [
    "Custom PHP user auth (registration & login)",
    "MySQL-backed campaign CRUD operations",
    "Donation processing with per-user logs",
    "Solo implementation showcasing end-to-end prototype"
  ]
},

  {
  id: 5,
  title: "Unity Carrom Board Game",
  description: "Physics‑based digital Carrom game with single‑player AI and local multiplayer support.",
  longDescription: "Built solo in Unity using C#, this Carrom board game prototype features realistic physics simulation, customizable player skins, and both AI opponent and local multiplayer modes. Implements smooth turn‑based mechanics, camera controls, and dynamic sound effects for an immersive experience.",
  image: "/assets/projects/nlp-dashboard.jpg",
  technologies: ["C#", "Unity", "Unity Physics", "UI Toolkit"],
  category: "Game Development",
  featured: false,
  links: {
    github: "https://github.com/niloy37/unity-carrom"
  },
  highlights: [
    "Custom Carrom physics simulation",
    "Single‑player AI with adjustable difficulty",
    "Local multiplayer on same device",
    "C# scripts for turn management and UI controls"
  ]
},

  {
    id: 6,
    title: "Custom CNN for Chest X-ray Disease Classification (Thesis)",
    description: "Thesis project: Built and fine-tuned a custom CNN to classify 11 chest X-ray findings (COPD, Scoliosis, Air Trapping, etc.) on the PadChest dataset, achieving 96% accuracy.",
    longDescription: "Developed a deep learning pipeline for multi-class classification of chest X-ray images, focusing on 11 clinical findings including COPD Signs, Scoliosis, Air Trapping, Aortic Elongation, Pleural Effusion, Laminar Atelectasis, Callus Rib Fractures, Kyphosis, Hiatal Hernia, Vascular Hilar Enlargement, and Calcified Granuloma. The project involved extensive dataset cleaning, preprocessing, and hyperparameter tuning. Trained and compared multiple state-of-the-art models alongside a custom CNN, achieving 96% accuracy on the PadChest dataset.",
    image: "/assets/projects/model-compression.jpg",
    technologies: ["Python", "PyTorch", "CNN", "PadChest Dataset", "Jupyter", "scikit-learn"],
    category: "Research",
    featured: false,
    links: {
      github: "https://github.com/niloy37/Thesis"
    },
    highlights: [
      "Custom CNN architecture for 11 chest X-ray findings",
      "PadChest dataset cleaning and preprocessing",
      "Hyperparameter tuning and model comparison",
      "Achieved 96% classification accuracy",
      "Extensive evaluation on real-world clinical data"
    ]
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Natural Language Processing", 
  "Computer Vision",
  "Model Optimization",
  "Research",
  "Web Development",
  "Knowledge Representation",
  "Game Development"
];
