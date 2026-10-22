import type { Locale } from './ui.ts';

export interface PlaylistCard {
  img: string;
  alt: string;
  badge: string;
  episodes: string;
  duration: string;
  tag: string;
  title: string;
  desc: string;
}

export interface Flagship {
  icon: string;
  version: string;
  title: string;
  desc: string;
  tags: string[];
  cta: string;
}

export interface Bento {
  icon: string;
  title: string;
  target?: string;
  desc: string;
  chips?: string[];
  ex?: string;
  accent?: boolean;
}

export interface HomeDict {
  heroBadge: string;
  heroTitleA: string;
  heroTitleB: string;
  heroDesc: string;
  ctaWatch: string;
  ctaProjects: string;
  ctaConsult: string;
  microMetric: string;
  microMetricCode: string;
  founderBadge: string;
  founderTagline: string;
  terminalManifesto: string;
  terminalMission: string;
  terminalTarget: string;
  terminalPrinciples: string;
  terminalStatus: string;
  heroImageAlt: string;
  stats: { icon: string; value: string; label: string }[];
  playlists: {
    eyebrow: string;
    title: string;
    desc: string;
    browseAll: string;
    watchCourse: string;
    github: string;
    cards: PlaylistCard[];
  };
  projects: {
    eyebrow: string;
    title: string;
    desc: string;
    viewAll: string;
    flagships: Flagship[];
  };
  stack: {
    eyebrow: string;
    title: string;
    desc: string;
    light: string;
    lightDesc: string;
    items: Bento[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    readMore: string;
    missionLabel: string;
    missionQuote: string;
    imageAlt: string;
  };
  newsletter: {
    badge: string;
    title: string;
    desc: string;
    placeholder: string;
    subscribe: string;
    success: string;
    channelsTitle: string;
    channels: { icon: string; title: string; desc: string }[];
  };
}

const ar: HomeDict = {
  heroBadge: 'OLOMWEB // ARCHITECTURE & DEV',
  heroTitleA: 'مطوّر برمجيات، مهندس نظم، ومؤسس',
  heroTitleB: 'شبكة علوم OLOMWEB',
  heroDesc:
    'أبسّط أعقد مفاهيم الحوسبة السحابية، الذكاء الاصطناعي، وهندسة البرمجيات باللغة العربية. أصمم منصات سريعة وفائقة الكفاءة وأشارك الخبرة العملية خطوة بخطوة مع مجتمع المطورين العربي.',
  ctaWatch: 'شاهد دورات يوتيوب',
  ctaProjects: 'استعرض المشاريع',
  ctaConsult: 'احجز استشارة تقنية',
  microMetric: 'شروحات عملية مبنية على كود حقيقي ومعمارية',
  microMetricCode: 'Astro & Modern Cloud',
  founderBadge: 'FOUNDER @ OLOMWEB',
  founderTagline: 'المحتوى التقني بلا تعقيد',
  terminalManifesto: '~/olomweb/manifesto.ts',
  terminalMission: 'شبكة علوم',
  terminalTarget: 'عالمية التقنية بلغة عربية',
  terminalPrinciples: 'Performance, Architecture, Simplicity',
  terminalStatus: 'Shipping High Impact Videos',
  heroImageAlt:
    'مكتب استوديو برمجيات حديث متعدد الشاشات يعرض أكواداً بإضاءة أزرق ملكي وسماوي',
  stats: [
    { icon: 'visibility', value: '+1.9M', label: 'مشاهدة تعليمية على يوتيوب' },
    { icon: 'code_blocks', value: '+20', label: 'مشروع برمجـي مفتوح المصدر' },
    { icon: 'video_library', value: '+15', label: 'سلسلة تدريبية متكاملة' },
    { icon: 'verified', value: '99%', label: 'تقييم ومردود إيجابي للمجتمع' },
  ],
  playlists: {
    eyebrow: 'YOUTUBE CURRICULUM',
    title: 'شروحات ومسارات يوتيوب التقنية',
    desc: 'دورات تطبيقية عميقة بدون حشو؛ من أساسيات هندسة النظم حتى معالجة الذكاء الاصطناعي وبناء السحابة.',
    browseAll: 'تصفح كل القوائم على القناة',
    watchCourse: 'مشاهدة الدورة',
    github: 'GitHub',
    cards: [
      {
        img: '/images/course-cloud.png',
        alt: 'رسم معماري لشبكة سحابية بعقد وخطوط بيانات مضيئة بالأزرق الملكي والسماوي',
        badge: '14 حلقة',
        duration: '4.5 ساعات',
        tag: 'معمارية النظم & DevOps',
        title: 'معمارية الأنظمة السحابية والـ Microservices',
        desc: 'فهم توزيع الأحمال، الـ Caching المتدرج، وتطبيق معمارية خوادم مقاومة للأعطال.',
      },
      {
        img: '/images/course-ai.png',
        alt: 'شبكة عصبونية اصطناعية بخيوط بيانات سماوية على خلفية زرقاء داكنة',
        badge: '18 حلقة',
        duration: '6 ساعات',
        tag: 'ذكاء اصطناعي & بايثون',
        title: 'بناء تطبيقات الذكاء الاصطناعي مع Python',
        desc: 'ربط نماذج LLMs وتطوير وكلاء برمجيات أذكياء باستخدام LangChain و FastAPI.',
      },
      {
        img: '/images/course-web.png',
        alt: 'بيئة تطوير ويب فائقة الأداء مع أكواد Astro و TypeScript',
        badge: '12 حلقة',
        duration: '3.8 ساعات',
        tag: 'Full-Stack & Islands',
        title: 'احتراف Full-Stack: Astro & Next.js 15',
        desc: 'بناء مواقع فائقة السرعة مع Islands Architecture وتوليد الصفحات الثابتة الهجينة.',
      },
      {
        img: '/images/course-se.png',
        alt: 'سبورة هندسة برمجيات نظيفة بطبقات معمارية وأنماط تصميم',
        badge: '20 حلقة',
        duration: '7 ساعات',
        tag: 'الأسس الهندسية',
        title: 'أساسيات هندسة البرمجيات والتصميم النظيف',
        desc: 'تطبيق مبادئ SOLID، أنماط التصميم المعمارية Design Patterns، وكتابة كود نقي قابل للتطوير.',
      },
    ],
  },
  projects: {
    eyebrow: 'ENGINEERING WORK',
    title: 'مشاريع مفتوحة المصدر ومنصات إنتاجية',
    desc: 'مستودعات حية وأدوات هندسية تم إنشاؤها لخدمة وتطوير منظومة البرمجيات العربية.',
    viewAll: 'عرض جميع المشاريع (20+)',
    flagships: [
      {
        icon: 'rocket_launch',
        version: 'Production v2.4',
        title: 'محرك شبكة علوم السحابي',
        desc: 'منصة محتوى تقني فائقة السرعة مبنية على معمارية Astro Islands مع خوادم حافة Edge Caching لتقليل زمن الاستجابة لأقل من 30ms.',
        tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
        cta: 'استعراض المنصة الحية',
      },
      {
        icon: 'psychology',
        version: 'Open Source',
        title: 'حزمة معالجة اللغة العربية الذكية',
        desc: 'مكتبة Python وواجهة برمجية FastAPI متخصصة في تشكيل واستخلاص الكيانات وتحليل المشاعر للنصوص التقنية العربية.',
        tags: ['Python', 'FastAPI', 'PyTorch', 'Docker'],
        cta: 'تجربة واجهة الـ API',
      },
      {
        icon: 'terminal',
        version: 'CLI Tool',
        title: 'أداة النشر الآلي Olom-Deploy',
        desc: 'أداة سطر أوامر مكتوبة بلغة Go لمزامنة ونشر حاويات Docker وتطبيق سياسات الأمان لمشاريع الويب بنقرة واحدة.',
        tags: ['Golang', 'Docker', 'Kubernetes', 'GitHub Actions'],
        cta: 'توثيق الأداة وسجل الإصدار',
      },
    ],
  },
  stack: {
    eyebrow: 'TECHNICAL TOOLKIT',
    title: 'الترسانة التقنية والمهارات المعمارية',
    desc: 'أدوات وتقنيات تم اختيارها بعناية بناءً على الأداء العالي وموثوقية التشغيل في بيئات العمل الحقيقية.',
    light: 'تفضيل الحلول خفيفة الوزن',
    lightDesc: 'التركيز دائمًا على الأدوات المحلية السريعة التي لا تستهلك عتاد النظام وتمنح تحكماً كاملاً.',
    items: [
      {
        icon: 'devices',
        title: 'الواجهات وهندسة الأداء (Modern Web)',
        target: '100/100 Lighthouse Target',
        desc: 'التركيز على شحن صفر كيلوبايت جافاسكريبت غير ضروري باستخدام تقنيات توليد الصفحات الثابتة وجزر التفاعل (Astro Islands Architecture).',
        chips: ['Astro.js', 'React / Next.js', 'TypeScript', 'Tailwind CSS'],
        ex: 'Modern Web',
      },
      {
        icon: 'dns',
        title: 'النظم والخوادم',
        desc: 'بناء واجهات برمجية متزامنة وسريعة قادرة على خدمة ملايين الطلبات المتزامنة.',
        chips: ['Python', 'FastAPI', 'Golang', 'Node.js', 'PostgreSQL'],
        ex: 'Backend',
      },
      {
        icon: 'neurology',
        title: 'الذكاء الاصطناعي',
        desc: 'دمج النماذج اللغوية الكبيرة مع الأنظمة البرمجية الواقعية وحلول RAG متقدمة.',
        chips: ['LLM Pipelines', 'Vector DBs', 'LangChain', 'Prompt Eng'],
        ex: 'AI',
      },
      {
        icon: 'cloud',
        title: 'البنية التحتية والـ DevOps',
        target: 'Infra as Code',
        desc: 'إدارة الحاويات وأتمتة النشر عبر خطوط عمل مستمرة وضمان الحماية والتوسع الذاتي عند ذروة الاستخدام.',
        chips: ['Docker', 'Kubernetes', 'Linux Shell', 'CI/CD Pipelines'],
        ex: 'Cloud',
      },
      {
        icon: 'account_tree',
        title: 'المنهجية الهندسية',
        desc: 'أؤمن بأن كتابة الكود النظيف تبدأ قبل فتح المحرر، عبر الفهم العميق للبيانات، قيود النظام، وتجربة المستخدم النهائية بدون تزييف أو تعقيد زائف.',
        chips: ['Domain-Driven Design', 'Clean Code', 'TDD'],
        accent: true,
      },
    ],
  },
  philosophy: {
    eyebrow: 'THE PHILOSOPHY',
    title: 'لماذا أطلقت شبكة علوم؟ وكيف أصنع المحتوى؟',
    p1: 'لاحظت لسنوات طويلة وجود فجوة كبيرة في المحتوى البرمجي العربي؛ فالمحتوى إما موجه فقط للمبتدئين في أساسيات HTML، أو يفتقر إلى التطبيق المعماري الحقيقي المستخدم داخل الشركات العالمية الكبرى.',
    p2: 'تأسست شبكة علوم (OLOMWEB) لتكون المرجع التقني الصلب لكل من يريد تجاوز مرحلة "كتابة الأكواد البسيطة" إلى مرحلة "مهندس البرمجيات المحترف". أتعامل مع كل سطر كود وكل حلقة فيديو وكأنها توثيق رسمي لمشروع تجاري حقيقي.',
    f1Title: 'كود حي ومفتوح',
    f1Desc: 'كل شرح تقني يرافقه مستودع GitHub موثق وجاهز للاختبار فوراً.',
    f2Title: 'شروحات بدون مط أو حشو',
    f2Desc: 'احترام وقت المطور وتقديم لب الفكرة الهندسية مباشرة وبوضوح.',
    readMore: 'اقرأ المزيد عن سيرتي المهنية ورؤية شبكة علوم',
    missionLabel: 'رسالة شبكة علوم',
    missionQuote: '«المعرفة التقنية ليست رفاهية، بل هي عصب السيادة البرمجية العربية»',
    imageAlt: 'أيدي مبرمج تكتب أكواداً على لوحة مفاتيح ميكانيكية بإضاءة زرقاء',
  },
  newsletter: {
    badge: 'THE DEVELOPER DISPATCH',
    title: 'انضم لمجتمع شبكة علوم البرمجي',
    desc: 'نشرة بريدية أسبوعية تحتوي على مراجعات معمارية، شفرات مصدرية نادرة، وتنبيهات فورية عند نزول دورات يوتيوب الجديدة بدون أي إعلانات مزعجة.',
    placeholder: 'أدخل بريدك الإلكتروني المهني...',
    subscribe: 'اشترك الآن',
    success: 'تم اشتراكك بنجاح! نراك في النشرة القادمة.',
    channelsTitle: 'قنوات التفاعل المباشرة',
    channels: [
      { icon: 'smart_display', title: 'قناة يوتيوب الرئيسية', desc: 'شروحات فيديو ودورات برمجية كاملة' },
      { icon: 'send', title: 'مجتمع تيليجرام التقني', desc: 'نقاشات الكود وحلول المشكلات المعمارية' },
      { icon: 'code', title: 'مستودعات GitHub', desc: 'المشاريع المفتوحة ومكتبات الأكواد الحرة' },
    ],
  },
};

const en: HomeDict = {
  heroBadge: 'OLOMWEB // ARCHITECTURE & DEV',
  heroTitleA: 'Software Developer, Systems Engineer, and Founder of',
  heroTitleB: 'OLOMWEB Science Network',
  heroDesc:
    'I simplify the most complex concepts of cloud computing, AI, and software engineering in Arabic. I design fast, ultra-efficient platforms and share practical expertise step by step with the Arabic developer community.',
  ctaWatch: 'Watch YouTube Courses',
  ctaProjects: 'Browse Projects',
  ctaConsult: 'Book a Tech Consultation',
  microMetric: 'Hands-on tutorials built on real code and',
  microMetricCode: 'Astro & Modern Cloud',
  founderBadge: 'FOUNDER @ OLOMWEB',
  founderTagline: 'Technical content without complexity',
  terminalManifesto: '~/olomweb/manifesto.ts',
  terminalMission: 'Science Network',
  terminalTarget: 'Global tech in Arabic',
  terminalPrinciples: 'Performance, Architecture, Simplicity',
  terminalStatus: 'Shipping High Impact Videos',
  heroImageAlt: 'A modern software engineering studio desk with glowing navy, royal blue and cyan monitors',
  stats: [
    { icon: 'visibility', value: '+1.9M', label: 'Educational views on YouTube' },
    { icon: 'code_blocks', value: '+20', label: 'Open-source software projects' },
    { icon: 'video_library', value: '+15', label: 'Complete course series' },
    { icon: 'verified', value: '99%', label: 'Positive community feedback' },
  ],
  playlists: {
    eyebrow: 'YOUTUBE CURRICULUM',
    title: 'Technical tutorials and YouTube tracks',
    desc: 'Deep, practical courses without filler — from systems engineering foundations to AI processing and cloud building.',
    browseAll: 'Browse all playlists on the channel',
    watchCourse: 'Watch the course',
    github: 'GitHub',
    cards: [
      {
        img: '/images/course-cloud.png',
        alt: 'Futuristic cloud network architecture with luminous nodes in royal blue and cyan',
        badge: '14 episodes',
        duration: '4.5 hours',
        tag: 'Systems Architecture & DevOps',
        title: 'Cloud Systems & Microservices Architecture',
        desc: 'Understand load balancing, tiered caching, and fault-tolerant server architecture.',
      },
      {
        img: '/images/course-ai.png',
        alt: 'Abstract artificial intelligence neural network in cyan and deep blue',
        badge: '18 episodes',
        duration: '6 hours',
        tag: 'AI & Python',
        title: 'Building AI Applications with Python',
        desc: 'Connect LLM models and develop smart software agents with LangChain and FastAPI.',
      },
      {
        img: '/images/course-web.png',
        alt: 'High performance web development interface with Astro and TypeScript code',
        badge: '12 episodes',
        duration: '3.8 hours',
        tag: 'Full-Stack & Islands',
        title: 'Master Full-Stack: Astro & Next.js 15',
        desc: 'Build ultra-fast websites with Islands Architecture and hybrid static generation.',
      },
      {
        img: '/images/course-se.png',
        alt: 'Clean software engineering whiteboard with algorithm layers and design patterns',
        badge: '20 episodes',
        duration: '7 hours',
        tag: 'Engineering Foundations',
        title: 'Software Engineering & Clean Design Basics',
        desc: 'Apply SOLID principles, architectural design patterns, and write clean, scalable code.',
      },
    ],
  },
  projects: {
    eyebrow: 'ENGINEERING WORK',
    title: 'Open-source projects and production platforms',
    desc: 'Live repositories and engineering tools built to serve and advance the Arabic software ecosystem.',
    viewAll: 'View all projects (20+)',
    flagships: [
      {
        icon: 'rocket_launch',
        version: 'Production v2.4',
        title: 'OLOMWEB Cloud Engine',
        desc: 'An ultra-fast technical content platform built on Astro Islands architecture with Edge Caching servers reducing latency below 30ms.',
        tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
        cta: 'View the live platform',
      },
      {
        icon: 'psychology',
        version: 'Open Source',
        title: 'Arabic NLP Toolkit',
        desc: 'A Python library and FastAPI interface specialized in diacritization, entity extraction, and sentiment analysis of Arabic technical texts.',
        tags: ['Python', 'FastAPI', 'PyTorch', 'Docker'],
        cta: 'Try the API',
      },
      {
        icon: 'terminal',
        version: 'CLI Tool',
        title: 'Olom-Deploy CLI',
        desc: 'A Go-written command line tool for orchestrating Docker containers and enforcing security policies for web projects with one click.',
        tags: ['Golang', 'Docker', 'Kubernetes', 'GitHub Actions'],
        cta: 'View documentation & changelog',
      },
    ],
  },
  stack: {
    eyebrow: 'TECHNICAL TOOLKIT',
    title: 'The technical arsenal & architectural skills',
    desc: 'Tools and technologies carefully chosen for high performance and operational reliability in real production environments.',
    light: 'Lightweight solutions preferred',
    lightDesc: 'Always focused on fast local tooling that doesn\'t drain system resources and gives full control.',
    items: [
      {
        icon: 'devices',
        title: 'Frontend & Performance Engineering (Modern Web)',
        target: '100/100 Lighthouse Target',
        desc: 'Shipping zero unnecessary JavaScript using static generation and Astro Islands Architecture.',
        chips: ['Astro.js', 'React / Next.js', 'TypeScript', 'Tailwind CSS'],
        ex: 'Modern Web',
      },
      {
        icon: 'dns',
        title: 'Systems & Servers',
        desc: 'Building fast, concurrent APIs capable of serving millions of simultaneous requests.',
        chips: ['Python', 'FastAPI', 'Golang', 'Node.js', 'PostgreSQL'],
        ex: 'Backend',
      },
      {
        icon: 'neurology',
        title: 'Artificial Intelligence',
        desc: 'Integrating large language models into real-world systems with advanced RAG solutions.',
        chips: ['LLM Pipelines', 'Vector DBs', 'LangChain', 'Prompt Eng'],
        ex: 'AI',
      },
      {
        icon: 'cloud',
        title: 'DevOps & Cloud Infrastructure',
        target: 'Infra as Code',
        desc: 'Container management and automated deployment through continuous pipelines with protection and self-scaling at peak usage.',
        chips: ['Docker', 'Kubernetes', 'Linux Shell', 'CI/CD Pipelines'],
        ex: 'Cloud',
      },
      {
        icon: 'account_tree',
        title: 'Engineering Methodology',
        desc: 'I believe clean code starts before opening the editor — through deep understanding of data, system constraints, and the end user experience without imitation or fake complexity.',
        chips: ['Domain-Driven Design', 'Clean Code', 'TDD'],
        accent: true,
      },
    ],
  },
  philosophy: {
    eyebrow: 'THE PHILOSOPHY',
    title: 'Why did I launch OLOMWEB? And how do I create content?',
    p1: 'For years I noticed a big gap in Arabic programming content: it is either only aimed at beginners covering HTML basics, or it lacks the real architectural practice used inside major global companies.',
    p2: 'OLOMWEB (شبكة علوم) was founded to be the solid technical reference for anyone wanting to move from "writing simple code" to "professional software engineer". I treat every line of code and every video episode as official documentation of a real commercial project.',
    f1Title: 'Live & open code',
    f1Desc: 'Every technical explanation is accompanied by a documented GitHub repository ready to test immediately.',
    f2Title: 'No padding or filler',
    f2Desc: 'Respecting the developer\'s time and delivering the core engineering idea directly and clearly.',
    readMore: 'Read more about my career and OLOMWEB vision',
    missionLabel: 'OLOMWEB mission',
    missionQuote: '“Technical knowledge is not a luxury; it is the backbone of Arabic software sovereignty”',
    imageAlt: 'Hands of a programmer typing on a mechanical keyboard with blue glow',
  },
  newsletter: {
    badge: 'THE DEVELOPER DISPATCH',
    title: 'Join the OLOMWEB developer community',
    desc: 'A weekly email newsletter with architecture reviews, rare source snippets, and instant alerts when new YouTube courses drop — no annoying ads.',
    placeholder: 'Enter your professional email...',
    subscribe: 'Subscribe now',
    success: 'Subscribed successfully! See you in the next issue.',
    channelsTitle: 'Direct interaction channels',
    channels: [
      { icon: 'smart_display', title: 'Main YouTube channel', desc: 'Video tutorials and complete courses' },
      { icon: 'send', title: 'Technical Telegram community', desc: 'Code discussions and architectural solutions' },
      { icon: 'code', title: 'GitHub repositories', desc: 'Open source projects and free code libraries' },
    ],
  },
};

export const homeDict: Record<Locale, HomeDict> = { ar, en };