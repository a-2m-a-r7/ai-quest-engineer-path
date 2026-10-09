const topicResourceProfiles = {
  math: {
    arFree: ["Khan Academy Arabic math search", "3Blue1Brown Arabic search"],
    enFree: ["Khan Academy math", "3Blue1Brown essentials"],
    paidAr: "Udemy Arabic math course search",
    paidEn: "Coursera mathematics for ML search",
    queryBoost: "machine learning math",
  },
  python: {
    arFree: [
      "Elzero Web School Python search",
      "Codezilla Arabic Python search",
    ],
    enFree: ["Python official tutorial", "freeCodeCamp Python"],
    paidAr: "Udemy Arabic Python course search",
    paidEn: "Coursera Python certificate search",
    queryBoost: "python programming",
  },
  data: {
    arFree: [
      "Codezilla Arabic data analysis search",
      "freeCodeCamp Arabic data search",
    ],
    enFree: ["Kaggle Learn", "freeCodeCamp data analysis"],
    paidAr: "Udemy Arabic data analysis course search",
    paidEn: "Coursera data analysis certificate search",
    queryBoost: "data analysis python",
  },
  ml: {
    arFree: ["Machine Learning Arabic search", "Codezilla Arabic ML search"],
    enFree: [
      "StatQuest machine learning",
      "Google machine learning crash course",
    ],
    paidAr: "Udemy Arabic machine learning course search",
    paidEn: "DeepLearning.AI machine learning specialization",
    queryBoost: "machine learning",
  },
  dl: {
    arFree: ["Deep Learning Arabic search", "TensorFlow Arabic search"],
    enFree: [
      "fast.ai practical deep learning",
      "DeepLearning.AI short courses",
    ],
    paidAr: "Udemy Arabic deep learning course search",
    paidEn: "DeepLearning.AI deep learning specialization",
    queryBoost: "deep learning",
  },
  cv: {
    arFree: ["Computer Vision Arabic search", "OpenCV Arabic search"],
    enFree: ["OpenCV University free resources", "PyImageSearch tutorials"],
    paidAr: "Udemy Arabic computer vision course search",
    paidEn: "Coursera computer vision certificate search",
    queryBoost: "computer vision",
  },
  nlp: {
    arFree: ["NLP Arabic search", "Transformers Arabic search"],
    enFree: ["Hugging Face course", "freeCodeCamp NLP"],
    paidAr: "Udemy Arabic NLP course search",
    paidEn: "DeepLearning.AI NLP specialization",
    queryBoost: "natural language processing",
  },
  career: {
    arFree: ["Arabic tech resume search", "Arabic GitHub portfolio search"],
    enFree: ["Google career certificates resources", "GitHub portfolio guide"],
    paidAr: "Udemy Arabic career prep course search",
    paidEn: "Coursera career success search",
    queryBoost: "developer career preparation",
  },
};

function searchUrl(platform, query) {
  const q = encodeURIComponent(query);
  const urls = {
    youtube: `https://www.youtube.com/results?search_query=${q}`,
    udemy: `https://www.udemy.com/courses/search/?q=${q}`,
    coursera: `https://www.coursera.org/search?query=${q}`,
    freecodecamp: `https://www.freecodecamp.org/news/search/?query=${q}`,
    kaggle: `https://www.kaggle.com/learn/search?q=${q}`,
  };
  return urls[platform];
}

function makeResources(topic, profileKey) {
  const profile = topicResourceProfiles[profileKey];
  const topicTitle = topic.title;
  const subtopicCount = topic.subtopics?.length || 1;
  const projectStageIndex = subtopicCount;

  const raw = [
    {
      title: `${profile.arFree[0]}: ${topicTitle}`,
      platform: "YouTube",
      cost: "free",
      language: "AR",
      format: "video",
      url: searchUrl(
        "youtube",
        `${profile.arFree[0]} ${topicTitle} ${profile.queryBoost}`,
      ),
    },
    {
      title: `${profile.arFree[1]}: ${topicTitle}`,
      platform: "YouTube",
      cost: "free",
      language: "AR",
      format: "video",
      url: searchUrl(
        "youtube",
        `${profile.arFree[1]} ${topicTitle} ${profile.queryBoost}`,
      ),
    },
    {
      title: `${profile.enFree[0]}: ${topicTitle}`,
      platform:
        profileKey === "data"
          ? "Kaggle"
          : profileKey === "nlp"
            ? "Hugging Face"
            : "Free learning",
      cost: "free",
      language: "EN",
      format: profileKey === "data" ? "interactive" : "course",
      url:
        profileKey === "nlp"
          ? "https://huggingface.co/learn/nlp-course/chapter1/1"
          : profileKey === "ml"
            ? "https://developers.google.com/machine-learning/crash-course"
            : profileKey === "dl"
              ? "https://course.fast.ai/"
              : profileKey === "python"
                ? "https://docs.python.org/3/tutorial/"
                : profileKey === "cv"
                  ? "https://opencv.org/university/free-opencv-course/"
                  : profileKey === "career"
                    ? "https://grow.google/certificates/interview-warmup/"
                    : "https://www.khanacademy.org/math",
    },
    {
      title: `${profile.enFree[1]}: ${topicTitle}`,
      platform: "freeCodeCamp",
      cost: "free",
      language: "EN",
      format: "article",
      url: searchUrl("freecodecamp", `${topicTitle} ${profile.queryBoost}`),
    },
    {
      title: `${profile.paidAr}: ${topicTitle}`,
      platform: "Udemy",
      cost: "paid",
      language: "AR",
      format: "course",
      url: searchUrl("udemy", `${topicTitle} Arabic ${profile.queryBoost}`),
    },
    {
      title: `${profile.paidEn}: ${topicTitle}`,
      platform:
        profileKey === "dl" || profileKey === "ml" || profileKey === "nlp"
          ? "DeepLearning.AI / Coursera"
          : "Coursera",
      cost: "paid",
      language: "EN",
      format: "certificate",
      url: searchUrl("coursera", `${topicTitle} ${profile.queryBoost}`),
    },
  ];

  return raw.map((resource, index) => ({
    ...resource,
    id: `${topic.id}-res-${index}`,
    stageIndex:
      index < 4 ? Math.min(index, subtopicCount - 1) : projectStageIndex,
  }));
}

const roadmapDraft = [
  {
    id: "math-stats",
    title: "Math & Statistics Foundations",
    shortTitle: "Math",
    week: "Week 0",
    color: "#57d7ff",
    accent: "#9ef6ff",
    profile: "math",
    motif: "geometric grid",
    unlockHint: "Begin here. Build the core language of models.",
    topics: [
      {
        id: "linear-algebra-essentials",
        title: "Linear Algebra Essentials",
        subtopics: ["vectors", "matrices", "dot products", "eigen intuition"],
        handsOn:
          "Use NumPy to create vectors and matrices, then compute dot products and matrix multiplication by hand and in code.",
        project: {
          type: "mini",
          title: "Vector Space Visualizer",
          description:
            "Build a notebook that plots 2D vectors, projections, and matrix transformations.",
        },
      },
      {
        id: "probability-foundations",
        title: "Probability Foundations",
        subtopics: [
          "random variables",
          "Bayes rule",
          "distributions",
          "expected value",
        ],
        handsOn:
          "Simulate 10,000 coin flips and dice rolls, then compare observed and expected probabilities.",
        project: {
          type: "mini",
          title: "Bayes Decision Lab",
          description:
            "Create a small notebook that updates a probability estimate as new evidence arrives.",
        },
      },
      {
        id: "descriptive-inferential-statistics",
        title: "Descriptive & Inferential Statistics",
        subtopics: [
          "mean and variance",
          "confidence intervals",
          "hypothesis tests",
          "sampling",
        ],
        handsOn:
          "Calculate summary statistics and a confidence interval for a sample dataset.",
        project: {
          type: "mini",
          title: "A/B Test Analyzer",
          description:
            "Build a notebook that evaluates a simple A/B test and explains the result in plain language.",
        },
      },
      {
        id: "calculus-for-machine-learning",
        title: "Calculus for Machine Learning",
        subtopics: ["limits", "derivatives", "gradients", "chain rule"],
        handsOn:
          "Differentiate three loss-style functions manually, then confirm results with numerical gradients.",
        project: {
          type: "mini",
          title: "Gradient Descent Sandbox",
          description:
            "Implement gradient descent for a one-variable function and animate convergence steps.",
        },
      },
      {
        id: "linear-algebra-calculus-neural-networks",
        title: "Linear Algebra & Calculus for Neural Networks",
        subtopics: [
          "matrix calculus",
          "activation functions",
          "loss surfaces",
          "backprop intuition",
        ],
        handsOn:
          "Trace a two-layer neural network forward pass with matrix shapes and gradients.",
        project: {
          type: "capstone",
          title: "Neural Math Explainer",
          description:
            "Create a visual notebook explaining forward pass, loss, and backprop for a tiny network.",
        },
      },
    ],
    boss: {
      title: "The Gradient Gate",
      timer: "90 minutes",
      description:
        "Given a tiny dataset, derive a loss, compute gradients, and explain the math behind one learning step.",
      rewards: ["Math World badge", "220 XP", "Unlock stronger ML readiness"],
    },
  },
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    shortTitle: "Python",
    week: "Weeks 1-2",
    color: "#ffd166",
    accent: "#ffe29a",
    profile: "python",
    motif: "code terminal",
    unlockHint: "Reach at least 60% of Math before Python opens fully.",
    topics: [
      {
        id: "variables-data-types",
        title: "Variables & Data Types",
        subtopics: ["numbers", "strings", "lists", "dictionaries"],
        handsOn:
          "Write a script that stores and prints a learner profile using strings, numbers, lists, and dictionaries.",
        project: {
          type: "mini",
          title: "Roadmap Profile CLI",
          description:
            "Build a command-line profile card that formats a user's skills and target role.",
        },
      },
      {
        id: "control-flow",
        title: "Control Flow",
        subtopics: ["if statements", "loops", "truthiness", "comprehensions"],
        handsOn:
          "Solve five short drills using if/else, for loops, while loops, and list comprehensions.",
        project: {
          type: "mini",
          title: "Study Planner Rules Engine",
          description:
            "Build a CLI that recommends a study action based on available time and current progress.",
        },
      },
      {
        id: "functions",
        title: "Functions",
        subtopics: ["parameters", "return values", "scope", "docstrings"],
        handsOn:
          "Refactor a long script into small functions with docstrings and type-friendly names.",
        project: {
          type: "mini",
          title: "XP Calculator Module",
          description:
            "Create reusable functions that calculate XP, levels, and streak bonuses.",
        },
      },
      {
        id: "oop",
        title: "OOP",
        subtopics: ["classes", "methods", "inheritance", "composition"],
        handsOn:
          "Create Topic and Project classes, then instantiate objects for your roadmap.",
        project: {
          type: "mini",
          title: "Quest Object Model",
          description:
            "Design a small class system for users, tasks, achievements, and rewards.",
        },
      },
      {
        id: "file-handling",
        title: "File Handling",
        subtopics: ["read/write", "CSV", "JSON", "path handling"],
        handsOn: "Read a CSV file, transform rows, and export a JSON summary.",
        project: {
          type: "mini",
          title: "Local Progress Save File",
          description:
            "Build a tiny local save system that stores completed tasks in JSON.",
        },
      },
      {
        id: "libraries-environments",
        title: "Libraries & Environments",
        subtopics: ["pip", "venv", "packages", "requirements"],
        handsOn:
          "Create a virtual environment, install two packages, and freeze dependencies.",
        project: {
          type: "capstone",
          title: "Python Starter Toolkit",
          description:
            "Package a reusable Python project template with venv instructions, linting, and sample scripts.",
        },
      },
    ],
    boss: {
      title: "The Python Forge",
      timer: "2 hours",
      description:
        "Build a CLI learning tracker that reads files, uses classes, and persists progress locally.",
      rewards: [
        "Python World badge",
        "220 XP",
        "Unlock reliable scripting power",
      ],
    },
  },
  {
    id: "data-libraries",
    title: "Data Libraries",
    shortTitle: "Data",
    week: "Weeks 3-4",
    color: "#5df2a8",
    accent: "#a7ffd1",
    profile: "data",
    motif: "data streams",
    unlockHint: "Complete core Python practice to unlock data tooling.",
    topics: [
      {
        id: "numpy",
        title: "NumPy",
        subtopics: ["arrays", "broadcasting", "indexing", "vectorization"],
        handsOn:
          "Convert loop-based calculations into vectorized NumPy operations.",
        project: {
          type: "mini",
          title: "Vectorized Metrics Lab",
          description:
            "Build a notebook that computes distances, normalization, and summary metrics with arrays.",
        },
      },
      {
        id: "pandas",
        title: "Pandas",
        subtopics: ["DataFrames", "groupby", "joins", "missing values"],
        handsOn:
          "Load a CSV, clean missing values, group by category, and export a tidy table.",
        project: {
          type: "mini",
          title: "Sales Data Cleaner",
          description:
            "Create a repeatable cleaning notebook for messy sales records.",
        },
      },
      {
        id: "matplotlib",
        title: "Matplotlib",
        subtopics: ["figures", "axes", "line charts", "annotations"],
        handsOn: "Plot three charts and annotate the key insight on each one.",
        project: {
          type: "mini",
          title: "Insight Chart Pack",
          description:
            "Produce a small report of clean charts explaining trends in a dataset.",
        },
      },
      {
        id: "seaborn",
        title: "Seaborn",
        subtopics: ["stat plots", "heatmaps", "distributions", "pairplots"],
        handsOn:
          "Use Seaborn to compare distributions and correlations across a dataset.",
        project: {
          type: "mini",
          title: "EDA Pattern Finder",
          description:
            "Create a visual exploration notebook with heatmaps, pairplots, and grouped distributions.",
        },
      },
      {
        id: "project-eda-titanic",
        title: "Project: EDA on Titanic",
        subtopics: [
          "data cleaning",
          "feature insight",
          "visual storytelling",
          "notebook polish",
        ],
        handsOn:
          "Write five questions about Titanic survival, then answer them with Pandas and charts.",
        project: {
          type: "capstone",
          title: "Titanic EDA Portfolio Notebook",
          description:
            "Publish a polished EDA notebook with an executive summary, visuals, and next-step hypotheses.",
        },
      },
    ],
    boss: {
      title: "The Dataset Vault",
      timer: "2 hours",
      description:
        "Clean an unfamiliar CSV, find three insights, and present a mini data story with charts.",
      rewards: ["Data World badge", "220 XP", "Sharper EDA judgment"],
    },
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    shortTitle: "ML",
    week: "Weeks 5-7",
    color: "#b48cff",
    accent: "#d6c2ff",
    profile: "ml",
    motif: "model lattice",
    unlockHint: "Math and Python both need strong progress before ML unlocks.",
    topics: [
      {
        id: "linear-logistic-regression",
        title: "Linear & Logistic Regression",
        subtopics: [
          "loss functions",
          "coefficients",
          "classification",
          "regularization",
        ],
        handsOn:
          "Train linear and logistic regression models, then explain coefficients and errors.",
        project: {
          type: "mini",
          title: "Regression Starter Pack",
          description:
            "Build a notebook that predicts prices and classifies churn with clear evaluation notes.",
        },
      },
      {
        id: "support-vector-machine",
        title: "Support Vector Machine",
        subtopics: ["margins", "kernels", "C parameter", "decision boundaries"],
        handsOn:
          "Train linear and RBF SVM models and visualize the decision boundary on toy data.",
        project: {
          type: "mini",
          title: "Margin Explorer",
          description:
            "Create an experiment that compares SVM kernels and hyperparameters.",
        },
      },
      {
        id: "decision-trees-random-forest",
        title: "Decision Trees & Random Forest",
        subtopics: ["splits", "impurity", "ensembles", "feature importance"],
        handsOn:
          "Train a decision tree and random forest, then compare overfitting and feature importance.",
        project: {
          type: "mini",
          title: "Explainable Forest",
          description:
            "Build a model report that ranks features and explains model decisions.",
        },
      },
      {
        id: "k-means-knn",
        title: "K-Means & KNN",
        subtopics: ["clustering", "distance metrics", "neighbors", "scaling"],
        handsOn:
          "Cluster a dataset with K-Means and classify points with KNN after scaling features.",
        project: {
          type: "mini",
          title: "Customer Segments Lab",
          description:
            "Segment customers, profile each cluster, and recommend one business action per segment.",
        },
      },
      {
        id: "model-evaluation",
        title: "Model Evaluation",
        subtopics: [
          "train/test split",
          "cross validation",
          "confusion matrix",
          "ROC AUC",
        ],
        handsOn:
          "Evaluate one classifier with accuracy, precision, recall, F1, ROC AUC, and a confusion matrix.",
        project: {
          type: "capstone",
          title: "ML Model Selection Report",
          description:
            "Compare at least three algorithms on one dataset and recommend the best model with evidence.",
        },
      },
    ],
    boss: {
      title: "The Model Arena",
      timer: "3 hours",
      description:
        "Train, compare, tune, and explain multiple ML models for a practical prediction problem.",
      rewards: ["ML World badge", "260 XP", "Portfolio-ready model report"],
    },
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    shortTitle: "Deep",
    week: "Weeks 8-9",
    color: "#ff7ab6",
    accent: "#ffc1dd",
    profile: "dl",
    motif: "neural glow",
    unlockHint:
      "Complete Machine Learning foundations to unlock deeper networks.",
    topics: [
      {
        id: "neural-networks-backprop",
        title: "Neural Networks & Backprop",
        subtopics: ["layers", "activations", "loss", "gradient flow"],
        handsOn:
          "Implement a tiny neural network forward and backward pass using NumPy.",
        project: {
          type: "mini",
          title: "Backprop From Scratch",
          description:
            "Train a small neural net on toy data and plot loss over time.",
        },
      },
      {
        id: "keras-tensorflow",
        title: "Keras & TensorFlow",
        subtopics: ["Sequential API", "datasets", "callbacks", "saved models"],
        handsOn:
          "Train a Keras model with callbacks and save the trained model artifact.",
        project: {
          type: "mini",
          title: "TensorFlow Classifier",
          description:
            "Build and evaluate a small image or tabular classifier in Keras.",
        },
      },
      {
        id: "pytorch-basics",
        title: "PyTorch Basics",
        subtopics: ["tensors", "autograd", "modules", "training loop"],
        handsOn:
          "Write a PyTorch training loop with optimizer steps and validation metrics.",
        project: {
          type: "mini",
          title: "PyTorch Training Loop Lab",
          description:
            "Train a basic classifier and package the loop so it can be reused.",
        },
      },
      {
        id: "regularization-tuning",
        title: "Regularization & Tuning",
        subtopics: [
          "dropout",
          "weight decay",
          "learning rate",
          "early stopping",
        ],
        handsOn:
          "Run three tuning experiments and record how each affects validation performance.",
        project: {
          type: "capstone",
          title: "Deep Learning Tuning Journal",
          description:
            "Build an experiment log comparing regularization and tuning decisions for one model.",
        },
      },
    ],
    boss: {
      title: "The Overfit Dragon",
      timer: "3 hours",
      description:
        "Take an overfitting neural net and improve it using regularization, callbacks, and tuning.",
      rewards: ["Deep Learning badge", "260 XP", "Experiment discipline"],
    },
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    shortTitle: "Vision",
    week: "Weeks 10-11",
    color: "#ff9f1c",
    accent: "#ffd08a",
    profile: "cv",
    motif: "lens aperture",
    unlockHint: "Finish deep learning basics before entering Computer Vision.",
    topics: [
      {
        id: "cnn-architecture",
        title: "CNN Architecture",
        subtopics: ["convolutions", "pooling", "feature maps", "padding"],
        handsOn:
          "Inspect feature-map shapes through a simple CNN layer by layer.",
        project: {
          type: "mini",
          title: "CNN Shape Inspector",
          description:
            "Create a notebook that visualizes how an image changes across CNN layers.",
        },
      },
      {
        id: "transfer-learning",
        title: "Transfer Learning",
        subtopics: [
          "pretrained models",
          "fine tuning",
          "freezing layers",
          "augmentation",
        ],
        handsOn:
          "Fine-tune a pretrained model on a small image dataset and compare frozen vs unfrozen layers.",
        project: {
          type: "mini",
          title: "Custom Image Classifier",
          description:
            "Build a transfer-learning classifier for a small custom dataset.",
        },
      },
      {
        id: "opencv-image-processing",
        title: "OpenCV & Image Processing",
        subtopics: ["color spaces", "filters", "thresholding", "contours"],
        handsOn:
          "Load an image with OpenCV and apply grayscale, blur, threshold, and contour detection.",
        project: {
          type: "mini",
          title: "Document Scanner Prototype",
          description:
            "Detect document edges, warp perspective, and export a cleaned scan.",
        },
      },
      {
        id: "object-detection-yolo",
        title: "Object Detection (YOLO)",
        subtopics: ["bounding boxes", "IoU", "confidence", "inference"],
        handsOn:
          "Run YOLO inference on sample images and inspect predictions, confidence, and bounding boxes.",
        project: {
          type: "mini",
          title: "Object Detection Demo",
          description:
            "Build a script that detects objects in a folder and saves annotated outputs.",
        },
      },
      {
        id: "project-face-mask-detector",
        title: "Project: Face Mask Detector",
        subtopics: [
          "dataset prep",
          "classification",
          "evaluation",
          "demo packaging",
        ],
        handsOn:
          "Prepare a face-mask dataset split and define baseline metrics before modeling.",
        project: {
          type: "capstone",
          title: "Face Mask Detector",
          description:
            "Train, evaluate, and package a small face-mask detection or classification demo.",
        },
      },
    ],
    boss: {
      title: "The Vision Trial",
      timer: "3 hours",
      description:
        "Build an image pipeline that preprocesses images, trains or fine-tunes a model, and reports results.",
      rewards: ["Vision World badge", "260 XP", "Demo-ready CV project"],
    },
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    shortTitle: "NLP",
    week: "Week 11",
    color: "#6ee7f9",
    accent: "#c5f7ff",
    profile: "nlp",
    motif: "flowing text",
    unlockHint: "Computer Vision progress unlocks the language track.",
    topics: [
      {
        id: "text-cleaning-tokenization",
        title: "Text Cleaning & Tokenization",
        subtopics: ["normalization", "tokenizers", "stop words", "n-grams"],
        handsOn:
          "Clean a small text dataset and compare word-level vs subword tokenization.",
        project: {
          type: "mini",
          title: "Text Prep Pipeline",
          description:
            "Create a reusable text cleaning pipeline with before/after examples.",
        },
      },
      {
        id: "word-embeddings",
        title: "Word Embeddings",
        subtopics: ["Word2Vec", "GloVe", "similarity", "semantic space"],
        handsOn:
          "Load pretrained embeddings and find nearest words for ten concepts.",
        project: {
          type: "mini",
          title: "Semantic Similarity Explorer",
          description:
            "Build a notebook that compares phrases by embedding similarity.",
        },
      },
      {
        id: "rnn-lstm-gru",
        title: "RNN/LSTM/GRU",
        subtopics: [
          "sequence modeling",
          "hidden state",
          "gates",
          "vanishing gradients",
        ],
        handsOn:
          "Train a small sequence classifier and compare simple RNN vs GRU or LSTM.",
        project: {
          type: "mini",
          title: "Sequence Sentiment Model",
          description:
            "Create a compact sentiment classifier with a recurrent architecture.",
        },
      },
      {
        id: "transformers-bert",
        title: "Transformers & BERT",
        subtopics: [
          "attention",
          "token embeddings",
          "fine tuning",
          "Hugging Face",
        ],
        handsOn:
          "Fine-tune or run inference with a transformer model using Hugging Face pipelines.",
        project: {
          type: "mini",
          title: "Transformer Classifier",
          description:
            "Build a small text classification workflow using a pretrained transformer.",
        },
      },
      {
        id: "chatbots-llms",
        title: "Chatbots & LLMs",
        subtopics: ["prompting", "retrieval", "evaluation", "guardrails"],
        handsOn:
          "Write and test five prompts for a support chatbot and score answers with a simple rubric.",
        project: {
          type: "capstone",
          title: "Local Knowledge Chatbot Plan",
          description:
            "Design and prototype a small retrieval-based chatbot over a folder of notes.",
        },
      },
    ],
    boss: {
      title: "The Language Labyrinth",
      timer: "3 hours",
      description:
        "Build a text pipeline that cleans data, uses embeddings or transformers, and evaluates responses.",
      rewards: ["NLP World badge", "260 XP", "LLM workflow confidence"],
    },
  },
  {
    id: "career-preparation",
    title: "Career Preparation",
    shortTitle: "Career",
    week: "Week 12",
    color: "#f8f871",
    accent: "#ffffb5",
    profile: "career",
    motif: "portfolio launch",
    unlockHint: "Clear the technical worlds to open the career launchpad.",
    topics: [
      {
        id: "github-portfolio",
        title: "GitHub Portfolio",
        subtopics: [
          "README writing",
          "project structure",
          "commits",
          "demo assets",
        ],
        handsOn:
          "Rewrite one project README with problem, approach, results, and screenshots.",
        project: {
          type: "mini",
          title: "Portfolio Repo Polish",
          description:
            "Prepare one GitHub project so a recruiter can understand it in two minutes.",
        },
      },
      {
        id: "resume-linkedin",
        title: "Resume & LinkedIn",
        subtopics: [
          "impact bullets",
          "keywords",
          "headline",
          "featured projects",
        ],
        handsOn:
          "Convert three learning tasks into resume bullets with action, method, and impact.",
        project: {
          type: "mini",
          title: "AI Engineer Profile Refresh",
          description:
            "Update resume and LinkedIn to highlight skills, projects, and target roles.",
        },
      },
      {
        id: "interview-prep",
        title: "Interview Prep",
        subtopics: [
          "ML fundamentals",
          "coding drills",
          "project storytelling",
          "behavioral answers",
        ],
        handsOn:
          "Record answers to three project-story questions using situation, action, result.",
        project: {
          type: "mini",
          title: "Interview Drill Kit",
          description:
            "Build a study bank of technical questions, flashcards, and polished project stories.",
        },
      },
      {
        id: "job-applications",
        title: "Job Applications",
        subtopics: ["role targeting", "tracking", "cover notes", "follow-ups"],
        handsOn:
          "Find five target AI Engineer or ML Engineer roles and map each to your strongest evidence.",
        project: {
          type: "capstone",
          title: "Career Launch Tracker",
          description:
            "Create an application tracker with target roles, custom notes, follow-ups, and interview status.",
        },
      },
    ],
    boss: {
      title: "The Hiring Gate",
      timer: "2 hours",
      description:
        "Package one portfolio project, refine your resume, and prepare a role-specific application plan.",
      rewards: [
        "Career Launch badge",
        "300 XP",
        "AI Engineer readiness ceremony",
      ],
    },
  },
];

export const roadmap = roadmapDraft.map((section, sectionIndex) => ({
  ...section,
  index: sectionIndex,
  topics: section.topics.map((topic, topicIndex) => ({
    ...topic,
    index: topicIndex,
    sectionId: section.id,
    resources: makeResources(topic, section.profile),
  })),
}));

export const allTopics = roadmap.flatMap((section) => section.topics);

export const badges = [
  {
    id: "first-task",
    title: "First Spark",
    hint: "Complete your first hands-on task.",
    icon: "Sparkles",
  },
  {
    id: "first-project",
    title: "Project Shipped",
    hint: "Complete your first project.",
    icon: "Rocket",
  },
  {
    id: "level-5",
    title: "Momentum",
    hint: "Reach level 5.",
    icon: "TrendingUp",
  },
  {
    id: "seven-day-streak",
    title: "Seven Day Flame",
    hint: "Keep a 7-day activity streak.",
    icon: "Flame",
  },
  {
    id: "thirty-day-streak",
    title: "Monthly Discipline",
    hint: "Keep a 30-day activity streak.",
    icon: "CalendarCheck",
  },
  {
    id: "resource-scout",
    title: "Resource Scout",
    hint: "Open or mark 10 resources.",
    icon: "Compass",
  },
  {
    id: "math-master",
    title: "Math Gate Cleared",
    hint: "Finish all Math topics.",
    icon: "Sigma",
  },
  {
    id: "python-master",
    title: "Python Forge Cleared",
    hint: "Finish all Python topics.",
    icon: "Code2",
  },
  {
    id: "data-master",
    title: "Dataset Vault Cleared",
    hint: "Finish all Data topics.",
    icon: "Database",
  },
  {
    id: "ml-master",
    title: "Model Arena Cleared",
    hint: "Finish all Machine Learning topics.",
    icon: "BrainCircuit",
  },
  {
    id: "deep-master",
    title: "Deep Learning Cleared",
    hint: "Finish all Deep Learning topics.",
    icon: "Network",
  },
  {
    id: "vision-master",
    title: "Vision Trial Cleared",
    hint: "Finish all Computer Vision topics.",
    icon: "ScanEye",
  },
  {
    id: "nlp-master",
    title: "Language Labyrinth Cleared",
    hint: "Finish all NLP topics.",
    icon: "MessagesSquare",
  },
  {
    id: "career-master",
    title: "Hiring Gate Cleared",
    hint: "Finish all Career topics.",
    icon: "BriefcaseBusiness",
  },
  {
    id: "all-bosses",
    title: "Realm Breaker",
    hint: "Clear every Boss Challenge.",
    icon: "Crown",
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    hint: "Complete every roadmap topic.",
    icon: "Trophy",
  },
];
