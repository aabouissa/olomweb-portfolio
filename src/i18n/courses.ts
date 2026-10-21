import type { Locale } from './ui.ts';

export interface CourseCardData {
  img: string;
  alt: string;
  bar: string;
  level: string;
  track: string;
  lessons: string;
  duration: string;
  tags: string[];
  title: string;
  desc: string;
  category: 'arch' | 'web' | 'ai' | 'starter';
}

export interface CoursesDict {
  heroBadge: string;
  heroYear: string;
  heroTitle: string;
  heroDesc: string;
  subscribe: string;
  repos: string;
  metrics: { icon: string; value: string; label: string; color: string }[];
  filtersTitle: string;
  filters: { key: string; label: string }[];
  watchYoutube: string;
  code: string;
  courses: CourseCardData[];
  gh: {
    eyebrow: string;
    title: string;
    desc: string;
    f1: string;
    f2: string;
    browse: string;
    pdf: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { quote: string; name: string; role: string; initial: string; color: string }[];
  };
  suggest: {
    eyebrow: string;
    title: string;
    desc: string;
    topicLabel: string;
    topicPlaceholder: string;
    fieldLabel: string;
    fields: { value: string; label: string }[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submit: string;
    success: string;
  };
  playLabel: string;
}

const ar: CoursesDict = {
  heroBadge: 'مكتبة المحتوى الهندسي المفتوح',
  heroYear: '2025',
  heroTitle: 'دوراتي وشروحاتي على يوتيوب',
  heroDesc:
    'مبادرة تعليمية توفر محتوى علمياً وتطبيقياً مجانياً لبناء قدرات الكوادر العربية في تكنولوجيا المعلومات والاتصالات، تكنولوجيا التعليم، معمارية الأنظمة، والذكاء الاصطناعي، اعتماداً على مشاريع حقيقية تُبنى من الصفر وحتى مرحلة التشغيل الفعلي.',
  subscribe: 'اشترك في القناة مجاناً',
  repos: 'المستودعات البرمجية',
  metrics: [
    { icon: 'subscriptions', value: '148K+', label: 'مشترك مهندس ومتعلم', color: 'text-primary' },
    { icon: 'schedule', value: '180+', label: 'ساعة شرح تطبيقي معمق', color: 'text-secondary' },
    { icon: 'terminal', value: '42+', label: 'مشروع كودي مفتوح المصدر', color: 'text-tertiary' },
    { icon: 'verified', value: '100%', label: 'مجاني للجميع بلا قيود', color: 'text-primary-container' },
  ],
  filtersTitle: 'تصفح الدورات وسلاسل الشروحات',
  filters: [
    { key: 'all', label: 'الكل (18)' },
    { key: 'ai', label: 'الذكاء الاصطناعي' },
    { key: 'arch', label: 'معمارية النظم والسحاب' },
    { key: 'web', label: 'تطوير الويب الكامل' },
    { key: 'starter', label: 'مسارات المبتدئين' },
  ],
  watchYoutube: 'شاهد على يوتيوب',
  code: 'كود المشروع',
  courses: [
    {
      img: '/images/course-microservices.png',
      alt: 'رسم هندسي لمصنّفات الميكروسيرفس الموزعة بخيوط بيانات مضيئة',
      bar: 'bg-secondary',
      level: 'متقدم',
      track: 'Architect Track',
      lessons: '16 درساً تطبيقياً',
      duration: '11 ساعة ونصف',
      tags: ['Microservices', 'Docker & K8s', 'Event-Driven'],
      title: 'دورة معمارية الميكروسيرفس والأنظمة الموزعة من الصفر',
      desc: 'بناء نظام تجاري موزع حقيقي بالاعتماد على Docker و Kubernetes و Kafka للاتصال غير المتزامن، مع تطبيق معايير الـ Saga Pattern وعزل قواعد البيانات والـ Observability.',
      category: 'arch',
    },
    {
      img: '/images/course-ssg.png',
      alt: 'واجهة تطوير ويب حديثة مع مخطط معمارية Astro Islands',
      bar: 'bg-primary-container',
      level: 'متوسط',
      track: 'Modern Web',
      lessons: '10 دروس',
      duration: '7 ساعات',
      tags: ['Astro 4.x', 'Tailwind CSS', 'Islands Tech'],
      title: 'تطوير تطبيقات الويب فائقة السرعة باستخدام Astro & Tailwind',
      desc: 'تعلم هندسة الجزر البرمجية (Islands Architecture)، شحن 0kb جافاسكربت إلى العميل، إدارة مجموعات المحتوى الاحترافية، وتحقيق علامة 100 كاملة في Google Lighthouse.',
      category: 'web',
    },
    {
      img: '/images/course-llm.png',
      alt: 'رسم شبكة عصبونية ومتجهات دلالية بلون أزرق ملكي وسماوي',
      bar: 'bg-tertiary-container',
      level: 'متقدم',
      track: 'Applied AI',
      lessons: '14 درساً',
      duration: '9 ساعات',
      tags: ['LangChain', 'ChromaDB', 'RAG Pipelines'],
      title: 'بناء تطبيقات النماذج اللغوية الضخمة ونظم RAG من الصفر',
      desc: 'شرح عملي لبناء محركات ذكاء اصطناعي تستند لوثائقك الخاصة، توليد المتجهات، ربط الـ Embeddings، وبناء مساعد ذكي متكامل مدعوم بـ Guardrails وتقييم جودة الإجابات.',
      category: 'ai',
    },
    {
      img: '/images/course-devops.png',
      alt: 'بنية خوادم سحابية وخط نشر مستمر CD/CI',
      bar: 'bg-secondary-container',
      level: 'متوسط إلى متقدم',
      track: 'Cloud & SRE',
      lessons: '18 درساً',
      duration: '14 ساعة',
      tags: ['Terraform', 'GitHub Actions', 'AWS VPC'],
      title: 'مسار مهندس DevOps والبيئات السحابية المتكامل',
      desc: 'أتمتة البنية التحتية ككود (Infrastructure as Code)، إعداد مسارات CI/CD آمنة ومتعددة المراحل، ومراقبة أداء الخوادم باستخدام Prometheus & Grafana.',
      category: 'arch',
    },
    {
      img: '/images/course-apis.png',
      alt: 'مخطط معماري خلفي عالي الأداء يوضح بروتوكولات Protobuf',
      bar: 'bg-primary',
      level: 'متوسط',
      track: 'Backend Mastery',
      lessons: '12 درساً',
      duration: '8 ساعات',
      tags: ['REST API', 'gRPC & Protobuf', 'Go / Node.js'],
      title: 'احتراف بناء واجهات برمجية عالية الكفاءة REST & gRPC',
      desc: 'مقارنة عملية شاملة بالأرقام ومعدل الاستجابة بين REST التقليدي و gRPC عبر HTTP/2، مع تطبيق التوثيق التلقائي، التخزين المؤقت، وحماية الـ Rate Limiting.',
      category: 'web',
    },
    {
      img: '/images/course-cs.png',
      alt: 'واجهة أسس علوم الحاسوب مع مخطط خوارزمي',
      bar: 'bg-secondary-fixed-dim',
      level: 'مبتدئ',
      track: 'Foundations',
      lessons: '22 درساً',
      duration: '15 ساعة',
      tags: ['Data Structures', 'Algorithms', 'Big O'],
      title: 'التفكير الخوارزمي وهياكل البيانات العملية للمطورين',
      desc: 'تفكيك المفاهيم المعقدة وتبسيطها مع أمثلة حية برمجية وحل تحديات برمجية واقعية لبناء أساس هندسي متين يؤهلك لاجتياز المقابلات التقنية الكبرى.',
      category: 'starter',
    },
  ],
  gh: {
    eyebrow: 'فلسفة المصدر المفتوح لشبكة علوم',
    title: 'كل سطر كود تشاهده في الفيديو متاح على GitHub برخصة مفتوحة',
    desc: 'نؤمن بأن التعلم البرمجي لا يكتمل بمجرد المشاهدة. لذلك يتم تنظيم كل حلقة وسلسلة تعليمية داخل مستودع منفصل يضم الشيفرة الكاملة، ملفات التكوين (Docker, Terraform)، وتفرعات لكل مرحلة من مراحل الدرس لتتمكن من التجربة والمقارنة الفورية.',
    f1: 'تفرعات منفصلة لكل حلقة (Git Branches)',
    f2: 'ملفات إعداد Docker جاهزة للتشغيل بضغطة زر',
    browse: 'تصفح منظمة GitHub',
    pdf: 'ملخصات الدروس PDF',
  },
  testimonials: {
    eyebrow: 'أثر المحتوى البرمجي',
    title: 'آراء المهندسين والمتابعين',
    desc: 'شهادات واقعية وتعليقات المطورين على شروحات القناة وكيف ساهمت في تطوير مسارهم المهني والعملي.',
    items: [
      {
        quote: '"دورة الميكروسيرفس هنا نقلت فهمي لهندسة الأنظمة لمستوى آخر تماماً. لم أجد محتوى عربي يقدم معمارية الأنظمة الموزعة بهذه الدقة الأكاديمية والواقعية البرمجية دون حشو نظري."',
        name: 'طارق العتيبي',
        role: 'مهندس برمجيات أول - الرياض',
        initial: 'ط',
        color: 'text-primary',
      },
      {
        quote: '"سلسلة الـ RAG والذكاء الاصطناعي مذهلة، طبقت المشروع كما هو في بيئة العمل لدينا في الشركة وحققنا نتائج فائقة في سرعة الاسترجاع الدلالي، شكراً على الجهد الاستثنائي."',
        name: 'نادية الدوسري',
        role: 'باحثة في هندسة النماذج التوليدية',
        initial: 'ن',
        color: 'text-secondary',
      },
      {
        quote: '"طريقة الشرح هادئة ومركزة على الكود مباشرة بدون مقدمات تضيع الوقت. أفضل ما يميز شبكة علوم هو تنظيم مستودعات GitHub لكل درس بالتفصيل."',
        name: 'يوسف بن منصور',
        role: 'مطور Fullstack - تونس',
        initial: 'ي',
        color: 'text-tertiary',
      },
    ],
  },
  suggest: {
    eyebrow: 'شارك في إثراء المحتوى',
    title: 'هل لديك موضوع تقني ترغب في أن أقدم عنه شرحاً؟',
    desc: 'شبكة علوم مبنية لأجلكم ومن أجل متطلباتكم التقنية المعاصرة. إذا كنت تواجه صعوبة في مفهوم معماري معين أو أداة برمجية جديدة، اقترح الموضوع لنضعه في خطة التسجيل القادمة.',
    topicLabel: 'عنوان الموضوع المقترح',
    topicPlaceholder: 'مثال: شرح مفصل لبروتوكول WebSocket و WebRTC',
    fieldLabel: 'التصنيف التقني',
    fields: [
      { value: 'arch', label: 'معمارية النظم وهندسة البرمجيات' },
      { value: 'ai', label: 'الذكاء الاصطناعي ونظم RAG' },
      { value: 'web', label: 'تطوير الويب الحديث (Astro / Frontend)' },
      { value: 'cloud', label: 'DevOps والسحابيات' },
      { value: 'other', label: 'موضوع تقني آخر' },
    ],
    detailsLabel: 'تفاصيل إضافية أو نقاط تود التركيز عليها',
    detailsPlaceholder: 'وضح المشكلة العملية التي تواجهها أو الأدوات التي ترغب برؤيتها في المشروع...',
    submit: 'إرسال الاقتراح للمراجعة',
    success: 'شكراً لك! تم استلام اقتراحك وسيتم تقييمه لإضافته في خطة المحتوى القادمة.',
  },
  playLabel: 'تشغيل السلسلة على يوتيوب',
};

const en: CoursesDict = {
  heroBadge: 'Open engineering content library',
  heroYear: '2025',
  heroTitle: 'My courses and tutorials on YouTube',
  heroDesc:
    'An educational initiative providing free scientific and applied content to build the capabilities of Arab talent in ICT, educational technology, systems architecture, and AI, driven by real-world projects built from scratch to production.',
  subscribe: 'Subscribe to the channel for free',
  repos: 'Code repositories',
  metrics: [
    { icon: 'subscriptions', value: '148K+', label: 'Engineer and learner subscribers', color: 'text-primary' },
    { icon: 'schedule', value: '180+', label: 'Hours of deep applied tutorials', color: 'text-secondary' },
    { icon: 'terminal', value: '42+', label: 'Open-source coding projects', color: 'text-tertiary' },
    { icon: 'verified', value: '100%', label: 'Free for everyone, no restrictions', color: 'text-primary-container' },
  ],
  filtersTitle: 'Browse courses and tutorial series',
  filters: [
    { key: 'all', label: 'All (18)' },
    { key: 'ai', label: 'Artificial Intelligence' },
    { key: 'arch', label: 'Systems & Cloud Architecture' },
    { key: 'web', label: 'Full-stack Web Development' },
    { key: 'starter', label: 'Beginner Tracks' },
  ],
  watchYoutube: 'Watch on YouTube',
  code: 'Project code',
  courses: [
    {
      img: '/images/course-microservices.png',
      alt: 'High-tech distributed microservices architecture schematic with luminous data lines',
      bar: 'bg-secondary',
      level: 'Advanced',
      track: 'Architect Track',
      lessons: '16 practical lessons',
      duration: '11.5 hours',
      tags: ['Microservices', 'Docker & K8s', 'Event-Driven'],
      title: 'Microservices & Distributed Systems Architecture from Scratch',
      desc: 'Build a real distributed business system with Docker, Kubernetes and Kafka for async communication, applying Saga Pattern, database isolation, and Observability standards.',
      category: 'arch',
    },
    {
      img: '/images/course-ssg.png',
      alt: 'Modern web development interface with Astro Islands architecture diagram',
      bar: 'bg-primary-container',
      level: 'Intermediate',
      track: 'Modern Web',
      lessons: '10 lessons',
      duration: '7 hours',
      tags: ['Astro 4.x', 'Tailwind CSS', 'Islands Tech'],
      title: 'Building Ultra-fast Web Apps with Astro & Tailwind',
      desc: 'Learn Islands Architecture, shipping 0kb of client JavaScript, professional content collections, and a full 100 score in Google Lighthouse.',
      category: 'web',
    },
    {
      img: '/images/course-llm.png',
      alt: 'Neural network and vector database embeddings concept in deep blue and cyan',
      bar: 'bg-tertiary-container',
      level: 'Advanced',
      track: 'Applied AI',
      lessons: '14 lessons',
      duration: '9 hours',
      tags: ['LangChain', 'ChromaDB', 'RAG Pipelines'],
      title: 'Building Large Language Model Apps & RAG Systems from Scratch',
      desc: 'Practical guide to building AI engines over your own documents — generating vectors, linking embeddings, and a complete smart assistant with Guardrails and answer quality evaluation.',
      category: 'ai',
    },
    {
      img: '/images/course-devops.png',
      alt: 'Cloud server infrastructure and CI CD continuous deployment pipeline',
      bar: 'bg-secondary-container',
      level: 'Intermediate to Advanced',
      track: 'Cloud & SRE',
      lessons: '18 lessons',
      duration: '14 hours',
      tags: ['Terraform', 'GitHub Actions', 'AWS VPC'],
      title: 'Complete DevOps Engineer & Cloud Environments Track',
      desc: 'Automate infrastructure as code, set up secure multi-stage CI/CD pipelines, and monitor server performance with Prometheus & Grafana.',
      category: 'arch',
    },
    {
      img: '/images/course-apis.png',
      alt: 'High performance backend architecture diagram with Protobuf protocols',
      bar: 'bg-primary',
      level: 'Intermediate',
      track: 'Backend Mastery',
      lessons: '12 lessons',
      duration: '8 hours',
      tags: ['REST API', 'gRPC & Protobuf', 'Go / Node.js'],
      title: 'Mastering High-efficiency REST & gRPC APIs',
      desc: 'A comprehensive numeric comparison of response rates between traditional REST and gRPC over HTTP/2, with auto-documentation, caching, and Rate Limiting protection.',
      category: 'web',
    },
    {
      img: '/images/course-cs.png',
      alt: 'Clean computer science foundations interface with algorithmic flowchart',
      bar: 'bg-secondary-fixed-dim',
      level: 'Beginner',
      track: 'Foundations',
      lessons: '22 lessons',
      duration: '15 hours',
      tags: ['Data Structures', 'Algorithms', 'Big O'],
      title: 'Algorithmic Thinking & Practical Data Structures for Developers',
      desc: 'Break down complex concepts with live coding examples and real challenges to build a solid engineering foundation for major technical interviews.',
      category: 'starter',
    },
  ],
  gh: {
    eyebrow: 'OLOMWEB open-source philosophy',
    title: 'Every line of code you watch is on GitHub under an open license',
    desc: 'We believe programming education is not complete by just watching. Therefore each episode and series lives in its own repository containing the full source, config files (Docker, Terraform), and a branch per lesson stage so you can experiment and compare instantly.',
    f1: 'Separate git branches for every episode',
    f2: 'One-click Docker setup files',
    browse: 'Browse the GitHub organization',
    pdf: 'Lesson summaries (PDF)',
  },
  testimonials: {
    eyebrow: 'Impact of the content',
    title: 'What engineers and followers say',
    desc: 'Real testimonials and developer comments on the channel\'s tutorials and how they helped their professional growth.',
    items: [
      {
        quote: '"The microservices course took my understanding of systems engineering to a completely new level. I have not found Arabic content presenting distributed systems architecture with this academic precision and real coding realism without theoretical padding."',
        name: 'Tariq Al-Otaibi',
        role: 'Senior Software Engineer - Riyadh',
        initial: 'T',
        color: 'text-primary',
      },
      {
        quote: '"The RAG and AI series is amazing. I applied the project as-is in our company environment and we achieved outstanding semantic retrieval speed. Thank you for the exceptional effort."',
        name: 'Nadia Al-Dosari',
        role: 'Generative model engineering researcher',
        initial: 'N',
        color: 'text-secondary',
      },
      {
        quote: '"The teaching style is calm and focused directly on code with no time-wasting intros. What best distinguishes OLOMWEB is organizing a GitHub repository for every lesson in detail."',
        name: 'Youssef Ben Mansour',
        role: 'Fullstack Developer - Tunisia',
        initial: 'Y',
        color: 'text-tertiary',
      },
    ],
  },
  suggest: {
    eyebrow: 'Contribute to the content',
    title: 'Have a technical topic you want me to explain?',
    desc: 'OLOMWEB is built for you and your modern technical needs. If you struggle with a certain architectural concept or a new tool, suggest the topic and we will add it to the upcoming recording schedule.',
    topicLabel: 'Suggested topic title',
    topicPlaceholder: 'e.g. A detailed explanation of WebSocket and WebRTC',
    fieldLabel: 'Technical category',
    fields: [
      { value: 'arch', label: 'Systems architecture & software engineering' },
      { value: 'ai', label: 'Artificial intelligence & RAG systems' },
      { value: 'web', label: 'Modern web development (Astro / Frontend)' },
      { value: 'cloud', label: 'DevOps & Cloud' },
      { value: 'other', label: 'Another technical topic' },
    ],
    detailsLabel: 'Additional details or points to focus on',
    detailsPlaceholder: 'Describe the practical problem you face or the tools you would like to see...',
    submit: 'Send the suggestion for review',
    success: 'Thank you! Your suggestion was received and will be evaluated for the upcoming content plan.',
  },
  playLabel: 'Play the series on YouTube',
};

export const coursesDict: Record<Locale, CoursesDict> = { ar, en };