import type { Locale } from './ui.ts';

export interface ContactDict {
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  status: {
    label: string;
    value: string;
    note: string;
  };
  channels: {
    eyebrow: string;
    title: string;
    items: {
      icon: string;
      iconBg: string;
      iconColor: string;
      title: string;
      desc: string;
      cta: string;
      ctaIcon: string;
      href: string;
      target?: string;
    }[];
  };
  tiers: {
    eyebrow: string;
    title: string;
    desc: string;
    items: {
      highlighted: boolean;
      badge: string;
      badgeCls: string;
      icon: string;
      title: string;
      sub: string;
      desc: string;
      features: string[];
      featureIcon: string;
      cta: string;
      ctaIcon: string;
      ctaCls: string;
      inquiry: string;
    }[];
  };
  form: {
    leftEyebrow: string;
    leftTitle: string;
    leftDesc: string;
    statsTitle: string;
    stats: { value: string; cls: string; label: string }[];
    file: string;
    code: string;
    imageAlt: string;
    imageLabel: string;
    fields: {
      fullName: string;
      fullNameRequired: string;
      fullNamePlaceholder: string;
      email: string;
      emailRequired: string;
      emailPlaceholder: string;
      inquiryLabel: string;
      inquiryRequired: string;
      inquiryOptions: { value: string; label: string }[];
      platformLabel: string;
      platformOptions: { value: string; label: string }[];
      dateLabel: string;
      datePlaceholder: string;
      messageLabel: string;
      messageRequired: string;
      messagePlaceholder: string;
      privacy: string;
      submit: string;
      sending: string;
      success: string;
      successSub: string;
    };
  };
  faq: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { icon: string; question: string; answer: string }[];
  };
}

const ar: ContactDict = {
  heroBadge: 'Open for Consultations & Collaborations',
  heroTitle: 'تواصل معي واحجز',
  heroTitleHighlight: 'استشارة تقنية',
  heroDesc:
    'سواء كان لديك استفسار حول الدورات والشروحات، رغبة في استشارة معمارية برمجية معقدة، أو اقتراح لمشروع وشراكة استراتيجية، باب النقاش مفتوح دائماً بأعلى معايير الدقة الهندسية.',
  status: {
    label: 'زمن الاستجابة التقديري',
    value: 'خلال 24 - 48 ساعة',
    note: 'جلسات عن بُعد عبر Google Meet / Discord',
  },
  channels: {
    eyebrow: 'قنوات الوصول المباشرة',
    title: 'تواصل عبر المنصة التي تفضلها',
    items: [
      {
        icon: 'smart_display',
        iconBg: 'bg-error-container',
        iconColor: 'text-error',
        title: 'قناة يوتيوب الرسمية',
        desc: 'لمتابعة الشروحات المباشرة، التمارين المعمارية، وطرح استفساراتكم البرمجية في قسم التعليقات.',
        cta: 'زيارة القناة',
        ctaIcon: 'arrow_forward',
        href: 'https://youtube.com',
        target: '_blank',
      },
      {
        icon: 'alternate_email',
        iconBg: 'bg-primary-fixed',
        iconColor: 'text-primary',
        title: 'البريد المهني المباشر',
        desc: 'مخصص لطلبات الاستشارات المؤسسية، عروض الشراكة التقنية، والتعاقدات الاستشارية المباشرة.',
        cta: 'contact@olomweb.com',
        ctaIcon: 'mail',
        href: 'mailto:contact@olomweb.com',
      },
      {
        icon: 'code',
        iconBg: 'bg-surface-container-high',
        iconColor: 'text-on-surface',
        title: 'مستودعات GitHub',
        desc: 'لمناقشة الأكواد المفتوحة، متابعة هندسة المشروعات، ومراجعة طلبات السحب (Pull Requests).',
        cta: 'استعراض الكود والـ PRs',
        ctaIcon: 'open_in_new',
        href: 'https://github.com',
        target: '_blank',
      },
      {
        icon: 'hub',
        iconBg: 'bg-secondary-fixed',
        iconColor: 'text-secondary',
        title: 'LinkedIn & منصة X',
        desc: 'للتواصل المهني، النقاشات البرمجية السريعة، وأحدث المقالات حول بنية النظم الحديثة.',
        cta: 'تواصل مهني مستمر',
        ctaIcon: 'share',
        href: 'https://linkedin.com',
        target: '_blank',
      },
    ],
  },
  tiers: {
    eyebrow: 'مسارات الاستشارة والتعاون',
    title: 'اختر المسار الأنسب لاحتياجك البرمجي',
    desc: 'جلسات متخصصة ومصممة بعناية لتقديم أعلى قيمة تقنية في أقل وقت ممكن.',
    items: [
      {
        highlighted: false,
        badge: 'للمطورين والمهندسين',
        badgeCls: 'bg-secondary-fixed text-on-secondary-fixed',
        icon: 'psychology',
        title: 'استشارة وتوجيه فردي',
        sub: '1-on-1 Mentorship & Code Review',
        desc: 'جلسة مكثفة تركز على مراجعة دقيقة لأكوادك، تحسين خيارات الـ Stack، وتوجيه مسارك المهني نحو هندسة البرمجيات المتقدمة.',
        features: [
          'فحص كود حي ومراجعة Clean Architecture',
          'تخطيط المسار الوظيفي وتجاوز المقابلات الهندسية',
          'مدة الجلسة: 60 دقيقة عبر Google Meet',
        ],
        featureIcon: 'check_circle',
        cta: 'طلب جلسة فردية',
        ctaIcon: 'arrow_forward',
        ctaCls: 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary',
        inquiry: 'mentorship',
      },
      {
        highlighted: true,
        badge: 'الشركات والفرق البرمجية',
        badgeCls: 'bg-white/20',
        icon: 'domain_verification',
        title: 'مراجعة معمارية وتطوير النظم',
        sub: 'Enterprise Architecture Review',
        desc: 'تقييم شامل ومستقل للبنية السحابية (Cloud Architecture)، مقاييس التوسع (Scalability)، وإعادة هيكلة التطبيقات المعقدة لخفض التكاليف وزيادة الأداء.',
        features: [
          'تدقيق بنية Microservices والـ APIs',
          'تقرير هندسي مكتوب يتضمن نقاط الاختناق والحلول',
          'جلسة نقاش مفتوحة مع الفريق التقني (90 دقيقة)',
        ],
        featureIcon: 'verified',
        cta: 'حجز استشارة معمارية',
        ctaIcon: 'bolt',
        ctaCls: 'bg-surface-container-lowest text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed',
        inquiry: 'architecture',
      },
      {
        highlighted: false,
        badge: 'منصات وشركات التقنية',
        badgeCls: 'bg-tertiary-fixed text-on-tertiary-fixed',
        icon: 'featured_play_list',
        title: 'رعاية وشراكة محتوى تقني',
        sub: 'Tech Content Sponsorship',
        desc: 'إعداد محتوى تدريبي عميق وأدلة عملية لأدواتك ومنتجاتك البرمجية، وعرضها لمجتمع المطورين والمهندسين عبر شبكة علوم وقناة اليوتيوب.',
        features: [
          'حلقات يوتيوب تطبيقية مبنية على حالات استخدام حقيقية',
          'أكواد برمجية ومستودعات مفتوحة مع الشروحات',
          'وصول مباشر لجمهور مهتم بالبرمجيات والحلول السحابية',
        ],
        featureIcon: 'check_circle',
        cta: 'مناقشة شراكة رعاية',
        ctaIcon: 'arrow_forward',
        ctaCls: 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary',
        inquiry: 'sponsorship',
      },
    ],
  },
  form: {
    leftEyebrow: 'تواصل مباشر',
    leftTitle: 'أرسل تفاصيل مشروعك أو استفسارك',
    leftDesc:
      'سواء كنت تواجه تحديات في إدارة الذاكرة، تصميم واجهات الـ APIs، أو تريد مقترح دورة متخصصة، اكتب لي بالتفصيل وسأرد عليك بخطة عمل مناسبة.',
    statsTitle: 'إحصاءات الدعم والمراجعات',
    stats: [
      { value: '40+', cls: 'text-primary', label: 'جلسة استشارية' },
      { value: '100%', cls: 'text-secondary', label: 'التزام بالمواعيد' },
      { value: '15+', cls: 'text-tertiary', label: 'مشروع مؤسسي' },
    ],
    file: 'ConsultationChannel.ts',
    code: `const meetingChannel = {
  platform: 'Google Meet' || 'Discord',
  timezone: 'Asia/Riyadh (UTC+3)',
  agenda: [
    'System Diagnostic',
    'Bottleneck Analysis',
    'Actionable Blueprints'
  ],
  status: 'Ready to connect'
};`,
    imageAlt:
      'مكتب تطوير حديث بشاشات منحنية عريضة تعرض محطات طرفية زرقاء ولوحة مفاتيح ميكانيكية مضيئة وفنجان قهوة بإضاءة صباحية طبيعية',
    imageLabel: 'مكتب التطوير ومختبر شبكة علوم التقني',
    fields: {
      fullName: 'الاسم الكامل',
      fullNameRequired: '*',
      fullNamePlaceholder: 'مثال: عبد الله السالم',
      email: 'البريد الإلكتروني',
      emailRequired: '*',
      emailPlaceholder: 'name@company.com',
      inquiryLabel: 'نوع الاستفسار أو الخدمة المطلوبة',
      inquiryRequired: '*',
      inquiryOptions: [
        { value: 'mentorship', label: 'جلسة توجيه فردي ومراجعة كود (1-on-1 Mentorship)' },
        { value: 'architecture', label: 'استشارة معمارية وتطوير سحابي للمؤسسات' },
        { value: 'sponsorship', label: 'رعاية تقنية أو شراكة محتوى (Sponsorship)' },
        { value: 'course_idea', label: 'اقتراح فكرة دورة جديدة أو سؤال فني' },
        { value: 'other', label: 'استفسار عام آخر' },
      ],
      platformLabel: 'المنصة المفضلة للاجتماع',
      platformOptions: [
        { value: 'meet', label: 'Google Meet (صوت وفيديو)' },
        { value: 'discord', label: 'Discord (مشاركة شاشة وصوت)' },
        { value: 'email_only', label: 'تواصل كتابي عبر البريد الإلكتروني فقط' },
      ],
      dateLabel: 'الوقت المقترح أو درجة الاستعجال',
      datePlaceholder: 'خلال هذا الأسبوع، عاجل، أو تاريخ محدد',
      messageLabel: 'تفاصيل الرسالة أو ملخص المشروع',
      messageRequired: '*',
      messagePlaceholder:
        'صف المشكلة التقنية، التقنيات المستخدمة في مشروعك (مثل Docker, Go, Node.js, Astro)، أو المحاور التي ترغب بالتركيز عليها خلال الاستشارة...',
      privacy:
        'جميع البيانات والأكواد المطروحة خلال الاستشارات مشمولة ببروتوكول سرية تامة (Non-Disclosure). لن يتم مشاركة أي سطر برمجي أو فكرة تجارية مع أي طرف ثالث.',
      submit: 'إرسال الرسالة وحجز الموعد',
      sending: 'جاري الإرسال...',
      success: 'تم استلام رسالتك بنجاح!',
      successSub: 'سأقوم بمراجعة التفاصيل والتواصل معك عبر البريد الإلكتروني لتأكيد الموعد والترتيبات.',
    },
  },
  faq: {
    eyebrow: 'وضوح وشفافية',
    title: 'الأسئلة الشائعة حول الاستشارات التقنية',
    desc: 'إجابات واضحة على كل ما يدور في ذهنك قبل بدء جلستنا التقنية معاً.',
    items: [
      {
        icon: 'contact_support',
        question: 'كيف تتم الجلسة وما هي المنصات المستخدمة؟',
        answer:
          'تُعقد الجلسات عبر Google Meet أو Discord حسب رغبتك. نقوم بمشاركة الشاشة، تشغيل أدوات فحص الأكواد، وتحليل المخططات المعمارية مباشرة وبشكل تفاعلي كامل.',
      },
      {
        icon: 'timer',
        question: 'كم تبلغ مدة الجلسة وهل يمكن تمديدها؟',
        answer:
          'الجلسات الفردية تتراوح عادة بين 60 إلى 75 دقيقة، بينما تستغرق الاستشارات المعمارية للمؤسسات 90 دقيقة وتتبعها مخرجات مكتوبة. يمكن الاتفاق على باقات مستمرة لدعم الفرق التقنية.',
      },
      {
        icon: 'security',
        question: 'هل أكواد مشروعي وبياناته في أمان؟',
        answer:
          'نعم وبشكل قاطع. نلتزم بأعلى معايير الأمان الرقمي واتفاقيات عدم الإفصاح (NDA). نوصي دوماً بعدم مشاركة أي مفاتيح تشفير أو كلمات سر خاصة بالإنتاج (Production Secrets).',
      },
      {
        icon: 'receipt_long',
        question: 'ما هي آلية الدفع والفوترة المعتمدة؟',
        answer:
          'يتم إرسال رابط تأكيد ودفع رسمي وفاتورة ضريبية بعد مراجعة تفاصيل الطلب وتحديد الوقت الملائم للطرفين، عبر بوابات دفع إلكترونية آمنة تدعم البطاقات البنكية والحوالات المباشرة.',
      },
    ],
  },
};

const en: ContactDict = {
  heroBadge: 'Open for Consultations & Collaborations',
  heroTitle: 'Get in touch & book a',
  heroTitleHighlight: 'technical consultation',
  heroDesc:
    'Whether you have a question about courses and tutorials, need a complex software architecture consultation, or want to propose a project and strategic partnership, the door is always open to the highest engineering standards.',
  status: {
    label: 'Estimated response time',
    value: 'Within 24 - 48 hours',
    note: 'Remote sessions via Google Meet / Discord',
  },
  channels: {
    eyebrow: 'Direct access channels',
    title: 'Reach me on your preferred platform',
    items: [
      {
        icon: 'smart_display',
        iconBg: 'bg-error-container',
        iconColor: 'text-error',
        title: 'Official YouTube channel',
        desc: 'Follow live tutorials, architectural exercises, and post your programming questions in the comments section.',
        cta: 'Visit the channel',
        ctaIcon: 'arrow_forward',
        href: 'https://youtube.com',
        target: '_blank',
      },
      {
        icon: 'alternate_email',
        iconBg: 'bg-primary-fixed',
        iconColor: 'text-primary',
        title: 'Direct professional email',
        desc: 'Reserved for enterprise consultation requests, technical partnership offers, and direct consulting contracts.',
        cta: 'contact@olomweb.com',
        ctaIcon: 'mail',
        href: 'mailto:contact@olomweb.com',
      },
      {
        icon: 'code',
        iconBg: 'bg-surface-container-high',
        iconColor: 'text-on-surface',
        title: 'GitHub repositories',
        desc: 'Discuss open-source code, follow project engineering, and review pull requests.',
        cta: 'Browse code & PRs',
        ctaIcon: 'open_in_new',
        href: 'https://github.com',
        target: '_blank',
      },
      {
        icon: 'hub',
        iconBg: 'bg-secondary-fixed',
        iconColor: 'text-secondary',
        title: 'LinkedIn & X platform',
        desc: 'Professional networking, quick programming discussions, and the latest articles on modern systems architecture.',
        cta: 'Continuous professional contact',
        ctaIcon: 'share',
        href: 'https://linkedin.com',
        target: '_blank',
      },
    ],
  },
  tiers: {
    eyebrow: 'Consultation & collaboration paths',
    title: 'Choose the path that fits your software needs',
    desc: 'Specialized sessions carefully designed to deliver the highest technical value in the least possible time.',
    items: [
      {
        highlighted: false,
        badge: 'For developers & engineers',
        badgeCls: 'bg-secondary-fixed text-on-secondary-fixed',
        icon: 'psychology',
        title: '1-on-1 Mentorship & Code Review',
        sub: 'استشارة وتوجيه فردي',
        desc: 'An intensive session focused on a meticulous review of your code, improving your stack choices, and steering your career toward advanced software engineering.',
        features: [
          'Live code review with Clean Architecture checks',
          'Career path planning and acing engineering interviews',
          'Session duration: 60 minutes via Google Meet',
        ],
        featureIcon: 'check_circle',
        cta: 'Request a 1-on-1 session',
        ctaIcon: 'arrow_forward',
        ctaCls: 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary',
        inquiry: 'mentorship',
      },
      {
        highlighted: true,
        badge: 'For companies & engineering teams',
        badgeCls: 'bg-white/20',
        icon: 'domain_verification',
        title: 'Enterprise Architecture Review',
        sub: 'مراجعة معمارية وتطوير النظم',
        desc: 'A comprehensive, independent assessment of cloud architecture, scalability metrics, and refactoring complex applications to cut costs and boost performance.',
        features: [
          'Audit of Microservices & APIs architecture',
          'Written engineering report with bottlenecks & solutions',
          'Open discussion session with the tech team (90 minutes)',
        ],
        featureIcon: 'verified',
        cta: 'Book an architecture consultation',
        ctaIcon: 'bolt',
        ctaCls: 'bg-surface-container-lowest text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed',
        inquiry: 'architecture',
      },
      {
        highlighted: false,
        badge: 'For tech platforms & companies',
        badgeCls: 'bg-tertiary-fixed text-on-tertiary-fixed',
        icon: 'featured_play_list',
        title: 'Tech Content Sponsorship',
        sub: 'رعاية وشراكة محتوى تقني',
        desc: 'Producing deep training content and practical guides for your tools and software products, showcased to a community of developers and engineers via OLOMWEB and the YouTube channel.',
        features: [
          'Applied YouTube episodes based on real-use cases',
          'Open-source code & repositories with explanations',
          'Direct access to an audience interested in software & cloud solutions',
        ],
        featureIcon: 'check_circle',
        cta: 'Discuss a sponsorship partnership',
        ctaIcon: 'arrow_forward',
        ctaCls: 'bg-surface-container hover:bg-primary hover:text-on-primary text-primary',
        inquiry: 'sponsorship',
      },
    ],
  },
  form: {
    leftEyebrow: 'Direct contact',
    leftTitle: 'Send your project details or inquiry',
    leftDesc:
      'Whether you face memory-management challenges, API design, or want a specialized course proposal, write to me in detail and I will reply with a suitable action plan.',
    statsTitle: 'Support & review statistics',
    stats: [
      { value: '40+', cls: 'text-primary', label: 'Consultation sessions' },
      { value: '100%', cls: 'text-secondary', label: 'Scheduled on time' },
      { value: '15+', cls: 'text-tertiary', label: 'Enterprise projects' },
    ],
    file: 'ConsultationChannel.ts',
    code: `const meetingChannel = {
  platform: 'Google Meet' || 'Discord',
  timezone: 'Asia/Riyadh (UTC+3)',
  agenda: [
    'System Diagnostic',
    'Bottleneck Analysis',
    'Actionable Blueprints'
  ],
  status: 'Ready to connect'
};`,
    imageAlt:
      'A clean modern desk setup with curved ultra-wide monitors showing blue coding terminals, glowing mechanical keyboard, and a hot cup of coffee with natural morning lighting',
    imageLabel: 'OLOMWEB development office & tech lab',
    fields: {
      fullName: 'Full name',
      fullNameRequired: '*',
      fullNamePlaceholder: 'e.g. Abdullah Al-Salem',
      email: 'Email address',
      emailRequired: '*',
      emailPlaceholder: 'name@company.com',
      inquiryLabel: 'Inquiry or required service type',
      inquiryRequired: '*',
      inquiryOptions: [
        { value: 'mentorship', label: '1-on-1 Mentorship & Code Review session' },
        { value: 'architecture', label: 'Architecture & cloud development consultation for enterprises' },
        { value: 'sponsorship', label: 'Tech sponsorship or content partnership' },
        { value: 'course_idea', label: 'Suggest a new course idea or a technical question' },
        { value: 'other', label: 'Other general inquiry' },
      ],
      platformLabel: 'Preferred meeting platform',
      platformOptions: [
        { value: 'meet', label: 'Google Meet (audio & video)' },
        { value: 'discord', label: 'Discord (screen share & audio)' },
        { value: 'email_only', label: 'Written contact via email only' },
      ],
      dateLabel: 'Proposed time or urgency level',
      datePlaceholder: 'Within this week, urgent, or a specific date',
      messageLabel: 'Message details or project summary',
      messageRequired: '*',
      messagePlaceholder:
        'Describe the technical problem, the technologies used in your project (e.g. Docker, Go, Node.js, Astro), or the topics you want to focus on during the consultation...',
      privacy:
        'All data and code raised during consultations is covered by a strict Non-Disclosure protocol. No line of code or business idea will ever be shared with any third party.',
      submit: 'Send message & book the appointment',
      sending: 'Sending...',
      success: 'Your message has been received successfully!',
      successSub: 'I will review the details and contact you by email to confirm the appointment and arrangements.',
    },
  },
  faq: {
    eyebrow: 'Clarity & transparency',
    title: 'Frequently asked questions about tech consultations',
    desc: 'Clear answers to everything on your mind before we start our technical session together.',
    items: [
      {
        icon: 'contact_support',
        question: 'How does the session work and which platforms are used?',
        answer:
          'Sessions are held via Google Meet or Discord as you prefer. We share the screen, run code-inspection tools, and analyze architectural diagrams live and fully interactively.',
      },
      {
        icon: 'timer',
        question: 'How long is the session and can it be extended?',
        answer:
          'One-on-one sessions typically range from 60 to 75 minutes, while enterprise architecture consultations take 90 minutes followed by written deliverables. Recurring packages are also available to support tech teams.',
      },
      {
        icon: 'security',
        question: 'Are my project code and data safe?',
        answer:
          'Yes, absolutely. We adhere to the highest digital security standards and Non-Disclosure Agreements (NDA). We always advise against sharing any encryption keys or Production Secrets.',
      },
      {
        icon: 'receipt_long',
        question: 'What is the approved payment and invoicing mechanism?',
        answer:
          'An official confirmation link, secure payment, and tax invoice are sent after reviewing the request details and agreeing on a time convenient for both parties, via secure payment gateways supporting bank cards and direct transfers.',
      },
    ],
  },
};

export const contactDict: Record<Locale, ContactDict> = { ar, en };