const en = {
  appName: "AI Quest",
  appSub: "Engineer Path",
  navPrimary: "Primary navigation",
  navDashboard: "Dashboard",
  navMap: "World Map",
  navResources: "Resources",
  navTrophies: "Trophies",
  navSettings: "Settings",
  navCurrentWorld: "Current World",
  level: "LV",
  switchLang: "عربي",
  switchToArabic: "Switch to Arabic",
  switchToEnglish: "Switch to English",
  commandDashboard: "Command dashboard",
  dashboardHeadline: "Continue your AI Engineer quest from any world.",
  dashboardSub: (avatar, level) =>
    avatar +
    " is level " +
    level +
    ", building proof through staged labs, projects, resources, and boss challenges.",
  careerScore: "Career score",
  currentClass: "Current class",
  levelProgress: "Level progress",
  totalXP: (xp) => xp + " total XP",
  xpToNext: (xp) => xp + " XP to next level",
  scoreOutOf100: (label, value) => label + ": " + value + " out of 100",
  statToday: "Today",
  statLogged: "Logged",
  statOpen: "Open",
  statTodayDone: "Quest activity recorded",
  statTodayPending: "One action keeps momentum",
  statBadges: "Badges",
  badgesHidden: (n) => n + " still hidden",
  statPast: "Past Me",
  weekVsLast: (curr, prev) => curr + " this week vs " + prev + " last week",
  todayQuest: "Suggested quest",
  roadmapCleared: "Roadmap cleared",
  questDetail: (title, xp) =>
    title + " is the friendly next step. Finish it and bank " + xp + " XP.",
  questComplete:
    "You have completed every planned topic. Replay mastery reviews to keep the edge sharp.",
  goToQuest: "Go to suggestion",
  dailyStreak: "Daily streak",
  keepFlame: "Keep the rhythm friendly.",
  streakSafe: "Nice. Today's activity is logged, so the streak is safe.",
  streakPending:
    "A small stage, project check, or resource visit is enough to protect today's momentum.",
  paceForecast: "Pace forecast",
  forecastWarmup:
    "Log a few more stages to get a reliable AI Engineer pace forecast.",
  forecastReady: (date) =>
    "At this pace, AI Engineer level lands around " + date + ".",
  exportCard: "Export progress card",
  worldMapLabel: "World map",
  eightRealms: "Eight open worlds",
  worldMapTitle: "World map",
  worldMapHeadline: "Open-world skill tree for the AI Engineer path.",
  worldMapSub:
    "Every world and every topic is available from day one. Pick the route that matches your curiosity.",
  openWorldTitle: (world) => "Open " + world,
  openWorldHint: "Open world - explore anytime",
  notStarted: "Not started",
  inProgress: "In progress",
  completed: "Completed",
  topicNode: (n) => "Topic " + n,
  topicProgress: (done, total) => done + "/" + total + " stages",
  stageExperience: "7-stage topic run",
  topicComplete: "Topic complete",
  topicCompleteToast: (topic) => topic + " complete",
  stageCompleteToast: (stage, topic) => stage + " complete in " + topic,
  markStageDone: "Mark stage done",
  stageDone: "Stage done",
  allStagesDone: "All stages done",
  jumpToStage: (stage) => "Jump to " + stage,
  stageOf: (current, total) => "Stage " + current + " of " + total,
  nextStage: "Next",
  prevStage: "Back",
  submitQuickCheck: "Submit answers",
  quickCheckScore: (score, total) =>
    score + " / " + total + " correct — great run!",
  funFactLabel: "Fun fact:",
  defaultFunFact: (topic) =>
    "One clean working example in " + topic + " beats ten pages of notes.",
  tryLabLabel: "Open your editor for this one — it takes under 10 minutes.",
  conceptBreakdownIntro:
    "Plain-language ideas to keep in your working memory before you build.",
  tryItIntro:
    "A tiny lab beat before the solo task. Keep it small, visible, and quick.",
  handsOnTask: "Hands-on Task",
  handsOnIntro: "Now apply the idea solo and turn it into visible proof.",
  markDone: "Mark done",
  capstoneProject: "Capstone Project",
  miniProject: "Mini Project",
  projectIntro:
    "Ship something real enough to show your future self, mentor, or recruiter.",
  shipProject: "Ship project",
  shipped: "Shipped",
  curatedResources: "Curated resources",
  adaptiveStack: "Adaptive resource stack",
  resourcesIntro:
    "Use the four tabs as a focused menu: free first, paid only when it genuinely helps.",
  resourceStageDone: "I explored useful resources",
  quickCheckIntro:
    "A quick game beat to prove the idea landed. Wrong answers explain the fix.",
  answerCorrect: "Correct. Clean signal.",
  answerWrong: "Not quite. Here's the useful correction:",
  quickCheckNeedAnswers: "Answer each quick check first",
  replayMode: "Replay mode",
  masteryReview: "Mastery review",
  masteryDetail:
    "After a world is cleared, run a short review of core concepts and collect a small retention XP reward.",
  runReview: (xp) => "Run review (+" + xp + " XP)",
  replayCleared: "Replay cleared",
  bossChallenge: "Boss challenge",
  bossOpenDetail:
    "A world-scale challenge you can attempt whenever you want a stronger proof artifact.",
  clearBoss: "Clear boss",
  bossCleared: "Boss cleared",
  worldCleared: "world cleared",
  careerReadyFinale: "Career-ready finale",
  topicsLabel: (done, total) => done + "/" + total + " topics",
  capstoneTopicLabel: "Capstone topic",
  miniProjectTopicLabel: "Mini project topic",
  resourceHub: "Resource hub",
  searchLibrary: "Search the full learning library.",
  searchPlaceholder: "Search topic, platform, or resource",
  allLanguages: "All languages",
  arabic: "Arabic",
  english: "English",
  allCosts: "All costs",
  free: "Free",
  paid: "Paid",
  freeArabic: "Free - Arabic",
  freeEnglish: "Free - English",
  paidArabic: "Paid - Arabic",
  paidEnglish: "Paid - English",
  showMore: "Show more",
  showLess: "Show less",
  noResources: "No resources in this group yet.",
  backToWorldMap: "Back to World Map",
  allWorlds: "All worlds",
  languageFilter: "Language",
  costFilter: "Cost",
  worldFilter: "World",
  resourceResults: (count) => count + " resources",
  noResourceMatches: "No matching resources",
  tryDifferentFilters:
    "Try another search term, language, cost, or world filter.",
  dismissSuggestion: "Skip",
  questSuggestionDismissed: "Suggestion skipped. Every world stays open.",
  questDismissedDetail:
    "The smart suggestion is hidden for now; jump to the World Map whenever you want a different route.",
  browseWorldMap: "Browse map",
  open: "Open",
  tried: "tried",
  loved: "loved",
  notForMe: "not for me",
  trophyRoom: "Trophy room",
  trophyHeadline: "Badges that mark real milestones.",
  earnedBadge: "Earned",
  notEarnedYet: "Not earned yet",
  lockedBadge: "???",
  badgeHintLocked: (hint) => hint,
  badgeUnlocked: "Badge unlocked",
  settingsTitle: "Settings",
  settingsHeadline: "Tune the quest to your study style.",
  soundCues: "Sound cues",
  soundDetail: "Small completion, level-up, and badge tones.",
  motionEffects: "Motion effects",
  motionDetail:
    "App animations still respect system reduced-motion preferences.",
  streakReminders: "Streak reminders",
  remindersDetail: "Reminder preference for future notification integrations.",
  darkTheme: "Dark theme",
  darkThemeDetail: "The premium game dashboard theme.",
  localData: "Local data",
  resetProgress: "Reset progress",
  resetDetail: "This clears localStorage progress for this app on this device.",
  reset: "Reset",
  loading: "Loading",
  welcome: "Welcome to the path",
  slide1Title: "Turn the AI Engineer roadmap into a daily quest.",
  slide1Detail:
    "A serious curriculum wrapped in XP, worlds, boss challenges, and visible career readiness.",
  mapBeforeChecklist: "Open world before checklist",
  slide2Title:
    "Eight worlds. Thirty-nine topics. Go wherever curiosity points.",
  slide2Detail:
    "Explore every world right away. The app suggests a friendly next step, but it never blocks your route.",
  proofOfProgress: "Proof of progress",
  slide3Title: "Complete stages, ship projects, and build a portfolio trail.",
  slide3Detail:
    "Every topic now has seven stages: overview, concepts, try it, hands-on task, project, resources, and quick check.",
  continue: "Continue",
  chooseStarting: "Choose your starting path",
  pickTitle: "Pick a title for the journey.",
  startQuest: "Start the quest",
  avatarSignalRunner: "Signal Runner",
  avatarSignalRunnerDetail: "Fast, consistent, and curious.",
  avatarModelSmith: "Model Smith",
  avatarModelSmithDetail: "Builds systems with care.",
  avatarQuestArchitect: "Quest Architect",
  avatarQuestArchitectDetail: "Turns plans into shipped proof.",
  bossChallengeUnlocked: (boss) => "Boss Challenge ready: " + boss,
  nextReveal: (world) => "Next world to sample: " + world,
  weeklyPaceComparison: "Weekly pace comparison",
  quickCheckOptionLabel: (n) => "Option " + n,
  completeWorldTopics: "Complete all topics to unlock the Boss.",
  locked: "Locked",
  topicLocked: "Topic locked",
  topicLockedDetail: "Complete the previous topic to unlock this one.",
  worldLockedDetail: "Complete previous worlds to unlock.",
  classTitles: {
    "Code Novice": "Code Novice",
    "Data Apprentice": "Data Apprentice",
    "ML Practitioner": "ML Practitioner",
    "Deep Learning Adept": "Deep Learning Adept",
    "Vision & Language Specialist": "Vision & Language Specialist",
    "AI Engineer": "AI Engineer",
  },
  stageLabels: {
    overview: "Overview",
    concepts: "Concept Breakdown",
    try: "Try It Yourself",
    handsOn: "Hands-on Task",
    project: "Mini Project / Capstone",
    resources: "Resources",
    quickCheck: "Quick Check",
  },
  sections: {
    "math-stats": {
      title: "Math & Statistics Foundations",
      shortTitle: "Math",
      week: "Week 0",
      motif: "geometric grid",
      openHint: "Open from day one. Build the core language of models.",
      boss: {
        title: "The Gradient Gate",
        description:
          "Given a tiny dataset, derive a loss, compute gradients, and explain the math behind one learning step.",
        rewards: ["Math World badge", "Boss XP", "Stronger ML readiness"],
      },
    },
    "python-fundamentals": {
      title: "Python Fundamentals",
      shortTitle: "Python",
      week: "Weeks 1-2",
      motif: "code terminal",
      openHint:
        "Open from day one. Use Python whenever you want practical leverage.",
      boss: {
        title: "The Python Forge",
        description:
          "Build a CLI learning tracker that reads files, uses classes, and persists progress locally.",
        rewards: ["Python World badge", "Boss XP", "Reliable scripting power"],
      },
    },
    "data-libraries": {
      title: "Data Libraries",
      shortTitle: "Data",
      week: "Weeks 3-4",
      motif: "data streams",
      openHint:
        "Open from day one. Turn messy data into clean working material.",
      boss: {
        title: "The Dataset Vault",
        description:
          "Clean an unfamiliar CSV, find three insights, and present a mini data story with charts.",
        rewards: ["Data World badge", "Boss XP", "Sharper EDA judgment"],
      },
    },
    "machine-learning": {
      title: "Machine Learning",
      shortTitle: "ML",
      week: "Weeks 5-7",
      motif: "model lattice",
      openHint:
        "Open from day one. Train, compare, and explain models when curiosity pulls you here.",
      boss: {
        title: "The Model Arena",
        description:
          "Train, compare, tune, and explain multiple ML models for a practical prediction problem.",
        rewards: ["ML World badge", "Boss XP", "Portfolio-ready model report"],
      },
    },
    "deep-learning": {
      title: "Deep Learning",
      shortTitle: "Deep",
      week: "Weeks 8-9",
      motif: "neural glow",
      openHint:
        "Open from day one. Explore networks, tensors, and experiments freely.",
      boss: {
        title: "The Overfit Trial",
        description:
          "Take an overfitting neural net and improve it using regularization, callbacks, and tuning.",
        rewards: ["Deep Learning badge", "Boss XP", "Experiment discipline"],
      },
    },
    "computer-vision": {
      title: "Computer Vision",
      shortTitle: "Vision",
      week: "Weeks 10-11",
      motif: "lens aperture",
      openHint:
        "Open from day one. Work with images, pipelines, and demos anytime.",
      boss: {
        title: "The Vision Trial",
        description:
          "Build an image pipeline that preprocesses images, trains or fine-tunes a model, and reports results.",
        rewards: ["Vision World badge", "Boss XP", "Demo-ready CV project"],
      },
    },
    "natural-language-processing": {
      title: "Natural Language Processing",
      shortTitle: "NLP",
      week: "Week 11",
      motif: "flowing text",
      openHint:
        "Open from day one. Jump into text, embeddings, and LLM workflows whenever you want.",
      boss: {
        title: "The Language Labyrinth",
        description:
          "Build a text pipeline that cleans data, uses embeddings or transformers, and evaluates responses.",
        rewards: ["NLP World badge", "Boss XP", "LLM workflow confidence"],
      },
    },
    "career-preparation": {
      title: "Career Preparation",
      shortTitle: "Career",
      week: "Week 12",
      motif: "portfolio launch",
      openHint:
        "Open from day one. Package proof and prepare for real applications at any pace.",
      boss: {
        title: "The Hiring Gate",
        description:
          "Package one portfolio project, refine your resume, and prepare a role-specific application plan.",
        rewards: [
          "Career Launch badge",
          "Boss XP",
          "AI Engineer readiness ceremony",
        ],
      },
    },
  },
  badges: {
    "first-task": {
      title: "First Spark",
      hint: "Complete your first hands-on task.",
    },
    "first-project": {
      title: "Project Shipped",
      hint: "Complete your first project.",
    },
    "level-5": { title: "Momentum", hint: "Reach level 5." },
    "seven-day-streak": {
      title: "Seven Day Flame",
      hint: "Keep a 7-day activity streak.",
    },
    "thirty-day-streak": {
      title: "Monthly Discipline",
      hint: "Keep a 30-day activity streak.",
    },
    "resource-scout": {
      title: "Resource Scout",
      hint: "Open or mark 10 resources.",
    },
    "math-master": {
      title: "Math Gate Cleared",
      hint: "Finish all Math topics.",
    },
    "python-master": {
      title: "Python Forge Cleared",
      hint: "Finish all Python topics.",
    },
    "data-master": {
      title: "Dataset Vault Cleared",
      hint: "Finish all Data topics.",
    },
    "ml-master": {
      title: "Model Arena Cleared",
      hint: "Finish all Machine Learning topics.",
    },
    "deep-master": {
      title: "Deep Learning Cleared",
      hint: "Finish all Deep Learning topics.",
    },
    "vision-master": {
      title: "Vision Trial Cleared",
      hint: "Finish all Computer Vision topics.",
    },
    "nlp-master": {
      title: "Language Labyrinth Cleared",
      hint: "Finish all NLP topics.",
    },
    "career-master": {
      title: "Hiring Gate Cleared",
      hint: "Finish all Career topics.",
    },
    "all-bosses": {
      title: "Realm Breaker",
      hint: "Clear every Boss Challenge.",
    },
    "ai-engineer": {
      title: "AI Engineer",
      hint: "Complete every roadmap topic.",
    },
  },
  topics: {
    "linear-algebra-essentials": {
      title: "Linear Algebra Essentials",
      overview:
        "Linear algebra is the internal language every AI model speaks. Vectors and matrices aren't abstract notation — they're how a neural network stores and transforms the world. Once you can reason about matrix shapes and dot products, every architecture diagram suddenly makes sense.",
      funFact:
        "A single forward pass through a neural network is nothing but a chain of matrix multiplications. Master those, and you've understood the engine.",
      concepts: [
        {
          term: "vectors",
          explain:
            "An ordered list of numbers that pinpoints a location or direction in space — think of it as a recipe that uniquely locates a concept in a coordinate system.",
        },
        {
          term: "matrices",
          explain:
            "A 2D grid of numbers that packages an entire transformation into one object. Multiplying a vector by a matrix rotates, scales, or encodes it.",
        },
        {
          term: "dot products",
          explain:
            "Multiply matching elements then sum — the result measures how much two vectors agree or point in the same direction. Transformer attention scores are just scaled dot products.",
        },
        {
          term: "eigen intuition",
          explain:
            "An eigenvector is a special direction a matrix can only stretch, never rotate. Eigenvalues measure the stretch factor — PCA uses these to find the most informative axes in data.",
        },
      ],
      trySteps: [
        "Open a Python file or Jupyter Notebook named la-lab.",
        "Create two NumPy arrays: a = [1, 2, 3] and b = [4, 0, -1]. Compute and print their dot product.",
        "Build a 2×3 matrix and multiply it by a 3×1 vector. Print the result's shape and values.",
        "Write one sentence: what physical thing does the dot product measure? Save your answer in a comment.",
      ],
      quickCheck: [
        {
          question: "What does a dot product between two vectors measure?",
          options: [
            "How much two vectors point in the same direction",
            "The total length of both vectors combined",
            "The number of dimensions in the space",
          ],
          answer: 0,
          explanation:
            "The dot product quantifies directional agreement — if it's zero, the vectors are perpendicular; if large and positive, they point similarly.",
        },
        {
          question: "What is a matrix fundamentally used for in AI?",
          options: [
            "Representing and applying transformations to data",
            "Counting the number of training samples",
            "Choosing a learning rate",
          ],
          answer: 0,
          explanation:
            "Matrices encode transformations. Every layer in a neural network applies a matrix multiplication to transform its input.",
        },
        {
          question: "Why are eigenvectors useful in machine learning?",
          options: [
            "They reveal the directions of greatest variance in data",
            "They speed up gradient descent automatically",
            "They replace the need for training data",
          ],
          answer: 0,
          explanation:
            "Eigenvectors point along the axes that capture the most information in a dataset — this is exactly what PCA exploits.",
        },
      ],
    },
    "probability-foundations": {
      title: "Probability Foundations",
      overview:
        "Every ML model is fundamentally a probability machine — it doesn't return facts, it returns beliefs with confidence levels. Understanding random variables, Bayes' rule, and distributions lets you reason about model uncertainty, calibrate outputs, and debug surprising predictions.",
      funFact:
        "Naive Bayes spam filters, medical diagnostics, and large language models all share the same Bayesian backbone. Probability is the universal glue of AI reasoning.",
      concepts: [
        {
          term: "random variables",
          explain:
            "A variable whose value is determined by a random process — like a coin flip result. In ML, model predictions and feature values are treated as random variables.",
        },
        {
          term: "Bayes rule",
          explain:
            "A formula that updates your belief about something given new evidence: P(A|B) = P(B|A)×P(A)/P(B). It's how a model 'learns' from data.",
        },
        {
          term: "distributions",
          explain:
            "A mathematical description of how likely each possible value is. Normal distributions appear everywhere from measurement noise to weight initialization in neural networks.",
        },
        {
          term: "expected value",
          explain:
            "The probability-weighted average outcome — what you'd get on average if you ran the random process many times. Loss functions minimize the expected value of errors.",
        },
      ],
      trySteps: [
        "Open a notebook named probability-lab.",
        "Simulate 10,000 coin flips using NumPy. Compute and print the observed probability of heads.",
        "Plot a histogram of 5,000 draws from a normal distribution. Label the mean and one standard deviation.",
        "Write Bayes' rule in a comment and apply it to one real example: a disease test with known accuracy.",
      ],
      quickCheck: [
        {
          question: "What does Bayes' rule allow you to do?",
          options: [
            "Update a belief given new evidence",
            "Compute the exact true probability of anything",
            "Eliminate uncertainty from predictions",
          ],
          answer: 0,
          explanation:
            "Bayes' rule is the engine of belief updating — it tells you how much a new observation should shift your prior belief.",
        },
        {
          question: "Why does expected value matter in loss functions?",
          options: [
            "Loss functions minimize the average error across all examples",
            "Expected value measures training speed",
            "It determines the number of layers in the network",
          ],
          answer: 0,
          explanation:
            "Minimizing expected loss means the model is as close as possible to correct predictions on average across the whole dataset.",
        },
        {
          question: "What does a probability distribution tell you?",
          options: [
            "How likely each possible outcome is",
            "The order in which to train examples",
            "The exact value of future observations",
          ],
          answer: 0,
          explanation:
            "A distribution maps outcomes to their probabilities — it's the full picture of uncertainty about a random variable.",
        },
      ],
    },
    "descriptive-inferential-statistics": {
      title: "Descriptive & Inferential Statistics",
      overview:
        "Descriptive statistics give you a snapshot of your data — the shape, center, and spread. Inferential statistics let you make confident claims about a population from a sample. Together, they're your tools for deciding whether a model improvement is real or just noise.",
      funFact:
        "A/B tests at Google, Netflix, and Airbnb run on the same hypothesis-testing logic you'll learn here. Significance tests decide which version of a feature ships to millions of users.",
      concepts: [
        {
          term: "mean and variance",
          explain:
            "Mean is the center of gravity of your data; variance measures how spread out values are from that center. High variance in features can dominate model learning if left unscaled.",
        },
        {
          term: "confidence intervals",
          explain:
            "A range of values that is likely to contain the true population parameter — a 95% CI means: if you repeated the study 100 times, 95 of those ranges would capture the true value.",
        },
        {
          term: "hypothesis tests",
          explain:
            "A principled way to decide if an observed difference is real or due to chance. You set a threshold (p-value) and either reject or retain a null hypothesis.",
        },
        {
          term: "sampling",
          explain:
            "Drawing a subset from a population to make inferences. How you sample determines how trustworthy your conclusions are — biased sampling creates biased models.",
        },
      ],
      trySteps: [
        "Load any small CSV dataset using Pandas.",
        "Compute mean, median, variance, and standard deviation for two numerical columns.",
        "Build a 95% confidence interval for one column's mean using scipy.stats.",
        "State one hypothesis about the data and perform a t-test or chi-squared test to assess it.",
      ],
      quickCheck: [
        {
          question: "What does a 95% confidence interval mean?",
          options: [
            "95% of repeated samples would produce an interval containing the true value",
            "There is a 95% chance the true value is in this specific interval",
            "The model is 95% accurate",
          ],
          answer: 0,
          explanation:
            "The interval's coverage is a property of the procedure, not of one specific interval — a subtle but important distinction.",
        },
        {
          question: "What is variance measuring in a dataset?",
          options: [
            "The average squared distance of values from the mean",
            "The most common value in the dataset",
            "The maximum minus minimum value",
          ],
          answer: 0,
          explanation:
            "Variance quantifies spread. Large variance means values are scattered widely; small variance means they cluster near the mean.",
        },
        {
          question: "Why does biased sampling hurt ML models?",
          options: [
            "The model learns patterns that don't generalize to the real population",
            "It makes training faster but less accurate",
            "It reduces the number of parameters needed",
          ],
          answer: 0,
          explanation:
            "A biased sample teaches the model a distorted view of reality — it will make systematically wrong predictions on the parts it never saw.",
        },
      ],
    },
    "calculus-for-machine-learning": {
      title: "Calculus for Machine Learning",
      overview:
        "Calculus tells your model which direction to improve. The derivative of the loss function with respect to each weight is exactly the signal gradient descent uses to update the model. You don't need to be a calculus expert — you need to understand the idea of 'which way is downhill'.",
      funFact:
        "The entire backpropagation algorithm that trains every deep neural network is just the chain rule applied recursively. One calculus rule, applied millions of times per second.",
      concepts: [
        {
          term: "limits",
          explain:
            "The foundation of calculus — the value a function approaches as the input gets infinitely close to a point. Derivatives are defined as limits of slopes.",
        },
        {
          term: "derivatives",
          explain:
            "The instantaneous rate of change of a function — the slope of the curve at one exact point. In ML, the derivative of the loss tells the model how much each weight contributes to the error.",
        },
        {
          term: "gradients",
          explain:
            "The multi-variable extension of derivatives — a vector pointing in the direction of steepest increase of a function. Gradient descent moves in the opposite direction to reduce loss.",
        },
        {
          term: "chain rule",
          explain:
            "A rule for computing derivatives of composed functions: if y depends on u which depends on x, the derivative chains together. Backprop is this rule applied layer by layer.",
        },
      ],
      trySteps: [
        "Write a Python function f(x) = x^3 - 4x + 1 and plot it over x from -3 to 3.",
        "Compute its derivative f'(x) by hand, then verify numerically: f'(2) ≈ (f(2+h) - f(2-h)) / 2h for h=0.001.",
        "Implement a gradient for a two-variable function g(x, y) = x^2 + y^2 and compute it at point (3, 4).",
        "Write in a comment: which direction does gradient descent move relative to the gradient, and why?",
      ],
      quickCheck: [
        {
          question: "What does the gradient of a loss function represent?",
          options: [
            "The direction of steepest increase in the loss",
            "The current accuracy of the model",
            "The number of training steps taken",
          ],
          answer: 0,
          explanation:
            "Gradient descent subtracts a fraction of the gradient to move the weights in the direction that reduces loss.",
        },
        {
          question:
            "Why is the chain rule critical for training neural networks?",
          options: [
            "It lets you compute how each weight in every layer affects the final loss",
            "It speeds up the forward pass",
            "It determines the best learning rate automatically",
          ],
          answer: 0,
          explanation:
            "Backpropagation chains derivatives layer by layer — without the chain rule, you couldn't compute gradients through composed functions.",
        },
        {
          question: "What is a derivative measuring at a single point?",
          options: [
            "The rate of change of the function at that exact point",
            "The average value of the function",
            "The second-order curvature of the function",
          ],
          answer: 0,
          explanation:
            "The derivative is the instantaneous slope — it tells you how the function output changes for a tiny nudge in the input.",
        },
      ],
    },
    "linear-algebra-calculus-neural-networks": {
      title: "Linear Algebra & Calculus for Neural Networks",
      overview:
        "This topic connects the two math worlds directly to neural nets. Matrix calculus describes how errors flow backward through layers; activation functions introduce nonlinearity that makes networks powerful; and understanding loss surfaces helps you diagnose and fix training problems.",
      funFact:
        "Visualizing loss surfaces in 3D reveals why deep networks with skip connections (like ResNet) are dramatically easier to train — their surfaces are smoother and have fewer sharp cliffs.",
      concepts: [
        {
          term: "matrix calculus",
          explain:
            "Derivatives of functions that take and return vectors or matrices — the foundation of backprop. The Jacobian matrix packs all partial derivatives together.",
        },
        {
          term: "activation functions",
          explain:
            "Nonlinear functions applied after each linear transformation — ReLU, sigmoid, tanh. Without them, a stack of linear layers collapses to a single linear transformation no matter how deep.",
        },
        {
          term: "loss surfaces",
          explain:
            "The multi-dimensional landscape of loss values as weights vary. The optimizer's job is to find the lowest valley on this surface — local minima, saddle points, and flat regions all affect training.",
        },
        {
          term: "backprop intuition",
          explain:
            "Errors flow backward from the output layer to the input, scaled by how much each weight contributed. Each weight receives a gradient signal telling it which direction to move to reduce the loss.",
        },
      ],
      trySteps: [
        "Draw (on paper or in code) a network with 2 inputs, 2 hidden neurons, and 1 output.",
        "Trace a forward pass with made-up weights: compute each hidden neuron's value using a ReLU activation.",
        "Compute the loss (mean squared error) given a target value. Write out the chain rule steps to find ∂Loss/∂w1.",
        "Explain in one sentence per layer what gradient backprop is communicating to that layer.",
      ],
      quickCheck: [
        {
          question: "Why are activation functions necessary in deep networks?",
          options: [
            "They introduce nonlinearity, allowing the network to learn complex patterns",
            "They speed up the matrix multiplications",
            "They reduce the number of parameters needed",
          ],
          answer: 0,
          explanation:
            "Without nonlinear activations, any depth of linear layers is equivalent to a single linear layer — no complex function approximation possible.",
        },
        {
          question: "What is the Jacobian matrix used for in neural networks?",
          options: [
            "Packing all partial derivatives of a vector-valued function",
            "Initializing weights before training",
            "Selecting the right batch size",
          ],
          answer: 0,
          explanation:
            "The Jacobian generalizes the gradient to vector inputs and outputs — it's the building block for computing backprop through layers.",
        },
        {
          question:
            "In backpropagation, error signals travel in which direction?",
          options: [
            "From the output layer backward toward the input layer",
            "From the input layer forward toward the output",
            "Simultaneously through all layers at once",
          ],
          answer: 0,
          explanation:
            "Backprop computes gradients by chaining derivatives from the final loss backward through each layer to update every weight.",
        },
      ],
    },
    "variables-data-types": {
      title: "Variables & Data Types",
      overview:
        "Variables are how programs hold information, and data types determine what operations you can perform on that information. In Python, a clean choice of data structure can make the difference between a 10-line solution and a 100-line one — especially when you're wrangling datasets.",
      funFact:
        "Python's dynamic typing means you can prototype data pipelines in minutes — but it also means type-related bugs hide until runtime. AI engineers who understand types write faster, safer code.",
      concepts: [
        {
          term: "numbers",
          explain:
            "Integers and floats — Python automatically picks the right type. Floats matter in ML because precision affects gradient calculations; integer types matter for indexing and counting.",
        },
        {
          term: "strings",
          explain:
            "Sequences of characters used for labels, file paths, column names, and text data. String manipulation is essential for cleaning NLP datasets and building data pipelines.",
        },
        {
          term: "lists",
          explain:
            "Ordered, mutable sequences — Python's workhorse for collections. You'll use lists constantly to hold batches of examples, feature names, and results.",
        },
        {
          term: "dictionaries",
          explain:
            "Key-value stores that map names to values — perfect for configuration objects, label mappings, and storing model metrics by name.",
        },
      ],
      trySteps: [
        "Create a Python dictionary representing a learner profile: name, age, level, and list of completed topics.",
        "Add a new skill to the topics list and update the level by 1.",
        "Loop through the dictionary and print each key and value in a formatted sentence.",
        "Check the type of each value using type() and print what type each one is.",
      ],
      quickCheck: [
        {
          question: "When would you use a dictionary instead of a list?",
          options: [
            "When you need to look up values by a meaningful name or key",
            "When you need to store items in a sorted order",
            "When you need to store only numbers",
          ],
          answer: 0,
          explanation:
            "Dictionaries provide O(1) key-based lookup — ideal when data has named attributes like a configuration or label mapping.",
        },
        {
          question:
            "What is the difference between an integer and a float in Python?",
          options: [
            "Integers have no decimal point; floats can represent fractional values",
            "Integers are always positive; floats can be negative",
            "Floats are faster to compute than integers",
          ],
          answer: 0,
          explanation:
            "Floats store decimal precision needed for weights and probabilities; integers are exact and used for counts and indices.",
        },
        {
          question: "Why are lists considered 'mutable' in Python?",
          options: [
            "Their contents can be changed after creation",
            "They can only store one type of value",
            "They are faster than tuples for all operations",
          ],
          answer: 0,
          explanation:
            "Mutability means you can append, remove, or replace elements in-place — key for building dynamic data pipelines.",
        },
      ],
    },
    "control-flow": {
      title: "Control Flow",
      overview:
        "Control flow is how a program decides what to do next. Every data pipeline, training loop, and evaluation script you'll ever write is built from if/else decisions, for loops, and while conditions. Master these patterns and you can express any algorithm.",
      funFact:
        "The entire training loop of a neural network — forward pass, loss, backward pass, optimizer step — is just a for loop over batches, repeated until the model converges.",
      concepts: [
        {
          term: "if statements",
          explain:
            "Conditional branches that execute code only when a condition is true — used for data validation, early stopping checks, and routing logic in pipelines.",
        },
        {
          term: "loops",
          explain:
            "for loops iterate over sequences; while loops repeat until a condition fails. Every training epoch and batch loop is a for loop over your dataset.",
        },
        {
          term: "truthiness",
          explain:
            "Python evaluates any object as truthy or falsy — empty lists, 0, and None are falsy. Understanding this prevents subtle bugs in condition checks.",
        },
        {
          term: "comprehensions",
          explain:
            "Compact one-line expressions that create lists, dicts, or sets from iterables. List comprehensions replace many simple for-loops with clean, readable expressions.",
        },
      ],
      trySteps: [
        "Write a for loop that iterates over a list of 5 numbers and prints whether each is even or odd.",
        "Use a list comprehension to create a list of squares for numbers 1 through 10.",
        "Write a while loop that counts down from 10 and breaks when it hits 5.",
        "Use a dict comprehension to map each number 1-5 to its cube.",
      ],
      quickCheck: [
        {
          question: "What is a list comprehension most useful for?",
          options: [
            "Creating a new list by transforming or filtering an existing iterable in one line",
            "Modifying a list in place without creating a new one",
            "Printing each element of a list with a label",
          ],
          answer: 0,
          explanation:
            "Comprehensions replace simple for-loops that build lists, making code shorter and often more readable.",
        },
        {
          question: "When does a while loop stop executing?",
          options: [
            "When its condition evaluates to False",
            "After exactly one iteration",
            "When it runs out of memory",
          ],
          answer: 0,
          explanation:
            "A while loop checks its condition before each iteration and stops as soon as the condition is falsy — make sure there's always a path to False!",
        },
        {
          question: "What does Python consider as 'falsy'?",
          options: [
            "0, empty strings, empty lists, None, and False",
            "Only the literal value False",
            "Any negative number",
          ],
          answer: 0,
          explanation:
            "Python's truthiness rules let you write concise condition checks — but knowing what evaluates to False prevents subtle logic bugs.",
        },
      ],
    },
    functions: {
      title: "Functions",
      overview:
        "Functions let you name and reuse a block of logic. They're how you turn a working experiment into reusable, testable, shareable code. Every ML utility you'll write — a data loader, a metric calculator, a preprocessing step — starts as a function.",
      funFact:
        "The best AI engineering codebases are collections of small, well-named functions. The ones that are hard to maintain are collections of long notebooks with no functions at all.",
      concepts: [
        {
          term: "parameters",
          explain:
            "Inputs declared in the function signature — they make the function flexible so one function can handle many situations without copy-pasting.",
        },
        {
          term: "return values",
          explain:
            "The output a function produces. Explicit return values make functions composable — you can chain them together to build pipelines.",
        },
        {
          term: "scope",
          explain:
            "Variables defined inside a function are local — they don't leak out. This isolation is what makes functions safe to reuse without side effects.",
        },
        {
          term: "docstrings",
          explain:
            "A string at the top of a function that describes what it does, its parameters, and its return value. Good docstrings make your code readable by your future self.",
        },
      ],
      trySteps: [
        "Write a function calculate_xp(tasks_done, bonus=0) that returns tasks_done * 30 + bonus.",
        "Add a docstring to the function explaining its parameters and return value.",
        "Call the function with different arguments and print the results.",
        "Refactor a long if/else block (at least 5 lines) from a previous exercise into a named function.",
      ],
      quickCheck: [
        {
          question: "What is the main purpose of a function's return value?",
          options: [
            "To pass the result of computation to the caller for further use",
            "To print output directly to the terminal",
            "To reset all local variables",
          ],
          answer: 0,
          explanation:
            "Return values make functions composable — the output of one can become the input of another, building powerful pipelines.",
        },
        {
          question:
            "Why are local variables inside functions isolated from the outside?",
          options: [
            "To prevent unintended side effects and name collisions",
            "To make the function run faster",
            "Because Python can't access them from outside",
          ],
          answer: 0,
          explanation:
            "Scope isolation is a safety feature — functions with no side effects are predictable, testable, and reusable.",
        },
        {
          question: "What does a good docstring document?",
          options: [
            "What the function does, its parameters, and what it returns",
            "Only the function name and author",
            "The history of changes to the function",
          ],
          answer: 0,
          explanation:
            "A complete docstring is the function's contract — it tells anyone reading the code exactly how to use it without reading the implementation.",
        },
      ],
    },
    oop: {
      title: "OOP",
      overview:
        "Object-oriented programming lets you bundle data and behavior into reusable blueprints called classes. In AI engineering, OOP is how PyTorch defines models (nn.Module), how Keras builds layers, and how you'll structure your own data pipelines and experiment trackers.",
      funFact:
        "Every PyTorch model you'll ever train is a class that inherits from nn.Module and implements a forward() method. OOP isn't just academic — it's the interface to the entire deep learning ecosystem.",
      concepts: [
        {
          term: "classes",
          explain:
            "Blueprints that define what data (attributes) an object holds and what actions (methods) it can perform. A class is the template; an instance is the actual object created from it.",
        },
        {
          term: "methods",
          explain:
            "Functions defined inside a class that operate on the object's data. The self parameter gives each method access to the object's attributes.",
        },
        {
          term: "inheritance",
          explain:
            "A class can extend another class and inherit all its methods and attributes, then add or override behavior. PyTorch's nn.Module uses inheritance to give every custom model a standard training interface.",
        },
        {
          term: "composition",
          explain:
            "Building complex classes by including instances of other classes as attributes — prefer this over deep inheritance chains. Neural networks are composed of layer objects.",
        },
      ],
      trySteps: [
        "Create a Topic class with attributes: title, subtopics, and completed (bool).",
        "Add a mark_done() method that sets completed to True and prints a congratulations message.",
        "Create a CapstoneProject class that inherits from Topic and adds a project_title attribute.",
        "Instantiate both classes and call mark_done() on each. Print all attributes.",
      ],
      quickCheck: [
        {
          question: "What is the relationship between a class and an instance?",
          options: [
            "A class is the blueprint; an instance is a specific object created from it",
            "A class and an instance are the same thing",
            "An instance defines the rules; a class applies them",
          ],
          answer: 0,
          explanation:
            "You define a class once and create as many instances as you need — each instance has its own copy of the data but shares the same methods.",
        },
        {
          question: "When would you use inheritance in Python?",
          options: [
            "When a new class is a specialized version of an existing class and should share its behavior",
            "Whenever you want to use two classes in the same program",
            "Only when building GUI applications",
          ],
          answer: 0,
          explanation:
            "Inheritance makes sense for 'is-a' relationships — a CapstoneProject is a Topic, so it inherits Topic's interface and adds capstone-specific behavior.",
        },
        {
          question: "What does the self parameter in a method refer to?",
          options: [
            "The specific instance the method is being called on",
            "The class definition itself",
            "The parent class",
          ],
          answer: 0,
          explanation:
            "self is a reference to the current object — it lets methods access and modify the object's own data attributes.",
        },
      ],
    },
    "file-handling": {
      title: "File Handling",
      overview:
        "Real AI projects live in files — datasets are CSVs, configurations are JSON, model artifacts are saved to disk. Python's file handling tools let you load, transform, and save data reliably, which is the unsexy-but-critical foundation of every real ML pipeline.",
      funFact:
        "Data engineers estimate that 60-80% of ML project time goes into data loading, cleaning, and saving. Master file handling and you're faster than most.",
      concepts: [
        {
          term: "read/write",
          explain:
            "Python's open() function with 'r', 'w', or 'a' modes lets you read from or write to any text file. The with statement ensures the file closes properly even if an error occurs.",
        },
        {
          term: "CSV",
          explain:
            "Comma-separated values — the most common format for tabular data. Python's csv module and Pandas read_csv handle these efficiently and safely.",
        },
        {
          term: "JSON",
          explain:
            "JavaScript Object Notation — a human-readable format for structured data. Perfect for configurations, API responses, and saving Python dictionaries to disk.",
        },
        {
          term: "path handling",
          explain:
            "Using pathlib.Path instead of raw strings keeps your code cross-platform and handles slashes, extensions, and directory creation gracefully.",
        },
      ],
      trySteps: [
        "Create a JSON file named progress.json containing a dictionary with keys: name, xp, and completed_topics.",
        "Read the file back using json.load() and print each key-value pair.",
        "Load any CSV file using Pandas and print its shape and first 3 rows.",
        "Save a filtered version of the CSV to a new file using to_csv(index=False).",
      ],
      quickCheck: [
        {
          question: "Why use the 'with' statement when opening files?",
          options: [
            "It automatically closes the file even if an error occurs",
            "It makes reading faster",
            "It converts the file to UTF-8 encoding automatically",
          ],
          answer: 0,
          explanation:
            "The 'with' block is a context manager — it guarantees cleanup (closing the file) even if an exception is raised inside the block.",
        },
        {
          question: "When would you prefer JSON over CSV for storage?",
          options: [
            "When storing nested or hierarchical data like configuration objects",
            "When storing large numerical tables efficiently",
            "When the data has more than 100 columns",
          ],
          answer: 0,
          explanation:
            "JSON supports nesting — dictionaries inside lists inside dictionaries. CSV is flat and better for tabular data without nesting.",
        },
        {
          question:
            "What advantage does pathlib.Path have over raw path strings?",
          options: [
            "It works correctly on Windows, Mac, and Linux without path separator issues",
            "It makes file reading 10x faster",
            "It automatically compresses files on save",
          ],
          answer: 0,
          explanation:
            "pathlib handles OS-specific path separators automatically — / vs \\ — so your code works without modification across platforms.",
        },
      ],
    },
    "libraries-environments": {
      title: "Libraries & Environments",
      overview:
        "Every Python AI project is built on a stack of third-party libraries. Virtual environments isolate your project's dependencies so version conflicts never break your work. This is the professional setup skill that separates scripts from real projects.",
      funFact:
        "The Python Package Index (PyPI) hosts over 500,000 packages. The ones you'll use most — NumPy, Pandas, PyTorch, scikit-learn — represent thousands of person-years of work freely available with one pip install.",
      concepts: [
        {
          term: "pip",
          explain:
            "Python's package installer — pip install package_name downloads and installs any library from PyPI. pip install -r requirements.txt installs a whole project's dependencies at once.",
        },
        {
          term: "venv",
          explain:
            "A virtual environment is an isolated Python installation for one project. It prevents different projects' dependencies from conflicting with each other.",
        },
        {
          term: "packages",
          explain:
            "A collection of Python modules distributed together. Good packages expose a clean API so you import and use them without reading their source code.",
        },
        {
          term: "requirements",
          explain:
            "A requirements.txt file lists all packages and their versions needed for a project. It's the reproducibility contract that lets anyone else set up your exact environment.",
        },
      ],
      trySteps: [
        "Create a virtual environment: python -m venv .venv and activate it.",
        "Install NumPy and Requests: pip install numpy requests.",
        "Freeze the environment: pip freeze > requirements.txt. Open and read the file.",
        "Deactivate the environment, create a fresh one, and restore from requirements.txt using pip install -r requirements.txt.",
      ],
      quickCheck: [
        {
          question: "Why use a virtual environment for each project?",
          options: [
            "To isolate dependencies so different projects don't conflict",
            "To make Python run faster",
            "To avoid writing requirements.txt",
          ],
          answer: 0,
          explanation:
            "Without venvs, installing package A's new version for project 1 can break project 2 that depends on an older version.",
        },
        {
          question: "What does pip freeze output?",
          options: [
            "Every installed package in the current environment with its exact version",
            "A list of all available packages on PyPI",
            "The Python version being used",
          ],
          answer: 0,
          explanation:
            "pip freeze lists your environment's packages in a format that requirements.txt can reproduce — essential for sharing and deploying code.",
        },
        {
          question: "What is the purpose of a requirements.txt file?",
          options: [
            "To let anyone reproduce your exact Python environment",
            "To document the project's features",
            "To speed up package installation",
          ],
          answer: 0,
          explanation:
            "requirements.txt is the reproducibility contract — run pip install -r requirements.txt in a fresh venv and you get the identical setup.",
        },
      ],
    },
    numpy: {
      title: "NumPy",
      overview:
        "NumPy is the numerical engine of Python's AI stack. Its arrays are the data structure that Pandas, scikit-learn, PyTorch, and TensorFlow all speak natively. When you replace Python loops with NumPy operations, your code runs 50-1000x faster — and it reads more like math.",
      funFact:
        "NumPy's vectorized operations run in C under the hood. A loop over 1 million elements that takes 3 seconds in pure Python takes 5 milliseconds in NumPy.",
      concepts: [
        {
          term: "arrays",
          explain:
            "NumPy's core data structure — a grid of numbers with a fixed type and shape. Unlike Python lists, all elements share one type, enabling fast batch operations.",
        },
        {
          term: "broadcasting",
          explain:
            "NumPy's rule for operating on arrays of different shapes — it automatically expands dimensions to make shapes compatible. Adding a (3,) vector to a (4,3) matrix works without looping.",
        },
        {
          term: "indexing",
          explain:
            "Boolean masks, integer indices, and slices let you extract exactly the elements you want. Boolean indexing (array[array > 0]) is especially useful for filtering data.",
        },
        {
          term: "vectorization",
          explain:
            "Replacing explicit Python loops with NumPy operations that process entire arrays at once. Vectorized code is faster, shorter, and easier to read.",
        },
      ],
      trySteps: [
        "Create a NumPy array of 1000 random numbers from a normal distribution.",
        "Compute mean, std, min, and max in one line each using NumPy functions.",
        "Use boolean indexing to extract all values greater than the mean.",
        "Replace a Python loop that computes x^2 + 2x - 1 for 1000 values with a single NumPy expression.",
      ],
      quickCheck: [
        {
          question: "Why is NumPy vectorization faster than Python loops?",
          options: [
            "NumPy operations run in compiled C code on entire arrays at once",
            "NumPy skips error checking to run faster",
            "NumPy uses multiple CPU cores automatically",
          ],
          answer: 0,
          explanation:
            "NumPy delegates computation to optimized C and Fortran code — no Python overhead per element means massive speed gains on large arrays.",
        },
        {
          question: "What does NumPy broadcasting allow you to do?",
          options: [
            "Apply operations between arrays of different but compatible shapes without explicit loops",
            "Send arrays over a network",
            "Broadcast results to multiple variables simultaneously",
          ],
          answer: 0,
          explanation:
            "Broadcasting automatically expands smaller arrays to match larger ones along compatible dimensions — enabling concise mathematical expressions.",
        },
        {
          question: "How does boolean indexing work in NumPy?",
          options: [
            "You pass a boolean array as an index to select only elements where the condition is True",
            "You use True/False to toggle array elements on and off",
            "You specify indices using True for even and False for odd positions",
          ],
          answer: 0,
          explanation:
            "Boolean indexing is one of NumPy's most powerful features — array[array > 0] returns a new array with only the positive values.",
        },
      ],
    },
    pandas: {
      title: "Pandas",
      overview:
        "Pandas is how Python speaks to tabular data — the kind of data that lives in spreadsheets, databases, and CSV files. Every real ML project starts with Pandas for loading, inspecting, cleaning, and reshaping data before it goes anywhere near a model.",
      funFact:
        "Wes McKinney built the first version of Pandas in 2008 while working at a hedge fund because spreadsheets were too slow for financial data. It's now used by nearly every data professional on the planet.",
      concepts: [
        {
          term: "DataFrames",
          explain:
            "Pandas' core structure — a table with named columns and labeled rows. Think of it as a spreadsheet you can manipulate with code: filter rows, transform columns, merge tables.",
        },
        {
          term: "groupby",
          explain:
            "Split a DataFrame by category, apply a function to each group, and combine the results. The groupby-aggregate pattern answers 'what is the average sale by region?' type questions.",
        },
        {
          term: "joins",
          explain:
            "Merging two DataFrames by matching values in a key column — like SQL JOINs. You'll use this to enrich a features table with labels from a separate source.",
        },
        {
          term: "missing values",
          explain:
            "NaN in Pandas marks missing data. You must decide: drop the row, fill with a statistic (mean, median), or impute using a model. The wrong choice biases your model.",
        },
      ],
      trySteps: [
        "Load a CSV file into a Pandas DataFrame and print its shape, dtypes, and first 5 rows.",
        "Find and count all missing values in each column using isnull().sum().",
        "Fill numeric missing values with the column median.",
        "Group by a categorical column and compute the mean of a numeric column for each group.",
      ],
      quickCheck: [
        {
          question: "What does the groupby operation do in Pandas?",
          options: [
            "Splits the data into groups by category, applies a function, and combines results",
            "Sorts the DataFrame by the specified column",
            "Filters rows where the column equals a specific value",
          ],
          answer: 0,
          explanation:
            "groupby is the split-apply-combine pattern — essential for computing group-level statistics like averages or totals per category.",
        },
        {
          question:
            "Why is handling missing values critical before model training?",
          options: [
            "Most ML models can't handle NaN and will error or produce wrong results",
            "It makes the DataFrame print more neatly",
            "It reduces the number of columns in the dataset",
          ],
          answer: 0,
          explanation:
            "NaN propagates through arithmetic silently — if you don't handle it, your features will contain NaN and your model's weights will become NaN too.",
        },
        {
          question: "What is a DataFrame join used for?",
          options: [
            "Combining two DataFrames by matching values in a shared key column",
            "Appending rows from one DataFrame to another",
            "Splitting a DataFrame into training and test sets",
          ],
          answer: 0,
          explanation:
            "Joins merge data from two sources on a common key — the same concept as SQL JOINs, essential when your features and labels live in separate files.",
        },
      ],
    },
    matplotlib: {
      title: "Matplotlib",
      overview:
        "Matplotlib is Python's visualization foundation. Every EDA, training curve, evaluation metric, and report chart you produce will likely run through it. Knowing how to build clear, labeled, publication-quality charts is a professional skill that makes your insights credible.",
      funFact:
        "Matplotlib was originally written to replicate MATLAB's plotting interface so scientists could switch to Python. It's been the gold standard for scientific visualization in Python since 2003.",
      concepts: [
        {
          term: "figures",
          explain:
            "The top-level container for all plot content. You create a figure first and then add axes inside it — fig, ax = plt.subplots() is the canonical starting point.",
        },
        {
          term: "axes",
          explain:
            "The actual plotting area where data is drawn — your x and y axes, ticks, labels, and title all live on an Axes object.",
        },
        {
          term: "line charts",
          explain:
            "The most common plot type for time series, training curves, and trends. ax.plot(x, y) draws a line; adding labels and a legend makes it readable.",
        },
        {
          term: "annotations",
          explain:
            "Text, arrows, and markers placed on specific data points to highlight key insights. A good annotation turns a chart from a picture into a story.",
        },
      ],
      trySteps: [
        "Create a figure with two subplots: one line chart of sin(x) and one bar chart of 5 random values.",
        "Add a title, x-label, y-label, and grid to each subplot.",
        "Annotate the maximum value on the line chart with an arrow and text.",
        "Save the figure to a file using plt.savefig('chart.png', dpi=150).",
      ],
      quickCheck: [
        {
          question:
            "What is the relationship between a Figure and an Axes in Matplotlib?",
          options: [
            "A Figure is the window; an Axes is the individual plot inside it",
            "An Axes is the window; a Figure is what gets printed",
            "They are interchangeable names for the same object",
          ],
          answer: 0,
          explanation:
            "A Figure can contain multiple Axes (subplots) — understanding this hierarchy is key to building complex multi-panel visualizations.",
        },
        {
          question:
            "Why should you always add axis labels and a title to charts?",
          options: [
            "Without context, a chart is uninterpretable to any reader other than its creator",
            "Because Matplotlib will throw an error without them",
            "Labels are only needed for published papers",
          ],
          answer: 0,
          explanation:
            "A chart without labels forces the reader to guess what they're looking at — in a portfolio or review, this looks unprofessional.",
        },
        {
          question: "What is the purpose of plt.savefig()?",
          options: [
            "Saves the current figure to a file on disk at the specified resolution",
            "Closes the figure after displaying it",
            "Applies a style theme to the figure",
          ],
          answer: 0,
          explanation:
            "savefig lets you export charts at high resolution for reports, notebooks, or portfolio READMEs — always use dpi=150 or higher for crisp output.",
        },
      ],
    },
    seaborn: {
      title: "Seaborn",
      overview:
        "Seaborn builds on Matplotlib to make statistical charts easier and more beautiful. Its built-in knowledge of data distributions, correlations, and categories means you can produce a meaningful heatmap or pairplot in one line — the kind of chart that takes five in raw Matplotlib.",
      funFact:
        "A single Seaborn heatmap of feature correlations can reveal redundant features (those strongly correlated with each other) instantly — saving hours of manual analysis.",
      concepts: [
        {
          term: "stat plots",
          explain:
            "Charts that automatically compute and display statistical summaries — barplots show means with confidence intervals, boxplots show quartiles. No manual calculation needed.",
        },
        {
          term: "heatmaps",
          explain:
            "Color-coded grids that visualize matrices of values — correlation matrices, confusion matrices, or any 2D array. The color intensity immediately reveals patterns.",
        },
        {
          term: "distributions",
          explain:
            "histplot, kdeplot, and displot show the shape of a variable's values — is it normal? Skewed? Bimodal? Knowing the distribution guides your preprocessing choices.",
        },
        {
          term: "pairplots",
          explain:
            "A grid of scatter plots showing every numeric column against every other — instantly reveals correlations, clusters, and outliers across all feature pairs.",
        },
      ],
      trySteps: [
        "Load the Seaborn built-in 'tips' dataset: sns.load_dataset('tips').",
        "Plot a heatmap of the correlation matrix of numeric columns.",
        "Plot a pairplot colored by a categorical column.",
        "Plot a boxplot comparing a numeric variable across two categorical groups.",
      ],
      quickCheck: [
        {
          question: "What does a correlation heatmap immediately reveal?",
          options: [
            "Which feature pairs have strong linear relationships",
            "The exact causal relationship between features",
            "Which features should be dropped from the model",
          ],
          answer: 0,
          explanation:
            "High correlation between features doesn't imply causation, but it does reveal redundancy — correlated features may not both be needed in a model.",
        },
        {
          question: "Why is a pairplot useful in EDA?",
          options: [
            "It shows all pairwise relationships between features in one view",
            "It plots the training loss curve for each feature",
            "It automatically selects the best features for the model",
          ],
          answer: 0,
          explanation:
            "Pairplots give you a complete first-pass view of the data structure — spotting clusters, outliers, and linear relationships before modeling.",
        },
        {
          question:
            "What makes Seaborn's stat plots more convenient than raw Matplotlib?",
          options: [
            "They automatically compute statistical summaries and display uncertainty bands",
            "They run faster than Matplotlib plots",
            "They require no data input from the user",
          ],
          answer: 0,
          explanation:
            "Seaborn knows about statistics — a barplot shows the mean plus 95% CI automatically, saving you from computing and plotting these manually.",
        },
      ],
    },
    "project-eda-titanic": {
      title: "Project: EDA on Titanic",
      overview:
        "The Titanic dataset is the classic benchmark for exploratory analysis — rich enough to surface real insights, simple enough to master completely. This project asks you to move beyond running cells to telling a story: ask questions, find answers in the data, and present your findings clearly.",
      funFact:
        "The Titanic dataset has been used in over 100,000 Kaggle submissions. What separates top notebooks from mediocre ones is almost always the quality of the story told, not the complexity of the model.",
      concepts: [
        {
          term: "data cleaning",
          explain:
            "Identifying and handling missing values, incorrect types, outliers, and duplicates before analysis. On the Titanic dataset, Age and Cabin have significant missingness that must be addressed.",
        },
        {
          term: "feature insight",
          explain:
            "Deriving understanding from features — Pclass and Sex are strong survival predictors. Finding and explaining these relationships is the core of EDA.",
        },
        {
          term: "visual storytelling",
          explain:
            "Each chart should answer a specific question and be labeled so a reader can understand it without context. Charts are evidence for your narrative claims.",
        },
        {
          term: "notebook polish",
          explain:
            "Clean markdown headers, explained insights, and a clear conclusion section turn a collection of cells into a readable report that communicates to stakeholders.",
        },
      ],
      trySteps: [
        "Load the Titanic CSV and run df.info(), df.describe(), and df.isnull().sum().",
        "Write five questions you want the data to answer (e.g. 'Did women have higher survival rates than men?').",
        "Create one chart per question using Seaborn and answer each question in a markdown cell.",
        "Write an executive summary markdown cell: 3 key insights + 1 hypothesis for a next step.",
      ],
      quickCheck: [
        {
          question: "What is the most important output of an EDA notebook?",
          options: [
            "Clear answers to specific questions with visual evidence",
            "The highest possible statistical complexity",
            "A trained model ready for production",
          ],
          answer: 0,
          explanation:
            "EDA is an investigative process — the deliverable is insight, not a model. Clear questions + visual answers = a useful EDA.",
        },
        {
          question:
            "Why is handling missing Age values carefully in the Titanic dataset important?",
          options: [
            "Age may be a relevant survival predictor, so wrong imputation biases the analysis",
            "Missing values prevent the notebook from running",
            "Pandas requires all columns to be complete before plotting",
          ],
          answer: 0,
          explanation:
            "If you fill Age with the mean blindly, you might miss that younger or older passengers had systematically different survival rates.",
        },
        {
          question:
            "What turns an EDA notebook into a professional portfolio piece?",
          options: [
            "Clear markdown narrative, labeled charts, specific questions, and a written conclusion",
            "Using the most advanced Python techniques available",
            "Including as many charts as possible",
          ],
          answer: 0,
          explanation:
            "A portfolio EDA is a communication artifact — recruiters and collaborators need to understand your findings without running the code.",
        },
      ],
    },
    "linear-logistic-regression": {
      title: "Linear & Logistic Regression",
      overview:
        "Regression models are the workhorses of practical ML — interpretable, fast to train, and often competitive with more complex methods on well-structured tabular data. Understanding how coefficients and loss functions work here gives you the foundation to understand every more complex model.",
      funFact:
        "Logistic regression is still used in production by major tech companies for click-through rate prediction — not because they can't use deep learning, but because they can explain every coefficient to a business stakeholder.",
      concepts: [
        {
          term: "loss functions",
          explain:
            "The formula that measures how wrong the model's predictions are. Linear regression uses mean squared error; logistic regression uses binary cross-entropy. The optimizer minimizes this.",
        },
        {
          term: "coefficients",
          explain:
            "The learned weights — one per feature — that express how much each feature contributes to the prediction. Positive coefficients push predictions up; negative ones push them down.",
        },
        {
          term: "classification",
          explain:
            "Logistic regression outputs a probability between 0 and 1 (via the sigmoid function) that a sample belongs to a class. A threshold (usually 0.5) converts this to a class label.",
        },
        {
          term: "regularization",
          explain:
            "Adding a penalty for large coefficients (L1 or L2) to the loss function — this prevents overfitting by discouraging the model from relying too heavily on any one feature.",
        },
      ],
      trySteps: [
        "Train a LinearRegression model on a small tabular dataset and print R² score.",
        "Train a LogisticRegression model on a binary classification dataset and print accuracy.",
        "Print the model's coefficients and identify which feature has the largest absolute coefficient.",
        "Add L2 regularization (Ridge regression) and compare the coefficient magnitudes before and after.",
      ],
      quickCheck: [
        {
          question: "What does the sigmoid function do in logistic regression?",
          options: [
            "Squashes any input value to a probability between 0 and 1",
            "Calculates the mean squared error",
            "Selects which features to include in the model",
          ],
          answer: 0,
          explanation:
            "The sigmoid maps the linear combination of features to a valid probability — output of 0.8 means 80% confidence the sample is in class 1.",
        },
        {
          question: "Why does regularization help prevent overfitting?",
          options: [
            "It penalizes large coefficients, forcing the model to distribute weight more evenly",
            "It reduces the number of training examples",
            "It adds more features to the model automatically",
          ],
          answer: 0,
          explanation:
            "Large coefficients mean the model is over-relying on specific features. Regularization keeps weights small and the model more generalizable.",
        },
        {
          question:
            "What does a positive coefficient on a feature mean in linear regression?",
          options: [
            "Increasing that feature's value increases the predicted output",
            "The feature is negatively correlated with the target",
            "The feature was selected by the model as the most important",
          ],
          answer: 0,
          explanation:
            "The coefficient is the slope — for every one-unit increase in the feature, the prediction changes by the coefficient amount.",
        },
      ],
    },
    "support-vector-machine": {
      title: "Support Vector Machine",
      overview:
        "SVMs find the widest possible margin between classes — they're maximally conservative, which makes them excellent on small datasets where overfitting is a real risk. The kernel trick extends this idea to complex, non-linear boundaries without explicitly computing high-dimensional features.",
      funFact:
        "SVMs were the top-performing classification algorithm for many NLP and vision tasks before deep learning — before 2012, the best image classifiers were kernel SVMs. They're still the go-to for small, high-dimensional datasets.",
      concepts: [
        {
          term: "margins",
          explain:
            "The distance between the decision boundary and the nearest data points from each class (support vectors). SVM maximizes this margin, which is why it generalizes well.",
        },
        {
          term: "kernels",
          explain:
            "Functions that implicitly map data to a higher-dimensional space where it becomes linearly separable. RBF (Gaussian) and polynomial kernels are the most common.",
        },
        {
          term: "C parameter",
          explain:
            "Controls the trade-off between margin width and classification errors. High C = narrow margin, fewer errors on training data. Low C = wider margin, more training errors but better generalization.",
        },
        {
          term: "decision boundaries",
          explain:
            "The hyperplane (or curve, with kernels) that separates the classes. SVM positions this boundary to be as far from both classes as possible.",
        },
      ],
      trySteps: [
        "Train a LinearSVC on a 2D toy dataset and plot the decision boundary.",
        "Train an SVC with an RBF kernel on the same data and compare the boundary shape.",
        "Try C values of 0.1, 1, and 10 and observe how the margin changes.",
        "Evaluate both models using accuracy and F1-score.",
      ],
      quickCheck: [
        {
          question: "What are support vectors in an SVM?",
          options: [
            "The data points closest to the decision boundary that define the margin",
            "All training data points used to fit the model",
            "The hyperparameters that define the kernel function",
          ],
          answer: 0,
          explanation:
            "Support vectors are the critical training examples — only these points determine the margin and the boundary. Remove non-support points and the model is unchanged.",
        },
        {
          question: "What does a higher C parameter in SVM do?",
          options: [
            "Reduces the margin width and tolerates fewer training errors",
            "Makes the kernel more powerful",
            "Increases the number of support vectors automatically",
          ],
          answer: 0,
          explanation:
            "High C prioritizes correct classification over wide margins — this can lead to overfitting on small datasets.",
        },
        {
          question: "Why does the RBF kernel allow non-linear boundaries?",
          options: [
            "It implicitly maps data to infinite dimensions where linear separation is possible",
            "It applies a random transformation to the data",
            "It combines multiple linear SVMs together",
          ],
          answer: 0,
          explanation:
            "The RBF kernel computes similarity based on distance — in the implicit high-dimensional space, curved boundaries in the original space become linear.",
        },
      ],
    },
    "decision-trees-random-forest": {
      title: "Decision Trees & Random Forest",
      overview:
        "Decision trees learn a flowchart of rules from data. They're interpretable and fast, but overfit badly when deep. Random Forest fixes overfitting by training hundreds of trees on random subsets of data and features, then voting on predictions — the accuracy gain from this simple trick is dramatic.",
      funFact:
        "Random Forest is still one of the best-performing algorithms on tabular data. In many real-world Kaggle competitions with structured data, a well-tuned Random Forest beats vanilla neural networks.",
      concepts: [
        {
          term: "splits",
          explain:
            "At each node, a decision tree asks a yes/no question about one feature (e.g. 'Age > 30?') and routes examples down left or right. The algorithm finds the split that best separates the classes.",
        },
        {
          term: "impurity",
          explain:
            "A measure of how mixed the class labels are at a node. Gini impurity and entropy both reach 0 for a perfectly pure node (all one class) and are maximized for equal-mix nodes.",
        },
        {
          term: "ensembles",
          explain:
            "Combining many weak learners into a stronger model. Random Forest builds hundreds of independent trees and aggregates their predictions — variance is averaged away.",
        },
        {
          term: "feature importance",
          explain:
            "How much each feature contributes to reducing impurity across all trees. Random Forest's feature_importances_ attribute is a useful tool for feature selection.",
        },
      ],
      trySteps: [
        "Train a DecisionTreeClassifier with max_depth=3 and visualize it using sklearn.tree.plot_tree.",
        "Train with max_depth=None (fully grown) and compare training vs. validation accuracy.",
        "Train a RandomForestClassifier with 100 trees and compare it to the deep tree.",
        "Print feature_importances_ and plot a bar chart of the top 5 features.",
      ],
      quickCheck: [
        {
          question: "Why does a fully grown decision tree tend to overfit?",
          options: [
            "It memorizes the training data by creating a unique leaf for every sample",
            "It has too few parameters to capture the pattern",
            "It uses the wrong loss function",
          ],
          answer: 0,
          explanation:
            "An unconstrained tree can grow until each leaf contains a single training example — it has zero training error but generalizes poorly to new data.",
        },
        {
          question:
            "How does Random Forest reduce overfitting compared to a single tree?",
          options: [
            "By averaging predictions of many trees trained on random data/feature subsets",
            "By limiting the maximum depth of each tree to 3",
            "By training only on the hardest examples",
          ],
          answer: 0,
          explanation:
            "Each tree in a Random Forest sees a different random subset of data and features — their individual errors are uncorrelated, so averaging cancels variance.",
        },
        {
          question: "What does feature importance in a Random Forest measure?",
          options: [
            "How much each feature reduces impurity across all trees on average",
            "The correlation between each feature and the target",
            "The number of times each feature was selected for a split",
          ],
          answer: 0,
          explanation:
            "Feature importance sums impurity reductions weighted by the number of examples at each node — a high-importance feature is heavily used across the forest.",
        },
      ],
    },
    "k-means-knn": {
      title: "K-Means & KNN",
      overview:
        "K-Means groups unlabeled data into clusters by finding natural groupings — used for customer segmentation, anomaly detection, and data compression. KNN classifies new points by looking at which labeled examples are nearest — simple, powerful, and requires no training phase.",
      funFact:
        "K-Means++ (a smarter initialization of K-Means) is the default in scikit-learn and typically converges 10x faster to better solutions than random initialization.",
      concepts: [
        {
          term: "clustering",
          explain:
            "Grouping unlabeled data points so that similar items end up in the same group. Clusters emerge from distance between points, not from labels.",
        },
        {
          term: "distance metrics",
          explain:
            "How 'closeness' is defined — Euclidean distance is the straight line, Manhattan is sum of absolute differences, cosine measures angle. The right metric depends on your data type.",
        },
        {
          term: "neighbors",
          explain:
            "In KNN, a new point is classified by looking at its K nearest training points and taking a majority vote (classification) or average (regression).",
        },
        {
          term: "scaling",
          explain:
            "Both K-Means and KNN are sensitive to feature scales — if one feature ranges 0-10,000 and another 0-1, distance is dominated by the large-scale feature. Always scale first.",
        },
      ],
      trySteps: [
        "Generate a 2D dataset with 3 obvious clusters using sklearn.datasets.make_blobs.",
        "Fit KMeans(n_clusters=3) and plot the data colored by cluster label.",
        "Fit KNeighborsClassifier(n_neighbors=5) on a labeled dataset and evaluate accuracy.",
        "Try the same KNN without scaling, then with StandardScaler — compare accuracy.",
      ],
      quickCheck: [
        {
          question:
            "Why is feature scaling required before applying K-Means or KNN?",
          options: [
            "Without scaling, features with large ranges dominate the distance calculation",
            "Scaling makes the algorithms run faster on all datasets",
            "Both algorithms require all features to be between 0 and 1",
          ],
          answer: 0,
          explanation:
            "Distance-based algorithms are unit-sensitive — a feature ranging 0-10,000 overwhelms one ranging 0-1. StandardScaler makes all features equally influential.",
        },
        {
          question: "What does the K hyperparameter in KNN control?",
          options: [
            "How many nearest neighbors vote to determine the class of a new point",
            "How many training iterations the algorithm runs",
            "The number of clusters to find in the data",
          ],
          answer: 0,
          explanation:
            "Small K = sensitive to noise (overfit); large K = smoother but may blur class boundaries. K is tuned by cross-validation.",
        },
        {
          question: "What is the K-Means algorithm's stopping criterion?",
          options: [
            "When cluster center positions stop changing significantly between iterations",
            "When exactly K data points remain in each cluster",
            "When the model reaches zero training error",
          ],
          answer: 0,
          explanation:
            "K-Means alternates between assigning points to nearest centers and recomputing centers — it stops when assignments stabilize (centroids converge).",
        },
      ],
    },
    "model-evaluation": {
      title: "Model Evaluation",
      overview:
        "A model that looks great on paper can fail completely in production. Rigorous evaluation — using held-out test sets, cross-validation, and the right metrics for your task — is what separates trustworthy models from lucky ones. This is the most important skill for ML deployment.",
      funFact:
        "Using accuracy as your only metric on an imbalanced dataset (99% class A, 1% class B) will give you 99% 'accuracy' for a model that never predicts class B. F1, precision, and recall reveal the truth.",
      concepts: [
        {
          term: "train/test split",
          explain:
            "Holding out a portion of data (typically 20%) that the model never sees during training — this gives an honest estimate of how the model performs on new, unseen data.",
        },
        {
          term: "cross validation",
          explain:
            "Splitting data into K folds and training/testing K times, each fold taking a turn as the test set. K-fold CV gives a more reliable estimate than a single train/test split.",
        },
        {
          term: "confusion matrix",
          explain:
            "A 2×2 table (for binary classification) showing true positives, false positives, true negatives, and false negatives. It reveals exactly which class the model confuses with which.",
        },
        {
          term: "ROC AUC",
          explain:
            "The Area Under the ROC Curve measures how well the model ranks positive examples above negative ones across all thresholds. AUC of 1.0 is perfect; 0.5 is random guessing.",
        },
      ],
      trySteps: [
        "Train any classifier and evaluate it with accuracy, precision, recall, and F1-score.",
        "Plot the confusion matrix using ConfusionMatrixDisplay.",
        "Plot the ROC curve and compute the AUC score.",
        "Run 5-fold cross-validation and print the mean and standard deviation of the scores.",
      ],
      quickCheck: [
        {
          question: "Why is accuracy misleading on imbalanced datasets?",
          options: [
            "A model predicting only the majority class achieves high accuracy but is useless",
            "Accuracy is always the best metric for binary classification",
            "Imbalanced datasets have too few samples for accuracy to work",
          ],
          answer: 0,
          explanation:
            "On 95/5 imbalanced data, a naive majority classifier gets 95% accuracy but 0% recall on the minority class — precision, recall, and F1 expose this failure.",
        },
        {
          question: "What does a high AUC score indicate?",
          options: [
            "The model reliably ranks positive examples higher than negative ones",
            "The model has a high precision on the test set",
            "The model trains faster than a baseline",
          ],
          answer: 0,
          explanation:
            "AUC measures the model's ranking ability across all decision thresholds — high AUC means it consistently places true positives above true negatives.",
        },
        {
          question:
            "What advantage does K-fold cross-validation have over a single train/test split?",
          options: [
            "It uses all data for both training and testing and gives more reliable estimates",
            "It trains K times faster",
            "It prevents all forms of overfitting automatically",
          ],
          answer: 0,
          explanation:
            "K-fold gives K different estimates of performance and averages them — much more reliable than one lucky or unlucky split.",
        },
      ],
    },
    "neural-networks-backprop": {
      title: "Neural Networks & Backprop",
      overview:
        "Neural networks are function approximators built from layers of weighted connections. They can represent nearly any function given enough parameters. Backpropagation is the algorithm that makes learning possible — it efficiently computes how every weight contributed to every error.",
      funFact:
        "The backpropagation algorithm was described in the 1980s but only became practical in the 2010s when GPUs made it fast enough. The math hadn't changed — the hardware finally caught up.",
      concepts: [
        {
          term: "layers",
          explain:
            "Neural networks are organized into an input layer, one or more hidden layers, and an output layer. Each hidden layer transforms its input into a representation useful for the next layer.",
        },
        {
          term: "activations",
          explain:
            "Nonlinear functions (ReLU, sigmoid, tanh) applied after each linear transformation. They're what allow networks to approximate complex, non-linear functions.",
        },
        {
          term: "loss",
          explain:
            "A single number measuring how wrong the network's output is. Mean squared error for regression; cross-entropy for classification. Training minimizes this.",
        },
        {
          term: "gradient flow",
          explain:
            "How error signals travel backward through the network during backprop. Vanishing gradients (signals shrinking to near zero) were a major problem before ReLU and BatchNorm.",
        },
      ],
      trySteps: [
        "Implement a 2-layer network in NumPy: forward pass, loss, and backward pass manually.",
        "Use weight matrices of shapes (2,4), (4,1) and trace the shapes through each operation.",
        "Compute the loss gradient dL/dW for the output layer step by step.",
        "Run 100 gradient descent steps and plot the loss curve.",
      ],
      quickCheck: [
        {
          question:
            "What problem did ReLU solve that sigmoid/tanh activations caused?",
          options: [
            "Vanishing gradients — ReLU passes gradients unchanged for positive values",
            "Exploding gradients — ReLU caps all values at 1",
            "Slow training — ReLU computes faster than sigmoid",
          ],
          answer: 0,
          explanation:
            "Sigmoid and tanh squash large values to near-flat regions where gradients approach zero — backprop signals vanish. ReLU has gradient 1 for all positive inputs.",
        },
        {
          question:
            "What information does backpropagation compute for each weight?",
          options: [
            "How much that weight contributed to the current prediction error",
            "Whether the weight should be set to zero",
            "The optimal value for that weight in one step",
          ],
          answer: 0,
          explanation:
            "Backprop computes the gradient of the loss with respect to each weight — a signal telling the optimizer which direction and how far to move that weight.",
        },
        {
          question: "What is the purpose of the loss function in training?",
          options: [
            "To quantify the model's error in a single differentiable number",
            "To select which training examples to use",
            "To determine the network's architecture",
          ],
          answer: 0,
          explanation:
            "The loss function is the compass — it tells the optimizer exactly how wrong the model is so it can compute gradients and improve.",
        },
      ],
    },
    "keras-tensorflow": {
      title: "Keras & TensorFlow",
      overview:
        "Keras is the high-level API that makes building neural networks fast and readable. TensorFlow is the computation engine underneath it. Together they let you define, train, save, and deploy models with very little boilerplate — while still exposing every detail when you need it.",
      funFact:
        "Keras was originally created as a separate library to make TensorFlow easier to use. Google officially integrated it into TensorFlow 2.0 in 2019, making it the default way to build TF models.",
      concepts: [
        {
          term: "Sequential API",
          explain:
            "A simple model type where layers are stacked one after another. For most standard architectures — fully connected, basic CNN, basic RNN — Sequential is the fastest way to build.",
        },
        {
          term: "datasets",
          explain:
            "tf.data.Dataset and Keras utilities (image_dataset_from_directory) handle loading, batching, prefetching, and augmentation so your GPU is always fed efficiently.",
        },
        {
          term: "callbacks",
          explain:
            "Objects that execute code at specific points during training — EarlyStopping halts when val_loss stops improving; ModelCheckpoint saves the best weights; ReduceLROnPlateau lowers the learning rate.",
        },
        {
          term: "saved models",
          explain:
            "model.save() serializes the architecture, weights, and optimizer state to disk. You can reload and continue training or deploy to production with model.predict() without redefining anything.",
        },
      ],
      trySteps: [
        "Build a Sequential model with 2 Dense layers for a classification task.",
        "Compile with adam optimizer and sparse_categorical_crossentropy loss.",
        "Add EarlyStopping and ModelCheckpoint callbacks and train for up to 20 epochs.",
        "Load the saved model from disk and run inference on 3 test examples.",
      ],
      quickCheck: [
        {
          question: "What does the EarlyStopping callback prevent?",
          options: [
            "Overfitting by halting training when validation performance stops improving",
            "The model from training for more than 10 epochs",
            "Gradient explosion during backpropagation",
          ],
          answer: 0,
          explanation:
            "EarlyStopping monitors a validation metric and stops training once it hasn't improved for a set number of epochs (patience) — you get the best model, not the most trained.",
        },
        {
          question: "What does model.save() store?",
          options: [
            "Architecture, weights, optimizer state, and training configuration",
            "Only the model weights as a NumPy array",
            "Only the training history and loss curves",
          ],
          answer: 0,
          explanation:
            "A full save captures everything needed to resume training or deploy — architecture, learned weights, and optimizer momentum.",
        },
        {
          question:
            "Why is the Sequential API limited compared to the Functional API?",
          options: [
            "Sequential only supports linear chains; Functional API supports branching, skip connections, and multiple inputs/outputs",
            "Sequential is slower to train",
            "Sequential can't use callbacks",
          ],
          answer: 0,
          explanation:
            "Models like ResNet with skip connections can't be built with Sequential — the Functional API allows arbitrary graph topologies.",
        },
      ],
    },
    "pytorch-basics": {
      title: "PyTorch Basics",
      overview:
        "PyTorch is the research-preferred deep learning framework — dynamic computation graphs make debugging intuitive, and its ecosystem (HuggingFace, Lightning, TorchVision) covers almost every modern AI application. Most state-of-the-art models are published in PyTorch first.",
      funFact:
        "Over 70% of research papers on arXiv use PyTorch. If you want to implement a paper published in the last 5 years, the code will almost certainly be in PyTorch.",
      concepts: [
        {
          term: "tensors",
          explain:
            "PyTorch's multi-dimensional array — equivalent to NumPy arrays but able to run on GPUs and track gradients. Tensors are the fundamental data unit of every PyTorch computation.",
        },
        {
          term: "autograd",
          explain:
            "PyTorch's automatic differentiation engine. When you set requires_grad=True on a tensor, PyTorch records all operations on it and computes gradients automatically with .backward().",
        },
        {
          term: "modules",
          explain:
            "nn.Module is the base class for all neural network components. You subclass it, define layers in __init__, and implement the forward pass in forward(). PyTorch handles the rest.",
        },
        {
          term: "training loop",
          explain:
            "The manual loop you write: zero_grad() → forward pass → compute loss → loss.backward() → optimizer.step(). Unlike Keras, PyTorch makes this explicit — giving you full control.",
        },
      ],
      trySteps: [
        "Create a tensor of shape (4, 3) with random values and compute its mean along dimension 0.",
        "Create a leaf tensor with requires_grad=True, compute y = x^2 + 3x, and call y.backward().",
        "Define a simple nn.Module subclass with one linear layer and a ReLU.",
        "Write a complete training loop for 10 epochs on synthetic data, printing loss at each epoch.",
      ],
      quickCheck: [
        {
          question: "What does calling loss.backward() in PyTorch do?",
          options: [
            "Computes gradients of the loss with respect to all tensors with requires_grad=True",
            "Applies one gradient descent step to all parameters",
            "Resets the model weights to their initial values",
          ],
          answer: 0,
          explanation:
            "backward() traverses the computation graph in reverse and populates the .grad attribute of every leaf tensor — then the optimizer uses these gradients to update weights.",
        },
        {
          question:
            "Why do you call optimizer.zero_grad() at the start of each training step?",
          options: [
            "PyTorch accumulates gradients by default — zero_grad() clears them before the next backward pass",
            "To reset the model to its initial state",
            "To prevent the optimizer from updating weights before training starts",
          ],
          answer: 0,
          explanation:
            "PyTorch adds new gradients on top of existing ones by default (useful for gradient accumulation). In a standard loop you want clean gradients each step.",
        },
        {
          question:
            "What is the key difference between PyTorch and Keras training APIs?",
          options: [
            "PyTorch requires an explicit training loop; Keras provides a built-in .fit() method",
            "PyTorch is slower than Keras for all tasks",
            "Keras supports GPUs; PyTorch does not",
          ],
          answer: 0,
          explanation:
            "PyTorch gives you full control at the cost of more code — but this explicitness makes debugging easier and custom architectures straightforward.",
        },
      ],
    },
    "regularization-tuning": {
      title: "Regularization & Tuning",
      overview:
        "Even a perfect architecture fails if it overfits or underfits. Regularization techniques and careful hyperparameter tuning are what close the gap between a model that works in a notebook and one that works on real data. This is where engineering discipline meets empirical experimentation.",
      funFact:
        "Dropout was famously used in AlexNet (2012) to prevent overfitting on ImageNet — the model that kickstarted the deep learning revolution. A simple random zeroing of neurons cut the error rate dramatically.",
      concepts: [
        {
          term: "dropout",
          explain:
            "Randomly sets a fraction of neuron outputs to zero during training — forces the network to learn redundant representations and prevents co-adaptation of neurons.",
        },
        {
          term: "weight decay",
          explain:
            "L2 regularization applied during optimization — penalizes large weights by adding their squared magnitude to the loss. Keeps weights small and the model smooth.",
        },
        {
          term: "learning rate",
          explain:
            "The step size used by the optimizer. Too large: the model oscillates and diverges. Too small: training is slow and may get stuck. Learning rate schedules decay it over time.",
        },
        {
          term: "early stopping",
          explain:
            "Monitoring validation loss and stopping training when it stops improving — saves the best checkpoint before overfitting begins. The simplest and most effective regularizer.",
        },
      ],
      trySteps: [
        "Train a deliberately over-parameterized network on a small dataset until it clearly overfits (val_loss > train_loss).",
        "Add Dropout(0.4) after each hidden layer and retrain — observe val_loss change.",
        "Add L2 weight decay to the optimizer (weight_decay=1e-4 in PyTorch) and compare.",
        "Implement EarlyStopping and record the epoch at which it fires.",
      ],
      quickCheck: [
        {
          question: "What does dropout do during the training forward pass?",
          options: [
            "Randomly zeros out a fraction of neuron outputs to force redundant learning",
            "Permanently removes neurons that contribute least",
            "Doubles the learning rate for the dropped neurons",
          ],
          answer: 0,
          explanation:
            "Dropout creates an implicit ensemble of many different sub-networks per batch — each pass is a different random subnetwork, forcing robust feature learning.",
        },
        {
          question:
            "How does an overfitting model typically look on training/validation curves?",
          options: [
            "Training loss keeps decreasing but validation loss starts increasing",
            "Both training and validation loss increase together",
            "Validation loss is always lower than training loss",
          ],
          answer: 0,
          explanation:
            "Overfitting is the divergence between training loss (memorizing data) and validation loss (failing to generalize). Watching this gap is how you diagnose it.",
        },
        {
          question: "What is the effect of a learning rate that is too high?",
          options: [
            "The optimizer overshoots minima and training loss becomes unstable or diverges",
            "Training becomes slower than with a small learning rate",
            "The model trains faster and reaches the global minimum sooner",
          ],
          answer: 0,
          explanation:
            "Too-large steps cause the optimizer to jump over the minimum repeatedly — loss oscillates or explodes. Start small and use a scheduler to adjust.",
        },
      ],
    },
    "cnn-architecture": {
      title: "CNN Architecture",
      overview:
        "Convolutional Neural Networks are the reason modern computer vision works. Instead of treating each pixel independently, CNNs learn local patterns (edges, textures, shapes) through shared filter weights — making them dramatically more efficient and powerful than fully connected networks for images.",
      funFact:
        "A single ResNet-50 layer's filter weights, if printed as tiny images, show recognizable visual patterns: edge detectors, color blobs, texture patterns. The network genuinely learns to see.",
      concepts: [
        {
          term: "convolutions",
          explain:
            "A small filter (e.g. 3×3) slides across the input image computing dot products at each position — detecting one specific local pattern regardless of where it appears.",
        },
        {
          term: "pooling",
          explain:
            "Downsampling the spatial dimensions by taking the max or average in a small region — reduces computation and makes the network translation-invariant.",
        },
        {
          term: "feature maps",
          explain:
            "The output of applying one filter across the full input — a 2D map showing where the filter's pattern appears. Each layer produces multiple feature maps, one per filter.",
        },
        {
          term: "padding",
          explain:
            "Adding zeros around the input border so the convolution output has the same spatial size as the input (same padding). Without it, feature maps shrink with every layer.",
        },
      ],
      trySteps: [
        "Build a simple CNN in Keras: Conv2D(32, 3) → MaxPool → Conv2D(64, 3) → Flatten → Dense.",
        "Print model.summary() and trace the output shape at each layer.",
        "Load one grayscale image, pass it through just the first Conv2D layer, and visualize the feature maps.",
        "Train on MNIST for 3 epochs and compare accuracy to a Dense-only baseline.",
      ],
      quickCheck: [
        {
          question:
            "Why are convolutional filters more efficient than dense layers for images?",
          options: [
            "They share weights across all positions, vastly reducing parameters compared to fully connected layers",
            "They process all pixels simultaneously in parallel",
            "They require no training — filters are fixed mathematical functions",
          ],
          answer: 0,
          explanation:
            "A 3×3 filter has 9 weights applied at every position — a dense layer on a 224×224 image would need millions of weights per neuron. Weight sharing is the key insight.",
        },
        {
          question: "What does max pooling do to a feature map?",
          options: [
            "Takes the maximum value in each pooling window, reducing spatial dimensions",
            "Adds the average of neighboring pixels to smooth the image",
            "Applies a nonlinear activation to each pixel",
          ],
          answer: 0,
          explanation:
            "Max pooling selects the strongest activation in each region — it keeps the most salient feature and discards spatial position precision, adding translation invariance.",
        },
        {
          question: "What is the purpose of padding in a convolutional layer?",
          options: [
            "To preserve the spatial dimensions so the output has the same height and width as the input",
            "To add more training data by augmenting the images",
            "To increase the number of filters in the layer",
          ],
          answer: 0,
          explanation:
            "Without padding, each convolution shrinks the spatial dimensions. Same padding (zeros around border) preserves size so you can stack many layers.",
        },
      ],
    },
    "transfer-learning": {
      title: "Transfer Learning",
      overview:
        "Transfer learning is one of the highest-leverage techniques in AI engineering. A model trained on ImageNet has already learned to detect edges, textures, shapes, and objects — fine-tuning it for your task transfers this knowledge to a domain where you have far fewer labeled examples.",
      funFact:
        "With transfer learning, a dataset of 200 images can train a classifier that competes with a model trained from scratch on 200,000 images. This is why transfer learning dominates real-world CV projects.",
      concepts: [
        {
          term: "pretrained models",
          explain:
            "Models like ResNet-50, MobileNetV2, EfficientNet trained on millions of images — their weights encode general visual knowledge you can reuse for any image task.",
        },
        {
          term: "fine tuning",
          explain:
            "Unfreezing some or all pretrained layers and continuing training on your dataset with a small learning rate — allows the model to adapt its learned features to your specific domain.",
        },
        {
          term: "freezing layers",
          explain:
            "Setting layers to non-trainable so their weights don't change during training. Freeze early layers (general features), unfreeze later layers (task-specific features).",
        },
        {
          term: "augmentation",
          explain:
            "Artificially expanding a small dataset by applying random transformations (flip, rotate, crop, color jitter) — makes the model robust to variations it will encounter in the real world.",
        },
      ],
      trySteps: [
        "Load MobileNetV2 pretrained on ImageNet using Keras (include_top=False).",
        "Freeze all base layers and add a GlobalAveragePooling2D + Dense output head.",
        "Train for 5 epochs on a small custom dataset (at least 2 classes).",
        "Unfreeze the last 20 layers and fine-tune for 3 more epochs with a 10x smaller learning rate.",
      ],
      quickCheck: [
        {
          question: "Why does transfer learning work well with small datasets?",
          options: [
            "Pretrained features generalize across visual domains, reducing the data needed to adapt",
            "Transfer learning creates synthetic data automatically",
            "Smaller datasets are easier to overfit with transfer learning",
          ],
          answer: 0,
          explanation:
            "A model pretrained on 14 million images has already learned low-level features (edges, textures) that transfer to almost any visual task — your fine-tuning only needs to learn the task-specific head.",
        },
        {
          question:
            "What is the recommended learning rate strategy when fine-tuning?",
          options: [
            "Use a much smaller learning rate than for training from scratch",
            "Use a larger learning rate to quickly adapt the pretrained weights",
            "Keep the same learning rate used during pretraining",
          ],
          answer: 0,
          explanation:
            "Pretrained weights are already in a good region of parameter space — large learning rates would destroy this knowledge. Use 1/10 to 1/100 of your normal starting rate.",
        },
        {
          question:
            "Which layers of a pretrained model should you typically freeze first?",
          options: [
            "Early layers that detect general low-level features like edges and textures",
            "The final classification layers that are task-specific",
            "All layers equally should be frozen or unfrozen together",
          ],
          answer: 0,
          explanation:
            "Early CNN layers learn universal features (edges, curves) that transfer broadly — freeze these and only train the higher layers that are more task-specific.",
        },
      ],
    },
    "opencv-image-processing": {
      title: "OpenCV & Image Processing",
      overview:
        "OpenCV is the most widely used computer vision library in production. Before an image reaches a neural network, it often passes through an OpenCV pipeline for resizing, color conversion, noise removal, and edge detection. These classical techniques are fast, interpretable, and often sufficient for constrained problems.",
      funFact:
        "OpenCV is used in manufacturing quality control, self-driving cars, medical imaging, and security systems worldwide — often running 60+ frames per second in real time without a GPU.",
      concepts: [
        {
          term: "color spaces",
          explain:
            "Images can be represented in RGB (display), BGR (OpenCV default), HSV (hue/saturation/value), or grayscale. Converting between them enables operations like skin detection (HSV) or simpler processing (grayscale).",
        },
        {
          term: "filters",
          explain:
            "Kernels applied to images to blur (Gaussian), sharpen, or detect features. Gaussian blur removes noise before edge detection; morphological filters clean up binary masks.",
        },
        {
          term: "thresholding",
          explain:
            "Converting a grayscale image to black and white by setting all pixels above a value to white and below to black. Otsu's thresholding automatically finds the optimal threshold.",
        },
        {
          term: "contours",
          explain:
            "Curves joining continuous points of the same intensity — OpenCV's findContours detects object boundaries and returns them as lists of points for shape analysis, measurement, or tracking.",
        },
      ],
      trySteps: [
        "Load any image with cv2.imread() and convert it from BGR to grayscale.",
        "Apply Gaussian blur with a 5×5 kernel and display both original and blurred versions.",
        "Apply Otsu thresholding to the blurred image and display the binary result.",
        "Run findContours on the binary image, draw the contours in green on the original, and count them.",
      ],
      quickCheck: [
        {
          question: "Why does OpenCV use BGR channel order instead of RGB?",
          options: [
            "Historical reasons from its original C library — always convert or specify the order explicitly",
            "BGR is more efficient for GPU processing",
            "BGR is the standard in all image processing libraries",
          ],
          answer: 0,
          explanation:
            "OpenCV was written in C and adopted the BGR order early on. When displaying with Matplotlib or passing to models expecting RGB, always convert with cv2.cvtColor(img, cv2.COLOR_BGR2RGB).",
        },
        {
          question: "What is Gaussian blur used for before edge detection?",
          options: [
            "Reducing noise so edges are detected more cleanly and fewer false edges appear",
            "Making the image brighter before processing",
            "Converting the color space for processing",
          ],
          answer: 0,
          explanation:
            "Noise creates spurious intensity differences that look like edges to a detector. Blurring smooths these out, so only genuine structural edges survive.",
        },
        {
          question:
            "What information do contours provide about objects in an image?",
          options: [
            "The shape boundary as a list of points that can be used for measurement and tracking",
            "The pixel-level semantic label of each object",
            "The 3D position of objects in the scene",
          ],
          answer: 0,
          explanation:
            "Contours are the outlines of regions — from them you can compute area, perimeter, bounding boxes, and fit shapes like circles or polygons for downstream analysis.",
        },
      ],
    },
    "object-detection-yolo": {
      title: "Object Detection (YOLO)",
      overview:
        "Object detection goes beyond classification by locating objects with bounding boxes. YOLO (You Only Look Once) does this in a single neural network pass — making it fast enough for real-time video. YOLOv8 is the current standard for production object detection.",
      funFact:
        "YOLOv1 (2015) ran at 45 frames per second — real-time detection on a GPU. Today, YOLOv8 runs at over 100 FPS on modern hardware. The 'You Only Look Once' name refers to the single-pass inference that makes it fast.",
      concepts: [
        {
          term: "bounding boxes",
          explain:
            "Rectangles defined by (x_center, y_center, width, height) that localize a detected object within an image. Each box has a class label and confidence score.",
        },
        {
          term: "IoU",
          explain:
            "Intersection over Union — the area of overlap between a predicted box and the ground-truth box, divided by their union. IoU > 0.5 is typically considered a correct detection.",
        },
        {
          term: "confidence",
          explain:
            "The model's estimated probability that the bounding box contains an object of the predicted class. Non-maximum suppression removes duplicate boxes with lower confidence.",
        },
        {
          term: "inference",
          explain:
            "Running a trained model on new images to produce predictions — typically involves loading the model, preprocessing the image, running a forward pass, and parsing the output predictions.",
        },
      ],
      trySteps: [
        "Install ultralytics and load YOLOv8n: from ultralytics import YOLO; model = YOLO('yolov8n.pt').",
        "Run inference on a sample image: results = model('your_image.jpg'). Print the detected class names.",
        "Display the annotated image with bounding boxes: results[0].show().",
        "Filter results to show only detections with confidence > 0.5 and count them per class.",
      ],
      quickCheck: [
        {
          question: "What does IoU measure in object detection evaluation?",
          options: [
            "How much a predicted bounding box overlaps with the ground-truth box",
            "The confidence score of the best detection",
            "The number of objects detected per image",
          ],
          answer: 0,
          explanation:
            "IoU is the standard metric for bounding box quality — a score of 1.0 means perfect overlap; 0 means no overlap at all. Typically IoU > 0.5 is considered a true positive.",
        },
        {
          question: "What is Non-Maximum Suppression (NMS) used for?",
          options: [
            "Removing duplicate bounding boxes for the same object, keeping only the highest-confidence one",
            "Filtering out objects below a minimum size",
            "Converting bounding box coordinates to pixel coordinates",
          ],
          answer: 0,
          explanation:
            "YOLO often predicts multiple overlapping boxes for one object. NMS keeps the box with highest confidence and removes overlapping boxes with IoU above a threshold.",
        },
        {
          question:
            "What makes YOLO faster than two-stage detectors like Faster R-CNN?",
          options: [
            "YOLO processes the entire image in one forward pass instead of proposing regions first",
            "YOLO uses a smaller neural network with fewer parameters",
            "YOLO skips bounding box regression and uses fixed-size boxes",
          ],
          answer: 0,
          explanation:
            "Two-stage detectors first propose candidate regions then classify them — two passes. YOLO predicts classes and boxes simultaneously in one pass, enabling real-time speeds.",
        },
      ],
    },
    "project-face-mask-detector": {
      title: "Project: Face Mask Detector",
      overview:
        "This capstone project combines dataset preparation, classification, and evaluation into a deployable demo. Building a real detector — even for a narrow task — teaches you everything about the full CV pipeline: data → model → inference → presentation.",
      funFact:
        "Face mask detection became one of the most-cloned CV projects during 2020-2021 — the datasets, models, and deployment patterns developed then are still the blueprint for practical edge-case CV projects.",
      concepts: [
        {
          term: "dataset prep",
          explain:
            "Collecting, organizing, and splitting images into train/val/test sets with correct directory structure (one folder per class for Keras) — the foundation everything else builds on.",
        },
        {
          term: "classification",
          explain:
            "A binary or multi-class task: mask / no_mask (/ mask_worn_incorrectly). Transfer learning on MobileNetV2 or EfficientNet-B0 typically achieves high accuracy with <500 images per class.",
        },
        {
          term: "evaluation",
          explain:
            "Reporting accuracy, precision, recall per class, and the confusion matrix — especially important here because false negatives (missed mask absence) have real-world safety implications.",
        },
        {
          term: "demo packaging",
          explain:
            "Integrating the trained model with OpenCV to run inference on a webcam or video file, draw bounding boxes, and display results — turning a notebook into a working demo.",
        },
      ],
      trySteps: [
        "Organize a dataset of 50+ images per class into train/val directories.",
        "Load MobileNetV2 and add a custom head for your number of classes.",
        "Train for 10 epochs with EarlyStopping and print the final classification report.",
        "Write an inference function that takes an image path and returns the predicted class and confidence.",
      ],
      quickCheck: [
        {
          question: "What is the most important first step in any CV project?",
          options: [
            "Ensuring the dataset is correctly organized, balanced, and split before modeling",
            "Choosing the most complex architecture available",
            "Training for as many epochs as possible",
          ],
          answer: 0,
          explanation:
            "Garbage in, garbage out — if your dataset has leakage, class imbalance, or wrong labels, no architecture will save the model's real-world performance.",
        },
        {
          question:
            "Why is recall more important than precision for mask detection?",
          options: [
            "A missed unmasked person (false negative) has a higher safety cost than a false alarm",
            "Precision is harder to measure for face detection",
            "Recall is always more important than precision for binary classifiers",
          ],
          answer: 0,
          explanation:
            "In safety-critical applications, the cost of false negatives (missing a hazard) is often much higher than false positives (unnecessary alerts). Optimize for recall in these cases.",
        },
        {
          question:
            "What makes a demo-packaged model different from a notebook?",
          options: [
            "It runs inference on new inputs in real time and presents results visually",
            "It uses a more powerful model architecture",
            "It requires GPU hardware to run",
          ],
          answer: 0,
          explanation:
            "A demo integrates your trained model with an interface (webcam, file input, web app) so non-technical people can see and interact with it — essential for showcasing CV projects.",
        },
      ],
    },
    "text-cleaning-tokenization": {
      title: "Text Cleaning & Tokenization",
      overview:
        "Raw text is messy — it contains HTML, inconsistent casing, punctuation, stop words, and many other artifacts. Cleaning and tokenization turn unstructured text into a form that ML models can process. The quality of this step directly determines the quality of every downstream model.",
      funFact:
        "GPT-4 uses a byte-pair encoding (BPE) tokenizer with ~100,000 tokens. 'unhappiness' might be tokenized as ['un', 'happiness'] — the model never sees raw characters, only learned subword units.",
      concepts: [
        {
          term: "normalization",
          explain:
            "Converting text to a consistent form: lowercasing, removing accents, expanding contractions, replacing special characters. Normalization ensures 'Running', 'running', and 'RUNNING' are treated the same.",
        },
        {
          term: "tokenizers",
          explain:
            "Algorithms that split text into tokens — the units the model processes. Word tokenizers split on spaces; subword tokenizers (BPE, WordPiece) split on learned common substrings, handling unknown words gracefully.",
        },
        {
          term: "stop words",
          explain:
            "Common words (the, a, is, are) that carry little meaning for many tasks. Removing them reduces vocabulary size and noise — but NLP models using context (BERT) often keep them.",
        },
        {
          term: "n-grams",
          explain:
            "Sequences of N consecutive words. Bigrams ('machine learning') and trigrams capture phrase-level meaning that individual words miss — used in traditional NLP and bag-of-words models.",
        },
      ],
      trySteps: [
        "Load 20 raw text samples from any source (tweets, reviews, or news headlines).",
        "Apply normalization: lowercase, remove punctuation, remove extra whitespace.",
        "Tokenize using both split() and a Hugging Face tokenizer — compare the token lists.",
        "Compute vocabulary size before and after removing stop words.",
      ],
      quickCheck: [
        {
          question:
            "Why do transformer models like BERT typically keep stop words?",
          options: [
            "Stop words carry grammatical and semantic context that attention mechanisms leverage",
            "Removing stop words is too slow for large datasets",
            "BERT's vocabulary was built without stop words so they can't be removed",
          ],
          answer: 0,
          explanation:
            "Unlike bag-of-words models, transformers understand context — 'not good' vs 'good' depends on 'not'. Removing 'not' (a stop word) destroys this meaning.",
        },
        {
          question:
            "What advantage do subword tokenizers have over word tokenizers?",
          options: [
            "They handle unknown words by splitting them into known subword pieces",
            "They produce shorter token sequences for the same text",
            "They require less memory than word-level vocabularies",
          ],
          answer: 0,
          explanation:
            "Word tokenizers fail on out-of-vocabulary words (OOV). Subword tokenizers like BPE handle any word by decomposing it into frequent subword units.",
        },
        {
          question: "What is a bigram in NLP?",
          options: [
            "A sequence of two consecutive words treated as a single unit",
            "A pair of sentences with the same meaning",
            "A word that appears in exactly two documents",
          ],
          answer: 0,
          explanation:
            "Bigrams capture phrase-level information — 'New York' is different from 'New' and 'York' separately. N-grams are a simple way to add context to bag-of-words models.",
        },
      ],
    },
    "word-embeddings": {
      title: "Word Embeddings",
      overview:
        "Word embeddings map words to dense numerical vectors where semantic relationships are encoded geometrically. Words with similar meanings cluster together; analogy relationships appear as vector arithmetic. This was the breakthrough that made modern NLP possible.",
      funFact:
        "The famous Word2Vec embedding encodes: king - man + woman ≈ queen. The geometry of the vector space captures gender analogies, country-capital relationships, and even verb tenses — all learned from text statistics alone.",
      concepts: [
        {
          term: "Word2Vec",
          explain:
            "A neural network trained to predict a word from its context (or vice versa) — the learned internal representations become useful word embeddings that capture semantic meaning.",
        },
        {
          term: "GloVe",
          explain:
            "Global Vectors for Word Representation — trained on global word co-occurrence statistics across a large corpus. GloVe embeddings encode meaning by how often words appear near each other.",
        },
        {
          term: "similarity",
          explain:
            "Words with similar meanings have high cosine similarity in embedding space. cos_sim(king, queen) > cos_sim(king, car). You can find nearest neighbors by sorting by cosine similarity.",
        },
        {
          term: "semantic space",
          explain:
            "The high-dimensional space where embeddings live — directions encode meaningful properties. The 'royalty' direction, the 'gender' direction, the 'plural' direction are all geometric relationships.",
        },
      ],
      trySteps: [
        "Download GloVe embeddings (glove.6B.50d.txt) or use Gensim's Word2Vec.",
        "Find the 5 most similar words to 'doctor', 'strong', and 'Paris' using cosine similarity.",
        "Test the analogy: man : king :: woman : ? by computing king - man + woman.",
        "Plot 10 related words in 2D using PCA on their embeddings.",
      ],
      quickCheck: [
        {
          question:
            "What does cosine similarity measure between word embeddings?",
          options: [
            "How similar the words are semantically, based on the angle between their vectors",
            "The Euclidean distance between the two embedding vectors",
            "How often the two words appear together in training data",
          ],
          answer: 0,
          explanation:
            "Cosine similarity ignores vector magnitude and focuses on direction — two words with the same semantic direction score 1.0 regardless of their embedding scale.",
        },
        {
          question: "How does Word2Vec learn meaningful word representations?",
          options: [
            "By training a network to predict a word from its surrounding context words",
            "By manually labeling word similarity scores for a large vocabulary",
            "By counting how often each word appears in the training corpus",
          ],
          answer: 0,
          explanation:
            "Word2Vec uses the distributional hypothesis — words that appear in similar contexts have similar meanings. The network's internal representations capture this.",
        },
        {
          question:
            "Why are word embeddings better than one-hot encoding for NLP models?",
          options: [
            "Embeddings encode semantic similarity; one-hot treats all words as equally different",
            "One-hot vectors take more memory than dense embeddings",
            "Embeddings are always shorter vectors than one-hot representations",
          ],
          answer: 0,
          explanation:
            "One-hot vectors for 50,000 words are 50,000-dimensional and orthogonal — no notion of similarity. Dense 300-d embeddings encode that 'cat' and 'kitten' are close, 'cat' and 'table' are far.",
        },
      ],
    },
    "rnn-lstm-gru": {
      title: "RNN/LSTM/GRU",
      overview:
        "Recurrent networks process sequences by maintaining a hidden state that carries information from step to step. LSTMs and GRUs solve the vanishing gradient problem that makes simple RNNs forget context over long sequences. These architectures still appear in time-series forecasting and some NLP preprocessing pipelines.",
      funFact:
        "LSTMs were invented in 1997 but only became mainstream in the 2010s when GPUs made them practical. They powered Google Translate before Transformers took over in 2017.",
      concepts: [
        {
          term: "sequence modeling",
          explain:
            "Processing inputs in order, with the output at each step depending on all previous inputs. Text, time-series, audio, and DNA sequences are all natural fits for recurrent models.",
        },
        {
          term: "hidden state",
          explain:
            "The RNN's 'memory' — a vector updated at each time step that carries information from the past. At the end of a sequence, the hidden state summarizes everything the model has seen.",
        },
        {
          term: "gates",
          explain:
            "LSTM and GRU's innovation — learnable mechanisms (forget gate, input gate, output gate) that control what to remember, what to discard, and what to output at each step.",
        },
        {
          term: "vanishing gradients",
          explain:
            "In deep or long sequences, gradient signals shrink exponentially as they travel back through time, making early layers train very slowly. LSTM gates mitigate this by providing gradient highways.",
        },
      ],
      trySteps: [
        "Build a simple RNN in Keras for binary sentiment classification on 200 movie review sentences.",
        "Replace the SimpleRNN with an LSTM layer — train both and compare validation accuracy.",
        "Try a GRU layer and record if it converges faster or slower than the LSTM.",
        "Plot training and validation loss for all three models on the same chart.",
      ],
      quickCheck: [
        {
          question: "What problem do LSTM gates solve compared to simple RNNs?",
          options: [
            "They control what information is retained or forgotten, solving the vanishing gradient problem",
            "They make the network train twice as fast",
            "They automatically select the optimal number of hidden units",
          ],
          answer: 0,
          explanation:
            "LSTM gates create pathways for gradients to flow unchanged through many time steps — allowing the network to learn dependencies across hundreds of steps.",
        },
        {
          question: "What is the hidden state in an RNN conceptually?",
          options: [
            "A compact summary of all previous inputs up to the current step",
            "The weights of the recurrent layer",
            "The target output at each time step",
          ],
          answer: 0,
          explanation:
            "The hidden state is the network's memory — it carries a compressed representation of the sequence history that the network can use to make better predictions at each step.",
        },
        {
          question: "For what task type are RNNs naturally suited?",
          options: [
            "Sequential data where order matters and context from previous steps is needed",
            "Fixed-size image classification tasks",
            "Tabular data with independent rows",
          ],
          answer: 0,
          explanation:
            "RNNs process one step at a time while maintaining context — text, time-series, speech, and other ordered sequences fit naturally into this architecture.",
        },
      ],
    },
    "transformers-bert": {
      title: "Transformers & BERT",
      overview:
        "The Transformer architecture replaced RNNs as the dominant NLP model by processing all sequence positions in parallel using attention. BERT fine-tuning lets you get state-of-the-art text understanding on your specific task with a few hundred labeled examples — this is the superpower of modern NLP.",
      funFact:
        "The Transformers library by Hugging Face has over 100 million downloads per month and hosts 400,000+ pretrained models. One line of code gives you BERT, GPT-2, Llama, or any modern architecture ready to use.",
      concepts: [
        {
          term: "attention",
          explain:
            "A mechanism where each token in a sequence can attend to every other token — weighted by learned relevance scores. Self-attention lets the model understand 'bank' differently in 'river bank' vs 'bank account'.",
        },
        {
          term: "token embeddings",
          explain:
            "Transformer input: each token gets a learned embedding plus a positional embedding (encoding its position). BERT also adds a segment embedding for sentence-pair tasks.",
        },
        {
          term: "fine tuning",
          explain:
            "Taking BERT (pretrained on 3.3 billion words of text) and continuing training on your labeled dataset for a few epochs — the pretrained knowledge adapts rapidly to your task.",
        },
        {
          term: "Hugging Face",
          explain:
            "The ecosystem: 'transformers' library for models, 'datasets' for data, 'tokenizers' for tokenization. pipeline() gives you a working model in one line; Trainer handles fine-tuning.",
        },
      ],
      trySteps: [
        "Install transformers: pip install transformers. Run sentiment analysis in one line: pipeline('sentiment-analysis')('I love this app!').",
        "Load a BERT tokenizer and tokenize a sentence — print the token IDs and decode them back.",
        "Load 'bert-base-uncased' and run it on a sentence to get the [CLS] embedding vector.",
        "Fine-tune a DistilBERT model on a small classification dataset using the Trainer API.",
      ],
      quickCheck: [
        {
          question:
            "What makes self-attention better than recurrence for long sequences?",
          options: [
            "Every token directly attends to every other token regardless of distance",
            "Self-attention has fewer parameters than RNN layers",
            "Self-attention processes sequences one token at a time for accuracy",
          ],
          answer: 0,
          explanation:
            "RNNs must pass information step-by-step — a 512-step dependency requires 512 recurrent steps. Attention computes all pairs at once, with no distance penalty.",
        },
        {
          question: "What does the [CLS] token in BERT represent?",
          options: [
            "A learned summary representation of the entire input sequence",
            "The start of a sentence boundary marker",
            "The token with the highest attention weight",
          ],
          answer: 0,
          explanation:
            "The [CLS] (classification) token at position 0 accumulates information from the whole sequence through attention layers — it's typically used as the sequence-level representation for classification tasks.",
        },
        {
          question:
            "Why does fine-tuning BERT work with very few labeled examples?",
          options: [
            "BERT already understands language from pretraining — fine-tuning only adjusts the output head",
            "BERT automatically generates additional training data",
            "Fine-tuning uses the entire original pretraining dataset",
          ],
          answer: 0,
          explanation:
            "BERT's pretrained representations encode rich language understanding — fine-tuning on 1,000 examples adapts this knowledge to a new task, far outperforming models trained from scratch on the same data.",
        },
      ],
    },
    "chatbots-llms": {
      title: "Chatbots & LLMs",
      overview:
        "Large Language Models are the foundation of modern AI assistants. Building with them is engineering, not magic — prompt design, retrieval-augmented generation, evaluation, and guardrails determine whether an LLM-powered feature works reliably in production or embarrasses you publicly.",
      funFact:
        "The term 'hallucination' in LLMs describes the model confidently generating plausible-sounding but wrong information. Retrieval-Augmented Generation (RAG) addresses this by grounding responses in verified documents.",
      concepts: [
        {
          term: "prompting",
          explain:
            "Structuring the text input to an LLM to elicit the desired output. Prompt engineering — few-shot examples, chain-of-thought instructions, role assignments — dramatically affects output quality.",
        },
        {
          term: "retrieval",
          explain:
            "RAG (Retrieval-Augmented Generation) fetches relevant documents from a knowledge base and injects them into the prompt — so the LLM answers based on your specific data, not just training knowledge.",
        },
        {
          term: "evaluation",
          explain:
            "Measuring chatbot quality: relevance, factual accuracy, helpfulness, and safety. Automated scoring (using another LLM as a judge) and human evaluation are both used in production.",
        },
        {
          term: "guardrails",
          explain:
            "Input/output filters that prevent the model from generating harmful, off-topic, or sensitive content. Tools like Guardrails AI, NeMo Guardrails, and custom classifiers enforce these constraints.",
        },
      ],
      trySteps: [
        "Use the OpenAI API or a local model (Ollama) to run a chat completion with a system prompt.",
        "Write 3 different system prompts for a support chatbot and compare outputs qualitatively.",
        "Implement simple retrieval: split a text document into chunks, embed them, and retrieve the top-2 chunks for a user query.",
        "Build a scoring rubric (1-5 on relevance, accuracy, helpfulness) and evaluate 5 chatbot responses.",
      ],
      quickCheck: [
        {
          question: "What is Retrieval-Augmented Generation (RAG) solving?",
          options: [
            "Grounding LLM responses in specific retrieved documents to reduce hallucination",
            "Making LLMs run faster by caching common responses",
            "Training LLMs on new data without retraining from scratch",
          ],
          answer: 0,
          explanation:
            "RAG retrieves relevant context at inference time and injects it into the prompt — the LLM answers based on actual retrieved facts, not just its (potentially outdated or wrong) training knowledge.",
        },
        {
          question: "What is prompt engineering?",
          options: [
            "Designing the text input to an LLM to consistently produce useful, accurate output",
            "Training a small model to generate better prompts automatically",
            "Compressing prompts to reduce API costs",
          ],
          answer: 0,
          explanation:
            "The same LLM can produce dramatically different quality answers depending on how the prompt is structured. Few-shot examples, chain-of-thought, and clear instructions all improve output reliably.",
        },
        {
          question:
            "Why are guardrails important in production LLM applications?",
          options: [
            "LLMs can generate harmful, off-topic, or factually wrong content that requires filtering",
            "Guardrails improve the speed of LLM inference",
            "Guardrails automatically improve the LLM's accuracy over time",
          ],
          answer: 0,
          explanation:
            "Without guardrails, an LLM-powered product can be manipulated (prompt injection), produce harmful content, or confidently state false information — all of which damage user trust and create liability.",
        },
      ],
    },
    "github-portfolio": {
      title: "GitHub Portfolio",
      overview:
        "Your GitHub profile is your professional lab notebook. Recruiters and hiring managers spend minutes scanning repos — a project with a great README, clean structure, and clear results tells your story faster than any resume bullet. This is the most direct way to prove you can build.",
      funFact:
        "A 2023 survey found that 78% of technical hiring managers check GitHub profiles before interviews. A strong portfolio project has been reported to fast-track candidates past initial resume screening.",
      concepts: [
        {
          term: "README writing",
          explain:
            "The README is the front door of your project. It should answer in order: what problem, how you solved it, key results, how to run it. Use screenshots and metrics, not just prose.",
        },
        {
          term: "project structure",
          explain:
            "A clean, navigable directory layout with separate folders for data, notebooks, src, and models. Naming conventions and a .gitignore that excludes large data files and checkpoints.",
        },
        {
          term: "commits",
          explain:
            "Meaningful commit messages tell the story of how you built something. 'Add EDA notebook with 5 insights' is informative; 'update' is not. Commit history is your engineering diary.",
        },
        {
          term: "demo assets",
          explain:
            "Visuals that prove the project works: output screenshots, result tables, GIFs of the model running, or a link to a live Streamlit/Gradio demo. Show, don't tell.",
        },
      ],
      trySteps: [
        "Pick one existing project and open its README (or create one if missing).",
        "Add these sections: Project title + one-sentence description, Problem statement, Approach, Results (with numbers), How to run.",
        "Add 1 screenshot or output visualization directly in the README using Markdown image syntax.",
        "Commit the improved README with message 'Improve README: add results and setup instructions'.",
      ],
      quickCheck: [
        {
          question:
            "What is the single most important section of a portfolio project README?",
          options: [
            "The Results section with concrete metrics — it proves the project worked",
            "The installation instructions for running the code",
            "The list of technologies used",
          ],
          answer: 0,
          explanation:
            "Recruiters spend 60 seconds per repo. Clear results ('95% accuracy on the test set') immediately prove value — everything else is secondary.",
        },
        {
          question: "What makes commit history valuable in a portfolio?",
          options: [
            "It shows your engineering process, not just the final result",
            "More commits always equals a better impression",
            "Commit history is only visible to collaborators",
          ],
          answer: 0,
          explanation:
            "A clear commit history shows how you think and iterate — from initial exploration to cleaned-up solution. This is more informative than the final code alone.",
        },
        {
          question: "Why should large data files not be committed to Git?",
          options: [
            "They bloat the repository, slow clone times, and exceed GitHub file size limits",
            "GitHub doesn't support CSV or image files",
            "Large files make the README harder to render",
          ],
          answer: 0,
          explanation:
            "Git is for code, not data. Use .gitignore to exclude data/, models/, and *.pkl files. Store large files in cloud storage (S3, GDrive) and document how to download them.",
        },
      ],
    },
    "resume-linkedin": {
      title: "Resume & LinkedIn",
      overview:
        "Your resume and LinkedIn profile are your marketing documents — they don't need to list everything you've done, they need to make one compelling case: that you can deliver AI engineering value. Every line should answer 'so what?' with a concrete result.",
      funFact:
        "LinkedIn reports that profiles with a professional headline explicitly mentioning 'AI' or 'Machine Learning' receive 2-3x more recruiter views than generic 'Software Engineer' profiles in the current market.",
      concepts: [
        {
          term: "impact bullets",
          explain:
            "Resume bullets in the format: Action verb + Method + Measurable result. 'Trained a ResNet-50 classifier that reached 94% accuracy on a 5-class dataset' beats 'Did machine learning project'.",
        },
        {
          term: "keywords",
          explain:
            "ATS (Applicant Tracking Systems) scan resumes for skill keywords before a human reads them. Include: Python, PyTorch, TensorFlow, scikit-learn, SQL, data pipelines, model evaluation.",
        },
        {
          term: "headline",
          explain:
            "Your LinkedIn headline is the one line most people read. 'AI Engineer | Computer Vision & NLP | Building models that ship' is specific and searchable. 'Looking for opportunities' is not.",
        },
        {
          term: "featured projects",
          explain:
            "LinkedIn's Featured section pins your best GitHub projects and notebooks to the top of your profile — use it to showcase 2-3 portfolio projects with a visual preview.",
        },
      ],
      trySteps: [
        "List 3 technical tasks you completed during this roadmap.",
        "Rewrite each as an impact bullet: [Action verb] + [Method] + [Result].",
        "Update your LinkedIn headline to include your target role and 2 core skills.",
        "Add 1 project to LinkedIn's Featured section with a link and 2-sentence description.",
      ],
      quickCheck: [
        {
          question:
            "What format makes a resume bullet most impactful for technical roles?",
          options: [
            "Action verb + technical method + quantified result",
            "Description of daily responsibilities in paragraph form",
            "Technology name followed by years of experience",
          ],
          answer: 0,
          explanation:
            "'Built' or 'Trained' or 'Deployed' + what you used + what it achieved — this triple structure gives the reader all they need to assess your contribution in one line.",
        },
        {
          question: "Why do keywords matter on a resume for AI roles?",
          options: [
            "ATS systems filter resumes by keyword matching before a human reads them",
            "Keywords help the resume look more technical to human readers",
            "Keywords are required to format the resume correctly",
          ],
          answer: 0,
          explanation:
            "Most companies use ATS to screen hundreds of applications. A resume without 'PyTorch' or 'scikit-learn' may be filtered out before a recruiter sees it — even if you know those tools.",
        },
        {
          question: "What should go in the LinkedIn Featured section?",
          options: [
            "Your best 2-3 portfolio projects with links and brief descriptions",
            "Your full work history in chronological order",
            "Testimonials from colleagues only",
          ],
          answer: 0,
          explanation:
            "Featured pins your best evidence above the fold — when a recruiter visits your profile, the first thing they see is your strongest project work, not just your job titles.",
        },
      ],
    },
    "interview-prep": {
      title: "Interview Prep",
      overview:
        "AI engineering interviews typically have three components: ML conceptual questions (explain overfitting, bias-variance trade-off), coding challenges (usually data manipulation and algorithm questions), and project storytelling (walk me through your best project). Each rewards different preparation.",
      funFact:
        "Studies of hiring decisions in technical roles consistently find that the project storytelling portion — explaining the problem, choices, and results clearly — has more influence on hire/no-hire than coding scores for senior roles.",
      concepts: [
        {
          term: "ML fundamentals",
          explain:
            "Expect questions on: bias-variance trade-off, overfitting, regularization, train/val/test split, cross-validation, precision vs recall, gradient descent variants. These are tested verbally.",
        },
        {
          term: "coding drills",
          explain:
            "Python coding challenges: array manipulation, string processing, writing a small ML pipeline from scratch. LeetCode easy/medium, HackerRank data science track, and Kaggle competitions all help.",
        },
        {
          term: "project storytelling",
          explain:
            "STAR format: Situation (the problem and dataset), Task (what you built), Action (key decisions and challenges), Result (metrics and what you learned). Practice out loud.",
        },
        {
          term: "behavioral answers",
          explain:
            "'Tell me about a time you failed' style questions. Interviewers assess how you handle ambiguity, collaborate, and learn from mistakes — use specific examples, not abstract principles.",
        },
      ],
      trySteps: [
        "Without notes, explain the bias-variance trade-off in 60 seconds as if to a junior engineer.",
        "Solve one LeetCode easy problem in Python and one data manipulation problem on HackerRank.",
        "Record a 90-second video of yourself walking through your best project using STAR format.",
        "Write answers to: 'What is the hardest ML debugging problem you've faced?' and 'Why AI engineering?'",
      ],
      quickCheck: [
        {
          question: "What is the bias-variance trade-off?",
          options: [
            "High bias = underfitting; high variance = overfitting. Good models balance both.",
            "Bias is the number of parameters; variance is the learning rate.",
            "Bias-variance only applies to classification problems.",
          ],
          answer: 0,
          explanation:
            "Bias is systematic error from wrong assumptions; variance is sensitivity to training data fluctuations. Regularization, ensemble methods, and validation tuning manage this trade-off.",
        },
        {
          question: "What is the STAR format for project storytelling?",
          options: [
            "Situation, Task, Action, Result — a structured way to communicate your project impact",
            "Skills, Technology, Architecture, Results — a resume bullet format",
            "Strategy, Testing, Analysis, Review — a project methodology",
          ],
          answer: 0,
          explanation:
            "STAR gives your story structure: here's the context, here's what I had to do, here's what I actually did, here's what happened. It keeps answers focused and memorable.",
        },
        {
          question:
            "What type of coding questions are most common in AI engineering interviews?",
          options: [
            "Data manipulation, Python fundamentals, and occasionally writing simple ML code from scratch",
            "Building entire production ML systems in 45 minutes",
            "Only theoretical algorithm analysis, no implementation",
          ],
          answer: 0,
          explanation:
            "Expect: Pandas/NumPy operations, writing clean Python functions, and sometimes implementing simple ML from scratch (linear regression, k-means). Practice on HackerRank or Kaggle.",
        },
      ],
    },
    "job-applications": {
      title: "Job Applications",
      overview:
        "Getting hired is a skill, not just a credential. Systematic targeting, customized applications, and disciplined follow-up beat mass-applying to hundreds of roles. Quality over quantity: five well-matched, well-prepared applications outperform fifty generic ones.",
      funFact:
        "The average technical job posting receives 250+ applications. Personalized cover notes that reference a specific team, product, or problem the company faces have been shown to increase callback rates by 40%.",
      concepts: [
        {
          term: "role targeting",
          explain:
            "Finding roles where your specific skills match 70-80% of requirements. 'AI Engineer', 'ML Engineer', 'Data Scientist', and 'Computer Vision Engineer' are distinct roles with different skill priorities.",
        },
        {
          term: "tracking",
          explain:
            "A spreadsheet or Notion table logging: company, role, date applied, status, next step, contacts. Without a system, applications and follow-ups fall through the cracks.",
        },
        {
          term: "cover notes",
          explain:
            "A 3-4 sentence email or cover note that references a specific thing about the company and maps your strongest evidence to their stated need. Not a letter — a targeted pitch.",
        },
        {
          term: "follow-ups",
          explain:
            "Sending a brief follow-up email 5-7 business days after applying (or after an interview) shows genuine interest and keeps you top-of-mind. Most candidates never follow up.",
        },
      ],
      trySteps: [
        "Search LinkedIn, Indeed, and company career pages for 10 AI/ML roles that match at least 70% of your skills.",
        "Create a tracker: company, role, match %, date, status, contact, notes.",
        "Write a custom 3-sentence cover note for your top 2 target roles.",
        "Identify one person at each target company (on LinkedIn) you could send a connection request with a short message.",
      ],
      quickCheck: [
        {
          question:
            "Why is role targeting important rather than mass-applying?",
          options: [
            "A well-targeted application where you meet 70-80% of requirements outperforms 50 mismatched applications",
            "Targeting reduces the total number of applications you need to send",
            "Most companies only accept applications from candidates who already work there",
          ],
          answer: 0,
          explanation:
            "Hiring managers notice when applications are clearly mass-sent. Tailored applications that reference specific team needs show genuine interest and fit — they get forwarded.",
        },
        {
          question:
            "What information should a job application tracker contain?",
          options: [
            "Company, role, date applied, status, next action, and any contacts",
            "Only the companies where you received callbacks",
            "Just the job title and application link",
          ],
          answer: 0,
          explanation:
            "A tracker turns job searching into a system. You can see at a glance which applications need follow-up, which are stale, and which companies have responded — preventing things from falling through.",
        },
        {
          question: "What makes a follow-up email effective after applying?",
          options: [
            "Brevity, genuine enthusiasm for the specific role, and a clear next step request",
            "Restating your entire resume in email form",
            "Sending the follow-up on the same day you applied",
          ],
          answer: 0,
          explanation:
            "A follow-up 5-7 days after applying shows persistence without desperation. Keep it to 3 sentences: reminder of who you are, one specific reason you're excited about this role, and a simple ask for a chat.",
        },
      ],
    },
  },
  topicTemplates: {
    overview: (ctx) =>
      ctx.topicTitle +
      " matters because it turns " +
      ctx.sectionTitle +
      " from theory into usable engineering judgment. Treat this stage as your map: notice where " +
      ctx.firstConcept +
      " shows up, then connect it to the project you will ship later.",
    conceptExplain: (term, ctx) =>
      term +
      " is one handle for understanding " +
      ctx.topicTitle +
      "; explain it in plain words, then point to one place it appears in a real AI workflow.",
    trySteps: (ctx) => [
      "Open a small notebook or scratch file named " + ctx.slug + "-lab.",
      "Write one sentence defining " + ctx.firstConcept + " in your own words.",
      "Create a tiny example that uses " +
        ctx.firstConcept +
        " and " +
        ctx.secondConcept +
        ".",
      "Capture the result, one surprise, and the next question you would investigate.",
    ],
    handsOn: (ctx) => ctx.handsOn,
    projectTitle: (ctx) => ctx.projectTitle,
    projectDescription: (ctx) => ctx.projectDescription,
    funFact: (ctx) =>
      "Small lab, strong signal: one clean example in " +
      ctx.topicTitle +
      " beats ten vague notes.",
    quickCheck: (ctx) => [
      {
        question:
          "Which concept should you be able to explain first in " +
          ctx.topicTitle +
          "?",
        options: [ctx.firstConcept, "Random deployment", "UI polish"],
        answer: 0,
        explanation: ctx.firstConcept + " anchors the rest of this topic.",
      },
      {
        question: "Why do the Try It Yourself stage before the solo task?",
        options: [
          "To get fast feedback while the idea is fresh",
          "To avoid building anything",
          "To replace the project",
        ],
        answer: 0,
        explanation:
          "A tiny lab catches confusion early, before the bigger task costs more energy.",
      },
      {
        question: "What makes the project stage valuable?",
        options: [
          "A visible artifact with notes and evidence",
          "Only reading more links",
          "Skipping evaluation",
        ],
        answer: 0,
        explanation:
          "Career readiness grows when your work leaves proof someone else can inspect.",
      },
    ],
    resourceTitle: (resource, topicTitle) =>
      resource.platform + " resource: " + topicTitle,
    resourceContext: (topicTitle) => topicTitle,
    nextAction: (ctx) => ctx.stageLabel + ": " + ctx.topicTitle,
    bossAction: (ctx) => "Boss Challenge: " + ctx.bossTitle,
  },
};

export default en;
