const ar = {
  appName: "AI Quest",
  appSub: "مسار المهندس",
  navPrimary: "التنقل الرئيسي",
  navDashboard: "لوحة التحكم",
  navMap: "خريطة العوالم",
  navResources: "المصادر",
  navTrophies: "الشارات",
  navSettings: "الإعدادات",
  navCurrentWorld: "العالم الحالي",
  level: "مستوى",
  switchLang: "English",
  switchToArabic: "التبديل إلى العربية",
  switchToEnglish: "التبديل إلى English",
  commandDashboard: "لوحة القيادة",
  dashboardHeadline: "واصل رحلة AI Engineer من أي عالم تريده.",
  dashboardSub: (avatar, level) =>
    avatar +
    " في المستوى " +
    level +
    "، يبني دليلاً عملياً عبر مراحل وتدريبات ومشاريع ومصادر وتحديات Boss.",
  careerScore: "نقاط الجاهزية المهنية",
  currentClass: "رتبتك الحالية",
  levelProgress: "تقدم المستوى",
  totalXP: (xp) => xp + " XP إجمالاً",
  xpToNext: (xp) => xp + " XP للمستوى التالي",
  scoreOutOf100: (label, value) => label + ": " + value + " من 100",
  statToday: "اليوم",
  statLogged: "مسجل",
  statOpen: "مفتوح",
  statTodayDone: "تم تسجيل نشاط اليوم",
  statTodayPending: "إجراء واحد يحافظ على الزخم",
  statBadges: "الشارات",
  badgesHidden: (n) => n + " لم تظهر بعد",
  statPast: "أنا السابق",
  weekVsLast: (curr, prev) =>
    curr + " هذا الأسبوع مقابل " + prev + " الأسبوع الماضي",
  todayQuest: "اقتراح اليوم",
  roadmapCleared: "اكتملت خارطة الطريق",
  questDetail: (title, xp) =>
    title + " هو الاقتراح الودود التالي. أنجزه واحصل على " + xp + " XP.",
  questComplete:
    "أكملت كل الموضوعات المخططة. أعد مراجعات الإتقان للحفاظ على حدة المهارة.",
  goToQuest: "اذهب للاقتراح",
  dailyStreak: "السلسلة اليومية",
  keepFlame: "حافظ على الإيقاع بهدوء.",
  streakSafe: "ممتاز. نشاط اليوم مسجل، والسلسلة في أمان.",
  streakPending:
    "مرحلة صغيرة أو مراجعة مشروع أو زيارة مصدر تكفي لحماية زخم اليوم.",
  paceForecast: "توقع الوتيرة",
  forecastWarmup:
    "سجل بضع مراحل إضافية للحصول على توقع موثوق لمسار AI Engineer.",
  forecastReady: (date) =>
    "بهذه الوتيرة، تصل إلى مستوى AI Engineer تقريباً في " + date + ".",
  exportCard: "تصدير بطاقة التقدم",
  worldMapLabel: "خريطة العوالم",
  eightRealms: "ثمانية عوالم مفتوحة",
  worldMapTitle: "خريطة العوالم",
  worldMapHeadline: "Skill tree مفتوحة لمسار AI Engineer.",
  worldMapSub:
    "كل عالم وكل موضوع متاح من اليوم الأول. اختر الطريق الذي يطابق فضولك.",
  openWorldTitle: (world) => "افتح " + world,
  openWorldHint: "عالم مفتوح - استكشف في أي وقت",
  notStarted: "لم يبدأ",
  inProgress: "قيد التقدم",
  completed: "مكتمل",
  topicNode: (n) => "عقدة الموضوع " + n,
  topicProgress: (done, total) => done + "/" + total + " مراحل",
  stageExperience: "تجربة موضوع من 7 مراحل",
  topicComplete: "اكتمل الموضوع",
  topicCompleteToast: (topic) => "اكتمل " + topic,
  stageCompleteToast: (stage, topic) =>
    "اكتملت مرحلة " + stage + " في " + topic,
  markStageDone: "تحديد المرحلة كمكتملة",
  stageDone: "المرحلة مكتملة",
  allStagesDone: "كل المراحل مكتملة",
  jumpToStage: (stage) => "انتقل إلى " + stage,
  stageOf: (current, total) => "مرحلة " + current + " من " + total,
  nextStage: "التالي",
  prevStage: "رجوع",
  submitQuickCheck: "إرسال الإجابات",
  quickCheckScore: (score, total) =>
    score + " / " + total + " إجابة صحيحة — أداء رائع!",
  funFactLabel: "حقيقة مثيرة:",
  defaultFunFact: (topic) =>
    "مثال عملي نظيف في " + topic + " يتفوق على عشر صفحات من الملاحظات.",
  tryLabLabel:
    "افتح المحرر الخاص بك لهذه الخطوة — يستغرق الأمر أقل من 10 دقائق.",
  conceptBreakdownIntro:
    "أفكار بلغة بسيطة لتبقى في الذاكرة العملية قبل البناء.",
  tryItIntro: "تجربة صغيرة قبل المهمة الفردية. اجعلها قصيرة وواضحة وسريعة.",
  handsOnTask: "مهمة تطبيقية",
  handsOnIntro: "طبّق الفكرة وحدك وحوّلها إلى دليل مرئي.",
  markDone: "تحديد كمكتمل",
  capstoneProject: "Capstone Project",
  miniProject: "Mini Project",
  projectIntro:
    "اشحن شيئاً حقيقياً يصلح أن تراه لاحقاً أو تعرضه على Mentor أو Recruiter.",
  shipProject: "إنهاء المشروع",
  shipped: "تم الشحن",
  curatedResources: "مصادر منتقاة",
  adaptiveStack: "حزمة مصادر مرنة",
  resourcesIntro:
    "استخدم التبويبات الأربعة كقائمة مركزة: المجاني أولاً، والمدفوع فقط عندما يضيف قيمة واضحة.",
  resourceStageDone: "راجعت مصادر مفيدة",
  quickCheckIntro:
    "جولة سريعة للتأكد أن الفكرة وصلت. الإجابة الخاطئة تشرح التصحيح.",
  answerCorrect: "صحيح. إشارة واضحة.",
  answerWrong: "ليست تماماً. هذا هو التصحيح المفيد:",
  quickCheckNeedAnswers: "أجب عن كل أسئلة Quick Check أولاً",
  replayMode: "وضع الإعادة",
  masteryReview: "مراجعة الإتقان",
  masteryDetail:
    "بعد إنهاء عالم، نفذ مراجعة قصيرة للمفاهيم الأساسية واجمع مكافأة XP صغيرة للتثبيت.",
  runReview: (xp) => "تشغيل المراجعة (+" + xp + " XP)",
  replayCleared: "تمت المراجعة",
  bossChallenge: "تحدي Boss",
  bossOpenDetail:
    "تحدي بحجم العالم يمكنك خوضه عندما تريد دليلاً أقوى في المحفظة.",
  clearBoss: "إنهاء Boss",
  bossCleared: "تم إنهاء Boss",
  worldCleared: "اكتمل العالم",
  careerReadyFinale: "النهاية المهنية",
  topicsLabel: (done, total) => done + "/" + total + " موضوع",
  capstoneTopicLabel: "موضوع Capstone",
  miniProjectTopicLabel: "موضوع Mini Project",
  resourceHub: "مركز المصادر",
  searchLibrary: "ابحث في مكتبة التعلم الكاملة.",
  searchPlaceholder: "ابحث عن موضوع أو منصة أو مصدر",
  allLanguages: "كل اللغات",
  arabic: "العربية",
  english: "English",
  allCosts: "كل التكاليف",
  free: "مجاني",
  paid: "مدفوع",
  freeArabic: "مجاني - عربي",
  freeEnglish: "مجاني - English",
  paidArabic: "مدفوع - عربي",
  paidEnglish: "مدفوع - English",
  showMore: "عرض المزيد",
  showLess: "عرض أقل",
  noResources: "لا توجد مصادر في هذه المجموعة بعد.",
  backToWorldMap: "العودة إلى خريطة العوالم",
  allWorlds: "كل العوالم",
  languageFilter: "اللغة",
  costFilter: "التكلفة",
  worldFilter: "العالم",
  resourceResults: (count) => count + " مصدر",
  noResourceMatches: "لا توجد مصادر مطابقة",
  tryDifferentFilters: "جرّب كلمة بحث أو لغة أو تكلفة أو عالم مختلف.",
  dismissSuggestion: "تخطي",
  questSuggestionDismissed: "تم تخطي الاقتراح. كل العوالم ستبقى مفتوحة.",
  questDismissedDetail:
    "الاقتراح الذكي مخفي الآن؛ انتقل إلى خريطة العوالم عندما تريد مساراً مختلفاً.",
  browseWorldMap: "تصفح الخريطة",
  open: "فتح",
  tried: "جرّبته",
  loved: "أعجبني",
  notForMe: "لا يناسبني",
  trophyRoom: "غرفة الشارات",
  trophyHeadline: "شارات تحدد إنجازات حقيقية.",
  earnedBadge: "مكتسبة",
  notEarnedYet: "غير مكتسبة بعد",
  lockedBadge: "???",
  badgeHintLocked: (hint) => hint,
  badgeUnlocked: "تم فتح الشارة",
  settingsTitle: "الإعدادات",
  settingsHeadline: "اضبط الرحلة حسب أسلوب دراستك.",
  soundCues: "إشارات صوتية",
  soundDetail: "نغمات صغيرة عند الإكمال والترقي وظهور الشارات.",
  motionEffects: "تأثيرات الحركة",
  motionDetail: "الرسوم المتحركة تحترم إعدادات تقليل الحركة في النظام.",
  streakReminders: "تذكيرات السلسلة",
  remindersDetail: "تفضيل للتذكيرات عند إضافة تكاملات إشعارات لاحقاً.",
  darkTheme: "المظهر الداكن",
  darkThemeDetail: "مظهر لوحة ألعاب داكن ومميز.",
  localData: "البيانات المحلية",
  resetProgress: "إعادة تعيين التقدم",
  resetDetail: "يمسح هذا تقدم localStorage لهذا التطبيق على هذا الجهاز.",
  reset: "إعادة تعيين",
  loading: "جار التحميل",
  welcome: "مرحباً بك في المسار",
  slide1Title: "حوّل خارطة طريق AI Engineer إلى رحلة يومية.",
  slide1Detail: "منهج جاد ملفوف بـ XP وعوالم وتحديات Boss وجاهزية مهنية مرئية.",
  mapBeforeChecklist: "عالم مفتوح قبل القائمة",
  slide2Title: "ثمانية عوالم. 39 موضوعاً. اذهب حيث يقودك الفضول.",
  slide2Detail:
    "استكشف كل عالم فوراً. التطبيق يقترح خطوة ودودة، لكنه لا يغلق أي طريق.",
  proofOfProgress: "دليل التقدم",
  slide3Title: "أكمل المراحل، اشحن المشاريع، وابنِ مسار محفظة واضحاً.",
  slide3Detail:
    "كل موضوع يحتوي الآن على 7 مراحل: نظرة عامة، مفاهيم، تجربة، مهمة، مشروع، مصادر، وتحقق سريع.",
  continue: "متابعة",
  chooseStarting: "اختر مسارك الابتدائي",
  pickTitle: "اختر لقباً للرحلة.",
  startQuest: "ابدأ الرحلة",
  avatarSignalRunner: "Signal Runner",
  avatarSignalRunnerDetail: "سريع، منتظم، وفضولي.",
  avatarModelSmith: "Model Smith",
  avatarModelSmithDetail: "يبني الأنظمة بعناية.",
  avatarQuestArchitect: "Quest Architect",
  avatarQuestArchitectDetail: "يحوّل الخطط إلى أدلة مشحونة.",
  bossChallengeUnlocked: (boss) => "تحدي Boss جاهز: " + boss,
  nextReveal: (world) => "العالم التالي للتجربة: " + world,
  weeklyPaceComparison: "مقارنة وتيرة الأسبوع",
  quickCheckOptionLabel: (n) => "الخيار " + n,
  completeWorldTopics: "أكمل جميع الموضوعات لفتح الـ Boss.",
  locked: "مغلق",
  topicLocked: "الموضوع مغلق",
  topicLockedDetail: "أكمل الموضوع السابق لفتح هذا الموضوع.",
  worldLockedDetail: "أكمل العوالم السابقة للفتح.",
  classTitles: {
    "Code Novice": "Code Novice",
    "Data Apprentice": "Data Apprentice",
    "ML Practitioner": "ML Practitioner",
    "Deep Learning Adept": "Deep Learning Adept",
    "Vision & Language Specialist": "Vision & Language Specialist",
    "AI Engineer": "AI Engineer",
  },
  stageLabels: {
    overview: "نظرة عامة",
    concepts: "تفكيك المفاهيم",
    try: "جرّب بنفسك",
    handsOn: "مهمة تطبيقية",
    project: "Mini Project / Capstone",
    resources: "المصادر",
    quickCheck: "تحقق سريع",
  },
  sections: {
    "math-stats": {
      title: "أساسيات Math & Statistics",
      shortTitle: "Math",
      week: "الأسبوع 0",
      motif: "شبكة هندسية",
      openHint:
        "مفتوح من اليوم الأول. ابنِ اللغة الأساسية التي تفهم بها النماذج.",
      boss: {
        title: "بوابة Gradient",
        description:
          "استخدم Dataset صغيرة لاشتقاق Loss وحساب Gradients وشرح خطوة تعلم واحدة.",
        rewards: ["شارة Math World", "Boss XP", "جاهزية أقوى لـ ML"],
      },
    },
    "python-fundamentals": {
      title: "أساسيات Python",
      shortTitle: "Python",
      week: "الأسبوعان 1-2",
      motif: "طرفية Code",
      openHint: "مفتوح من اليوم الأول. استخدم Python كلما احتجت قوة تطبيقية.",
      boss: {
        title: "Forge الخاص بـ Python",
        description:
          "ابنِ CLI لتتبع التعلم يقرأ ملفات ويستخدم Classes ويحفظ التقدم محلياً.",
        rewards: ["شارة Python World", "Boss XP", "قوة Scripting موثوقة"],
      },
    },
    "data-libraries": {
      title: "مكتبات Data",
      shortTitle: "Data",
      week: "الأسبوعان 3-4",
      motif: "تدفقات Data",
      openHint:
        "مفتوح من اليوم الأول. حوّل البيانات الفوضوية إلى مادة عمل نظيفة.",
      boss: {
        title: "خزنة Dataset",
        description:
          "نظف CSV غير مألوف، استخرج 3 Insights، واعرض قصة Data صغيرة بالرسوم.",
        rewards: ["شارة Data World", "Boss XP", "حكم EDA أدق"],
      },
    },
    "machine-learning": {
      title: "Machine Learning",
      shortTitle: "ML",
      week: "الأسابيع 5-7",
      motif: "شبكة Model",
      openHint:
        "مفتوح من اليوم الأول. درّب وقارن واشرح النماذج متى جذبك الفضول.",
      boss: {
        title: "ساحة Model",
        description: "درّب وقارن واضبط واشرح عدة ML Models لمشكلة توقع عملية.",
        rewards: ["شارة ML World", "Boss XP", "تقرير Model جاهز للمحفظة"],
      },
    },
    "deep-learning": {
      title: "Deep Learning",
      shortTitle: "Deep",
      week: "الأسبوعان 8-9",
      motif: "توهج Neural",
      openHint:
        "مفتوح من اليوم الأول. استكشف Networks وTensors والتجارب بحرية.",
      boss: {
        title: "اختبار Overfit",
        description:
          "حسّن Neural Net تعاني من Overfitting باستخدام Regularization وCallbacks وTuning.",
        rewards: ["شارة Deep Learning", "Boss XP", "انضباط التجارب"],
      },
    },
    "computer-vision": {
      title: "Computer Vision",
      shortTitle: "Vision",
      week: "الأسبوعان 10-11",
      motif: "فتحة Lens",
      openHint:
        "مفتوح من اليوم الأول. اعمل مع الصور والPipelines والعروض في أي وقت.",
      boss: {
        title: "اختبار Vision",
        description:
          "ابنِ Image Pipeline يعالج الصور ويدرّب أو يضبط Model ثم يعرض النتائج.",
        rewards: ["شارة Vision World", "Boss XP", "مشروع CV جاهز للعرض"],
      },
    },
    "natural-language-processing": {
      title: "Natural Language Processing",
      shortTitle: "NLP",
      week: "الأسبوع 11",
      motif: "نص متدفق",
      openHint:
        "مفتوح من اليوم الأول. ادخل إلى Text وEmbeddings وLLM workflows متى أردت.",
      boss: {
        title: "متاهة Language",
        description:
          "ابنِ Text Pipeline ينظف البيانات ويستخدم Embeddings أو Transformers ويقيّم الردود.",
        rewards: ["شارة NLP World", "Boss XP", "ثقة في LLM workflows"],
      },
    },
    "career-preparation": {
      title: "التحضير المهني",
      shortTitle: "Career",
      week: "الأسبوع 12",
      motif: "إطلاق Portfolio",
      openHint:
        "مفتوح من اليوم الأول. جهّز الدليل العملي واستعد للتقديم الحقيقي بأي وتيرة.",
      boss: {
        title: "بوابة التوظيف",
        description:
          "جهّز مشروع Portfolio واحد، حسّن Resume، وابنِ خطة تقديم مناسبة لدور محدد.",
        rewards: ["شارة Career Launch", "Boss XP", "طقس جاهزية AI Engineer"],
      },
    },
  },
  badges: {
    "first-task": { title: "الشرارة الأولى", hint: "أكمل أول مهمة تطبيقية." },
    "first-project": { title: "مشروع مشحون", hint: "أكمل أول مشروع." },
    "level-5": { title: "زخم", hint: "صل إلى المستوى 5." },
    "seven-day-streak": {
      title: "لهب 7 أيام",
      hint: "حافظ على سلسلة نشاط لمدة 7 أيام.",
    },
    "thirty-day-streak": {
      title: "انضباط شهري",
      hint: "حافظ على سلسلة نشاط لمدة 30 يوماً.",
    },
    "resource-scout": {
      title: "مستكشف المصادر",
      hint: "افتح أو علّم 10 مصادر.",
    },
    "math-master": { title: "بوابة Math مكتملة", hint: "أنه كل موضوعات Math." },
    "python-master": {
      title: "Forge الخاص بـ Python مكتمل",
      hint: "أنه كل موضوعات Python.",
    },
    "data-master": {
      title: "خزنة Dataset مكتملة",
      hint: "أنه كل موضوعات Data.",
    },
    "ml-master": {
      title: "ساحة Model مكتملة",
      hint: "أنه كل موضوعات Machine Learning.",
    },
    "deep-master": {
      title: "Deep Learning مكتمل",
      hint: "أنه كل موضوعات Deep Learning.",
    },
    "vision-master": {
      title: "اختبار Vision مكتمل",
      hint: "أنه كل موضوعات Computer Vision.",
    },
    "nlp-master": {
      title: "متاهة Language مكتملة",
      hint: "أنه كل موضوعات NLP.",
    },
    "career-master": {
      title: "بوابة التوظيف مكتملة",
      hint: "أنه كل موضوعات Career.",
    },
    "all-bosses": { title: "كاسر العوالم", hint: "أنه كل تحديات Boss." },
    "ai-engineer": {
      title: "AI Engineer",
      hint: "أكمل كل موضوعات خارطة الطريق.",
    },
  },
  topics: {
    "linear-algebra-essentials": {
      title: "أساسيات Linear Algebra",
      overview:
        "الجبر الخطي هو اللغة الداخلية لكل نموذج AI. المتجهات والمصفوفات هي كيف تقوم الشبكات العصبية بتخزين العالم وتحويله. عندما تفهم أبعاد المصفوفات والـ dot products سيصبح كل شيء منطقياً.",
      funFact:
        "المرور الأمامي في الشبكات العصبية هو مجرد عمليات ضرب مصفوفات. أتقنها، وستفهم المحرك بالكامل.",
      concepts: [
        {
          term: "vectors",
          explain: "قائمة أرقام تحدد موقعاً أو اتجاهاً في الفضاء.",
        },
        {
          term: "matrices",
          explain: "شبكة 2D من الأرقام تغلف عملية تحويل كاملة في كائن واحد.",
        },
        {
          term: "dot products",
          explain:
            "يحدد مدى التوافق بين متجهين. يستخدم في حساب attention scores في Transformers.",
        },
        {
          term: "eigen intuition",
          explain:
            "المتجه الذاتي لا يدور، بل يتمدد فقط. يستخدم في PCA لتحديد الأبعاد الأهم.",
        },
      ],
      trySteps: [
        "افتح Notebook باسم la-lab.",
        "أنشئ NumPy arrays: a = [1, 2, 3] و b = [4, 0, -1] واحسب dot product.",
        "ابنِ مصفوفة 2×3 واضربها بمتجه 3×1 واطبع النتيجة.",
        "اكتب بتعليق: ماذا يقيس الـ dot product؟",
      ],
      quickCheck: [
        {
          question: "ما الذي يقيسه الـ dot product بين متجهين؟",
          options: [
            "مدى توجيه المتجهين في نفس الاتجاه",
            "الطول الإجمالي",
            "عدد الأبعاد",
          ],
          answer: 0,
          explanation: "إذا كان كبيراً وموجباً، فإنهما يشيران بشكل مشابه.",
        },
        {
          question: "ما هو الاستخدام الأساسي للمصفوفة في الـ AI؟",
          options: [
            "تمثيل وتطبيق التحويلات على البيانات",
            "حساب عدد عينات التدريب",
            "اختيار learning rate",
          ],
          answer: 0,
          explanation: "تشفر المصفوفات التحويلات في الشبكات العصبية.",
        },
        {
          question: "لماذا نستخدم المتجهات الذاتية؟",
          options: [
            "لتكشف عن اتجاهات التباين الأكبر في البيانات",
            "لتسريع التدريب",
            "بديل للبيانات",
          ],
          answer: 0,
          explanation: "تلتقط أكبر قدر من المعلومات في مجموعة البيانات.",
        },
      ],
    },
    "probability-foundations": {
      title: "أساسيات Probability",
      overview:
        "كل ML model هو آلة احتمالات — لا يعود بحقائق، بل يعود باعتقادات مع مستويات ثقة. فهم المتغيرات العشوائية، قاعدة بايز، والتوزيعات يتيح لك فهم مخرجات النموذج.",
      funFact:
        "فلاتر Naive Bayes وLLMs الكبيرة يتشاركان نفس البنية البايزية. الاحتمالات هي لغة العقل في الذكاء الاصطناعي.",
      concepts: [
        {
          term: "random variables",
          explain:
            "متغير تتحدد قيمته بعملية عشوائية. التنبؤات والـ features تعتبر متغيرات عشوائية.",
        },
        {
          term: "Bayes rule",
          explain:
            "صيغة لتحديث اعتقادك بناءً على أدلة جديدة. هذه هي الطريقة التي 'يتعلم' بها النموذج.",
        },
        {
          term: "distributions",
          explain: "وصف رياضي لمدى احتمالية كل قيمة ممكنة.",
        },
        {
          term: "expected value",
          explain:
            "النتيجة المتوسطة المرجحة بالاحتمال. دوال التكلفة تقلل من الـ expected value للأخطاء.",
        },
      ],
      trySteps: [
        "افتح Notebook باسم probability-lab.",
        "قم بمحاكاة 10,000 رمية عملة باستخدام NumPy.",
        "ارسم Histogram لـ 5,000 سحب من توزيع طبيعي.",
        "اكتب قاعدة بايز واستخدمها في مثال واقعي مثل فحص طبي.",
      ],
      quickCheck: [
        {
          question: "ما الذي تتيحه قاعدة بايز؟",
          options: [
            "تحديث اعتقاد بناءً على أدلة جديدة",
            "الحصول على الاحتمالية الدقيقة",
            "إزالة الشك",
          ],
          answer: 0,
          explanation: "بايز تحدد كيف تتغير الاحتمالات عند ظهور أدلة.",
        },
        {
          question: "لماذا تهم الـ expected value؟",
          options: [
            "دوال الخسارة (Loss) تقلل متوسط الخطأ عبر جميع العينات",
            "تسرّع التدريب",
            "تحدد عدد الطبقات",
          ],
          answer: 0,
          explanation: "تقليل الخطأ المتوقع يجعل التنبؤات أدق بالمتوسط.",
        },
        {
          question: "ماذا يخبرك التوزيع الاحتمالي؟",
          options: [
            "ما مدى احتمالية كل نتيجة",
            "ترتيب التدريب",
            "القيمة الدقيقة للبيانات",
          ],
          answer: 0,
          explanation: "يعطيك الصورة الكاملة للاحتمال.",
        },
      ],
    },
    "descriptive-inferential-statistics": {
      title: "الإحصاء الوصفي والاستدلالي",
      overview:
        "الإحصاء الوصفي يمنحك صورة للبيانات، والاستدلالي يسمح لك باتخاذ قرارات بثقة للمجتمع كله من العينة. معاً يخبرانك ما إذا كان تحسن النموذج حقيقياً أم مجرد صدفة.",
      funFact:
        "اختبارات A/B في جوجل ونتفليكس تعتمد على نفس اختبار الفرضيات الذي تتعلمه هنا.",
      concepts: [
        {
          term: "mean and variance",
          explain: "المركز وانتشار القيم. التباين الكبير يتطلب Scaling.",
        },
        {
          term: "confidence intervals",
          explain: "نطاق يحتوي عادة على القيمة الحقيقية بنسبة ثقة معينة.",
        },
        {
          term: "hypothesis tests",
          explain: "طريقة علمية لرفض أو قبول فرضية مبنية على قيمة p-value.",
        },
        {
          term: "sampling",
          explain:
            "أخذ عينة من مجتمع كبير. العينة المتحيزة تصنع نموذجاً متحيزاً.",
        },
      ],
      trySteps: [
        "حمل أي ملف CSV صغير باستخدام Pandas.",
        "احسب mean و variance لعمودين.",
        "ابن 95% confidence interval لأحد الأعمدة.",
        "استخدم t-test لاختبار فرضية بسيطة.",
      ],
      quickCheck: [
        {
          question: "ماذا يعني نطاق ثقة 95%؟",
          options: [
            "95% من العينات المكررة ستنتج نطاقاً يحتوي القيمة الحقيقية",
            "يوجد احتمال 95%",
            "النموذج دقته 95%",
          ],
          answer: 0,
          explanation: "هذه خاصية للإجراء نفسه.",
        },
        {
          question: "ماذا يقيس التباين (Variance)؟",
          options: [
            "متوسط المسافة المربعة للقيم عن المتوسط",
            "أكثر قيمة تكراراً",
            "الحد الأقصى والحد الأدنى",
          ],
          answer: 0,
          explanation: "التباين الكبير يعني أن البيانات مبعثرة بشدة.",
        },
        {
          question: "لماذا يدمر الـ Biased Sampling النماذج؟",
          options: [
            "النموذج سيتعلم نمطاً لا ينطبق على الواقع",
            "يبطئ التدريب",
            "يقلل المعلمات",
          ],
          answer: 0,
          explanation: "سيعطي النموذج نتائج خاطئة منهجياً في الواقع.",
        },
      ],
    },
    "calculus-for-machine-learning": {
      title: "Calculus لـ Machine Learning",
      overview:
        "التفاضل والتكامل يخبر النموذج بأي اتجاه عليه التحسن. المشتقة (derivative) تخبر الـ optimizer بالاتجاه نحو الأسفل. لا تحتاج لخبرة معقدة، فقط فهم 'الاتجاه نحو الانحدار'.",
      funFact:
        "خوارزمية Backpropagation بالكامل هي مجرد تطبيق متكرر لقاعدة السلسلة (Chain Rule).",
      concepts: [
        {
          term: "limits",
          explain: "أساس التفاضل والتكامل، القيمة التي تقترب منها الدالة.",
        },
        {
          term: "derivatives",
          explain: "معدل التغير اللحظي. تخبرك كيف يؤثر الوزن على الخطأ.",
        },
        {
          term: "gradients",
          explain:
            "متجه يشير لأكبر زيادة، والـ Gradient Descent يتحرك عكسه لتقليل الخطأ.",
        },
        {
          term: "chain rule",
          explain:
            "طريقة لاشتقاق الدوال المركبة، وهي سر عمل Backprop عبر طبقات الشبكة.",
        },
      ],
      trySteps: [
        "اكتب دالة بـ Python f(x) = x^3 - 4x + 1 وارسمها.",
        "احسب المشتقة وتحقق منها عددياً.",
        "احسب Gradient لدالة من متغيرين g(x, y) = x^2 + y^2.",
        "اكتب تعليقاً يوضح اتجاه Gradient Descent.",
      ],
      quickCheck: [
        {
          question: "ماذا يمثل الـ Gradient لدالة الـ Loss؟",
          options: [
            "اتجاه الزيادة الكبرى، والنموذج يتحرك عكسه",
            "دقة النموذج الحالية",
            "عدد الخطوات",
          ],
          answer: 0,
          explanation: "نتحرك عكس الاتجاه لتقليل التكلفة.",
        },
        {
          question: "لماذا نستخدم Chain Rule في الشبكات العصبية؟",
          options: [
            "لأنها تتيح حساب أثر الأوزان عبر الطبقات المختلفة",
            "تسرع التدريب",
            "تحدد التعلم تلقائياً",
          ],
          answer: 0,
          explanation: "بدونها لا يمكنك تمرير الخطأ للخلف عبر طبقات مركبة.",
        },
        {
          question: "ماذا تقيس المشتقة عند نقطة معينة؟",
          options: ["معدل التغير اللحظي للدالة", "المتوسط", "الانحناء"],
          answer: 0,
          explanation: "الميل اللحظي يوضح أثر دفعة صغيرة في المدخلات.",
        },
      ],
    },
    "linear-algebra-calculus-neural-networks": {
      title: "Linear Algebra و Calculus لـ Neural Networks",
      overview:
        "هذا الموضوع يدمج عالم الرياضيات بالشبكات العصبية. يصف تفاضل المصفوفات كيف تتدفق الأخطاء، بينما تقدم وظائف التنشيط اللاخطية، ويساعدك سطح الفقد (loss surface) على تشخيص مشاكل التدريب.",
      funFact:
        "تصوير أسطح الـ Loss يوضح لماذا يسهل تدريب الشبكات العميقة التي تحتوي على Skip Connections.",
      concepts: [
        {
          term: "matrix calculus",
          explain:
            "مشتقات المصفوفات التي تعد أساس الـ backprop. تقوم Jacobian بتجميع المشتقات الجزئية.",
        },
        {
          term: "activation functions",
          explain:
            "دوال لاخطية (مثل ReLU, sigmoid) تجعل الشبكة قادرة على تعلم الأنماط المعقدة.",
        },
        {
          term: "loss surfaces",
          explain:
            "المناظر الطبيعية متعددة الأبعاد للخطأ، الهدف هو إيجاد أقل وادٍ فيها.",
        },
        {
          term: "backprop intuition",
          explain:
            "تتدفق الأخطاء للخلف ليتم تحديث الأوزان عبر إشارات تخبرها بأي اتجاه تتحرك.",
        },
      ],
      trySteps: [
        "ارسم شبكة بمدخلين وعصبونين مخفيين ومخرج واحد.",
        "تتبع عملية تمرير أمامية بأوزان وهمية وحساب ReLU.",
        "احسب الخطأ واكتب خطوات Chain Rule.",
        "اشرح كيف تخاطب هذه العملية كل طبقة.",
      ],
      quickCheck: [
        {
          question: "لماذا دوال التنشيط ضرورية للشبكات العميقة؟",
          options: [
            "تضيف اللاخطية لتعلم الأنماط المعقدة",
            "تسرع العمليات الحسابية",
            "تقلل المعلمات",
          ],
          answer: 0,
          explanation:
            "بدون دوال تنشيط، ستنهار الشبكة العميقة لتصبح مجرد دالة خطية واحدة.",
        },
        {
          question: "ما دور مصفوفة Jacobian؟",
          options: [
            "تجميع المشتقات الجزئية للدوال ذات المتجهات",
            "بدء التدريب",
            "ضبط حجم الحزمة",
          ],
          answer: 0,
          explanation: "حجر الأساس لحساب المشتقات عبر طبقات متعددة المدخلات.",
        },
        {
          question: "في الـ Backprop، كيف تسير إشارة الخطأ؟",
          options: [
            "من طبقة الإخراج رجوعاً لطبقة الإدخال",
            "من الإدخال للإخراج",
            "في نفس الوقت",
          ],
          answer: 0,
          explanation: "لتحديث كل وزن بناءً على مساهمته في الخطأ النهائي.",
        },
      ],
    },
    "variables-data-types": {
      title: "Variables و Data Types",
      overview:
        "المتغيرات هي كيفية حفظ البرامج للمعلومات، ونوع البيانات يحدد العمليات. اختيار البنية المناسبة في Python يصنع فارقاً بين حل نظيف وحل فوضوي، خاصة في Data Science.",
      funFact:
        "الطباعة الديناميكية في Python تتيح بناء نماذج سريعة، ولكن فهم الـ Data Types يجعلك تكتب كوداً أسرع وأكثر أماناً.",
      concepts: [
        {
          term: "numbers",
          explain:
            "الـ Floats مهمة لحسابات Gradients، والـ Integers للـ indexing و counting.",
        },
        {
          term: "strings",
          explain: "النصوص مهمة لتنظيف الـ NLP وبناء الـ pipelines.",
        },
        {
          term: "lists",
          explain:
            "قوائم مرتبة وقابلة للتعديل. تستخدم باستمرار للاحتفاظ بالـ batches.",
        },
        {
          term: "dictionaries",
          explain: "خرائط Key-Value ممتازة لإعدادات النماذج وتخزين القياسات.",
        },
      ],
      trySteps: [
        "قم بإنشاء Dictionary يمثل ملف مستخدم (الاسم، العمر، المواضيع).",
        "أضف مهارة جديدة وقم بزيادة العمر.",
        "استخدم حلقة (loop) لطباعة القيم.",
        "افحص أنواع القيم باستخدام ()type.",
      ],
      quickCheck: [
        {
          question: "متى تفضل استخدام Dictionary على List؟",
          options: [
            "عند الحاجة للوصول إلى القيم عبر أسماء ومفاتيح واضحة",
            "للحفظ بترتيب",
            "لحفظ الأرقام فقط",
          ],
          answer: 0,
          explanation:
            "الـ Dictionaries تقدم وصولاً سريعاً (O(1)) بناءً على المفاتيح.",
        },
        {
          question: "ما الفرق بين Integer و Float؟",
          options: [
            "Integers أرقام صحيحة، Floats تدعم الكسور",
            "Integers موجبة دائماً",
            "Floats أسرع",
          ],
          answer: 0,
          explanation: "الدقة الكسرية حاسمة في حسابات الذكاء الاصطناعي.",
        },
        {
          question: "لماذا الـ Lists تعتبر 'Mutable'؟",
          options: [
            "لأنه يمكن تعديل محتواها بعد إنشائها",
            "لأنها تقبل نوعاً واحداً",
            "لأنها أسرع من Tuples",
          ],
          answer: 0,
          explanation:
            "تستطيع إضافة أو حذف العناصر منها، وهو ما يجعلها ديناميكية.",
        },
      ],
    },
    "control-flow": {
      title: "Control Flow",
      overview:
        "تدفق التحكم يقرر ما يفعله البرنامج. كل Training Loop أو Evaluation Script ستبنيه سيعتمد على If/Else والـ Loops. أتقنها لكي تتمكن من برمجة أي خوارزمية.",
      funFact:
        "الـ Training Loop لأي شبكة عصبية هو مجرد for loop يمر عبر الحزم ويتكرر حتى يصل للتقارب (convergence).",
      concepts: [
        {
          term: "if statements",
          explain:
            "الشروط، تنفذ فقط إذا كانت صحيحة — مهمة للـ Validation و Early Stopping.",
        },
        {
          term: "loops",
          explain: "التكرار (for, while). كل Epoch في التدريب عبارة عن Loop.",
        },
        {
          term: "truthiness",
          explain:
            "Python تقيم كائنات معينة بأنها False (مثل 0 والقوائم الفارغة و None). تجنبك هذه المعرفة أخطاء خفية.",
        },
        {
          term: "comprehensions",
          explain:
            "طريقة مختصرة وقوية لإنشاء القوائم (Lists) والقواميس بخطوة واحدة.",
        },
      ],
      trySteps: [
        "اكتب for loop يطبع ما إذا كانت الأرقام زوجية أم فردية.",
        "استخدم List Comprehension لإنشاء قائمة مربعات الأرقام.",
        "اكتب while loop يعد تنازلياً ويتوقف عند 5.",
        "استخدم Dict Comprehension لمطابقة الأرقام بمكعباتها.",
      ],
      quickCheck: [
        {
          question: "ما الفائدة الكبرى من List Comprehension؟",
          options: [
            "إنشاء قائمة وتحويلها بأسطر أقل وأكثر وضوحاً",
            "تعديل القائمة الأصلية",
            "طباعة القوائم",
          ],
          answer: 0,
          explanation: "تستبدل الحلقات البسيطة وتجعل الكود نظيفاً وسريعاً.",
        },
        {
          question: "متى تتوقف حلقة while؟",
          options: [
            "عندما يتم تقييم شرطها بأنه False",
            "بعد دورة واحدة",
            "عند نفاد الذاكرة",
          ],
          answer: 0,
          explanation:
            "دائماً يجب التأكد من وجود مسار يجعل الشرط False لتجنب الحلقات اللانهائية.",
        },
        {
          question: "ما الذي تعتبره Python 'Falsy'؟",
          options: [
            "0، النصوص والقوائم الفارغة، None، و False",
            "القيمة False فقط",
            "الأرقام السالبة",
          ],
          answer: 0,
          explanation:
            "يساعدك الفهم الجيد للـ Truthiness في كتابة شروط أكثر اختصاراً.",
        },
      ],
    },
    functions: {
      title: "Functions",
      overview:
        "الدوال تتيح لك تسمية كتل المنطق وإعادة استخدامها. إنها تحول التجربة العشوائية إلى كود قابل للاختبار والمشاركة. كل DataLoader وكل Metric Calculator يبدأ كدالة.",
      funFact:
        "أفضل أنظمة الذكاء الاصطناعي مبنية من دوال صغيرة محددة الاسم، بينما أسوأ الأنظمة هي مجرد نصوص متشابكة بملفات Notebook.",
      concepts: [
        {
          term: "parameters",
          explain:
            "المدخلات التي تجعل الدالة مرنة ومناسبة للاستخدام في حالات متعددة.",
        },
        {
          term: "return values",
          explain: "المخرجات التي تتيح لك ربط الدوال معاً في Pipelines.",
        },
        {
          term: "scope",
          explain:
            "المتغيرات داخل الدالة تكون محلية (Local)، ما يمنع التأثيرات الجانبية ويسهل التخلص من الأخطاء.",
        },
        {
          term: "docstrings",
          explain:
            "السلاسل النصية التي توثق الدالة. تجعل الكود سهل الفهم وتوثق البارامترات بوضوح.",
        },
      ],
      trySteps: [
        "اكتب دالة تحسب الـ XP وتأخذ بارامتر اختياري.",
        "أضف Docstring يشرح دور الدالة.",
        "قم بمناداة الدالة واطبع النتيجة.",
        "حوّل مقطع if/else طويل إلى دالة نظيفة.",
      ],
      quickCheck: [
        {
          question: "ما هو الغرض الأساسي من الـ Return Value للدالة؟",
          options: [
            "تمرير نتيجة العملية لكي يستفيد منها أجزاء أخرى من البرنامج",
            "طباعة الناتج مباشرة",
            "تصفير المتغيرات",
          ],
          answer: 0,
          explanation: "الـ Return يجعل الدوال قابلة للتركيب والتسلسل.",
        },
        {
          question: "لماذا يتم عزل المتغيرات المحلية داخل الدالة؟",
          options: [
            "لمنع التأثيرات الجانبية والتضارب في الأسماء (Name Collisions)",
            "لجعل التنفيذ أسرع",
            "لأن Python لا تدعم ذلك",
          ],
          answer: 0,
          explanation:
            "العزل يضمن إمكانية إعادة استخدام الدوال بأمان في أي مكان.",
        },
        {
          question: "ما الذي يشرحه الـ Docstring الجيد؟",
          options: [
            "ما تفعله الدالة، معاملاتها (parameters)، وما تعيده (returns)",
            "اسم الدالة والمؤلف فقط",
            "تاريخ التعديلات",
          ],
          answer: 0,
          explanation:
            "الـ Docstring هو العقد الوثائقي الذي يخبرك كيف تستخدم الدالة بدون قراءة الكود.",
        },
      ],
    },
    oop: {
      title: "OOP",
      overview:
        "برمجة الكائنات (OOP) تربط البيانات بالسلوكيات في مخططات تدعى Classes. في الذكاء الاصطناعي، هذه هي الطريقة التي تعرّف بها PyTorch و Keras نماذجها وطبقاتها.",
      funFact:
        "كل نموذج PyTorch ستدربه في حياتك سيكون Class يرث من nn.Module ويحتوي على دالة ()forward.",
      concepts: [
        {
          term: "classes",
          explain:
            "مخططات تحدد خصائص الكائن وأفعاله. الـ Class هو القالب، والـ Instance هو الكائن.",
        },
        {
          term: "methods",
          explain:
            "دوال تعمل داخل الـ Class للتعامل مع خصائص الكائن باستخدام self.",
        },
        {
          term: "inheritance",
          explain:
            "وراثة الخصائص من Class لآخر (مثل وراثة nn.Module) للبناء على الميزات السابقة.",
        },
        {
          term: "composition",
          explain:
            "بناء Classes معقدة عبر تضمين كائنات أخرى بداخلها بدل الوراثة المفرطة.",
        },
      ],
      trySteps: [
        "أنشئ Topic Class بخصائص Title و Completed.",
        "أضف دالة mark_done().",
        "أنشئ CapstoneProject Class يرث من Topic.",
        "أنشئ كائنات واطبع الخصائص.",
      ],
      quickCheck: [
        {
          question: "ما العلاقة بين Class و Instance؟",
          options: [
            "الـ Class هو المخطط والـ Instance هو الكائن المحدد المبني منه",
            "إنهما نفس الشيء",
            "الـ Instance يحدد القواعد",
          ],
          answer: 0,
          explanation: "تصنع Class مرة واحدة وتولد منه Instances بحسب احتياجك.",
        },
        {
          question: "متى تستخدم الـ Inheritance؟",
          options: [
            "عندما يكون الـ Class الجديد نسخة مخصصة من Class موجود ويجب أن يشاركه سلوكه",
            "لدمج كل Classes",
            "للواجهات فقط",
          ],
          answer: 0,
          explanation:
            "تستخدم الوراثة لتطبيق علاقة 'is-a' كـ 'المشروع هو موضوع'.",
        },
        {
          question: "إلى ماذا يشير المتغير self في Method؟",
          options: [
            "إلى الـ Instance المحدد الذي تم استدعاء الـ Method عليه",
            "إلى הـ Class نفسه",
            "إلى הـ Parent",
          ],
          answer: 0,
          explanation:
            "يسمح self للـ Method بالوصول إلى بيانات الكائن الخاص به.",
        },
      ],
    },
    "file-handling": {
      title: "File Handling",
      overview:
        "مشاريع الذكاء الاصطناعي الحقيقية تعيش في الملفات — CSVs للبيانات، JSON للإعدادات. التعامل مع الملفات بـ Python بأمان وموثوقية هو مهارة حاسمة لكل Data Pipeline.",
      funFact:
        "مهندسو البيانات يقدرون أن 60-80% من وقت المشروع يضيع في استخراج وتنظيف وحفظ الملفات.",
      concepts: [
        {
          term: "read/write",
          explain:
            "استخدام دالة ()open و with لضمان غلق الملفات بأمان لتجنب فقدان البيانات.",
        },
        {
          term: "CSV",
          explain:
            "الشكل الأوسع انتشاراً للبيانات المجدولة، ويُتعامل معها بكفاءة بـ Pandas.",
        },
        {
          term: "JSON",
          explain:
            "صيغة هرمية واضحة للإعدادات والنتائج يسهل حفظها وتحميلها بقواميس Python.",
        },
        {
          term: "path handling",
          explain:
            "استخدام pathlib يضمن أن مسارات ملفاتك ستعمل على أنظمة ويندوز ولينكس بدون مشاكل.",
        },
      ],
      trySteps: [
        "قم بإنشاء JSON فيه إعدادات.",
        "اقرأ الملف واطبع المحتوى.",
        "قم بتحميل ملف CSV في Pandas واطبع حجمه.",
        "قم بحفظ ملف CSV بعد إزالة الأعمدة التي لا تحتاجها.",
      ],
      quickCheck: [
        {
          question: "لماذا نستخدم 'with' عند فتح الملفات؟",
          options: [
            "تغلق الملف تلقائياً حتى لو حدث خطأ",
            "تجعل القراءة أسرع",
            "تحول الترميز لـ UTF-8",
          ],
          answer: 0,
          explanation:
            "جملة with هي مدير سياق (Context Manager) يحمي الملف من التلف عبر ضمان إغلاقه.",
        },
        {
          question: "متى نفضل JSON على CSV؟",
          options: [
            "عند حفظ بيانات متداخلة (Nested) مثل الإعدادات",
            "حفظ الجداول الرياضية",
            "حفظ البيانات بأعمدة كثيرة",
          ],
          answer: 0,
          explanation: "يدعم JSON الهياكل الهرمية المعقدة بسهولة أكبر.",
        },
        {
          question: "ما ميزة pathlib.Path على السلاسل النصية المباشرة؟",
          options: [
            "تعمل على مختلف أنظمة التشغيل (Windows, Linux) بشكل صحيح",
            "أسرع בـ 10 مرات",
            "تضغط الملفات",
          ],
          answer: 0,
          explanation:
            "يتعامل بذكاء مع تباين الفواصل (Slashes) بين أنظمة التشغيل.",
        },
      ],
    },
    "libraries-environments": {
      title: "Libraries و Environments",
      overview:
        "تطبيقات الذكاء الاصطناعي بـ Python تُبنى على مكتبات خارجية. استخدام بيئات افتراضية (venv) يفصل اعتماديات مشروعك ويمنع التضارب بينها. إنها مهارة احترافية.",
      funFact:
        "هناك أكثر من 500,000 حزمة في PyPI. كل واحدة تمثل آلاف الساعات من عمل المطورين متاح لك بأمر واحد.",
      concepts: [
        {
          term: "pip",
          explain: "أداة تنزيل وإدارة حزم بايثون. pip install هو صديقك الدائم.",
        },
        {
          term: "venv",
          explain:
            "البيئة الافتراضية، غرفة منعزلة لمشروعك لضمان عدم تعارض نسخه مع مشاريع أخرى.",
        },
        {
          term: "packages",
          explain:
            "مجموعة من الـ Modules مصممة لتستخدمها دون قراءة كود المصدر الخاص بها.",
        },
        {
          term: "requirements",
          explain:
            "ملف يسرد الحزم وإصداراتها الدقيقة مما يتيح لك ولزملائك استنساخ نفس البيئة.",
        },
      ],
      trySteps: [
        "قم بإنشاء وتفعيل بيئة افتراضية (venv).",
        "قم بتثبيت NumPy و Requests.",
        "استخدم pip freeze > requirements.txt.",
        "جرب استعادة التثبيتات في بيئة أخرى عبر هذا الملف.",
      ],
      quickCheck: [
        {
          question: "لماذا نستخدم Virtual Environment لكل مشروع؟",
          options: [
            "לעزل اعتماديات الحزم ومنع تعارض المشاريع",
            "لتسريع الكود",
            "لتجنب كتابة متطلبات",
          ],
          answer: 0,
          explanation:
            "عزل المشاريع يضمن بقاء النسخ القديمة والحديثة تعمل بانسجام في أجهزتها المخصصة.",
        },
        {
          question: "ماذا يُخرج الأمر pip freeze؟",
          options: [
            "كل الحزم المثبتة حالياً بإصداراتها الدقيقة",
            "الحزم المتوفرة على الإنترنت",
            "نسخة Python الحالية",
          ],
          answer: 0,
          explanation:
            "يخرج قائمة مثالية يمكن حفظها في ملف requirements.txt لضمان الاستنساخ المطابق للمشروع.",
        },
        {
          question: "ما فائدة ملف requirements.txt؟",
          options: [
            "يسمح لأي شخص بإعادة إنشاء نفس البيئة المتطابقة",
            "يوثق ميزات الكود",
            "يسرع التنزيل",
          ],
          answer: 0,
          explanation:
            "هو العقد التقني لبيئة عملك. بضغطة زر يعيد فريقك بناء منصة العمل التي بنيتها.",
        },
      ],
    },
    numpy: {
      title: "NumPy",
      overview:
        "مكتبة NumPy هي محرك الأرقام في Python. المصفوفات الخاصة بها (Arrays) هي بنية البيانات التي يعتمد عليها Pandas و PyTorch. عند استخدام عملياتها بدلاً من الحلقات (Loops)، يزداد الكود سرعة بـ 100 مرة.",
      funFact:
        "تعمل عمليات NumPy السريعة الموجهة (Vectorized) باستخدام لغة C بالخلفية مما يجعلها خارقة السرعة.",
      concepts: [
        {
          term: "arrays",
          explain:
            "بنية بيانات سريعة تحتفظ بعناصر من نفس النوع (عادة أرقام) بحجم ثابت.",
        },
        {
          term: "broadcasting",
          explain:
            "طريقة ذكية تتيح لـ NumPy تطبيق العمليات على مصفوفات ذات أبعاد مختلفة دون حلقات تكرار.",
        },
        {
          term: "indexing",
          explain:
            "التقطيع واستخدام الفهارس للوصول لبيانات محددة أو باستخدام المصفوفات البوليانية (True/False).",
        },
        {
          term: "vectorization",
          explain:
            "تطبيق العملية على المصفوفة بالكامل بخطوة واحدة بدلاً من التكرار العادي.",
        },
      ],
      trySteps: [
        "أنشئ NumPy Array لـ 1000 رقم عشوائي.",
        "احسب المتوسط والانحراف المعياري.",
        "استخدم البوليان لتحديد واستخراج الأرقام الإيجابية.",
        "استبدل حلقة for بايثون عادية بعملية Vectorized.",
      ],
      quickCheck: [
        {
          question: "لماذا Vectorization أسرع من Loops البايثون العادية؟",
          options: [
            "لأن NumPy ينفذها بلغة C مجمعة ومحسّنة للمصفوفات",
            "لأنه يتخطى فحص الأخطاء",
            "لأنه يستخدم عدة أنوية في وحدة المعالجة",
          ],
          answer: 0,
          explanation:
            "إزالة البطء الناتج عن الترجمة الفورية لـ Python لكل عنصر، مما يحقق مكاسب أداء ضخمة.",
        },
        {
          question: "ما الذي يقدمه الـ Broadcasting؟",
          options: [
            "تطبيق عمليات بين المصفوفات مختلفة الأبعاد بشكل ذكي وتلقائي",
            "إرسال البيانات عبر الشبكة",
            "طباعة النتائج لعدة متغيرات",
          ],
          answer: 0,
          explanation:
            "يقوم بمطابقة أبعاد المصفوفة الأصغر مع الأكبر تلقائياً مما يوفر الكثير من الكود.",
        },
        {
          question: "كيف يعمل الـ Boolean Indexing؟",
          options: [
            "تمرير شرط ليصبح القناع (Mask) الذي يستخرج القيم التي تتوافق معه (True) فقط",
            "يقوم بتبديل القيم",
            "يختار الفهارس الزوجية",
          ],
          answer: 0,
          explanation:
            "تعبير قوي مثل array[array > 0] يعيد فورا مصفوفة بالقيم الإيجابية دون أي Loop.",
        },
      ],
    },
    pandas: {
      title: "Pandas",
      overview:
        "هي الطريقة التي تتحدث بها Python مع البيانات المجدولة (مثل قواعد البيانات و CSVs). كل مشروع Data Science حقيقي يبدأ بـ Pandas للتنظيف والفحص والمعالجة.",
      funFact:
        "طور Wes McKinney النسخة الأولى لأن أدوات مثل Excel لم تكن قادرة على مواكبة حجم التحليلات المالية في وقتها.",
      concepts: [
        {
          term: "DataFrames",
          explain:
            "بنية الأساس لـ Pandas وهي عبارة عن جدول منظم يحوي صفوفاً وأعمدة بأسماء.",
        },
        {
          term: "groupby",
          explain:
            "أداة التقسيم-المعالجة-الدمج (split-apply-combine)، تستخدم لاكتشاف الإحصائيات لمجموعات محددة.",
        },
        {
          term: "joins",
          explain:
            "دمج الـ DataFrames عبر المفاتيح مثلما تفعل قاعدة البيانات في SQL.",
        },
        {
          term: "missing values",
          explain:
            "تستخدم NaN للإشارة للفراغات وعليك أن تقرر تعويضها (Impute) أو إلغاءها لتجنب تلويث الـ Model.",
        },
      ],
      trySteps: [
        "حمّل CSV في DataFrame واعرض حجمه وأنواعه.",
        "ابحث عن البيانات المفقودة وعدّها عبر isnull().sum().",
        "عوّض البيانات المفقودة بقيمة المتوسط (Median).",
        "استخدم GroupBy وقم بحساب المتوسط للفئات.",
      ],
      quickCheck: [
        {
          question: "ما الذي تفعله عملية GroupBy؟",
          options: [
            "تقسم البيانات لمجموعات بناءً على التصنيف، وتطبق دالة، وتجمع النتائج",
            "ترتب الجدول أبجدياً",
            "تصفي البيانات المكررة",
          ],
          answer: 0,
          explanation:
            "أسلوب (Split-Apply-Combine) الأساسي لحساب إحصائيات على مستوى الفئة (Category).",
        },
        {
          question: "لماذا معالجة البيانات المفقودة (NaN) مهمة للغاية؟",
          options: [
            "لأن معظم النماذج الرياضية لا تستطيع معالجتها وستنتج أخطاء",
            "لترتيب طباعة الجدول",
            "لتقليل الأعمدة",
          ],
          answer: 0,
          explanation:
            "القيم المفقودة تؤدي لاختلال الحسابات، وتنتشر (NaN) بين أوزان النماذج وتدمرها.",
        },
        {
          question: "ما هو الغرض من دمج (Join) الـ DataFrames؟",
          options: [
            "ربط جدولين من البيانات المتصلة باستخدام عمود مفتاح مشترك",
            "لصق الجدول في أسفل الآخر",
            "فصل بيانات التدريب والاختبار",
          ],
          answer: 0,
          explanation:
            "يسمح لك بإثراء ميزاتك ببيانات إضافية (مثل جمع بيانات العميل بمعلوماته الجغرافية).",
        },
      ],
    },
    matplotlib: {
      title: "Matplotlib",
      overview:
        "المكتبة الأم للتصوير البياني في Python. كل منحنيات التدريب (Loss Curves) وتقارير الإحصائيات تعتمد عليها. القدرة على إنتاج مخطط مقروء وجودة عالية تعطي لتحليلك قيمة.",
      funFact:
        "صُممت Matplotlib في الأساس لتقليد واجهة MATLAB لكي يتحول العلماء للبرمجة المفتوحة بـ Python.",
      concepts: [
        {
          term: "figures",
          explain:
            "الحاوية الرئيسية للمخطط بالكامل والتي قد تضم عدة محاور (Axes).",
        },
        {
          term: "axes",
          explain:
            "المساحة الفعلية التي يُرسم عليها البيانات وعناوين المحورين (X و Y).",
        },
        {
          term: "line charts",
          explain: "المخطط الأكثر شيوعاً لتتبع أداء النموذج بمرور الـ Epochs.",
        },
        {
          term: "annotations",
          explain:
            "ملاحظات نصية أو أسهم توضع مباشرة في المخطط لإبراز الاستنتاجات للقارئ.",
        },
      ],
      trySteps: [
        "أنشئ Figure يضم مخططين: Line Chart و Bar Chart.",
        "ضع عنواين وتسمية للمحورين X و Y.",
        "أضف تعليقاً بـ Annotation على النقطة الأعلى.",
        "احفظ المخطط لملف صوري باستخدام ()savefig.",
      ],
      quickCheck: [
        {
          question: "ما العلاقة بين Figure و Axes في Matplotlib؟",
          options: [
            "Figure هو النافذة العامة، و Axes هو الرسم الفردي بداخلها",
            "هما اسمان للشيء نفسه",
            "Axes هي النافذة",
          ],
          answer: 0,
          explanation:
            "Figure واحد يمكنه استضافة العديد من الـ Axes المتجاورة.",
        },
        {
          question: "لماذا العناوين وأسماء المحاور مهمة في الرسوم؟",
          options: [
            "بدون سياق، يصبح الرسم غير مفهوم لأي شخص آخر غير صانعه",
            "تتسبب المكتبة بانهيار برمجي",
            "للنشر الأكاديمي فقط",
          ],
          answer: 0,
          explanation:
            "في بيئة العمل، الرسوم البيانية هي رسالة تواصل، يجب أن تكون واضحة بذاتها.",
        },
        {
          question: "ما الفائدة من الدالة plt.savefig()؟",
          options: [
            "تصدير الرسم البياني لملف بدقة عرض محددة",
            "إغلاق النافذة",
            "تطبيق طابع جمالي",
          ],
          answer: 0,
          explanation:
            "استخدامها بدقة (dpi=150) أساسي لإخراج صور جاهزة للـ README في محفظتك.",
        },
      ],
    },
    seaborn: {
      title: "Seaborn",
      overview:
        "تُبنى Seaborn فوق Matplotlib لتوفير رسومات إحصائية مبهرة بأسطر قليلة. تمتلك قدرة داخلية لفهم البيانات والتوزيعات والارتباطات، مما يتيح لك رسم خرائط الحرارة المعقدة بلمسة واحدة.",
      funFact:
        "خريطة حرارة Correlation واحدة يمكنها توفير ساعات من تحليل التكرارات والارتباطات عبر ميزات البيانات.",
      concepts: [
        {
          term: "stat plots",
          explain:
            "مخططات تعتمد على دمج تلقائي للإحصائيات وعرض المتوسط وفترات الثقة مباشرة.",
        },
        {
          term: "heatmaps",
          explain:
            "شبكات ملونة لتوضيح مصفوفات الأرقام. ممتازة في توضيح التباسات النماذج (Confusion Matrices).",
        },
        {
          term: "distributions",
          explain:
            "كيف تتوزع قيم ميزة معينة؟ هل هي طبيعية؟ المخططات هنا تساعد في اتخاذ قرارات التحجيم.",
        },
        {
          term: "pairplots",
          explain:
            "مصفوفة عملاقة تعرض علاقة كل ميزة مع الأخرى، الأفضل في الفحص الأولي للبيانات (EDA).",
        },
      ],
      trySteps: [
        "استورد Dataset عبر sns.load_dataset('tips').",
        "قم برسم خريطة حرارية للترابطات (Correlation Heatmap).",
        "جرّب رسم Pairplot يعتمد على ألوان مميزة لفئة محددة.",
        "ارسم Boxplot لتوزيع البيانات لمقارنة ميزة معينة.",
      ],
      quickCheck: [
        {
          question: "ما الذي تكشفه خريطة الـ Correlation Heatmap؟",
          options: [
            "تحدد سريعاً الميزات ذات الارتباط القوي مع بعضها لتجنب التكرار",
            "السبب والمسبب الفعلي",
            "الأعمدة المرفوضة من النموذج",
          ],
          answer: 0,
          explanation:
            "الارتباط القوي جداً بين ميزتين يجعلهما تكراراً للمعلومات ويسهل حذفهما.",
        },
        {
          question: "لماذا يُستخدم الـ Pairplot بشكل أساسي؟",
          options: [
            "يجمع كافة الروابط الثنائية للبيانات في رسم אחד للمشاهدة الأولية",
            "يرسم خط الانحدار",
            "يحدد أهمية الميزات تلقائياً",
          ],
          answer: 0,
          explanation:
            "يجعل رصد المجموعات الفرعية أو الارتباطات الخطية في EDA أمراً بصرياً وسهلاً.",
        },
        {
          question: "ما ميزة Seaborn المباشرة مقارنة بـ Matplotlib؟",
          options: [
            "حساب إحصائي سريع ورسم نطاقات الثقة تلقائياً",
            "الرسومات أسرع وأخف",
            "لا يتطلب أي دوال",
          ],
          answer: 0,
          explanation:
            "يوفر الكثير من الأكواد اليدوية لعمل الإحصائيات بتقديمها بصرياً بمجرد سطر كود.",
        },
      ],
    },
    "project-eda-titanic": {
      title: "Project: EDA على Titanic",
      overview:
        "بيانات تايتانيك هي حجر الأساس لاكتشاف البيانات. المشروع لا يتعلق برفع الكود للعمل فقط، بل بطرح الأسئلة والإجابة عليها مرئياً وإخبار قصة استكشافية.",
      funFact:
        "بيانات تايتانيك لديها أكثر من 100,000 حل على Kaggle، والفارق يكمن في سرد القصة بدلاً من مجرد دقة الأرقام.",
      concepts: [
        {
          term: "data cleaning",
          explain:
            "تنظيف وتعويض الفراغات بعناية (مثل العمر). القرارات هنا تغير قصة التحليل بأكملها.",
        },
        {
          term: "feature insight",
          explain:
            "تفكيك تأثير الأعمدة على النتيجة النهائية لمعرفة العوامل الحاسمة.",
        },
        {
          term: "visual storytelling",
          explain:
            "جعل كل رسم يطرح سؤالاً ويجيب عليه دون الحاجة لسرد تقني معقد.",
        },
        {
          term: "notebook polish",
          explain:
            "التنظيم المعماري للنوت بوك باستخدام العناوين والاستنتاجات الواضحة للمدراء.",
        },
      ],
      trySteps: [
        "حمّل بيانات تايتانيك وتأكد من استكشاف القيم المفقودة.",
        "ضع خمسة أسئلة ترغب البيانات بالإجابة عنها.",
        "أنشئ رسوماً مخصصة بـ Seaborn للإجابة بوضوح على كل سؤال.",
        "اكتب خلاصة لأهم 3 اكتشافات مدعومة بالأدلة.",
      ],
      quickCheck: [
        {
          question: "ما هي النتيجة الأهم لملف الـ EDA؟",
          options: [
            "إجابات واضحة بصرية للأسئلة مع الدلائل المرئية",
            "التعقيد الإحصائي العالي",
            "نموذج جاهز",
          ],
          answer: 0,
          explanation:
            "الغرض هو استخلاص الرؤية (Insight) بوضوح لمتخذي القرار أو لبناء النموذج لاحقاً.",
        },
        {
          question: "لماذا يتطلب معالجة 'العمر' في بيانات تايتانيك عناية خاصة؟",
          options: [
            "لأنه قد يؤثر جذرياً على فرص النجاة، والتعويض الخاطئ يدمر النمط",
            "يوقف السكربت",
            "منع مشاكل التصوير البياني",
          ],
          answer: 0,
          explanation:
            "تعويض القيم بمتوسط أعمى قد يحجب حقيقة أولوية النجاة للأطفال والشيوخ.",
        },
        {
          question: "كيف تحول Notebook إلى ملف Portfolio مميز؟",
          options: [
            "بإضافة النصوص السردية والعناوين والمخططات المشروحة والتنظيم الجيد",
            "بكتابة خوارزميات معقدة",
            "بتكديس مئات الرسومات",
          ],
          answer: 0,
          explanation:
            "دفتر الملاحظات هو مستند تواصل يشرح أسلوبك في الحل لمدراء التوظيف.",
        },
      ],
    },
    "linear-logistic-regression": {
      title: "Linear و Logistic Regression",
      overview:
        "النماذج الانحدارية هي العصب الرئيسي للتنبؤ المبسط — قابلة للتفسير، سريعة، وممتازة للبيانات المهيكلة. فهم دالة الخسارة والمعاملات هنا يعدك لفهم كافة النماذج الأعمق.",
      funFact:
        "في الشركات التكنولوجية الكبرى لا يزال نموذج Logistic Regression يستخدم لتقييم احتمالات النقرات بفضل شفافيته العالية.",
      concepts: [
        {
          term: "loss functions",
          explain:
            "كيف يعلم النموذج أنه مخطئ (مثل Mean Squared Error). المحسّن (Optimizer) يعمل على تقليله.",
        },
        {
          term: "coefficients",
          explain:
            "الأوزان (Weights) التي تخبرك بأهمية كل ميزة وكم تساهم في التوقع.",
        },
        {
          term: "classification",
          explain:
            "في الانحدار اللوجستي، نستخدم الدالة Sigmoid لإخراج قيمة بين 0 و 1 (احتمال) ويُترجم لاحقاً كفئة.",
        },
        {
          term: "regularization",
          explain:
            "إضافة عقوبة على الأوزان الكبيرة لتقليص اعتماد النموذج على ميزات محددة وبالتالي منع التعلم الزائد (Overfitting).",
        },
      ],
      trySteps: [
        "درّب نموذج LinearRegression واختبر جودته بـ R2 Score.",
        "درّب LogisticRegression واطبع الدقة.",
        "افحص المعاملات لاكتشاف العمود الأهم في البيانات.",
        "جرب تطبيق Ridge Regression لمشاهدة الانكماش في الأوزان.",
      ],
      quickCheck: [
        {
          question: "ما الذي تفعله دالة Sigmoid؟",
          options: [
            "تقوم بضغط أي قيمة لتنحصر بين 0 و 1 لتمثل احتمالاً مقنعاً",
            "تحسب التكلفة",
            "تحدد الميزات المهمة",
          ],
          answer: 0,
          explanation:
            "هي الجسر الذي يحول النواتج العددية الحرة إلى احتمالات لتوقع التصنيف.",
        },
        {
          question: "لماذا تمنع Regularization الـ Overfitting؟",
          options: [
            "تُعاقب القيم المتطرفة للمعاملات لتوزع الأهمية بشكل عام ومتوازن",
            "تزيد عينات التدريب",
            "تضيف ميزات إضافية",
          ],
          answer: 0,
          explanation:
            "إبقاء القيم صغيرة يجنب النموذج الاعتماد الكلي المبالغ فيه على عمود واحد.",
        },
        {
          question: "ماذا يمثل المعامل الموجب القوي في نموذج خطي؟",
          options: [
            "زيادة هذه الميزة تزيد من التنبؤ الناتج بشكل طردي قوي",
            "دليل على الارتباط السلبي",
            "لأنه أختير عشوائياً كأهم ميزة",
          ],
          answer: 0,
          explanation:
            "المعامل يمثل حجم ميل التأثير. فالمعامل 5 مثلاً يعني زيادة 5 للتنبؤ مع كل درجة زيادة.",
        },
      ],
    },
    "support-vector-machine": {
      title: "Support Vector Machine",
      overview:
        "خوارزمية SVM تهدف لإيجاد أوسع مسافة أو هامش (Margin) فاصل بين الفئات. استخدامها للـ Kernel Trick يمكنها من التعامل مع البيانات المعقدة اللاخطية عبر إسقاطها لأبعاد عليا.",
      funFact:
        "كانت SVMs قبل 2012 هي أسياد عالم تصنيف الصور قبل بزوغ نجم الشبكات العصبية العميقة.",
      concepts: [
        {
          term: "margins",
          explain:
            "المسافة بين الحد الفاصل ونقاط البيانات الأقرب. هدفها تكبير الهامش لأقصى حد لضمان دقة التعميم.",
        },
        {
          term: "kernels",
          explain:
            "دوال رياضيات تعكس البيانات لأبعاد إضافية لتسهيل تقسيمها بخط مستقيم (مثل RBF Kernel).",
        },
        {
          term: "C parameter",
          explain:
            "معامل التسامح في التدريب: قيمة عالية تعني تسامح أقل (أقرب للتعلم المفرط) والعكس بالعكس.",
        },
        {
          term: "decision boundaries",
          explain:
            "السور (أو الخط) الذي يفصل بين أنواع البيانات ويقع تماماً بين أوسع هامش ممكن.",
        },
      ],
      trySteps: [
        "قم ببناء LinearSVC ببيانات بسيطة وارسم خط الفصل.",
        "استخدم SVC مع RBF Kernel وقارن شكل الحدود الناتجة.",
        "غير قيمة الـ C لـ 0.1 و 10 ولاحظ الاختلافات في الهامش.",
        "قيّم كلا النماذج بـ F1-Score و Accuracy.",
      ],
      quickCheck: [
        {
          question: "ما المقصود بـ Support Vectors؟",
          options: [
            "تلك النقاط الدقيقة التي يرتكز عليها الهامش لتقسيم الفئات",
            "جميع عينات التدريب",
            "متغيرات الدالة Kernel",
          ],
          answer: 0,
          explanation:
            "هي العناصر الهامة جداً؛ إزالتها سيؤدي لتغيير الخط الفاصل بأكمله بينما لا تأثير لباقي النقاط.",
        },
        {
          question: "ما الذي تؤثر فيه زيادة الـ C Parameter؟",
          options: [
            "يقلل عرض الهامش لكي يضمن تصنيف عدد أكبر من النقاط التدريبية صحيحة (مخاطرة بـ Overfitting)",
            "يقوي دالة Kernel",
            "يزيد النقاط الداعمة",
          ],
          answer: 0,
          explanation:
            "يُفضّل الكفاءة العالية على الهامش الأوسع مما يُقربه من التعلم الزائد للتدريب.",
        },
        {
          question: "لماذا تسمح الـ RBF Kernel بالخطوط المنحنية واللاخطية؟",
          options: [
            "تُسقط البيانات رياضياً لتصبح بأبعاد ضخمة تُمكن الخطوط المستقيمة من أداء التقسيم ببراعة",
            "عبر التوليد العشوائي للصور",
            "عن طريق دمج خطوط متعددة",
          ],
          answer: 0,
          explanation:
            "تُترجم البيانات المستعصية ثنائية الأبعاد، في مساحة أعلى لتُقسم بسهولة بمستوى فائق، ويبدو التقسيم منحنياً للمراقب العادي.",
        },
      ],
    },
    "decision-trees-random-forest": {
      title: "Decision Trees و Random Forest",
      overview:
        "أشجار القرار تتعلم بتفريع الأسئلة من البيانات، ولكنها عرضة بشدة للـ Overfitting. تتدخل الـ Random Forest لتحل المشكلة بتدريب مئات الأشجار والتصويت على النتيجة.",
      funFact:
        "لا تزال الـ Random Forest و Boosting الأفضل والأسرع عالمياً في معالجة البيانات المجدولة للتحديات كـ Kaggle.",
      concepts: [
        {
          term: "splits",
          explain:
            "شروط التفريع المبنية على سؤال (نعم/لا) التي تحاول تقسيم البيانات لأنقى شكل ممكن في كل عقدة.",
        },
        {
          term: "impurity",
          explain:
            "قياس لمدى اختلاط الفئات في نفس العقدة. خوارزميات الشجرة تبحث دائمًا عن التقسيم الذي يقلله لأقصى حد.",
        },
        {
          term: "ensembles",
          explain:
            "الدمج القوي لعدة نماذج 'ضعيفة'. في غابة عشوائية، تخفف الأشجار من أخطاء بعضها وتختفي مشكلة الانحياز.",
        },
        {
          term: "feature importance",
          explain:
            "دليل استرشادي لتأثير كل ميزة عبر الشجرة كاملة لمعرفة العوامل التي تبني عليها النماذج قراراتها.",
        },
      ],
      trySteps: [
        "ابن شجرة قرار (DecisionTreeClassifier) محددة العمق وارسمها مرئياً بـ tree.plot_tree.",
        "الآن الغِ العمق وقارن الـ Accuracy بين بيانات التدريب والاختبار لملاحظة الـ Overfit.",
        "درّب RandomForestClassifier بـ 100 شجرة ولاحظ استقرار الدقة.",
        "استخرج وارسم أعلى 5 ميزات عبر feature_importances_.",
      ],
      quickCheck: [
        {
          question:
            "لماذا تفرط الـ Decision Tree البالغة العمق بالتعلم (Overfit)؟",
          options: [
            "لأنها تحفظ تدريب البيانات بحيث يكون لكل نقطة مسار وعقدة نهائية",
            "لديها معاملات أقل من اللازم",
            "دالة تكلفة خاطئة",
          ],
          answer: 0,
          explanation:
            "النمو المفرط يحفظ البيانات ويجعلها فاشلة في التعامل مع أي نقطة اختبار جديدة.",
        },
        {
          question: "كيف تعالج Random Forest ذلك الإفراط؟",
          options: [
            "عبر تدريب مئات الأشجار على أجزاء عشوائية من البيانات والتصويت بالمتوسط",
            "تحدد عمق كل الأشجار برقم قليل جداً",
            "تختبر النقاط الصعبة فقط",
          ],
          answer: 0,
          explanation:
            "تنوع الأشجار يجعل أخطاءهم غير متوافقة فتتبدد حين تجميع نتائجهم.",
        },
        {
          question: "ماذا يقيس الـ Feature Importance؟",
          options: [
            "مقدار قدرة تلك الميزة على تقليل الـ Impurity الإجمالي عبر جميع التفريعات في الأشجار",
            "معدل ارتباطه السلبي",
            "مرات ظهوره فقط",
          ],
          answer: 0,
          explanation:
            "يقيس مدى قوة واستخدام الميزة في الغابة لفصل البيانات وتصنيفها بثقة.",
        },
      ],
    },
    "k-means-knn": {
      title: "K-Means و KNN",
      overview:
        "يقوم K-Means بتقسيم البيانات بدون تسميات إلى مجموعات. أما KNN فيعتمد على استعارة إجابات أقرب النقاط المجاورة للتصنيف.",
      funFact:
        "نسخة K-Means++ الافتراضية حالياً بـ sklearn تعثر على الإجابات 10 أضعاف أسرع من الإصدار الأقدم.",
      concepts: [
        {
          term: "clustering",
          explain:
            "تجميع البيانات الغير موسومة (Unlabeled) معاً بحسب التجانس المسافي بينهم.",
        },
        {
          term: "distance metrics",
          explain:
            "كيف نعرّف مسافة 'القرب'. حساب فيثاغورس الكلاسيكي (Euclidean) هو أشهرهم.",
        },
        {
          term: "neighbors",
          explain:
            "الفكرة الأساسية لـ KNN؛ السؤال لمن هم حولي واتخاذ القرار بالتصويت للغالبية.",
        },
        {
          term: "scaling",
          explain:
            "ضروري للغاية لأن القيم الكبيرة (مثل 10,000) ستطغى وتلغي تأثير الميزات ذوات المدى الضيق (مثل 0-1).",
        },
      ],
      trySteps: [
        "قم بتوليد بيانات بـ make_blobs لتحوي 3 مجموعات متباعدة.",
        "اربط KMeans(3) واستخدم الـ Labels لتلوين النقاط المجمعة في رسم بياني.",
        "استخدم KNN على بيانات مجدولة لتقييم الدقة.",
        "قس تأثير أداء KNN قبل وبعد توحيد البيانات (Scaling).",
      ],
      quickCheck: [
        {
          question:
            "لماذا يعتبر توحيد البيانات (Scaling) ضرورياً لخوارزميات المسافة؟",
          options: [
            "لمنع الميزات ذات الأرقام العالية من الهيمنة التامة على نتيجة حساب المسافة",
            "يجعل البرنامج يعمل أسرع في المجمل",
            "البرامج تتطلب أن تكون القيم بين 0 و 1 حصراً",
          ],
          answer: 0,
          explanation:
            "بدون توحيد البيانات، الخوارزمية تعتبر الفرق بين 500 و 1000 أكبر بكثير من الفرق بين 0.1 و 0.9 رغم أهمية الميزتين معاً.",
        },
        {
          question: "ما الذي يفعله المعامل K في KNN؟",
          options: [
            "عدد أقرب الجيران الذين يشاركون في التصويت لتحديد النتيجة",
            "تكرارات خوارزمية التدريب",
            "عدد الكتل المستهدفة",
          ],
          answer: 0,
          explanation:
            "إذا كان K صغيراً جداً سيعاني الموديل من الضوضاء، وإذا كان هائلاً جداً ستلغى الفوارق الجوهرية.",
        },
        {
          question: "متى يتوقف K-Means عن العمل في الخوارزمية؟",
          options: [
            "عندما تستقر مراكز المجموعات (Centroids) وتتوقف عن التغيير الملحوظ بين الدورات",
            "إذا تجمعت النقاط بأعداد متساوية",
            "عند الوصول لدقة 100%",
          ],
          answer: 0,
          explanation:
            "يستمر K-Means بتعديل حساب المسافات والمراكز حتى تتطابق مع أقرب جيرانها وتثبت.",
        },
      ],
    },
    "model-evaluation": {
      title: "Model Evaluation",
      overview:
        "كيف تحمي النموذج من الظهور بشكل جيد على الورق بينما يفشل بالكامل في أرض الواقع. اختبار النموذج الصحيح بأساليب الانقسام المتقاطع يفرق بين الصدفة والموثوقية.",
      funFact:
        "تقييم نموذج بيانات 99% منها من فئة A بدقة 99% يعتبر فاشلاً تماماً، فمقاييس مثل F1-Score والـ Precision تكشف زيف الأداء.",
      concepts: [
        {
          term: "train/test split",
          explain:
            "حجز 20% تقريباً من البيانات لمنع النموذج من رؤيتها للتحقق النهائي.",
        },
        {
          term: "cross validation",
          explain:
            "تدريب النظام وإعادة اختباره بشكل دوّار K مرة، لضمان قياس خالي من صدفة التقسيم الموفق.",
        },
        {
          term: "confusion matrix",
          explain:
            "مصفوفة توضح لك نقاط الخلل بدقة؛ كم مرة توقع الصح خطأ وكم توقع الخطأ صح؟",
        },
        {
          term: "ROC AUC",
          explain:
            "منحنى لتقييم كفاءة تصنيف النموذج بين الإيجابي والسلبي لكل قيم الاعتماد، الاقتراب لـ 1 ممتاز.",
        },
      ],
      trySteps: [
        "درّب أي Classifier على بيانات واطبع مقاييس Precision, Recall و F1.",
        "استخدم ConfusionMatrixDisplay لإبراز مصفوفة الارتباك بصرياً.",
        "ارسم منحنى الـ ROC واطبع نتيجته AUC.",
        "قم بتشغيل K-fold 5 مرات وأوجد انحراف ومتوسط نتائج الدقة.",
      ],
      quickCheck: [
        {
          question:
            "لماذا تُعتبر الدقة الكلية (Accuracy) مضللة للبيانات غير المتوازنة؟",
          options: [
            "لأن الانحياز الكامل للفئة الأغلبية يعطي دقة وهمية عالية لكن بلا فائدة عملية",
            "الدقة ممتازة دائماً للتصنيف المزدوج",
            "لأنه لا يملك العدد الكافي",
          ],
          answer: 0,
          explanation:
            "نموذج يُعرّف جميع المرضى على أنهم أصحاء (فئة أغلبية) سيحقق نسبة نجاة 99% لكنه سيتسبب بقتل الـ 1% بوضوح.",
        },
        {
          question: "ما الذي تشير له نتيجة AUC العالية؟",
          options: [
            "قدرة النموذج الموثوقة على ترتيب الإيجابيات وإبقائها أعلى من السلبيات بفاعلية",
            "أنه أسرع في التدريب",
            "يمتلك Precision 100%",
          ],
          answer: 0,
          explanation:
            "الـ AUC المثالي يحقق توزيعاً صارماً حيث لا يتفوق التوقع الخاطئ إطلاقاً على التوقع الصائب للموديل.",
        },
        {
          question:
            "بماذا يفوق Cross-validation التقسيم البسيط Train/Test Split؟",
          options: [
            "يوفر نتائج قياس موثوقة ناتجة عن تدوير تجارب البيانات المتعددة ولا يخضع لصدفة التقسيم الأفضل",
            "يتدرب بسرعة تفوق 5 أضعاف",
            "يمنع Overfitting سحرياً",
          ],
          answer: 0,
          explanation:
            "المتوسط الذي يطرحه K-Fold يعتبر مقياس الدقة الأكثر صرامة للثقة بالنماذج المعدة للإنتاج.",
        },
      ],
    },
    "neural-networks-backprop": {
      title: "Neural Networks و Backprop",
      overview:
        "الشبكات العصبية قادرة على تقريب وتمثيل أي دالة مهما تعقدت عبر طبقات الأوزان المدمجة بفضل سحر تدفق Backpropagation الذي يجعل من الممكن احتساب كل أخطاء الأوزان بدقة متناهية.",
      funFact:
        "كانت خوارزميات الـ Backprop معروفة من الثمانينيات، ولولا قفزة قوة معالجات الـ GPUs، لما رأيناها تغير العالم اليوم.",
      concepts: [
        {
          term: "layers",
          explain:
            "الترتيب المعماري للشبكة لمدخلات، طبقات مخفية تمثل أنماطاً دقيقة، ثم إخراج.",
        },
        {
          term: "activations",
          explain:
            "دوال لاخطية (مثل ReLU) تسمح للشبكات المكدسة بفهم الأنماط المتعرجة والمعقدة بدلاً من الانحدارات الخطية المسطحة.",
        },
        {
          term: "loss",
          explain:
            "قيمة رياضية رقمية مفردة تشرح للنموذج مدى بشاعة توقعاته لكي يبدأ في تحسينها وتقليلها.",
        },
        {
          term: "gradient flow",
          explain:
            "كيفية تدفق توبيخ الأخطاء (Gradients) للوراء. أحياناً تتلاشى وتنهار وهو ما عالجته أدوات التنشيط كـ ReLU.",
        },
      ],
      trySteps: [
        "طبّق شبكة عصبية بطبقتين يدوياً بـ NumPy فقط؛ مرور أمامي وحساب Loss.",
        "تتبع حجم المصفوفات للأوزان وافهم ارتباط الأبعاد ببعضها.",
        "قم بحساب وتفعيل Gradient يدوياً وطبق تحديثا صغيراً للخطأ.",
        "نفّذ 100 خطوة نزول وارسم منحنى الـ Loss الذي ينبغي أن يتناقص.",
      ],
      quickCheck: [
        {
          question: "كيف تمكنت دوال التنشيط ReLU من حل معضلة الـ Sigmoid؟",
          options: [
            "تمنع تلاشي الانحدار (Vanishing Gradient) بضمان مرور إشارات التدرج بثبات",
            "لأنها تمنع الانفجار وتحدد القيم لـ 1",
            "لأنها تحسب أسرع برمجياً",
          ],
          answer: 0,
          explanation:
            "تحطم دوال Sigmoid القيم وتضعفها تدريجياً بطبقاتها للصفر، بينما يمرر ReLU القيم الموجبة بقوة مما يبقي التدريب حيّاً.",
        },
        {
          question: "ما الذي تُرجعه عملية الـ Backpropagation فعلياً؟",
          options: [
            "قيمة التأثير التي ساهم بها كل وزن بمفرده لإنتاج هذا الخطأ الحالي",
            "تقوم بتصفير الأوزان الفاشلة تلقائياً",
            "تقترح القيمة الأمثل النهائية فوراً",
          ],
          answer: 0,
          explanation:
            "بشكل مذهل، تستطيع Backprop بفضل الـ Chain Rule تحديد درجة توبيخ كل وزن على حدة لتحسينه بالخطوة القادمة.",
        },
        {
          question: "ما الوظيفة الأسمى لدالة Loss للنموذج؟",
          options: [
            "إصدار قيمة مستمرة قابلة للاشتقاق تصف حجم الخطأ لتوجيه بوصلة المُحسّن",
            "تحديد بنية معمارية النظام",
            "فلترة بيانات التدريب الصعبة",
          ],
          answer: 0,
          explanation:
            "إنها بوصلة النظام؛ إذا كان الخطأ غير قابل للاشتقاق فلن تجد الخوارزمية الدليل للاتجاه نحو تقليل ذلك الخطأ.",
        },
      ],
    },
    "keras-tensorflow": {
      title: "Keras و TensorFlow",
      overview:
        "TensorFlow توفر محرك العمليات، و Keras يقدم واجهة الاستخدام لتبني وتتدرب وتخزن بأسطر أقل دون الغرق في دوامة البويلربليت.",
      funFact:
        "صُممت Keras أصلاً لتبسيط استخدام TensorFlow و Theano وصارت اليوم الواجهة الأولى لتطوير النماذج رسمياً من Google.",
      concepts: [
        {
          term: "Sequential API",
          explain:
            "الواجهة الأسهل. كومة من الطبقات العصبية مرتبة فوق بعضها لبناء معظم النماذج الكلاسيكية.",
        },
        {
          term: "datasets",
          explain:
            "دوال قوية لتلقيم ومعالجة الدفعات وتعديلها بالخلفية كي تعمل البطاقة الرسومية GPU بكفاءة ودون انتظار.",
        },
        {
          term: "callbacks",
          explain:
            "دوال استدعاء تفاعلية تتصرف تلقائياً لوقف النموذج قبل تدريبه المفرط (Early Stopping) أو حفظ أفضل أداء بـ ModelCheckpoint.",
        },
        {
          term: "saved models",
          explain:
            "طريقة الاحتفاظ بالشبكة العصبية المعقدة بأوزانها وإعداداتها في ملف لتشغيلها كمنتج نهائي دون الحاجة للكود مجدداً.",
        },
      ],
      trySteps: [
        "صمم شبكة باستخدام Sequential تحتوي Dense Layers للاختبار.",
        "اربط الشبكة بخوارزمية Adam للتحسين مع تعريف Sparse Categorical Crossentropy للـ Loss.",
        "برمج الـ Callbacks اللازمة لمنع الـ Overfit بوضع حاجز Early Stopping.",
        "احفظها، أعد استيرادها من الملف، وقم بالتنبؤ بصورتين على الأقل.",
      ],
      quickCheck: [
        {
          question: "بماذا تساهم دالة الـ EarlyStopping الفعالة؟",
          options: [
            "توقف الاستمرار العبثي للتدريب لمنع ה-Overfitting عندما تفشل الدقة في التطور",
            "تحدد أقصى حد بـ 10 دورات فقط",
            "تمنع الأخطاء البرمجية",
          ],
          answer: 0,
          explanation:
            "تراقب المقياس، وإذا لم ترَ تحسناً لعدد معين من الجولات تستسلم لتحفظ لك أفضل الأوزان بدون أن تتعلم النمط الخاطئ المفرط.",
        },
        {
          question: "ما الذي يُحفظ فعلياً بملف model.save()؟",
          options: [
            "هيكل الشبكة، أوزانها الجاهزة، حالة المحسن وإعدادات التدريب",
            "مصفوفة NumPy للأوزان فقط",
            "بيانات المخططات وأرقام הـ Loss",
          ],
          answer: 0,
          explanation:
            "الملف كبسولة زمنية، تستطيع استكماله لاحقاً بالتدريب أو نشره كمنتج قابل للتوقع مباشرة دون الحاجة لأي برمجة سابقة.",
        },
        {
          question:
            "بماذا يتفوق الـ Functional API على الـ Sequential بالعادة؟",
          options: [
            "يتيح تصميم شبكات متطورة تسمح بالتفرعات والمداخل المعقدة والروابط التخطي (Skip Connections)",
            "يعد أسرع جداً في التدريب للبيانات الكبيرة",
            "لأنه لا يحتاج لـ Callbacks",
          ],
          answer: 0,
          explanation:
            "الترتيب البسيط لا يفيد تصميمات عملاقة مثل شبكة ResNet، لذا توفر الـ Functional بيئة ربط حرة للمعمارية.",
        },
      ],
    },
    "pytorch-basics": {
      title: "أساسيات PyTorch",
      overview:
        "بنية الرسوم البيانية المحوسبة المرنة في PyTorch تجعله بيئة البحث المفضلة ويسهل اكتشاف الأخطاء، مما جعله الأساس لكثير من الشركات كـ HuggingFace و TorchVision.",
      funFact:
        "أكثر من 70% من أرشيف بحوث AI الحديثة تُطرح أولاً بأكواد PyTorch.",
      concepts: [
        {
          term: "tensors",
          explain:
            "مصفوفات متعددة الأبعاد تستطيع التسارع بـ GPUs مع ميزة القدرة على تتبع تسلسل العمليات لاحتساب التدرجات الرياضية.",
        },
        {
          term: "autograd",
          explain:
            "قلب PyTorch. محرك اشتقاق آلي يحتفظ بخط سير العمليات عبر .backward() لحساب הـ Gradients بثانية واحدة.",
        },
        {
          term: "modules",
          explain:
            "حجر الأساس لكل شيء. باستخدام ()nn.Module تصمم طبقات وتمريرها الأمامي بكل حرية وسيقوم هو بالباقي.",
        },
        {
          term: "training loop",
          explain:
            "في PyTorch، أنت من يكتب كود المرور، حساب الخسارة، والتدرج، وطلب التحديث بخطوات صريحة، لتعطيك تحكماً كاملاً.",
        },
      ],
      trySteps: [
        "أنشئ Tensor بخصائص أبعاد 4x3 بأرقام عشوائية واستخرج الـ Mean.",
        "فعّل requires_grad=True לـ Tensor ونفذ عمليات رياضية عليه وشغّل backward.",
        "طوّر Class مخصص يرث nn.Module ويحتوي على دالة طبقة و ReLU.",
        "ابنِ دورة تدريب من 10 دورات واطبع الـ Loss تدريجياً لنموذجك المصغر.",
      ],
      quickCheck: [
        {
          question: "ما الذي تُنشطه مناداة ()loss.backward تحديداً؟",
          options: [
            "تُرجع التدرج للوراء محتسبة الفوارق الرياضية لأي Tensor يتطلب الاشتقاق",
            "تُحدث معاملات التدريب فورا",
            "تصفر دالة الخطأ للأوزان الأولية",
          ],
          answer: 0,
          explanation:
            "تمرر الرسالة رجوعاً لكافة الأوزان المشاركة لتحضير ה-Gradients للمرحلة التالية من התحديث بـ Optimizer.",
        },
        {
          question:
            "لماذا تضطر لطلب ()optimizer.zero_grad قبل كل دفعة في بايثون؟",
          options: [
            "لأن PyTorch يراكم ناتج Gradients فوق السابق — صفرها لتمنع دمج القيم العشوائي",
            "لمنع المحسن من התحديث قبل التجهيز",
            "لإعادة النظام لبدايته",
          ],
          answer: 0,
          explanation:
            "خاصية التراكم ممتازة إذا كنت تتلاعب بالتدرجات الصعبة، لكن للتدريب القياسي، فدمج التدفق القديم بالجديد سيسبب دمار النتائج.",
        },
        {
          question:
            "ما الفرق الأبرز لمعمارية تدريب PyTorch مقارنة بتدريب Keras؟",
          options: [
            "عليك برمجة سطور دورة التدريب كاملة بيديك بـ PyTorch، بينما ينهيها Keras بـ ()fit",
            "PyTorch أبطأ بكل الحالات",
            "Keras لا يتعامل مع GPU محلياً",
          ],
          answer: 0,
          explanation:
            "الكتابة الصريحة لكافة خطوات الـ Loop بـ PyTorch متعبة لكنها ميزة عبقرية تسمح بكسر قواعد التدريب المعتادة للمهندسين المتطورين.",
        },
      ],
    },
    "regularization-tuning": {
      title: "Regularization و Tuning",
      overview:
        "أساليب كبح النموذج وموازنة أوزانه مع اختيار المعلمات المناسبة هي الفارق بين نموذج وهمي جيد على الورق، ونموذج فعلي صامد بالعمل.",
      funFact:
        "أحد أسباب صدمة فوز AlexNet بثورة 2012 كان استخدامه لفكرة الـ Dropout البسيطة والتي أطاحت بمنافسيه بإيقاف التعلم الزائد.",
      concepts: [
        {
          term: "dropout",
          explain:
            "إغماض وإلغاء تنشيط نسبة من العصبونات عشوائياً لدفع بقية الأعصاب لتعلم ميزات فريدة بدلاً من الاعتماد المشترك المفرط.",
        },
        {
          term: "weight decay",
          explain:
            "ربط نمو القيم بضريبة لمعاقبة الأوزان الضخمة للحفاظ على بساطة واستقرار النموذج.",
        },
        {
          term: "learning rate",
          explain:
            "حجم الخطوة لتقليل الخطأ: قفزة كبيرة تسبب تذبذباً وتفككاً، وقفزة بطيئة تعلق به. الموازنة عبر الـ Schedulers ضرورية.",
        },
        {
          term: "early stopping",
          explain:
            "أبسط وسيلة؛ توقف التدريب بمجرد بدء الفشل بالتعميم مهما بقيت عدد الدورات المحجوزة للشبكة.",
        },
      ],
      trySteps: [
        "ابن نموذجاً شديد الضخامة لبيانات صغيرة حتى ترى بأم عينك انفصال دقة Validation وصعود الـ Overfit.",
        "طبّق Dropout بنسبة 40% وأعد قياس الـ Validation مرة أخرى.",
        "فعّل عقوبة الأوزان L2 من خلال إعدادات المحسّن واختبر الفارق.",
        "فعل آلية EarlyStopping لمراقبة وقطع دورات التدريب العبثية وحفظ الأفضل.",
      ],
      quickCheck: [
        {
          question: "ما هو دور الـ Dropout العشوائي أثناء التمرير الأمامي؟",
          options: [
            "يحول جزءاً من إشارات العصبونات لصفر فيجبر البقية على التعلم باستقلالية أقوى",
            "يحذف العصبونات السيئة نهائياً",
            "يضاعف سرعة التعلم المتبقية",
          ],
          answer: 0,
          explanation:
            "يصنع فعلياً مئات النماذج المصغرة المختلفة في كل جولة، مما يخلق شبكة منيعة ضد الاعتماد الكسول.",
        },
        {
          question: "كيف يبرز ה-Overfitting بوضوح على منحنيات الأداء؟",
          options: [
            "عندما يستمر خطא الـ Training بالتناقص، ويرتفع فجأة خطא الـ Validation منفكاً عنه",
            "يهبط الاثنان للأسفل سوية بلا توقف",
            "دقة Validation تتجاوز دقة Training باستمرار",
          ],
          answer: 0,
          explanation:
            "بمجرد أن ينفك المنحنيان ويبدأ الـ Validation في الصعود يعني أن النموذج توقف عن الفهم وبدأ بحفظ الإجابات كالببغاء.",
        },
        {
          question:
            "ما الخطر الواضح لتحديد معدل تعلم (Learning Rate) مرتفع للغاية؟",
          options: [
            "تتجاوز خطوة المحسن النقطة الصغرى الأفضل فيندلع التذبذب ويتمرد الـ Loss للأسوأ",
            "تدريب بطيء للغاية يتأخر يوماً كاملاً",
            "وصول النموذج لدقة 100% سريعاً",
          ],
          answer: 0,
          explanation:
            "الخطوة الشاسعة تجعل المحسّن يقفز عشوائياً فوق الهدف ذهاباً وإياباً دون أن يستقر بأفضل نقطة للمنحنى.",
        },
      ],
    },
    "cnn-architecture": {
      title: "CNN Architecture",
      overview:
        "شبكات הـ Convolutional طوت صفحة المستحيل لعالم الرؤية الحاسوبية بفهمها لترابط بكسلات الصور القريبة عبر فلاتر سحرية.",
      funFact:
        "لو قمت بطباعة الأوزان المحفوظة في فلاتر ResNet لوجدتها ترسم بعينيك أشكالاً مبهرة كدوائر وألوان وتدرجات، النموذج فعلا يعي ما 'يرى' بمرور الطبقات.",
      concepts: [
        {
          term: "convolutions",
          explain:
            "نافذة دقيقة تزحف وتقرأ الميزات والأنماط من الصورة (كالزوايا والمنحنيات) في أي موقع ظهرت فيه.",
        },
        {
          term: "pooling",
          explain:
            "تصغير الأبعاد بتلخيص البكسلات وتركيز النتيجة لإعطاء النموذج قدرة التعرف على العناصر مهما اختلف حجمها أو موضعها.",
        },
        {
          term: "feature maps",
          explain:
            "الخريطة المرئية التي يخلفها فلتر الـ Convolution موضحاً موقع تواجد الميزة بالصورة لترسل للطبقة التالية.",
        },
        {
          term: "padding",
          explain:
            "تطويق حواف الصور بالأصفار للحفاظ على سلامة أبعاد الصورة وعدم تلاشي أطرافها الهامة بالطبقات المتتالية.",
        },
      ],
      trySteps: [
        "ابن شبكة متتابعة بسيطة في Keras بـ Conv2D و MaxPool ثم Dense لتصنيف.",
        "اطبع ملخص النموذج وتأكد من فهمك لتقلص حجم ה-Feature Map في الـ Output.",
        "استورد صورة رمادية ومررها فقط من طبقة الـ Conv2D لرسم الخريطة البصرية للفلاتر.",
        "درّب الشبكة على MNIST وراجع الفارق المرعب بالدقة مقابل استخدام طبقات Dense مسطحة.",
      ],
      quickCheck: [
        {
          question:
            "كيف تمكنت الفلاتر الملتفة من هزيمة الـ Dense Layers الثقيلة بالصور؟",
          options: [
            "تُشارك الأوزان عبر كل البكسلات بحجم ثابت فتستهلك معاملات (Parameters) قليلة للغاية",
            "لأنها تعالج البكسلات دفعة واحدة",
            "كونها لا تحتاج التدريب مطلقاً",
          ],
          answer: 0,
          explanation:
            "تشارك الفلاتر أوزان 3x3 لكل أرجاء الصورة يوفر بناء ملايين الروابط المهدرة لشبكة عصبية عادية بكفاءة فذة.",
        },
        {
          question:
            "ما الذي تُنفذه طبقة الـ Max Pooling במפה الخاصة بالمميزات؟",
          options: [
            "تمتص أعلى قيمة فقط من النطاق لتقليل حجم المصفوفات مع حفظ قوة الإشارة للميزة",
            "تموه الصورة لتقليل الضجيج المرئي",
            "تطبق التفعيل اللاخطي ReLU",
          ],
          answer: 0,
          explanation:
            "يصغر حجم الصورة بمقدار الضعف أحياناً بينما يحتفظ النموذج بمعلوماته الثمينة متجاهلاً الضجيج والمساحات الفارغة.",
        },
        {
          question: "ما الذي تمنحه خطوة إضافة Padding (الحشو) بصور ה-CNN؟",
          options: [
            "يغطي حواف الصورة فيحفظ أبعادها لتتمكن من إضافة طبقات عميقة بلا انكماش",
            "توليد صورة بديلة (Augmentation)",
            "زيادة أعداد الفلاتر بالطبقة",
          ],
          answer: 0,
          explanation:
            "كل التفاف يقص أطراف الصورة بحكم حجم الفلتر؛ الحشو يخدع הפילטר للحفاظ على الحجم وسلامة معلومات الأطراف.",
        },
      ],
    },
    "transfer-learning": {
      title: "Transfer Learning",
      overview:
        "نقل التعلم هو الرافعة الجبارة للذكاء الاصطناعي؛ استعارة شبكة مُدربة بجهد الملايين وتكييفها لخدمة مشروعك ببيانات وأموال قليلة.",
      funFact:
        "باستخدام Transfer Learning تستطيع الوصول لدقة 95% بـ 200 صورة فقط، بينما يحتاج تدريبها بالأساس لـ 200 ألف صورة لتحقيق الرقم ذاته.",
      concepts: [
        {
          term: "pretrained models",
          explain:
            "الشبكات الهائلة (كـ MobileNetV2) التي رأت ملايين الصور، فأصبحت فلاترها مستودعاً رائعاً لفهم الألوان والزوايا والأشكال.",
        },
        {
          term: "fine tuning",
          explain:
            "فتح الأقفال عن الطبقات المتأخرة، وتدريبها بتأنٍ بمعدل تعلم ضئيل لتطويعها لفهم ميزات مشروعك تحديداً.",
        },
        {
          term: "freezing layers",
          explain:
            "قفل الطبقات المبكرة ومنع تحديث أوزانها لكي لا تفقد قدرتها الأساسية الممتازة كتمييز الزوايا العادية للصور.",
        },
        {
          term: "augmentation",
          explain:
            "التلاعب ببياناتك المحدودة (عكس، تدوير، ألوان) لصناعة جيش من العينات وتقوية مناعة النموذج.",
        },
      ],
      trySteps: [
        "استورد شبكة MobileNetV2 خالية الرأس عبر Keras (بإلغاء top layer).",
        "اقفل كافة طبقات الشبكة Base وازرع رأس Dense جديد.",
        "درّبه 5 جولات بصور فئتين فقط لتحديد دقته המذهلة السريعة.",
        "الآن افتح آخر 20 طبقة للشبكة وأعد تدريبها بمعدل تعلم (1/10) لضبط ה-Fine Tuning.",
      ],
      quickCheck: [
        {
          question:
            "بماذا يتفوق ה-Transfer Learning عند استخدامه ببيانات صغيرة؟",
          options: [
            "ينقل المعرفة القوية للفلاتر الجاهزة لتناسب مشروعك فورا دون الحاجة لداتا ضخمة",
            "يولد آلياً البيانات الناقصة",
            "تتدرب بشكل أسرع وأكثر عرضة للـ Overfit",
          ],
          answer: 0,
          explanation:
            "النموذج مسبق التدريب قد تعلّم بالفعل أساسيات تمييز الحواف والتكوينات ولا يحتاج سوى تغيير بسيط ليتعرف على أهدافك.",
        },
        {
          question:
            "كيف نتعامل مع Learning Rate خلال مرحلة ה-Fine Tuning الختامية؟",
          options: [
            "أعطه Learning Rate ضعيف جداً حتى لا تنسف الفلاتر المدربة أوزانها الثمينة",
            "ارفع المعدل لأقصى حد ليتعلم",
            "لا تغير الرقم ليبقى كما هو",
          ],
          answer: 0,
          explanation:
            "الأوزان تقف بالفعل بمقربة من الكمال، صدمها بمعدل تعلم صارخ سيعيدها للتشوش، استخدام 1/10 يضبطها بخفة.",
        },
        {
          question: "لماذا نقفل الطبقات المبكرة ولا نسمح بضبط أوزانها أبداً؟",
          options: [
            "الطبقات الأولى تتقن تمييز الحواف الأساسية ولا تتغير بتغير الهدف، فقفلها يحميها",
            "الطبقات النهائية هي الأعم",
            "اقفل كل شيء سوياً دائماً",
          ],
          answer: 0,
          explanation:
            "حواف الكلب أو حواف السيارة تبدو متطابقة لعين الفلاتر الأولى، تركيزك دائماً لتدريب وتكييف الطبقات الدلالية في آخر الشبكة.",
        },
      ],
    },
    "opencv-image-processing": {
      title: "OpenCV و Image Processing",
      overview:
        "قبل أن تتسلم الشبكات العصبية الصورة، تقوم مكتبة OpenCV بالعمليات التكتيكية للتنظيف والفلترة والعزل لتحويل المهام البصرية المستعصية لقراءة بسيطة وسريعة.",
      funFact:
        "تستخدم خطوط مصانع الجودة وأنظمة القيادة الذاتية إمكانات OpenCV البارعة لفحص وتأكيد بياناتها بمعدل يفوق الـ 60 فريم بدون الحاجة لـ GPU.",
      concepts: [
        {
          term: "color spaces",
          explain:
            "الصورة ليست مجرد بكسل؛ يمكن قراءتها كـ RGB أو HSV للعزل اللوني الرائع (مثل تتبع لون البشرة) وغيرها من النطاقات.",
        },
        {
          term: "filters",
          explain:
            "أقنعة ومصفوفات يتم تمريرها لمحو الضجيج البصري (كالتشويش) لتسهيل استخراج الحواف والحدود الصريحة بدون أخطاء.",
        },
        {
          term: "thresholding",
          explain:
            "بتر الصورة وتصنيفها للأبيض والأسود الحاد عبر معادلات رياضية (كـ Otsu) ليتم استنباط الكتل المنفصلة فيها بوضوح تام.",
        },
        {
          term: "contours",
          explain:
            "الحدود المرسومة للكائن بعد تصفيته، تتيح لك قراءة إحداثياته واستخراج مساحته أو تغليفه بصناديق هندسية قابلة للمسار.",
        },
      ],
      trySteps: [
        "افتح صورة بـ imread وقم بتحويلها لنطاق Grayscale الرمادي.",
        "امسح تشويش الصورة باستخدام Gaussian blur 5x5 واطبع النتيجتين.",
        "حوّل الصورة المبهمة للونين حادين باستخدام عتبة Otsu التلقائية (Threshold).",
        "أوجد المسارات بالـ Contours، وارسم خطوطها باللون الأخضر وعد الكائنات المكتشفة.",
      ],
      quickCheck: [
        {
          question:
            "لماذا يعمل نظام OpenCV بتنسيق BGR المقلوب بدلاً من RGB القياسي؟",
          options: [
            "إرث تقني من مكتبات ה-C الأصلية ولهذا عليك عكسه إذا أردت استخدامه للمكتبات الأخرى",
            "ليكون أسرع للـ GPU",
            "لأنه معيار دولي",
          ],
          answer: 0,
          explanation:
            "كُتبت OpenCV عندما كان ה-BGR مهيمناً للأنظمة، يجب عليك تحويله دائماً ב- COLOR_BGR2RGB قبل عرضه على نماذج الـ AI.",
        },
        {
          question:
            "بماذا تخدم خطوة الـ Gaussian Blur استخراج حواف الصور (Edges)؟",
          options: [
            "تمحو الضجيج البصري الكاذب ليمنع الخوارزمية من تحديد حواف وهمية مزعجة",
            "تفتح الصورة أكثر",
            "تبدل نظام الألوان",
          ],
          answer: 0,
          explanation:
            "الضجيج بالصور يعطي اختلالات بكسلية وهمية تُقرأ كحواف؛ طمسها (Blurring) يخفف أثرها ليبرز النطاق الحقيقي للهيكل الأساسي.",
        },
        {
          question: "ما الذي نجنيه فعلياً من دوال ה-Contours للصورة المهيأة؟",
          options: [
            "رسم هيكل مسارات النطاقات في الصورة لتتمكن من قياس وتأطير العناصر فيها",
            "تحديد نوع الكائن دلالياً",
            "إنتاج البعد الثالث للصور",
          ],
          answer: 0,
          explanation:
            "يمدك بتمثيل لخطوط المحيط للكائن كمسار رقمي ملموس يمكنك من خلاله رصد مكانه وحساب مساحته الدقيقة أو إنشاء صندوق محيط له.",
        },
      ],
    },
    "object-detection-yolo": {
      title: "Object Detection (YOLO)",
      overview:
        "YOLO (You Only Look Once) تخطت مجرد تصنيف الصور نحو استهداف وعزل الكائنات بصناديق التحديد بخوارزمية قوية تنظر للصورة لمرة واحدة فقط وبسرعات تفوق الوقت الفعلي.",
      funFact:
        "قدم إصدار YOLOv1 قفزة رصد 45 فريم ليعتبر سحراً للعام 2015، بينما اليوم بـ YOLOv8 يمكنها سحق 100 فريم بسهولة على الأنظمة الجيدة كمعيار دولي للإنتاج.",
      concepts: [
        {
          term: "bounding boxes",
          explain:
            "صناديق بأربع إحداثيات (المركز والأبعاد) ترسم محيط الأهداف بصرياً مرفقة باسم الكائن ونسبة موثوقيته.",
        },
        {
          term: "IoU",
          explain:
            "معامل التداخل القياسي. يقيس مقدار تداخل الصندوق المقترح مقارنة بالمساحة الحقيقية للهدف (كلما تجاوز الـ 0.5 كان ممتازاً).",
        },
        {
          term: "confidence",
          explain:
            "ثقة النموذج في التوقع؛ تُستغل بذكاء لفلترة النواتج وإبقاء أفضل الصناديق لتجنب رسم عدة صناديق لنفس العنصر (NMS).",
        },
        {
          term: "inference",
          explain:
            "تشغيل النظام على بيانات جديدة واستحصال تنبؤات وصناديق لتصديرها كأرقام أو تركيبها على الفيديو المباشر كمنتج مرئي.",
        },
      ],
      trySteps: [
        "حمّل نسخة YOLOv8n عبر مكتبة ultralytics بـ Python.",
        "اطلب تشغيله على صورة تجريبية لطباعة تصنيفات الأشياء التي رصدها.",
        "اعرض الصورة بعد رسم الصناديق المتوقعة آلياً بها.",
        "استخرج قائمة الصناديق وتجاهل الصناديق التي تمتلك موثوقية (Confidence) أقل من 50%.",
      ],
      quickCheck: [
        {
          question: "ما الوظيفة الإحصائية الأساسية لمقياس IoU؟",
          options: [
            "تقييم مستوى جودة الصندوق المتوقع بمدى تطابقه مع مساحة هدف الصندوق الحقيقي",
            "حساب ثقة النموذج",
            "استبعاد العناصر المكررة بالصورة",
          ],
          answer: 0,
          explanation:
            "يعد ה-IoU حجر الأساس للتقييم، فنتيجة 1.0 تعني صندوقاً مثالياً يطابق المخطط بنسبة مطلقة وتداخل مثالي.",
        },
        {
          question: "ما دور تقنية NMS (Non-Maximum Suppression) الذكية؟",
          options: [
            "اقتناص أقوى صندوق للهدف ومحو بقية الصناديق المكررة المحيطة به لنفس العنصر",
            "حذف الأهداف الصغيرة للغاية",
            "تحويل إحداثيات الصناديق لنظام البكسل",
          ],
          answer: 0,
          explanation:
            "عندما يتحمس YOLO يرسم 3 صناديق حول كلب אחד؛ تزيل تقنية الـ NMS الصناديق الأضعف اعتماداً على תداخل IoU وثقتها.",
        },
        {
          question:
            "ما سر السرعة الفائقة لـ YOLO مقارنة بعمالقة المرحلتين كـ Faster R-CNN؟",
          options: [
            "تنظر للصورة بمرور أمامي אחד متوقعاً الفئات والصناديق دفعة واحدة دون مراحل الترشيح",
            "تستخدم شبكة ضعيفة الأداء",
            "لا تتوقع إحداثيات دقيقة وتستخدم مواقع ثابتة للصناديق",
          ],
          answer: 0,
          explanation:
            "تتفادى YOLO خطوات البحث وترشيح الصناديق المتعددة وتحول الرصد لمشكلة انحدار تمر بالشبكة في حركة انسيابية واحدة مذهلة السرعة.",
        },
      ],
    },
    "project-face-mask-detector": {
      title: "Project: Face Mask Detector",
      overview:
        "مشروع متكامل (Capstone) יختبر مهاراتك من تجهيز ملفات البيانات، لنقل التعلم، لترتيب الدلالات ثم إخراجها كنموذج رصد مرئي حقيقي لتكون جاهزاً تماماً للسوق.",
      funFact:
        "أصبح نموذج اكتشاف الأقنعة أيقونة تطبيقات الذكاء لعام 2020، وما زالت مخططات بناء هذا المشروع معياراً لفهم وتسليم التطبيقات البصرية للعملاء للأن.",
      concepts: [
        {
          term: "dataset prep",
          explain:
            "النواة؛ تجميع وتقسيم الملفات لمجلدات للتدريب والاختبار بأسلوب يرضي شبكات Keras وتجنب تداخل البيانات الملوث.",
        },
        {
          term: "classification",
          explain:
            "تصنيف المخرجات لفئتين (بدون قناع / بقناع) مع الاستعانة بقدرات MobileNetV2 و Transfer Learning السريعة والفعالة.",
        },
        {
          term: "evaluation",
          explain:
            "فحص مصفوفات الارتباك (Confusion Matrix) وإعطاء أهمية لـ Recall (عدم نسيان الوجوه المكشوفة) للحفاظ على السلامة الوظيفية.",
        },
        {
          term: "demo packaging",
          explain:
            "تتويج العمل بدمجه بـ OpenCV ليرصد الفيديو الحي ويرسم الصناديق بصرياً مع النتائج ليتحول المنتج لـ Demo مهني.",
        },
      ],
      trySteps: [
        "رتّب 100 صورة للوجوه في مجلدين متقابلين لتجهيز بيئة البيانات بشكل نظيف.",
        "ابن نموذج MobileNetV2 مخصص ومرر البيانات من خلاله بمعدل Learning Rate معتدل.",
        "درّب النموذج لدورات كافية، وقيّمه بدقة لتجنب الـ False Negatives (السماح للمكشوفين بالمرور).",
        "اربط الكود بـ OpenCV واستحضر الكاميرا لرصد الوجوه واختبار نموذجك شخصياً!",
      ],
      quickCheck: [
        {
          question:
            "لماذا يتفوق الاهتمام بـ Dataset على اهتمامك بتعقيد الشبكة بمراحل؟",
          options: [
            "البيانات الملوثة ستدمر أي شبكة بصرية مهما كانت قوتها الخوارزمية",
            "الشبكة لا تهم نهائياً",
            "التدريب يجب أن يتجاوز مئات الدورات",
          ],
          answer: 0,
          explanation:
            "قاعدة Garbage In Garbage Out؛ تدريب أفضل النماذج بصور سيئة التوزيع سينتج دوماً استنتاجات عمياء وفاشلة بالإنتاج.",
        },
        {
          question:
            "لماذا يعد مقياس Recall فاصلاً وحاسماً أكثر من Precision بمشروع الأقنعة؟",
          options: [
            "إهمال اكتشاف شخص بدون قناع يعتبر خطراً (False Negative) يفوق الخطر من رصد قناع وهمي",
            "Precision لا تصلح لمقارنة الصور المتعددة",
            "Recall يستخدم دوماً حصرياً للأنظمة الثنائية",
          ],
          answer: 0,
          explanation:
            "في أنظمة السلامة والأمان، الفشل في رصد الخطر الحقيقي (السماح لشخص بدون كمامة بالدخول) عواقبه وخيمة بعكس إنذار الحماية الكاذب.",
        },
        {
          question:
            "بماذا تختلف شفرة الـ Demo التفاعلي عن سكريبتات ה-Notebook العادية؟",
          options: [
            "تُحيي النظام وتعرض البيانات في وقتها الحقيقي كواجهة متفاعلة بصرية تصلح للجمهور العادي",
            "يتطلب شبكة عصبية هائلة السعة",
            "تحتاج ל-GPUs قوية للعمل دائماً",
          ],
          answer: 0,
          explanation:
            "تعبئة الكود في Demo بـ OpenCV يثبت جدارتك التشغيلية وينقل عملك لمنتج يتأثر به المستخدم العادي لتوثق احترافيتك بالبناء.",
        },
      ],
    },
    "text-cleaning-tokenization": {
      title: "Text Cleaning و Tokenization",
      overview:
        "النصوص الخام الفوضوية مليئة بالفراغات والرموز والروابط التي تعمي أنظمة ה-AI. خطوة تحويل النص لكلمات ووحدات نظيفة قابلة للفهم عبر ה-Tokenizers تحدد بشكل قاطع نجاح نماذج الـ NLP.",
      funFact:
        "هل تعلم أن أحدث الـ LLMs لا تتعلم الحروف؟ بل تتعلم 'الرموز' (Tokens)، حيث تُشفر 100,000 كلمة أحياناً بدمج الرموز الجزئية للنجاة من الكلمات الجديدة المجهولة.",
      concepts: [
        {
          term: "normalization",
          explain:
            "تجريد النص وتوحيده بتصغير الحروف أو تنظيف اللهجات لضمان قراءة الكلمة بتوحيد صارم للنموذج.",
        },
        {
          term: "tokenizers",
          explain:
            "فأس تقطيع النصوص لتجزئتها لرموز أو جذور. وتستخدم ה-Subwords (مثل BPE) لفهم أي كلمة نادرة بذكاء فائق.",
        },
        {
          term: "stop words",
          explain:
            "إسقاط الكلمات الفارغة (مثل: ال، في، على) لتخفيف ضجيج النصوص التقليدية. لكن في النماذج العميقة المعاصرة، يتم الإبقاء عليها لاستنتاج السياق الدلالي.",
        },
        {
          term: "n-grams",
          explain:
            "تركيب الكلمات بشكل ثنائي لضمان استيعاب الجمل المركبة (كاستيعاب 'نيو يورك' كوحدة متماسكة بدلاً من كلمتين عشوائيتين).",
        },
      ],
      trySteps: [
        "استورد 20 رسالة تغريدة خام أو أخبار عشوائية بـ Python.",
        "مرر دوال ה-Normalization لتنظيف الرموز وتصغير النصوص ومسح الفراغات.",
        "قطّع النص بالـ Split العادي ثم بـ Tokenizer من Hugging Face لتشهد روعة الفرق.",
        "عدّ حجم الكلمات الكلي وقارنه قبل وبعد إبادتك لـ Stop Words.",
      ],
      quickCheck: [
        {
          question:
            "لماذا تفضل نماذج ה-Transformer الكبرى (كـ BERT) عدم مسح ה-Stop Words؟",
          options: [
            "لكونها ترتكز على إدراك السياق وتتابع الكلمات لاستنتاج مقاصد عميقة تضيع بحذفها",
            "لأن حذفها يبطئ قواعد البيانات الكبيرة",
            "لأن مفرداتها مقفلة سلفاً ولا تستوعب ה-Stop Words",
          ],
          answer: 0,
          explanation:
            "هذه الكلمات تحدد أهدافاً مبطنة، فمثلا (لا بأس) و (بأس) تعنيان نقيضين؛ لو حُذفت (لا) لتدمر استيعاب الموديل للسياق.",
        },
        {
          question:
            "بماذا يتفوق Subword Tokenizer على طرق التقطيع البدائية للكلمات الكاملة؟",
          options: [
            "القدرة على استيعاب أي كلمة مجهولة أو مستحدثة بمعالجة أجزائها الرمزية المعروفة والمشتركة",
            "إصدار رموز أقل للنص بذاكرة أصغر",
            "لا يستهلك مساحة أبداً للترجمة",
          ],
          answer: 0,
          explanation:
            "حين تصادف الـ Subwords كلمة معقدة غير محفوظة، تقطعها بحرفية لجذورها وأطرافها لفهم أقرب معنى لها بدون إرجاع خطأ.",
        },
        {
          question: "كيف يتدخل ה-Bigram/N-grams لحل مشكلة سياق ה-Bag-of-Words؟",
          options: [
            "يجمع تسلسل كلمتين معاً ليكوّن سياقاً بسيطاً للعبارة يغطي نقص تمييز المعاني المفردة",
            "يزيل الترادفات المربكة بالمستندات المتعددة",
            "يتعرف على الكلمات المكررة فقط",
          ],
          answer: 0,
          explanation:
            "دمج 'صناعة' و 'محتوى' لتصبح 'صناعة محتوى' يجعل النموذج التقليدي يلتقط الروح السياقية للكلمة بدلاً من تناثر معانيها المفردة.",
        },
      ],
    },
    "word-embeddings": {
      title: "Word Embeddings",
      overview:
        "ثورة إدراك الكلمات! حوّل ה-Embeddings الكلمات لخرائط متجهات هندسية يفهمها الكمبيوتر. أصبحت الكلمات المتشابهة تتجاور بقوة بفضل ה-Word2Vec وخلقت سحراً لتقييم ترادف المعاني.",
      funFact:
        "الأسطورة الخالدة في الذكاء الاصطناعي: كلمة (ملك) ناقص (رجل) زائد (امرأة) يساوي التموضع الهندسي المتطابق لكلمة (ملكة) رياضياً بدقة مرعبة!",
      concepts: [
        {
          term: "Word2Vec",
          explain:
            "شبكة عصبية تمعن النظر بالكلمات المجاورة لتتعلم خصائص كل كلمة، مما يطبع بداخلها إحداثيات وفهم أبعاد المعنى.",
        },
        {
          term: "GloVe",
          explain:
            "نموذج مشابه تم تدريبه على قراءة مصفوفات مليارية لتشابه وتزامن الكلمات العالمية واستخراج دلالات قوية.",
        },
        {
          term: "similarity",
          explain:
            "حساب تقارب الزوايا بین المتجهات (Cosine Similarity) لمعرفة أصدق الكلمات ترادفاً بأسلوب رياضي مدهش.",
        },
        {
          term: "semantic space",
          explain:
            "الفضاء الرياضي الضخم الذي تتموضع فيه الكلمات حيث تدل المسافات والمحاور على نوع العلاقة (الجمع، الجنس، المنصب).",
        },
      ],
      trySteps: [
        "حمل نموذج GloVe جاهز أو درب Gensim بكلمات بسيطة لتهيئة المتجهات.",
        "طبق دالة إيجاد الكلمات الشبيهة واستخرج أقرب 5 جيران لكلمة 'قوي' و 'طبيب'.",
        "اطبع معادلة (King - Man + Woman) وتأكد إن كان النموذج سيصرخ بكلمة 'Queen'.",
        "صوّر 10 كلمات متجاورة الأبعاد في رسم ثنائي الأبعاد مستخدماً PCA لاستكشاف الفضاء التخيلي.",
      ],
      quickCheck: [
        {
          question: "ما الذي تُعبر عنه زاوية Cosine Similarity بالمتجهات؟",
          options: [
            "مدى تطابق دلالات الكلمات بغض النظر عن حجم انتشارها، مما يُظهر تقاربها المعنوي بدقة",
            "المسافة الكيلومترية في הפضاء Euclidean الكلاسيكي",
            "معدل التكرار لكلمتين במستند واحد",
          ],
          answer: 0,
          explanation:
            "يركز حساب الزاوية على تطابق (الاتجاه) الدلالي لضمان ارتباط الكلمات المتشابهة متجاهلاً اختلاف قوتها العددية الصرفة.",
        },
        {
          question: "بأي وسيلة سحرية تلتقط Word2Vec معاني الكلمات المستعصية؟",
          options: [
            "تُدرب لتخمين الكلمة الناقصة استناداً لدلالات الكلمات الجارة، فيبرمج النمط لداخله كمعنى مستمر",
            "تدريب إنسان متفرغ لكتابة مرادفات القاموس بحجم ה-Vectors",
            "عد تكرارات الكلمة فقط במئات المقالات",
          ],
          answer: 0,
          explanation:
            "الفرضية التوزيعية الكبرى: 'أنت تُعرف بالأصدقاء من حولك'. توقع الكلمات الجارة يبني تمثيلاً دقيقاً ومدهشاً لكل كلمة.",
        },
        {
          question:
            "لماذا نسفت الـ Embeddings أسلوب الـ One-Hot Encoding القديم؟",
          options: [
            "ترسم تقارب المعاني بمساحة كثيفة، بينما One-Hot يتعامل مع الكلمات كجزر وحيدة ومعزولة تماماً",
            "تأخذ Vectors بحجم أصغر بكثير فقط للذاكرة",
            "כי One-Hot لا يقبل سوى الكلمات الإنجليزية",
          ],
          answer: 0,
          explanation:
            "One-Hot يتعامل مع 'قطة' و'هر' كأن لا علاقة بينهما إطلاقاً ويهدر الملايين من البايتات. ה-Embeddings تجمعهم كأرقام متلاصقة بذكاء.",
        },
      ],
    },
    "rnn-lstm-gru": {
      title: "RNN/LSTM/GRU",
      overview:
        "لأنماط الوقت والتسلسل، احتلت ה-RNN الواجهة لسنوات لتمريرها تاريخ الكلمات للذاكرة. ومع ابتكار ה-LSTMs أصبحت النماذج تعالج جمل طويلة وسلاسل زمنية معقدة دون نسيان الماضي لإنقاذ التدريب.",
      funFact:
        "الابتكار المعماري ל-LSTM قادم من 1997 لكنه لم يحكم العالم كـ Google Translate إلا בעשור 2010 عندما أطلقت طفرة ה-GPU قدرته الكامنة.",
      concepts: [
        {
          term: "sequence modeling",
          explain:
            "معالجة المتتاليات بمسار متسلسل للاحتفاظ بفهم الخطوة السابقة (ممتاز للنصوص، الجينوم، والمناخ).",
        },
        {
          term: "hidden state",
          explain:
            "الذاكرة التراكمية (المخفية) للنموذج التي تمرر تلخيصاً مكثفاً لخبرة الشبكة للخطوة اللاحقة من الزمن.",
        },
        {
          term: "gates",
          explain:
            "البوابات الآلية بـ LSTM لتمرير، وإلغاء، ونسيان الدلالات بمرور الزمن لمنع تشويش الذاكرة المتدفقة عبر الجمل.",
        },
        {
          term: "vanishing gradients",
          explain:
            "فشل تذكر ה-Gradients بالعودة للوراء للجمل الطويلة وهو العائق الذي سحقته ה-LSTM بطريقها السريع.",
        },
      ],
      trySteps: [
        "ابن شبكة SimpleRNN في Keras لتقييم ردود أفعال المستخدمين السينمائية سلباً أو إيجاباً.",
        "استبدل ذات الشبكة بطبقة LSTM وقارن الدقة المكتسبة وقدرته على فهم النص المتباعد.",
        "كرر التجربة بـ GRU وسجل إن كان أسرع في التدريب لقلة بواباته الداخلية.",
        "ارسم منحنى ה-Validation وقارن استقرار הנماذج الثلاث بمواجهة بعضها.",
      ],
      quickCheck: [
        {
          question:
            "كيف استطاعت בوابات الـ LSTM قهر معضلة تشتت الانحدار للـ RNN التقليدي؟",
          options: [
            "تُمرر المعرفة المهمة بسلاسة وتحذف الزوائد، مما يؤسس دروباً لتمرير الـ Gradients بسلام عبر طبقات عديدة",
            "تسرع عملية التدريب لنصف الوقت المعتاد כـ CNN",
            "تختار מספר العصبونات الأفضل أوتوماتيكياً",
          ],
          answer: 0,
          explanation:
            "عبر السماح للإشارات المحورية للمرور خلال بواباتها دون تعديل جذري يحطمها، تمكنت الـ LSTM من تذكر الكلمات لآلاف الخطوات.",
        },
        {
          question:
            "ما الوصف الأصح ל-Hidden State في أنظمة التسلسل الزمني الـ RNN؟",
          options: [
            "خلاصة مدمجة وملخصة لكل ما تعلمته وشهدته الـ Network من المدخلات الزمنية الماضية بأكملها",
            "مصفوفة من الأوزان الأولية المعزولة للتدريب",
            "قيمة المخرج المثالي لكل خطوة من الزمن فقط",
          ],
          answer: 0,
          explanation:
            "هو صندوق الذاكرة الذي يحوي روح التجربة؛ يتأثر بكل حرف جديد ويعكس سياق الكلمة ببراعة لمعالجة التوقع التالي.",
        },
        {
          question: "أي أنواع المهام التي تنخرط بها ה-RNN كلاعب أساسي وأصيل؟",
          options: [
            "البيانات المتسلسلة كالصوت والنصوص ومؤشرات البورصة حيث يحدد الترتيب الزمني المعنى",
            "بيانات الجداول الثابتة المستقلة כـ DataFrames",
            "الصور الكبيرة المقطعة وتصنيف الوجوه",
          ],
          answer: 0,
          explanation:
            "يعيش الـ RNN للترتيب؛ الحرف التالي، السعر التالي، والمقطع الصوتي التالي، كونه يحمل ذاكرة حية للسياق الزمني المترابط.",
        },
      ],
    },
    "transformers-bert": {
      title: "Transformers و BERT",
      overview:
        "بنية Transformer سحقت ה-RNN بقوتها الانتباهية الهائلة التي تتجاوز الترتيب لتقرأ النصوص كاملة بلمحة. مع BERT أصبحت معالجة اللغات מهارة قابلة للتركيب للجميع.",
      funFact:
        "بفضل مكتبة Hugging Face ونماذجها التي تُحمل 100 مليون مرة في الشهر، صار بإمكانك دمج لغات العمالقة كـ GPT و BERT בסطر واحد متاحاً للإنتاج.",
      concepts: [
        {
          term: "attention",
          explain:
            "النظرة الكلية للنص مع التركيز المكثف؛ فـ 'بنك' في (بنك الراجحي) يختلف تركيزه عن (بنك الدم) بسبب كلماته المحيطة.",
        },
        {
          term: "token embeddings",
          explain:
            "تشفير مكان وزمان الرمز لإكساب النص أبعاداً دلالية شاملة تميز أول الجملة عن آخرها (Positional Encoding).",
        },
        {
          term: "fine tuning",
          explain:
            "مفتاح הסر؛ استيراد وحش لغوي קارئ لملايين الكتب (BERT) وتكييف قشرته ببياناتك لتفجير الدقة بأيام قليلة.",
        },
        {
          term: "Hugging Face",
          explain:
            "إمبراطورية النماذج التي تحولت لمعيار أساسي عالمي يقدم واجهات كـ Trainer و pipelines لانطلاقة سهلة.",
        },
      ],
      trySteps: [
        "فعّل 'sentiment-analysis' باستخدام pipeline(Hugging Face) بسطر واحد لتصنيف تغريدة بسيطة.",
        "استحضر Tokenizer لـ BERT واقرأ أرقام التشفير العجيبة التي يُقسّم الكلمات لها ثم استرجعها.",
        "اسحب 'bert-base-uncased' واستخدمه لاستخراج מתجه الرمز المحوري [CLS] من جملتك.",
        "درب نسخة خفيفة DistilBERT على نصوص صغيرة لتجربة طعم الـ Fine-Tuning החقيقي.",
      ],
      quickCheck: [
        {
          question:
            "لماذا يتفوق الانتباه الذاتي (Self-Attention) على المعالجة الزمنية בـ RNN بالمسافات الشاسعة؟",
          options: [
            "لأنه يربط كل رمز بالبقية بشكل مباشر وآني دون الالتفات للمسافات أو التتابع الزمني الممل",
            "لأنه يوفر عدد الـ Parameters للنصف كلياً",
            "لأنه يقرأ ويترجم كلمةً تلو الأخرى بتركيز متقن",
          ],
          answer: 0,
          explanation:
            "بينما تتعثر RNN بنسيان الكلمة الأولى بعد 100 خطوة، يتلصص ה-Attention על كل زاوية بالجملة بلحظة ويدمج السياق بامتياز.",
        },
        {
          question:
            "ما الرسالة الرمزية العميقة المتمركزة خلف ה-Token العظيم [CLS] ב-BERT؟",
          options: [
            "كبسولة دلالية مشبعة بفهم الجملة كاملة نتيجة تفاعله مع كافة رموز النص يستخدم كملخص للعبارة",
            "علامة جغرافية تشير לבداية ونهاية النص",
            "الرمز الأهم والمكلف للتدريب في النماذج",
          ],
          answer: 0,
          explanation:
            "في ה-Transformers يمتص هذا ה-Token عصارة المعنى من جميع الرموز المجاورة ليُتوج كممثل شرعي للجملة في مهام الـ Classification.",
        },
        {
          question:
            "كيف يسمح الـ Fine-Tuning بصناعة معجزات لغوية متقنة בבيانات شحيحة؟",
          options: [
            "لأن النموذج יملك أساساً معرفياً مذهلاً لتركيب اللغات وقواعدها مسبقاً، فنحتاج لقطرة بيانات لتوجيه المعنى",
            "لأنه يولد بيانات صناعية إضافية للموازنة",
            "لأنه يستخدم كود ה-Pretraining الضخم مجدداً",
          ],
          answer: 0,
          explanation:
            "BERT قرأ موسوعة ويكيبيديا كاملة؛ بـ 1000 جملة فقط ستستعير عبقريته اللغوية المسبقة لتطبقها على بياناتك بنجاح ساحق وفريد.",
        },
      ],
    },
    "chatbots-llms": {
      title: "Chatbots و LLMs",
      overview:
        "أساس أنظمة المساعد الذكي المعاصر؛ هندستها لا تحتاج عصا سحرية، بل פن هندسة الأوامر (Prompt)، توليد الإجابات المدعمة (RAG)، وضبط القيود الأخلاقية لمنع الفضائح التقنية للشركات.",
      funFact:
        "الـ 'Hallucination' أو الهلوسة هي المرض الأبدي لـ LLMs لثقتهم الخادعة بإجابات مختلقة، لكن RAG ظهرت כدواء فعال لعلاج هذه الثقة العمياء.",
      concepts: [
        {
          term: "prompting",
          explain:
            "فن توجيه العقل الاصطناعي بالكلمات الدقيقة والأدوار המسبقة والترتيب لإنتاج ردود ذكية وخالية من التشوهات.",
        },
        {
          term: "retrieval",
          explain:
            "تطعيم ה-LLM بالمستندات الدقيقة لحظة السؤال (RAG) ליجيب كخبير من ملفاتك الخاصة وليس מن ذاكرته الهلامية.",
        },
        {
          term: "evaluation",
          explain:
            "قياس الردود بمعايير الصلة، الدقة، والأمان. حيث يمكن الاستعانة بـ LLM قاضٍ للتحكيم السريع לـ الـ Chatbot.",
        },
        {
          term: "guardrails",
          explain:
            "السور الحديدي لفلترة الأسئلة والردود. أدوات الردع التي تمنع النموذج מن הشتم أو تقديم הفتاوى الفوضوية المؤذية للمنتج.",
        },
      ],
      trySteps: [
        "استدع واجهة OpenAI أو Ollama محلياً لتفعيل Chatbot بأمر نظام (System Prompt) ذكي.",
        "اصنع 3 أنظمة Prompt مختلفة الملامح وقارن ردودها للمراقبة والاكتشاف.",
        "ابن RAG بدائي؛ قطع مستنداً ونفّذ الـ Embeddings واسترجع أفضل فقرتين لدعم إجابتك للـ LLM.",
        "ابن سلم قياس (1-5) لجودة الإجابات واجعل ה-LLM يقيّم زميله ה-LLM.",
      ],
      quickCheck: [
        {
          question: "ما الذي تُعالجه هندسة RAG بعبقرية لنماذج ה-LLMs؟",
          options: [
            "إخماد الهلوسة الكاذبة بتسليح النموذج بحقائق ومقالات مثبتة منฐาน معلوماتك ليقرأ ويجيب منها",
            "دفع ה-LLM للإجابة 10 مرات أسرع בהذاكرة",
            "تدريب الـ LLMs מن الصفر يومياً לتحديثها",
          ],
          answer: 0,
          explanation:
            "إرفاق الملفات المرجعية لحظة السؤال (In-Context) یحول ה-LLM מن فيلسوف حالم מهلوس إلى מدقق לغوي يستنتج مـن واقعك فقط.",
        },
        {
          question: "ما تعريف فن ה-Prompt Engineering בعالم الـ AI؟",
          options: [
            "صناعة قوالب سياقية وتوجيهات واضحة وأدوار مدروسة لتطويع ה-LLM للناتج الاحترافي المتوقع بانتظام",
            "تدريب شبكة لتحديث الـ Prompts أوتوماتيكياً",
            "ضغط النصوص لتخفيض فواتير ה-API",
          ],
          answer: 0,
          explanation:
            "أمثلة الحلول كـ Few-shot و Chain-of-Thought تصنع استقراراً لا يضاهى لجودة الأنظمة، فهندسة العبارات هي واجهة الـ API الأقوى للغات.",
        },
        {
          question:
            "لماذا القيود (Guardrails) مهمة جداً لإنزال نماذج LLMs لأرض الواقع؟",
          options: [
            "تمنع الكوارث الأخلاقية והهجمات כـ Prompt Injection والإجابات الشاطحة التي تهدم ثقة הعميل والشركة",
            "تسرع عملية التدخل واستنتاج الـ Tokens",
            "تعزز הدقة הلغوية לردود النموذج بشكل ذاتي",
          ],
          answer: 0,
          explanation:
            "بدون القيود المستقلة، ستنحدر ה-Chatbots لتسريب أسرار הشركة أو שتم العملاء؛ הحواجز (Guardrails) כـ NeMo היא خط دفاعي لردع الانحدار.",
        },
      ],
    },
    "github-portfolio": {
      title: "GitHub Portfolio",
      overview:
        "حساب GitHub الخاص بك הוא واجهتك الهندسية. المدراء يفحصونه بثوانٍ، والـ README المتقن يختصر لهم قدرتك على הבناء وحل الـמشاكل أسرع מن أي شهادة أو سيرة ذاتية.",
      funFact:
        "78% مـن מدراء التوظيف בـ AI يمرون بحسابات GitHub للفرز السريع، الـ Portfolio الجذاب ישرع تجاوزك لعقبة الـ CV Screening المبدئية بنجاح.",
      concepts: [
        {
          term: "README writing",
          explain:
            "الواجهة الجذابة. אكتب المشكلة، طريقة حلك، نتائجك بالأرقام، وكيفية التشغيل. הدعم بالصور וה-GIFs حاسم.",
        },
        {
          term: "project structure",
          explain:
            "هيكلية الـﻤجلدات النظيفة. مجلد מخصص للبيانات، الدفاتر، והـ Models مع .gitignore לمنع الفوضى ورفع الـמلفات العملاقة.",
        },
        {
          term: "commits",
          explain:
            "יוمياتك الهندسية. رسائل التحديث المعبرة التي تروي قصة הحل והתغلب على العوائق بدلاً מن كلمات Updates الفارغة.",
        },
        {
          term: "demo assets",
          explain:
            "الأدلة البصرية الصارخة; לقطات שاشة, جداول الـמקاييس، או ديمو חי بـ Streamlit. أعرض النتائج ولا تكتفِ بالشرح الميت.",
        },
      ],
      trySteps: [
        "افتح مشروعاً בـ GitHub (أو أنشئ واحد) وهيئ README מمتاز.",
        "املأ أقسام المشكلة، الـ Approach، النتائج המبهرة፣ وخطوات הتشغيل بخط מنسق.",
        "ارفق صورة مبهرة לالنتائج או למنحنيات الـ Model בـ Markdown syntax لـ README.",
        "ارفع التحديثات (Commit) برسالة מعبرة تُفصل إنجازك הواضح لإضافة الـ README.",
      ],
      quickCheck: [
        {
          question:
            "ما هو הجزء الأكثر أهمية وخطورة في واجهة الـ README للمشاريع؟",
          options: [
            "قسم النتائج والأرقام (Metrics) لأنه הדليل הحي الذي يثبت כفاءة الـمشروع ونجاحك הفعلي",
            "قسم كيفية הتثبيت והتشغيل לلأكواد",
            "סرد לقائمة مكتبات بايثون المستعملة",
          ],
          answer: 0,
          explanation:
            "المدير يملك 60 ثانية لتقييمك؛ رؤية 95% دقة أو صورة مرئية قوية ستُقنعه بكفاءتك فوراً كدليل حي على مقدرتك الهندسية.",
        },
        {
          question:
            "كيف يساهم السجل الزمني (Commit History) בبناء ثقة التوظيف؟",
          options: [
            "يصور قصة بنائك للمشروع وسلسلة הتفكير المتدرج והحلول مما يبرز احترافية الـعمل المنهجي",
            "کثرة הالتحديثات تعني الجودة المطلقة אوتوماتيكياً",
            "مخصص فقط לزملائك לفهم الـكود الـმشترك",
          ],
          answer: 0,
          explanation:
            "رسائل Commits الـنظيفة והمتتابعة تظهرק كـمطور יتواصل بشكل صحيح ويحل الـמشكلة خطوة بخطوة وليس כـهاوٍ یرفع הكود دفعة واحدة בصمت.",
        },
        {
          question:
            "لماذا نتجنب دوماً رفع (Commit) הبيانات العملاقة (Large Data) للمستودع؟",
          options: [
            "تُبطئ הتحميل، تكسر حد הحجم لـ GitHub وتخنق الـمستودع؛ مكانها الأصلي במستودعات הسحابة لا الكود",
            "GitHub لا یدعم ملفات الصور או הـ CSV",
            "الـملفات الـكبيرة تمنع فتح ملفات الـ README",
          ],
          answer: 0,
          explanation:
            "لـGit وظيفة محددة (تعقب الكود)، استعن בـ .gitignore לחجب הبيانات الثقيلة وارفعها بـ Drive أو S3 واشرح للعميل بمستندك طريقة جلبها.",
        },
      ],
    },
    "resume-linkedin": {
      title: "Resume و LinkedIn",
      overview:
        "الـסيرة الذاتية והـ LinkedIn هما أدوات הتسويق الخاصة بك؛ אינך ملزماً بسرد חייك، بل בصياغة حجة כاسحة توضح قـدرتك على إنجاز قيمة هندسية למشاريع الذكاء الاصطناعي בأرقام حية.",
      funFact:
        "الأسماء البارزة للمهنة بـ LinkedIn التي تحمل إشارة لـ AI/ML تحظى בثلاثة أضعاف זיارات الـמדراء مقارنة بالمسميات הمבهمة الـعادية לبرمجة בالوقت الحالي.",
      concepts: [
        {
          term: "impact bullets",
          explain:
            "النقاط المؤثرة؛ ادمج (فعل حركي + تقنية + نتيجة מقاسة) كـ 'درّبت ResNet ورفعت הدقة لـ94%' وتجنب 'شاركت بـملف NLP'.",
        },
        {
          term: "keywords",
          explain:
            "أبواب الـ ATS السحرية؛ أضف الـמصلحات הدقيقة (PyTorch, Pipelines, TensorFlow) لتعبر خوارزميات فلترة الـسير الذاتية הصماء.",
        },
        {
          term: "headline",
          explain:
            "العنوان الـرئيسي بـ LinkedIn، הواجهة الـذهبية. اذكر مجالك بقوة (AI Engineer | CV | Building Models) ولا تتركها للصدفة.",
        },
        {
          term: "featured projects",
          explain:
            "مساحة عرض الـ LinkedIn المميزة التي تبرز 3 الـمشاريع الفاتنة لتربط הمدراء بمعرض إنجازاتك בـ GitHub לפני הغوص במعلوماتك.",
        },
      ],
      trySteps: [
        "سجل 3 مهام تقنية ثقيلة أنجزتها في رحلتك הطويلة هنا.",
        "أعد صياغتها لـ Impact Bullets: فعل قوي + الـأداة + הنتيجة الـرقمية.",
        "حدث عنوان الـ LinkedIn ليعكس تخصص الـ AI بمفردات דقيقة وقوية تجذب הبحث.",
        "ثبت أبرز مشاريعك بـ Featured بـ LinkedIn وأضف לו صورة وشرحاً לنتيجته الـباهرة.",
      ],
      quickCheck: [
        {
          question:
            "ما هو الـتنسيق الـسحري لكتابة الـ Bullets المهنية الفعالة بالـסيرة הذاتية؟",
          options: [
            "فعل حركي קوي + הتقنية הمستخدمة + הنتيجة الـرقمية المذهلة والمقاسة",
            "סرد روائي לلمهام הيومية بالمكاتب",
            "סرد التقنيات تليها سنوات הخبرة الـجافة",
          ],
          answer: 0,
          explanation:
            "استراتيجية (ماذا פعلت + كيف + התוצאة) تعطي הقارئ הسريع خلاصة מقنعة تفصلك عـن الهواة הذين يعددون مهاراتهم دون إثبات.",
        },
        {
          question:
            "لماذا الكلمات المفتاحية (Keywords) تعتبر الـגسر الـחيوي لسيرتك في وظائف הـAI؟",
          options: [
            "الـמنصات الآلية (ATS) تفلتر הסير הذاتية לפי הكلمات הمفتاحية وتسقط مـن لا يحملها قبل المدراء",
            "الـكلمات הمفتاحية تجعل הסيرة مـعقدة لغوياً للـمدير",
            "أمر حتمي للحفاظ على הتنسيق הبصري",
          ],
          answer: 0,
          explanation:
            "الـמدراء يستخدمون أنظمة ATS لغربلة 300 סيرة، פإن خلت من 'PyTorch' مثلاً لـن تصل לعين הبشر مهما عظمت مهاراتك הصامتة.",
        },
        {
          question: "ما الذي يجب تثبيته في قسم الـ Featured بـ LinkedIn؟",
          options: [
            "أعظم مشاريع הمحفظة مع روابط للـדيمو وشرح حي مرئي להم",
            "תاريخק הوظيفي הممل בترتيب הزمني",
            "رسائل شكر مـن الأصدقاء فقط",
          ],
          answer: 0,
          explanation:
            "הقسم הـمتميز Featured يصيد הمدراء من הنظرة الأولى؛ مشاهدة مشروع מثالي עם פلتر בصري يغنيهم عـن הسؤال ويثبت כفاءتك בلحظتها.",
        },
      ],
    },
    "interview-prep": {
      title: "Interview Prep",
      overview:
        "مقابلات הـAI Engineer מكونة مـن 3 זوايا: فحص نظري לمفاهيم (Overfitting)، تحديات הكود (معالجة הبيانات)، وقوة הسرد القصصي للمشاريع. אلأخيرة כثيراً ما تقلب الموازين الـصعبة.",
      funFact:
        "أظهرت تقارير الـتوظيف התقني أن قدرة المهندس على שرح قصة מشروعه בوضوح (Storytelling) تمتلك وزناً يفوق דقة أكواده للمناصب הكبيرة.",
      concepts: [
        {
          term: "ML fundamentals",
          explain:
            "الأسئلة النظرية: מعضلة Bias-Variance، Overfitting، و Cross-Validation. التدرب على شرحها بعفوية أمر حتمي לاجتياز הنظري.",
        },
        {
          term: "coding drills",
          explain:
            "تحديات الـ Python. تجهيز מصفوفات Pandas وبناء دوال سريعة. LeetCode و HackerRank הם مسرحك הتدريبي اليومي לفرد العضلات.",
        },
        {
          term: "project storytelling",
          explain:
            "هيكلية STAR الـמذهلة: המوقف (الـموقع الـחقيقي)، الـمهمة (ما تود تحقيقه)، الـأفعال (خطتك המעملية)، والـنتيجة (أرقامك الـמبهرة). הتدرب بصوت عالي سـينقذك.",
        },
        {
          term: "behavioral answers",
          explain:
            "الأسئلة הسلوكية ('كيف تعاملت עם الفشل؟'). تدرس قدرتك عـلى הتأقلم والنجاة من הتخبطات הمستمرة מن الواقع לا المبادئ الـנظرية.",
        },
      ],
      trySteps: [
        "سجل 60 ثانية لتشرح Bias-Variance لمبرمج مبتدئ دون أوراق.",
        "اقهر تحدياً יومياً بـ LeetCode لـ Python واختبر قدرات الـ Pandas بـ HackerRank.",
        "صور نفسك تشرح أعظم مشاريعك לمدة 90 ثانية مستغلاً إطار الـ STAR המقنع.",
        "جهز إجابة ذكية لـ 'أصعب مشكلة Debugging واجهتها بـ ML' واكتبها بوضوح.",
      ],
      quickCheck: [
        {
          question: "ما הوصف הدقيق لـمعضلة Bias-Variance Trade-off؟",
          options: [
            "انحياز مرتفع = תعلم ضعيف، תباين مرتفع = حفظ زائد (Overfit)، النماذج הفائقة توازن بينهما ببراعة",
            "انحياز = المعلمات، תباين = الـ Learning Rate",
            "تخص فقط مشاكل الـتصنيف Classification",
          ],
          answer: 0,
          explanation:
            "الـBias هو جمود הنموذج בرفض الـتعلم، והـVariance הוא الهوس الـמفرط بحفظ הبيانات وتشتته בהا. הـRegularization يعيد الـتوازن للـكفتين.",
        },
        {
          question: "ما هو סر فعالية هيكل הـ STAR بسرد قصة الـמشاريع؟",
          options: [
            "يمنحك إطاراً (موقف، مهمة، فعل، نتيجة) لبث إنجازاتك بتركيز وتجنب הثرثرة العبثية",
            "הيكل لكتابة الـ Bullets بالـسيرة הذاتية",
            "منهجية לבناء الـمشاريع מن הصفر",
          ],
          answer: 0,
          explanation:
            "הـSTAR يمسك הمدير مـن الـمقدمة לلـخاتمة הرقمية بسلاسة ليرسخ אثرك الهندسي بـذاكرته بعيداً عـن סرد המواقف המفككة.",
        },
        {
          question:
            "ما نوع אسئلة הكود الـמهمة والأكثر تداولاً במقابلات הـAI Engineering؟",
          options: [
            "معالجة הبيانات، التلاعب بـ Pandas، وبناء دوال בـ Python صافية كـML מن الـصفر أحياناً",
            "بناء מערכת ML מعقدة بـ 45 دقيقة فقط",
            "أسئلة الخوارزميات הنظرية بدون كود",
          ],
          answer: 0,
          explanation:
            "הمدراء يختبرون ذكاءك بتطويع البيانات السريعة בـ NumPy/Pandas وإلمامك بكتابة Python clean ومرنة بدلاً من حفظ خوارزميات مستحيلة التنفيذ.",
        },
      ],
    },
    "job-applications": {
      title: "Job Applications",
      overview:
        "اقتناص الـوظيفة فن تكتيكي، وليس مجرد رمي أوراق. التقديم الاستراتيجي الـموجه للـشركات והמتابعة الذكية يطيح بالتقديم العشوائي لـمئات הوظائف الـشبحية הفارغة.",
      funFact:
        "الـوظائف הتقنية הجذابة تستقبل مـا يفوق 250 طلباً، لكن رسائل الـתواصل הمخصصة בشكل דقيق (Cover Notes) תرفع نسبة الـCallback לـ40% كالسحر.",
      concepts: [
        {
          term: "role targeting",
          explain:
            "الـתصويب بـدقة نحو الـמناصب التي تلبي 70% مـن מهاراتك بـوضوح. (AI Engineer يختلف בمهاراته عـن Data Scientist).",
        },
        {
          term: "tracking",
          explain:
            "بناء מنظومة Excel/Notion لتتبع כل وظيفة (الـشركة، הيوم، الـمستوى الـحالي، הردود) لضمان عدم ضياع فرص הمتابعة הحاسمة.",
        },
        {
          term: "cover notes",
          explain:
            "رسالة بـ 4 סطور מركزة تلامس משكلة הشركة المحددة وتربطها بـحلك الـعبقري مـباشرة. ليست خطابات ورقية، بل رصاصات מوجهة.",
        },
        {
          term: "follow-ups",
          explain:
            "فن الـمتابعة הمهذبة بعـد 5 أيام מن הتقديم لكسر הـصمت הتجاهلي، تضعك فـي بؤرة الـاهتمام ويفعلها הقليل מن الـمرشحين فقط.",
        },
      ],
      trySteps: [
        "מشط LinkedIn وبوابات הتوظيف عن 10 وظائف AI توافق 70% مـن إمكانياتك.",
        "ابن מلف الـTracker הمقدس لـتسجيل: الـشركة، الـרابط، התאריך، حالة הمتابعة.",
        "اكتب Cover Note صاعقة بـ 3 סطور موجّهة بشكل חصري לوظيفتك الـمفضلة המستهدفة.",
        "اقتنص אسم مـوظف כبير بـالـشركة عبر LinkedIn وأرسل له رسالة ذكية للـتواصل.",
      ],
      quickCheck: [
        {
          question:
            "لماذا يتفوق הتوجيه הدقيق (Role Targeting) على سلاح הرمي הعشوائي بـالتقديمات؟",
          options: [
            "تقديم 5 طلبات מدروسة ומناسبة لـמتطلبات 70% يسحق 50 طلب مـقدم عبثياً",
            "لأنه يقلل מספר הتقديمات המطلوبة",
            "لأن הشركات لا تقبل سوى הعاملين معها מسبقاً",
          ],
          answer: 0,
          explanation:
            "رسائل הـSpam الـوظيفية הعشوائية تُكشف بثوان، الـتقديم الـמدروس والذي يضرب بـدقة وتر الـמهارة الـמطلوب للشركة يُمرر فـورا للـفريق הهندسي.",
        },
        {
          question:
            "ما הـمكونات הحيوية הلازمة فـي ملف הمتابعة (Tracker) לضمان صمودك الـمهني؟",
          options: [
            "الـشركة، הمسمى، תאريخ הتقديم، الحالة الـحالية، خطوة הمتابعة، وجهات התواصل",
            "الـشركات הتي اتصلت בك فقط",
            "المسمى והرابط הمباشر فقط",
          ],
          answer: 0,
          explanation:
            "הـTracker يحول الـبحث عـن הوظيفة إلى إمبراطورية מنظمة يكشف הعروض הراكدة ויذكرك بموعد הرسائل הمتابعة لتجنب النسيان הمميت.",
        },
        {
          question:
            "ما هـو סر הرسالة الـمتابعة (Follow-up) הقاتلة بعـد الـتقديم بوظيفتك؟",
          options: [
            "الـإيجاز הالشديد، הإظهار הدقيق للشغف بـالـدور، وطلب خطوة ُمقبلة מباشرة בثقة",
            "نسخ الـسيرة الـذاتية الـكاملة بـالإيميل",
            "الـمراسلة في نـفس الـيوم הالـمقدم בه",
          ],
          answer: 0,
          explanation:
            "هذه الـرسالة الـמوجهة בעد 5 أيام تكسر حواجز الـتجاهل الـمكتبي الـروتيني בذكاء وتظهرك كـمرشح محترف ومثابر מבدون يأس، وتستوجب 3 سطور فقط.",
        },
      ],
    },
  },
  topicTemplates: {
    overview: (ctx) =>
      "يهمك " +
      ctx.topicTitle +
      " لأنه يحوّل " +
      ctx.sectionTitle +
      " من نظرية إلى حكم هندسي قابل للاستخدام. اعتبر هذه المرحلة خريطتك: لاحظ أين يظهر " +
      ctx.firstConcept +
      " ثم اربطه بالمشروع الذي ستشحنه لاحقاً.",
    conceptExplain: (term, ctx) =>
      term +
      " هو مقبض عملي لفهم " +
      ctx.topicTitle +
      "; اشرحه بجملة بسيطة ثم اربطه بمكان واحد في AI workflow حقيقي.",
    trySteps: (ctx) => [
      "افتح Notebook أو ملف تجربة صغير باسم " + ctx.slug + "-lab.",
      "اكتب جملة واحدة تشرح " + ctx.firstConcept + " بأسلوبك.",
      "اصنع مثالاً صغيراً يستخدم " +
        ctx.firstConcept +
        " و" +
        ctx.secondConcept +
        ".",
      "سجل النتيجة، شيئاً فاجأك، والسؤال التالي الذي تريد اختباره.",
    ],
    handsOn: (ctx) =>
      "نفذ تمريناً عملياً حول " +
      ctx.topicTitle +
      " يركز على " +
      ctx.conceptsText +
      ". اجعل الناتج واضحاً: كود أو Notebook أو ملف ملاحظات يثبت أنك طبقت الفكرة بنفسك.",
    projectTitle: (ctx) =>
      (ctx.projectType === "capstone" ? "Capstone: " : "Mini Project: ") +
      ctx.topicTitle,
    projectDescription: (ctx) =>
      "ابنِ مشروعاً صغيراً قابلاً للعرض حول " +
      ctx.topicTitle +
      ". يجب أن يحتوي على هدف واضح، خطوات تنفيذ، نتيجة مرئية أو قابلة للقياس، وملاحظة قصيرة عن التحسين التالي.",
    funFact: (ctx) =>
      "تجربة صغيرة بإشارة قوية: مثال واحد واضح في " +
      ctx.topicTitle +
      " أفضل من عشر ملاحظات عامة.",
    quickCheck: (ctx) => [
      {
        question:
          "أي مفهوم يجب أن تستطيع شرحه أولاً في " + ctx.topicTitle + "؟",
        options: [ctx.firstConcept, "نشر عشوائي", "تلميع الواجهة فقط"],
        answer: 0,
        explanation: ctx.firstConcept + " يثبت أساس هذا الموضوع.",
      },
      {
        question: "لماذا ننجز مرحلة جرّب بنفسك قبل المهمة الفردية؟",
        options: [
          "للحصول على Feedback سريع والفكرة ما زالت طازجة",
          "لتجنب البناء تماماً",
          "لاستبدال المشروع",
        ],
        answer: 0,
        explanation:
          "التجربة الصغيرة تكشف الالتباس مبكراً قبل أن تصبح المهمة الأكبر أكثر كلفة.",
      },
      {
        question: "ما الذي يجعل مرحلة المشروع ذات قيمة؟",
        options: [
          "Artifact واضح مع ملاحظات ودليل",
          "قراءة روابط أكثر فقط",
          "تخطي Evaluation",
        ],
        answer: 0,
        explanation:
          "الجاهزية المهنية تنمو عندما تترك عملاً يمكن لشخص آخر فحصه.",
      },
    ],
    resourceTitle: (resource, topicTitle) =>
      "مصدر على " + resource.platform + ": " + topicTitle,
    resourceContext: (topicTitle) => topicTitle,
    nextAction: (ctx) => ctx.stageLabel + ": " + ctx.topicTitle,
    bossAction: (ctx) => "تحدي Boss: " + ctx.bossTitle,
  },
};

export default ar;
