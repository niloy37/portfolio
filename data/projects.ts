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
      demo: "https://rag-chatbot-demo.streamlit.app"
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
    title: "Hyperparameter Optimization Framework",
    description: "Automated framework for hyperparameter tuning using Bayesian optimization and genetic algorithms to maximize model performance.",
    longDescription: "A comprehensive framework that automates the hyperparameter optimization process for deep learning models. Uses advanced optimization techniques including Bayesian optimization, genetic algorithms, and grid search to find optimal hyperparameters.",
    image: "/assets/projects/hyperparam-optimizer.jpg",
    technologies: ["Python", "Optuna", "PyTorch", "Scikit-learn", "MLflow", "Ray Tune"],
    category: "Model Optimization",
    featured: true,
    links: {
      github: "https://github.com/niloy37/hyperparam-optimizer",
      docs: "https://hyperparam-docs.netlify.app"
    },
    highlights: [
      "Bayesian optimization implementation",
      "Multi-objective optimization",
      "Automated experiment tracking",
      "Parallel hyperparameter search"
    ]
  },
  {
    id: 4,
    title: "Computer Vision Pipeline",
    description: "End-to-end computer vision pipeline for object detection and classification with real-time processing capabilities.",
    longDescription: "A production-ready computer vision system that handles image preprocessing, object detection, classification, and post-processing. Optimized for real-time performance with GPU acceleration.",
    image: "/assets/projects/cv-pipeline.jpg",
    technologies: ["Python", "OpenCV", "YOLO", "PyTorch", "CUDA", "FastAPI"],
    category: "Computer Vision",
    featured: false,
    links: {
      github: "https://github.com/niloy37/cv-pipeline",
      api: "https://cv-api.herokuapp.com"
    },
    highlights: [
      "Real-time object detection",
      "GPU-accelerated processing",
      "RESTful API interface",
      "Scalable architecture"
    ]
  },
  {
    id: 5,
    title: "NLP Text Analytics Dashboard",
    description: "Interactive dashboard for text analytics including sentiment analysis, entity recognition, and topic modeling with visualization.",
    longDescription: "A comprehensive text analytics platform that provides insights into textual data through various NLP techniques. Features interactive visualizations and real-time analysis capabilities.",
    image: "/assets/projects/nlp-dashboard.jpg",
    technologies: ["Python", "Streamlit", "spaCy", "NLTK", "Plotly", "Transformers"],
    category: "Natural Language Processing",
    featured: false,
    links: {
      github: "https://github.com/niloy37/nlp-dashboard",
      demo: "https://nlp-analytics.streamlit.app"
    },
    highlights: [
      "Multi-language support",
      "Real-time sentiment analysis",
      "Interactive visualizations",
      "Named entity recognition"
    ]
  },
  {
    id: 6,
    title: "Deep Learning Model Compression",
    description: "Research project on neural network compression techniques including pruning, quantization, and knowledge distillation.",
    longDescription: "An in-depth research project exploring various model compression techniques to reduce the size and computational requirements of deep neural networks while maintaining performance.",
    image: "/assets/projects/model-compression.jpg",
    technologies: ["Python", "PyTorch", "TensorFlow Lite", "ONNX", "Jupyter"],
    category: "Research",
    featured: false,
    links: {
      github: "https://github.com/niloy37/model-compression",
      paper: "https://arxiv.org/abs/example-paper"
    },
    highlights: [
      "90% model size reduction",
      "Maintained 95% accuracy",
      "Multiple compression techniques",
      "Comprehensive benchmarking"
    ]
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Natural Language Processing", 
  "Computer Vision",
  "Model Optimization",
  "Research"
];
