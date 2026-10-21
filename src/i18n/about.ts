import type { Locale } from './ui.ts';

export interface AboutDict {
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  discoverStory: string;
  devStack: string;
  metrics: { value: string; label: string; color: string }[];
  portraitAlt: string;
  portraitRole: string;
  portraitName: string;
  floatingTitle: string;
  floatingCode: string;
  narrative: {
    eyebrow: string;
    title: string;
    intro: string;
    quote: string;
    cards: { icon: string; iconBg: string; iconColor: string; title: string; desc: string; code: string; codeColor: string }[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { icon: string; iconBg: string; title: string; desc: string }[];
    domains: {
      icon: string;
      iconColor: string;
      title: string;
      pill: string;
      desc: string;
      footer: string;
      footerIcon: string;
      footerColor: string;
    }[];
  };
  timeline: {
    label: string;
    title: string;
    desc: string;
    items: {
      period: string;
      periodColor: string;
      stage: string;
      org: string;
      dot: string;
      itemTitle: string;
      desc: string;
      tags: string[];
    }[];
  };
  gear: {
    eyebrow: string;
    title: string;
    desc: string;
    prefTitle: string;
    prefDesc: string;
    items: { icon: string; iconColor: string; tag: string; tagBg: string; title: string; desc: string }[];
    studio: {
      label: string;
      title: string;
      desc: string;
      alt: string;
    };
  };
  speaking: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { icon: string; iconBg: string; iconColor: string; label: string; labelColor: string; title: string; desc: string; place: string; kind: string }[];
  };
  terminal: {
    badge: string;
    title: string;
    desc: string;
    fileName: string;
    copy: string;
    copied: string;
    code: string;
  };
  cta: {
    title: string;
    desc: string;
    contact: string;
    browseChannel: string;
    available: string;
    replyTime: string;
  };
}

const ar: AboutDict = {
  heroBadge: 'مهندس برمجيات • باحث معماري • صانع محتوى',
  heroTitle: 'عني وعن رحلتي في عالم التقنية والبرمجة',
  heroDesc:
    'مرحباً بك في زاويتي الرقمية. بدأت شغفي مع أول سطر برمجي كُتب لفهم كيف تفكر الآلة، وتطورت هذه الرحلة إلى التزام مهني بتشييد نظم رقمية فائقة الأداء، ونقل هذه الخبرات العميقة للمجتمع البرمجي العربي من خلال شبكة علوم (OLOMWEB).',
  discoverStory: 'اكتشف القصة والرسالة',
  devStack: 'بيئة التطوير والعتاد',
  metrics: [
    { value: '+8', label: 'سنوات خبرة هندسية', color: 'text-primary' },
    { value: '+150K', label: 'مشاهد مهتم بالبرمجة', color: 'text-secondary' },
    { value: '99.9%', label: 'معيار الجاهزية والصلابة', color: 'text-tertiary' },
  ],
  portraitAlt: 'صورة مهندس برمجيات عربي داخل استوديو تقني بألوان سماوية وزرقاء داكنة',
  portraitRole: 'المؤسس والمعماري الرئيسي',
  portraitName: 'شبكة علوم | OLOMWEB',
  floatingTitle: 'هندسة كود نظيف',
  floatingCode: 'Astro • Rust • Cloud Systems',
  narrative: {
    eyebrow: 'القصة والرسالة المؤسسية',
    title: 'لماذا أسست شبكة علوم؟',
    intro:
      'شهدت الساحة التقنية تراكماً هائلاً للمحتوى التمهيدي السريع الذي يكتفي بأسطح التقنيات دون النفاذ إلى عمقها الهندسي، ما أوجد فجوة بين المطور المبتدئ والمهندس القادر على إدارة مشاريع إنتاجية كبرى.',
    quote:
      '"البرمجة ليست مجرد كتابة شفرات تعمل، بل هي فن بناء أنظمة تصمد أمام الزمن وتتسع لأحجام بيانات هائلة دون التضحية بروح البساطة وسرعة الاستجابة."',
    cards: [
      {
        icon: 'psychology',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        title: 'الشغف بالعمق النظري والتطبيقي',
        desc: 'منذ بواكير اهتمامي بعلوم الحاسوب، لم يستهوِني مجرد استدعاء واجهات البرمجة (APIs) الجاهزة، بل فهمتُ إدارة الذاكرة، ميكانيكا الـ Event Loop، وكيفية توزيع الأحمال عبر المعالجات، وهو الأساس الذي أبني عليه كل أطروحاتي التعليمية والمهنية.',
        code: '01 // Architectural Depth',
        codeColor: 'text-primary',
      },
      {
        icon: 'cast_for_education',
        iconBg: 'bg-secondary/10',
        iconColor: 'text-secondary',
        title: 'رسالة شبكة علوم',
        desc: 'الدافع وراء إطلاق القناة والمنصة هو تقديم مرجع عربي هندسي غير مسبوق: دروس معمقة في تصميم النظم، بناء التطبيقات الحديثة باستخدام معمارية Astro الخالية من حزم الجافاسكربت الزائدة، وتفكيك المعضلات المعقدة بأسلوب تحليلي راقٍ.',
        code: '02 // Arabic Knowledge Impact',
        codeColor: 'text-secondary',
      },
      {
        icon: 'code_blocks',
        iconBg: 'bg-tertiary/10',
        iconColor: 'text-tertiary',
        title: 'الابتعاد عن السطحية التجارية',
        desc: 'نرفض ثقافة "تعلم لغة البرمجة في 10 دقائق". المحتوى هنا موجّه لمن يرغب في التأسيس الصحيح، كتابة الاختبارات الوظيفية الدقيقة (Unit & E2E Testing)، وصياغة كود نظيف يسهل قراءته وتطويره بعد سنوات.',
        code: '03 // High Engineering Rigor',
        codeColor: 'text-tertiary',
      },
      {
        icon: 'group_work',
        iconBg: 'bg-primary-container/10',
        iconColor: 'text-primary-container',
        title: 'المجتمع والمستقبل',
        desc: 'شبكة علوم ليست كياناً أحادياً، بل بيئة تفاعلية يلتقي فيها كبار المطورين والمتحمسين لتبادل الحلول التقنية، مراجعة الأكواد مفتوحة المصدر، وتكوين فرق عمل قادرة على قيادة المشهد التقني الإقليمي.',
        code: '04 // Collaborative Ecosystem',
        codeColor: 'text-primary-container',
      },
    ],
  },
  pillars: {
    eyebrow: 'الفلسفة الهندسية وميادين التخصص',
    title: 'ركائز العمل المعماري والمجالات الدقيقة',
    desc: 'نظرتي إلى التطوير تنطلق من ثلاثة أركان صلبة، مع تخصص دقيق في البنى الحديثة التي تجمع بين السرعة الفائقة والذكاء الاصطناعي والحماية الاستباقية.',
    items: [
      {
        icon: 'clean_hands',
        iconBg: 'bg-primary',
        title: 'كود نظيف وقابل للتوسع',
        desc: 'تطبيق مبادئ SOLID والمعمارية السداسية لضمان استقلالية طبقات العمل وسهولة تبديل المكونات التكنولوجية بدون إعادة كتابة النظام الأساسي.',
      },
      {
        icon: 'bolt',
        iconBg: 'bg-secondary',
        title: 'الأداء الفائق أولاً (Performance-First)',
        desc: 'صفر هدر في الموارد، تدفق فائق للبيانات على الـ Edge، واستخدام أدوات مثل Astro Islands لتفريغ حزم العميل وتقديم زمن استجابة صفري للواجهات.',
      },
      {
        icon: 'architecture',
        iconBg: 'bg-tertiary',
        title: 'البساطة في المعمارية',
        desc: 'محاربة التعقيد غير المبرر (Anti-Overengineering). المعمارية الذكية هي الأقل حركة والأقل نقاط إخفاق محتملة والأسهل في المراقبة والتشخيص.',
      },
    ],
    domains: [
      {
        icon: 'cloud_sync',
        iconColor: 'text-primary',
        title: 'هندسة النظم السحابية والموزعة',
        pill: 'K8s • AWS • Edge',
        desc: 'تصميم وبناء البنى السحابية التحتية الخالية من الخوادم (Serverless) والأنظمة المصغرة (Microservices)، مع تفعيل خطوط النشر المستمر (CI/CD) والمراقبة الحية للحوادث.',
        footer: 'معدل الاعتمادية السنوي',
        footerIcon: '99.98%',
        footerColor: 'text-primary',
      },
      {
        icon: 'devices',
        iconColor: 'text-secondary',
        title: 'تطوير الواجهات وتطبيقات الويب (Astro / SSR)',
        pill: 'Jamstack • Island Arch',
        desc: 'التخصص في بناء حلول الويب الحديثة بأعلى معايير الـ SEO وتجربة المستخدم السلسة، مع إتقان تقنيات الرندر على الخادم وتوليد المواقع الثابتة فائقة السرعة.',
        footer: 'Lighthouse Scores',
        footerIcon: '100/100',
        footerColor: 'text-secondary',
      },
      {
        icon: 'model_training',
        iconColor: 'text-tertiary',
        title: 'الذكاء الاصطناعي والتعلم الآلي',
        pill: 'LLMs • RAG • Vector DB',
        desc: 'دمج النماذج التوليدية في الأنظمة القائمة، وتصميم معمارية الاسترجاع المعزز بالتوليد (RAG)، واستخدام قواعد البيانات المتجهة لمعالجة وتحليل الاستعلامات الذكية.',
        footer: 'خطوط الربط: Python, Ollama, LangChain, Pinecone',
        footerIcon: 'smart_toy',
        footerColor: 'text-tertiary',
      },
      {
        icon: 'security',
        iconColor: 'text-primary',
        title: 'أمن المعلومات وحماية التطبيقات',
        pill: 'Zero-Trust • DevSecOps',
        desc: 'تطبيق استراتيجيات الأمان الصفرية (Zero-Trust Architecture)، التحقق من حزم التبعيات، تشفير الاتصالات الطرفية، ومراجعة الثغرات وفق معايير OWASP Top 10.',
        footer: 'معايير فحص الكود الحتمي وتشفير المفاتيح التلقائي',
        footerIcon: 'verified_user',
        footerColor: 'text-primary',
      },
    ],
  },
  timeline: {
    label: 'مسار التطور المهني',
    title: 'المحطات المحورية في مسيرتي التقنية',
    desc: 'تدرج تراكمي بين التخطيط المعماري، قيادة فرق البرمجيات للمؤسسات الكبرى، وتكريس الخبرة للمجتمع المعرفي العربي.',
    items: [
      {
        period: '2024 — حتى الآن',
        periodColor: 'text-primary',
        stage: 'التأسيس والريادة المعرفية',
        org: 'شبكة علوم | OLOMWEB',
        dot: 'bg-primary',
        itemTitle: 'إطلاق منصة وقناة شبكة علوم وبناء المجتمع التقني',
        desc: 'التفرغ لتوجيه المحتوى الهندسي العربي نحو المعايير العالمية. إنتاج سلاسل شروحات مرئية تفكك معمارية الويب الحديثة، إدارة السيرفرات الموزعة، ومناقشة أوراق بحثية برمجية، مع قيادة مجتمع يضم آلاف المطورين الشغوفين.',
        tags: ['إنتاج تقني متقدم', 'استشارات معمارية', 'مشاريع مفتوحة المصدر'],
      },
      {
        period: '2022 — 2024',
        periodColor: 'text-secondary',
        stage: 'قيادة الحلول المؤسسية',
        org: 'Lead Software Architect',
        dot: 'bg-secondary',
        itemTitle: 'قيادة فرق تطوير وبناء حلول سحابية للمؤسسات',
        desc: 'إدارة فرق هندسية متعددة التخصصات لبناء بوابات عملاقة ومعالجة قواعد بيانات فائقة الضخامة. الإشراف على انتقال الأنظمة القديمة (Legacy Systems) إلى معمارية السحاب الهجينة، وتقليل زمن التأخير بنسبة 45%.',
        tags: ['إدارة الفرق الهندسية', 'ترحيل السحابة (Cloud Migration)', 'تحسين الأداء'],
      },
      {
        period: '2019 — 2022',
        periodColor: 'text-tertiary',
        stage: 'هندسة النظم والبنية',
        org: 'Senior Systems Engineer',
        dot: 'bg-tertiary',
        itemTitle: 'مهندس برمجيات ونظم معمارية للمشاريع الكبيرة',
        desc: 'بناء وتأمين واجهات برمجة التطبيقات (APIs) الحساسة، إدارة حاويات Docker والـ Orchestration، وتنفيذ اختبارات الضغط الشديد لضمان تحمل ملايين الطلبات المتزامنة أثناء ذروة المواسم التجارية.',
        tags: ['Docker & Linux', 'معمارية الخدمات المصغرة', 'عالية الجاهزية (High Availability)'],
      },
    ],
  },
  gear: {
    eyebrow: 'ترسانة الأدوات والإنتاجية',
    title: 'ما استخدمه يومياً لإنجاز المشروعات',
    desc: 'أدوات مختارة بعناية لتحقيق أعلى معدلات الكفاءة، تقليل الاحتكاك الذهني أثناء كتابة الكود، وإطلاق المنتجات البرمجية بأسرع وتيرة ممكنة.',
    prefTitle: 'تفضيل الحلول خفيفة الوزن',
    prefDesc: 'التركيز دائمًا على الأدوات المحلية السريعة التي لا تستهلك عتاد النظام وتمنح تحكماً كاملاً.',
    items: [
      {
        icon: 'desktop_mac',
        iconColor: 'text-primary',
        tag: 'Hardware',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Apple Mac Studio (M2 Ultra)',
        desc: 'محطة العمل الرئيسية لتجميع مشاريع الـ Monorepo الكبرى، تدريب نماذج الذكاء الاصطناعي محلياً، ومونتاج فيديوهات الشروحات بجودة 4K.',
      },
      {
        icon: 'code',
        iconColor: 'text-secondary',
        tag: 'Editor',
        tagBg: 'bg-secondary-fixed text-on-secondary-fixed',
        title: 'VS Code & Neovim Keybindings',
        desc: 'محرر الكود الأساسي مدعوماً بتهيئة مخصصة خالية من الإضافات الثقيلة، مع ثيمات عالية التباين لحماية النظر خلال جلسات التطوير الطويلة.',
      },
      {
        icon: 'rocket_launch',
        iconColor: 'text-primary',
        tag: 'Framework',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Astro Web Architecture',
        desc: 'الإطار المفضل لجميع منصات المحتوى والمواقع التعريفية. يمنحنا سرعة خارقة عبر تقليص الجافاسكربت وتوفير بيئة تطوير رائعة.',
      },
      {
        icon: 'inventory_2',
        iconColor: 'text-tertiary',
        tag: 'DevOps',
        tagBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
        title: 'Docker & Podman',
        desc: 'عزل كامل لبيئات التطوير، ومحاكاة دقيقة لسيرفرات الإنتاج محلياً لضمان خلو التحديثات من أية مفاجآت عند الإطلاق.',
      },
      {
        icon: 'keyboard_command_key',
        iconColor: 'text-secondary',
        tag: 'Productivity',
        tagBg: 'bg-secondary-fixed text-on-secondary-fixed',
        title: 'Raycast Extensions',
        desc: 'مركز التحكم اللحظي بالاختصارات، إدارة الـ Clipboard، استدعاء التوثيقات التقنية، وإدارة مستودعات GitHub بضغطة زر.',
      },
      {
        icon: 'design_services',
        iconColor: 'text-primary',
        tag: 'Design',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Figma & Tokens Studio',
        desc: 'هندسة نظم التصميم (Design Systems) ومطابقة التوكنز بدقة مع Tailwind CSS قبل كتابة أي سطر كود للواجهات.',
      },
    ],
    studio: {
      label: 'البيئة الإبداعية',
      title: 'مساحة تجمع بين هدوء التفكير ودقة التنفيذ',
      desc: 'حيث تُسجل شروحات شبكة علوم، وتُختبر أحدث التقنيات البرمجية لتصل إليك بأوضح وأدق صورة ممكنة.',
      alt: 'محطة عمل مطور نظيفة بشاشتين منحنيتين 4K تعرضان أكواد Astro ومحطة طرفية',
    },
  },
  speaking: {
    eyebrow: 'التفاعل المباشر وإثراء المجتمع',
    title: 'المحاضرات، الورش والمشاركات العامة',
    desc: 'أؤمن بأن المعرفة تكتسب قيمتها الحقيقية بالتداول؛ لذا أشارك بانتظام كمتحدث في المؤتمرات التقنية وأقدم ورش عمل متخصصة.',
    items: [
      {
        icon: 'mic',
        iconBg: 'bg-primary-fixed',
        iconColor: 'text-primary',
        label: 'مؤتمرات تقنية',
        labelColor: 'text-primary',
        title: 'معمارية الويب الحديثة بلا حزم جافاسكربت',
        desc: 'مناقشة مستقبل الـ Island Architecture وكيف يمكن تقليل زمن الاستجابة في التطبيقات الضخمة عبر تفريغ المنطق الزائد عن متصفح المستخدم.',
        place: 'مؤتمر المطورين الإقليمي',
        kind: 'Keynote',
      },
      {
        icon: 'school',
        iconBg: 'bg-secondary-fixed',
        iconColor: 'text-secondary',
        label: 'ورش عمل مكثفة',
        labelColor: 'text-secondary',
        title: 'بناء البنى السحابية المرنة والموزعة',
        desc: 'تدريب تطبيقي حي استمر لثلاثة أيام مع نخبة من مهندسي النظم على كيفية إدارة الكلاستر وتفادي مشاكل الـ Cascading Failures.',
        place: 'أكاديمية التقنية المتقدمة',
        kind: '3 Days Hands-on',
      },
      {
        icon: 'forum',
        iconBg: 'bg-tertiary-fixed',
        iconColor: 'text-tertiary',
        label: 'لقاءات المجتمع (Meetups)',
        labelColor: 'text-tertiary',
        title: 'مراجعة الأكواد ومناقشة التحديات المعمارية',
        desc: 'جلسات دورية مفتوحة مع مجتمع شبكة علوم لمراجعة مشاريع المطورين، تقديم التوجيه المعماري (Code Reviews)، والإجابة عن الاستفسارات المتقدمة.',
        place: 'مجتمع شبكة علوم المباشر',
        kind: 'Monthly Live',
      },
    ],
  },
  terminal: {
    badge: 'olomweb-core-philosophy',
    title: 'كود صريح، أداء فوري، وبنية واضحة',
    desc: 'هذا المبدأ هو الذي يحكم كل مشروع نخرجه في شبكة علوم، سواء كان محتوى تعليمياً أو تطبيقاً سحابياً معقداً.',
    fileName: 'system-manifesto.ts',
    copy: 'copy',
    copied: 'تم النسخ!',
    code: `const architect = {
  name: "OLOMWEB Founder",
  priority: "Performance-First",
  stack: ["Astro", "Rust", "Cloud Native"],
  mantra: "Clear is better than clever.",
  execute() {
    return this.stack.deliverImpact();
  }
};
architect.execute();`,
  },
  cta: {
    title: 'هل ترغب في التعاون أو الاستفسار؟',
    desc: 'سواء كنت تبحث عن استشارة معمارية لمشروعك، أو ترغب في تنظيم ورشة عمل متخصصة لفريقك، أو تود المساهمة في محتوى شبكة علوم، يسعدني دائماً تواصلك.',
    contact: 'تفضل بالتواصل معي',
    browseChannel: 'تصفح محتوى القناة أولاً',
    available: 'متاح للاستشارات البرمجية المختارة',
    replyTime: 'متوسط الرد: خلال 24 ساعة',
  },
};

const en: AboutDict = {
  heroBadge: 'Software Engineer • Architecture Researcher • Content Creator',
  heroTitle: 'About me and my journey in technology & programming',
  heroDesc:
    'Welcome to my digital corner. My passion began with the first line of code written to understand how machines think, and that journey evolved into a professional commitment to build high-performance digital systems and pass on that deep expertise to the Arabic programming community through OLOMWEB (شبكة علوم).',
  discoverStory: 'Discover the story & mission',
  devStack: 'Dev environment & gear',
  metrics: [
    { value: '+8', label: 'Years of engineering experience', color: 'text-primary' },
    { value: '+150K', label: 'Programming-interested viewers', color: 'text-secondary' },
    { value: '99.9%', label: 'Reliability & robustness standard', color: 'text-tertiary' },
  ],
  portraitAlt: 'An Arab software engineer working in a high-tech minimal studio with cyan and navy ambient light',
  portraitRole: 'Founder & Lead Architect',
  portraitName: 'OLOMWEB | شبكة علوم',
  floatingTitle: 'Clean code engineering',
  floatingCode: 'Astro • Rust • Cloud Systems',
  narrative: {
    eyebrow: 'The founding story & mission',
    title: 'Why did I found OLOMWEB?',
    intro:
      'The tech scene accumulated a huge volume of quick, shallow introductory content that only skims technology surfaces without reaching their engineering depth, creating a gap between the beginner developer and the engineer capable of running big production projects.',
    quote:
      '"Programming is not just writing code that works; it is the art of building systems that withstand time and scale to massive data volumes without sacrificing simplicity and responsiveness."',
    cards: [
      {
        icon: 'psychology',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        title: 'Passion for theoretical & applied depth',
        desc: 'From the early days of my interest in computer science, I was never satisfied with merely calling ready-made APIs. I understood memory management, Event Loop mechanics, and how to distribute loads across processors — the foundation of all my educational and professional work.',
        code: '01 // Architectural Depth',
        codeColor: 'text-primary',
      },
      {
        icon: 'cast_for_education',
        iconBg: 'bg-secondary/10',
        iconColor: 'text-secondary',
        title: 'OLOMWEB mission',
        desc: 'The drive behind launching the channel and platform is to offer an unprecedented Arabic engineering reference: deep courses on systems design, modern app architecture with Astro free of bloated JavaScript bundles, and unraveling complex problems with refined analytical style.',
        code: '02 // Arabic Knowledge Impact',
        codeColor: 'text-secondary',
      },
      {
        icon: 'code_blocks',
        iconBg: 'bg-tertiary/10',
        iconColor: 'text-tertiary',
        title: 'Avoiding commercial shallowness',
        desc: 'We reject the culture of "learn a programming language in 10 minutes". The content here targets those who want proper foundations, precise unit & E2E testing, and clean code that stays readable and maintainable for years.',
        code: '03 // High Engineering Rigor',
        codeColor: 'text-tertiary',
      },
      {
        icon: 'group_work',
        iconBg: 'bg-primary-container/10',
        iconColor: 'text-primary-container',
        title: 'Community & the future',
        desc: 'OLOMWEB is not a single entity; it is an interactive ecosystem where senior developers and enthusiasts meet to exchange technical solutions, review open-source code, and form teams capable of leading the regional tech landscape.',
        code: '04 // Collaborative Ecosystem',
        codeColor: 'text-primary-container',
      },
    ],
  },
  pillars: {
    eyebrow: 'Engineering philosophy & fields of specialization',
    title: 'Architectural pillars & core domains',
    desc: 'My view of development starts from three solid pillars, with deep specialization in modern architectures that combine blazing speed, AI, and proactive security.',
    items: [
      {
        icon: 'clean_hands',
        iconBg: 'bg-primary',
        title: 'Clean & scalable code',
        desc: 'Applying SOLID principles and hexagonal architecture to ensure independent business layers and easy swapping of tech components without rewriting the core system.',
      },
      {
        icon: 'bolt',
        iconBg: 'bg-secondary',
        title: 'Performance-First',
        desc: 'Zero resource waste, superb data flow at the Edge, and tools like Astro Islands to strip client bundles for near-zero interface latency.',
      },
      {
        icon: 'architecture',
        iconBg: 'bg-tertiary',
        title: 'Simplicity in architecture',
        desc: 'Fighting unnecessary complexity (anti-overengineering). Smart architecture moves less, has fewer points of failure, and is easiest to monitor and diagnose.',
      },
    ],
    domains: [
      {
        icon: 'cloud_sync',
        iconColor: 'text-primary',
        title: 'Cloud & distributed systems engineering',
        pill: 'K8s • AWS • Edge',
        desc: 'Designing serverless cloud infrastructures and Microservices, enabling continuous deployment (CI/CD) and live incident monitoring.',
        footer: 'Annual reliability rate',
        footerIcon: '99.98%',
        footerColor: 'text-primary',
      },
      {
        icon: 'devices',
        iconColor: 'text-secondary',
        title: 'Frontend & web applications (Astro / SSR)',
        pill: 'Jamstack • Island Arch',
        desc: 'Specialized in modern web solutions at the highest SEO and UX standards, mastering server-side rendering and ultra-fast static site generation.',
        footer: 'Lighthouse Scores',
        footerIcon: '100/100',
        footerColor: 'text-secondary',
      },
      {
        icon: 'model_training',
        iconColor: 'text-tertiary',
        title: 'AI & machine learning',
        pill: 'LLMs • RAG • Vector DB',
        desc: 'Integrating generative models into existing systems, designing Retrieval-Augmented Generation (RAG) architectures, and using vector databases for smart query processing.',
        footer: 'Stack: Python, Ollama, LangChain, Pinecone',
        footerIcon: 'smart_toy',
        footerColor: 'text-tertiary',
      },
      {
        icon: 'security',
        iconColor: 'text-primary',
        title: 'Information security & app protection',
        pill: 'Zero-Trust • DevSecOps',
        desc: 'Applying Zero-Trust security strategies, dependency verification, end-to-end encryption, and vulnerability reviews against OWASP Top 10.',
        footer: 'Deterministic code scanning & automatic key encryption',
        footerIcon: 'verified_user',
        footerColor: 'text-primary',
      },
    ],
  },
  timeline: {
    label: 'Professional growth path',
    title: 'Key milestones in my technical career',
    desc: 'Accumulated progression from architectural planning to leading enterprise software teams, and dedicating expertise to the Arabic knowledge community.',
    items: [
      {
        period: '2024 — Present',
        periodColor: 'text-primary',
        stage: 'Foundation & knowledge leadership',
        org: 'OLOMWEB | شبكة علوم',
        dot: 'bg-primary',
        itemTitle: 'Launching the OLOMWEB platform & channel and building the tech community',
        desc: 'Full dedication to steering Arabic engineering content toward global standards — producing visual tutorial series unraveling modern web architecture, managing distributed servers, discussing software research papers, and leading a community of thousands of passionate developers.',
        tags: ['Advanced tech production', 'Architecture consulting', 'Open-source projects'],
      },
      {
        period: '2022 — 2024',
        periodColor: 'text-secondary',
        stage: 'Enterprise solutions leadership',
        org: 'Lead Software Architect',
        dot: 'bg-secondary',
        itemTitle: 'Leading development teams & building enterprise cloud solutions',
        desc: 'Managing multidisciplinary engineering teams building giant gateways and processing massive databases. Oversaw migrating legacy systems to hybrid cloud architecture, reducing latency by 45%.',
        tags: ['Engineering team leadership', 'Cloud Migration', 'Performance optimization'],
      },
      {
        period: '2019 — 2022',
        periodColor: 'text-tertiary',
        stage: 'Systems & architecture engineering',
        org: 'Senior Systems Engineer',
        dot: 'bg-tertiary',
        itemTitle: 'Software & architecture engineer for large projects',
        desc: 'Building and securing sensitive APIs, managing Docker containers and orchestration, and running intense load testing to guarantee handling millions of concurrent requests during peak commercial seasons.',
        tags: ['Docker & Linux', 'Microservices architecture', 'High Availability'],
      },
    ],
  },
  gear: {
    eyebrow: 'Tooling & productivity arsenal',
    title: 'What I use daily to ship projects',
    desc: 'Carefully selected tools for maximum efficiency, less mental friction while coding, and launching software products as fast as possible.',
    prefTitle: 'Lightweight solutions preferred',
    prefDesc: 'Always focused on fast local tooling that doesn\'t drain system resources and gives full control.',
    items: [
      {
        icon: 'desktop_mac',
        iconColor: 'text-primary',
        tag: 'Hardware',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Apple Mac Studio (M2 Ultra)',
        desc: 'The main workstation for compiling large monorepos, training AI models locally, and editing tutorial videos in 4K.',
      },
      {
        icon: 'code',
        iconColor: 'text-secondary',
        tag: 'Editor',
        tagBg: 'bg-secondary-fixed text-on-secondary-fixed',
        title: 'VS Code & Neovim Keybindings',
        desc: 'Core editor with a custom setup free of heavy extensions and high-contrast themes to protect your eyes during long sessions.',
      },
      {
        icon: 'rocket_launch',
        iconColor: 'text-primary',
        tag: 'Framework',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Astro Web Architecture',
        desc: 'Favored framework for all content platforms and showcase sites — insane speed by trimming JavaScript and a delightful dev experience.',
      },
      {
        icon: 'inventory_2',
        iconColor: 'text-tertiary',
        tag: 'DevOps',
        tagBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
        title: 'Docker & Podman',
        desc: 'Full isolation of dev environments and precise simulation of production servers locally so updates never surprise you at launch.',
      },
      {
        icon: 'keyboard_command_key',
        iconColor: 'text-secondary',
        tag: 'Productivity',
        tagBg: 'bg-secondary-fixed text-on-secondary-fixed',
        title: 'Raycast Extensions',
        desc: 'Instant control of shortcuts, clipboard management, technical docs lookup, and GitHub repository management at the press of a key.',
      },
      {
        icon: 'design_services',
        iconColor: 'text-primary',
        tag: 'Design',
        tagBg: 'bg-primary-fixed text-on-primary-fixed',
        title: 'Figma & Tokens Studio',
        desc: 'Engineering design systems and mapping tokens to Tailwind CSS precisely before writing any interface code.',
      },
    ],
    studio: {
      label: 'The creative environment',
      title: 'A space combining calm thinking and precise execution',
      desc: 'Where OLOMWEB tutorials are recorded and the latest tech is tested so it reaches you in the clearest, most accurate form possible.',
      alt: 'Ultra clean developer workstation with dual curved 4K monitors showing Astro code and a system terminal',
    },
  },
  speaking: {
    eyebrow: 'Direct engagement & community enrichment',
    title: 'Talks, workshops & public appearances',
    desc: 'I believe knowledge gains its real value in circulation; so I regularly speak at tech conferences and deliver specialized workshops.',
    items: [
      {
        icon: 'mic',
        iconBg: 'bg-primary-fixed',
        iconColor: 'text-primary',
        label: 'Tech conferences',
        labelColor: 'text-primary',
        title: 'Modern web architecture without JavaScript bundles',
        desc: 'Discussing the future of Islands Architecture and how to cut latency in huge apps by offloading excess logic from the user\'s browser.',
        place: 'Regional Developers Conference',
        kind: 'Keynote',
      },
      {
        icon: 'school',
        iconBg: 'bg-secondary-fixed',
        iconColor: 'text-secondary',
        label: 'Intensive workshops',
        labelColor: 'text-secondary',
        title: 'Building resilient distributed cloud architectures',
        desc: 'Three days of live hands-on training with elite systems engineers on cluster management and avoiding Cascading Failures.',
        place: 'Advanced Tech Academy',
        kind: '3 Days Hands-on',
      },
      {
        icon: 'forum',
        iconBg: 'bg-tertiary-fixed',
        iconColor: 'text-tertiary',
        label: 'Community meetups',
        labelColor: 'text-tertiary',
        title: 'Code reviews & architectural challenges',
        desc: 'Regular open sessions with the OLOMWEB community to review developers\' projects, provide architectural guidance, and answer advanced questions.',
        place: 'OLOMWEB live community',
        kind: 'Monthly Live',
      },
    ],
  },
  terminal: {
    badge: 'olomweb-core-philosophy',
    title: 'Explicit code, instant performance, clear structure',
    desc: 'This principle governs every project we ship at OLOMWEB — whether educational content or a complex cloud application.',
    fileName: 'system-manifesto.ts',
    copy: 'copy',
    copied: 'Copied!',
    code: `const architect = {
  name: "OLOMWEB Founder",
  priority: "Performance-First",
  stack: ["Astro", "Rust", "Cloud Native"],
  mantra: "Clear is better than clever.",
  execute() {
    return this.stack.deliverImpact();
  }
};
architect.execute();`,
  },
  cta: {
    title: 'Would you like to collaborate or ask?',
    desc: 'Whether you need an architecture consultation for your project, want to organize a specialized workshop for your team, or wish to contribute to OLOMWEB content — I am always happy to hear from you.',
    contact: 'Get in touch with me',
    browseChannel: 'Browse the channel content first',
    available: 'Available for selected software consultations',
    replyTime: 'Average reply: within 24 hours',
  },
};

export const aboutDict: Record<Locale, AboutDict> = { ar, en };