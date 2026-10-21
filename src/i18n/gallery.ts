import type { Locale } from './ui.ts';

export interface GalleryDict {
  showTag: string;
  year: string;
  metaOpenSource: string;
  metaLighthouse: string;
  eyebrow: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string; icon: string; iconColor: string }[];
  filtersTitle: string;
  filters: { key: string; icon: string; label: string; count?: number }[];
  copyCmd: string;
  copied: string;
  projects: {
    span: string;
    category: string;
    badge: { text: string; cls: string };
    badge2?: { text: string; cls: string };
    badge3?: { text: string; cls: string };
    stars?: string;
    title: string;
    desc: string;
    tags: string[];
    image?: { src: string; alt: string; overlay: { left: string; right: string } };
    segment?: {
      label: string;
      latency: string;
      bars: { w: string; bg: string; title: string }[];
      foots: string[];
    };
    terminal?: { lines: { cls: string; text: string }[] };
    packageInfo?: { icon: string; name: string; cmd: string };
    cta: { icon: string; label: string; href: string }[];
    metaRight?: string;
    metaRightCls?: string;
  }[];
  architecture: {
    eyebrow: string;
    title: string;
    desc: string;
    items: { icon: string; iconColor: string; title: string; desc: string }[];
    status: string;
    flowLabel: string;
    tiers: { icon: string; title: string; sub: string; tag: string; tagCls: string; highlight?: boolean }[];
    footer: { label: string; value: string; cls: string }[];
  };
  github: {
    title: string;
    desc: string;
    metrics: { value: string; cls: string; label: string }[];
    follow: string;
    sponsor: string;
    handle: string;
  };
}

const ar: GalleryDict = {
  showTag: 'OLOMWEB::ENGINEERING_SHOWCASE',
  year: '2024–2025',
  metaOpenSource: '100% إنتاج فعلي ومفتوح المصدر',
  metaLighthouse: 'معيار أداء فائق (Lighthouse 100)',
  eyebrow: 'محفظة الأعمال البرمجية',
  title: 'معرض المشاريع والحلول التقنية',
  desc: 'خلاصة العمل الهندسي، الأنظمة الموزعة، ومبادرات المصدر المفتوح المصممة بهندسة برمجية نظيفة ودقة معمارية فائقة لصناع المحتوى والمهندسين العرب.',
  metrics: [
    { value: '18+', label: 'مشروع تقني ومستودع منشور', icon: 'terminal', iconColor: 'text-primary' },
    { value: '99.8%', label: 'كفاءة الأداء ونقاء الكود (Clean Arch)', icon: 'bolt', iconColor: 'text-secondary' },
  ],
  filtersTitle: 'تصفية المشاريع حسب النوع',
  filters: [
    { key: 'all', icon: 'apps', label: 'كافة المشاريع', count: 5 },
    { key: 'open-source', icon: 'public', label: 'مشاريع مفتوحة المصدر' },
    { key: 'web-systems', icon: 'dns', label: 'تطبيقات الويب والأنظمة' },
    { key: 'ai-solutions', icon: 'psychology', label: 'حلول الذكاء الاصطناعي' },
    { key: 'dev-tools', icon: 'build', label: 'أدوات ومكتبات للمطورين' },
  ],
  copyCmd: 'نسخ الأمر',
  copied: 'تم النسخ!',
  projects: [
    {
      span: 'md:col-span-12',
      category: 'open-source web-systems',
      badge: { text: 'Flagship Engine', cls: 'bg-primary/10 text-primary' },
      badge2: { text: 'Lighthouse 100/100', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
      badge3: { text: 'مكتمل ومُحدث', cls: 'text-outline' },
      title: 'منصة OLOMWEB Engine',
      desc: 'معمارية مدونة وبورتفوليو برمجية متقدمة مبنية بـ Astro و TailwindCSS مع دعم Markdown و MDX المخصص. صُممت لتحقيق زمن استجابة صفري على أجهزة الجوال مع أداء 100% كامل على مؤشرات Core Web Vitals ونظام تدويل RTL تلقائي فائق المرونة.',
      tags: ['Astro v4', 'TypeScript', 'TailwindCSS', 'MDX Compiler', 'Islands Arch'],
      image: {
        src: '/images/gallery-olomweb.png',
        alt: 'معاينة واجهة منصة OLOMWEB Engine مع مخطط هندسي للبرمجيات على حاسوب محمول عصري',
        overlay: { left: 'TTFB: 42ms | LCP: 0.6s', right: '100 / 100' },
      },
      cta: [
        { icon: 'rocket_launch', label: 'معاينة حية للمنصة', href: '#' },
        { icon: 'code', label: 'كود GitHub', href: '#' },
      ],
      metaRight: 'v2.4.0 • MIT License',
      metaRightCls: 'text-outline-variant',
    },
    {
      span: 'md:col-span-12 lg:col-span-7',
      category: 'ai-solutions',
      badge: { text: 'AI & Vector Embeddings', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
      stars: '420+ نجوم',
      title: 'RAG Arabic Semantic Search',
      desc: 'محرك بحث دلالي ومعالجة نصوص متطورة باللغة العربية لنظم الأسئلة والأجوبة (Q&A Retrieval-Augmented Generation). يعتمد استخراج الكيانات وتجزئة النصوص الصرفية لدعم المحتوى التقني والعلمي بكفاءة عالية وتقليل الهلوسات المعرفية.',
      tags: ['Python', 'Qdrant DB', 'FastAPI', 'PyTorch', 'Camel-BERT'],
      segment: {
        label: 'معمارية الـ Pipeline',
        latency: 'Latency < 140ms',
        bars: [
          { w: 'w-2/5', bg: 'bg-primary', title: 'Embedding Model' },
          { w: 'w-2/5', bg: 'bg-secondary-container', title: 'Vector Search' },
          { w: 'w-1/5', bg: 'bg-secondary', title: 'LLM Synthesis' },
        ],
        foots: ['Vectorization', 'Qdrant Search', 'Response'],
      },
      cta: [
        { icon: 'play_circle', label: 'تجربة النظام', href: '#' },
        { icon: 'schema', label: 'تفاصيل المعمارية', href: '#' },
      ],
    },
    {
      span: 'md:col-span-12 lg:col-span-5',
      category: 'open-source dev-tools',
      badge: { text: 'DevOps & Cloud FinOps', cls: 'bg-surface-container text-primary' },
      title: 'Cloud Cost & Metrics Inspector',
      desc: 'أداة سطر أوامر (CLI Tool) مفتوحة المصدر مكتوبة بلغة Go لمراقبة وتحليل نفقات البنية التحتية السحابية وتتبع هدر الموارد مع تصدير المقاييس إلى Grafana مباشرة.',
      tags: ['Go (Golang)', 'Docker', 'Grafana Exporter', 'Prometheus'],
      terminal: {
        lines: [
          { cls: 'text-secondary-fixed font-bold', text: '$ olom-cloud inspect --region eu-central' },
          { cls: 'text-emerald-400', text: '✔ Total clusters checked: 8' },
          { cls: 'text-secondary-container', text: '⚡ Monthly savings detected: $1,420' },
        ],
      },
      cta: [{ icon: 'terminal', label: 'عرض مستودع Go CLI', href: '#' }],
      metaRight: 'v1.1.2',
      metaRightCls: 'text-outline',
    },
    {
      span: 'md:col-span-12 lg:col-span-6',
      category: 'open-source web-systems',
      badge: { text: 'EdTech Platform', cls: 'bg-tertiary-fixed text-on-tertiary-fixed' },
      badge2: { text: 'مفتوح المصدر بالكامل', cls: 'text-outline' },
      title: 'نظام إدارة التعلم التفاعلي',
      desc: 'نموذج LMS مصغر ومفتوح المصدر للمؤسسات التدريبية والمدربين المستقلين. يتضمن نظام امتحانات برمجية تفاعلية ومحرر كود مضمن ونظام تتبع لإنجاز الطلاب مع تحليلات لحظية.',
      tags: ['Next.js 14', 'PostgreSQL', 'Prisma ORM', 'Monaco Editor'],
      image: {
        src: '/images/gallery-lms.png',
        alt: 'واجهة نظام تعليم إلكتروني تفاعلي بوحدات عربية ولوحات متابعة لتقدم الطلاب بتصميم أزرق داكن ملكي',
        overlay: { left: '', right: '' },
      },
      cta: [
        { icon: 'visibility', label: 'معاينة النظام التجريبي', href: '#' },
        { icon: 'arrow_outward', label: 'كود المصدر', href: '#' },
      ],
    },
    {
      span: 'md:col-span-12 lg:col-span-6',
      category: 'dev-tools open-source',
      badge: { text: 'NPM Package', cls: 'bg-surface-container text-primary' },
      badge2: { text: '12k+ Downloads', cls: 'text-secondary font-bold' },
      title: 'مكتبة Arabic UI Tokens',
      desc: 'حزمة توكنز ومكونات برمجية وأنماط تصميم مهيأة للغة العربية و RTL تدعم معايير التوافق البصري المزدوج ومقاييس الخطوط المتناسبة مع اللغات الهندية والعربية واللاتينية في منصات التقنية.',
      tags: ['CSS Custom Props', 'Tailwind Plugin', 'NPM Registry', 'Figma Tokens Sync'],
      packageInfo: { icon: 'format_textdirection_r_to_l', name: 'arabic-ui-tokens', cmd: 'npm install @olomweb/arabic-tokens' },
      cta: [{ icon: 'menu_book', label: 'دليل الاستخدام والمستندات', href: '#' }],
      metaRight: 'v0.9.4 • Alpha',
      metaRightCls: 'text-outline',
    },
  ],
  architecture: {
    eyebrow: 'ARCHITECTURE PHILOSOPHY',
    title: 'البساطة الهندسية والأداء أولاً',
    desc: 'في شبكة علوم، لا نتبع الصرعات البرمجية المؤقتة. نبني الأنظمة وفق مبدأ معمارية الجزر (Islands Architecture) وفصل البيانات، مع تقليل شحنات الجافاسكربت المرسلة للمتصفح إلى أقصى حد لضمان سرعة الوصول والاستقرار.',
    items: [
      {
        icon: 'check_circle',
        iconColor: 'text-primary',
        title: 'Zero-JS By Default',
        desc: 'تحميل الصفحات بنصوص HTML مسبقة البناء وتشغيل السكربتات عند التفاعل فقط.',
      },
      {
        icon: 'check_circle',
        iconColor: 'text-secondary',
        title: 'Edge Delivery',
        desc: 'توزيع المحتوى على خوادم طرفية (CDN Edge) لأقرب نقطة جغرافية في العالم العربي.',
      },
    ],
    status: 'Status: Optimal',
    flowLabel: 'OLOMWEB Architectural Flow',
    tiers: [
      {
        icon: 'dataset',
        title: 'Headless Layer',
        sub: 'MDX, Qdrant, Postgres',
        tag: 'Single Source',
        tagCls: 'bg-primary/30 text-primary-fixed',
      },
      {
        icon: 'memory',
        title: 'Astro / Static Engine',
        sub: 'Compiler & Optimizer',
        tag: 'Prerendered SSG',
        tagCls: 'bg-secondary-container/20 text-secondary-fixed',
        highlight: true,
      },
      {
        icon: 'rocket',
        title: 'Edge & Client',
        sub: 'Global CDN Caching',
        tag: 'Score 100/100',
        tagCls: 'bg-emerald-500/20 text-emerald-300',
      },
    ],
    footer: [
      { label: '> bundle-size:', value: '0.00 kB hydrated JS', cls: 'text-emerald-400' },
      { label: '> build-time:', value: '1.84s', cls: 'text-secondary-fixed' },
      { label: '> accessibility:', value: 'AA compliant', cls: 'text-emerald-400' },
    ],
  },
  github: {
    title: 'تابع مساهماتي ونشاطي المباشر على GitHub',
    desc: 'نؤمن بقوة مجتمعات المطورين المفتوحة. يمكنك تفقد الكود، استعراض الـ Commits اليومية، المساهمة في المشاكل البرمجية (Issues)، أو استخدام الحزم البرمجية مجاناً في مشاريعك الخاصة.',
    metrics: [
      { value: '1,840+', cls: 'text-primary', label: 'Commits العام الأخير' },
      { value: '650+', cls: 'text-secondary', label: 'Stars مستودعات عامة' },
      { value: '84+', cls: 'text-tertiary', label: 'Pull Requests مدمجة' },
      { value: '100%', cls: 'text-on-surface', label: 'Code Transparency' },
    ],
    follow: 'زيارة الملف الشخصي على GitHub',
    sponsor: 'اقتراح مشروع مشترك أو رعاية',
    handle: 'github.com/olomweb',
  },
};

const en: GalleryDict = {
  showTag: 'OLOMWEB::ENGINEERING_SHOWCASE',
  year: '2024–2025',
  metaOpenSource: '100% real production, fully open source',
  metaLighthouse: 'Performance standard (Lighthouse 100)',
  eyebrow: 'Software portfolio',
  title: 'Projects & technical solutions gallery',
  desc: 'The essence of my engineering work — distributed systems and open-source initiatives built with clean software engineering and exceptional architectural precision for creators and Arab engineers.',
  metrics: [
    { value: '18+', label: 'Published technical projects & repos', icon: 'terminal', iconColor: 'text-primary' },
    { value: '99.8%', label: 'Performance efficiency & code purity (Clean Arch)', icon: 'bolt', iconColor: 'text-secondary' },
  ],
  filtersTitle: 'Filter projects by type',
  filters: [
    { key: 'all', icon: 'apps', label: 'All projects', count: 5 },
    { key: 'open-source', icon: 'public', label: 'Open-source projects' },
    { key: 'web-systems', icon: 'dns', label: 'Web apps & systems' },
    { key: 'ai-solutions', icon: 'psychology', label: 'AI solutions' },
    { key: 'dev-tools', icon: 'build', label: 'Dev tools & libraries' },
  ],
  copyCmd: 'Copy command',
  copied: 'Copied!',
  projects: [
    {
      span: 'md:col-span-12',
      category: 'open-source web-systems',
      badge: { text: 'Flagship Engine', cls: 'bg-primary/10 text-primary' },
      badge2: { text: 'Lighthouse 100/100', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
      badge3: { text: 'Complete & updated', cls: 'text-outline' },
      title: 'OLOMWEB Engine Platform',
      desc: 'An advanced blog & portfolio architecture built with Astro and TailwindCSS with custom Markdown & MDX support. Designed for zero-latency on mobile with full 100% Core Web Vitals and a supremely flexible automatic RTL internationalization system.',
      tags: ['Astro v4', 'TypeScript', 'TailwindCSS', 'MDX Compiler', 'Islands Arch'],
      image: {
        src: '/images/gallery-olomweb.png',
        alt: 'Preview of the OLOMWEB Engine platform with a software architecture blueprint on a modern laptop',
        overlay: { left: 'TTFB: 42ms | LCP: 0.6s', right: '100 / 100' },
      },
      cta: [
        { icon: 'rocket_launch', label: 'Live platform preview', href: '#' },
        { icon: 'code', label: 'GitHub code', href: '#' },
      ],
      metaRight: 'v2.4.0 • MIT License',
      metaRightCls: 'text-outline-variant',
    },
    {
      span: 'md:col-span-12 lg:col-span-7',
      category: 'ai-solutions',
      badge: { text: 'AI & Vector Embeddings', cls: 'bg-secondary-fixed text-on-secondary-fixed' },
      stars: '420+ stars',
      title: 'RAG Arabic Semantic Search',
      desc: 'An advanced Arabic semantic search and text processing engine for Q&A systems (Retrieval-Augmented Generation). Relies on entity extraction and morphological text segmentation to serve technical and scientific content with high efficiency and reduced hallucinations.',
      tags: ['Python', 'Qdrant DB', 'FastAPI', 'PyTorch', 'Camel-BERT'],
      segment: {
        label: 'Pipeline Architecture',
        latency: 'Latency < 140ms',
        bars: [
          { w: 'w-2/5', bg: 'bg-primary', title: 'Embedding Model' },
          { w: 'w-2/5', bg: 'bg-secondary-container', title: 'Vector Search' },
          { w: 'w-1/5', bg: 'bg-secondary', title: 'LLM Synthesis' },
        ],
        foots: ['Vectorization', 'Qdrant Search', 'Response'],
      },
      cta: [
        { icon: 'play_circle', label: 'Try the system', href: '#' },
        { icon: 'schema', label: 'Architecture details', href: '#' },
      ],
    },
    {
      span: 'md:col-span-12 lg:col-span-5',
      category: 'open-source dev-tools',
      badge: { text: 'DevOps & Cloud FinOps', cls: 'bg-surface-container text-primary' },
      title: 'Cloud Cost & Metrics Inspector',
      desc: 'An open-source CLI tool written in Go to monitor and analyze cloud infrastructure spending, track wasted resources, and export metrics straight to Grafana.',
      tags: ['Go (Golang)', 'Docker', 'Grafana Exporter', 'Prometheus'],
      terminal: {
        lines: [
          { cls: 'text-secondary-fixed font-bold', text: '$ olom-cloud inspect --region eu-central' },
          { cls: 'text-emerald-400', text: '✔ Total clusters checked: 8' },
          { cls: 'text-secondary-container', text: '⚡ Monthly savings detected: $1,420' },
        ],
      },
      cta: [{ icon: 'terminal', label: 'View Go CLI repo', href: '#' }],
      metaRight: 'v1.1.2',
      metaRightCls: 'text-outline',
    },
    {
      span: 'md:col-span-12 lg:col-span-6',
      category: 'open-source web-systems',
      badge: { text: 'EdTech Platform', cls: 'bg-tertiary-fixed text-on-tertiary-fixed' },
      badge2: { text: 'Fully open source', cls: 'text-outline' },
      title: 'Interactive LMS Core',
      desc: 'A miniature, open-source LMS model for training institutions and independent instructors. Includes an interactive coding-exam system, an embedded code editor, and a student-progress tracker with real-time analytics.',
      tags: ['Next.js 14', 'PostgreSQL', 'Prisma ORM', 'Monaco Editor'],
      image: {
        src: '/images/gallery-lms.png',
        alt: 'Interactive e-learning system interface with Arabic modules and student progress dashboards in dark royal blue styling',
        overlay: { left: '', right: '' },
      },
      cta: [
        { icon: 'visibility', label: 'Preview the demo system', href: '#' },
        { icon: 'arrow_outward', label: 'Source code', href: '#' },
      ],
    },
    {
      span: 'md:col-span-12 lg:col-span-6',
      category: 'dev-tools open-source',
      badge: { text: 'NPM Package', cls: 'bg-surface-container text-primary' },
      badge2: { text: '12k+ Downloads', cls: 'text-secondary font-bold' },
      title: 'Arabic UI Tokens Library',
      desc: 'A token & component package and design patterns tailored for Arabic and RTL, supporting dual visual compatibility standards and proportional font metrics for Indic, Arabic, and Latin scripts across tech platforms.',
      tags: ['CSS Custom Props', 'Tailwind Plugin', 'NPM Registry', 'Figma Tokens Sync'],
      packageInfo: { icon: 'format_textdirection_r_to_l', name: 'arabic-ui-tokens', cmd: 'npm install @olomweb/arabic-tokens' },
      cta: [{ icon: 'menu_book', label: 'Usage guide & docs', href: '#' }],
      metaRight: 'v0.9.4 • Alpha',
      metaRightCls: 'text-outline',
    },
  ],
  architecture: {
    eyebrow: 'ARCHITECTURE PHILOSOPHY',
    title: 'Engineering simplicity & performance first',
    desc: 'At OLOMWEB we do not follow temporary tech fads. We build systems on the Islands Architecture principle and data separation, minimizing the JavaScript shipped to the browser to guarantee speed of access and stability.',
    items: [
      {
        icon: 'check_circle',
        iconColor: 'text-primary',
        title: 'Zero-JS By Default',
        desc: 'Loading pages from prebuilt HTML and running scripts only on interaction.',
      },
      {
        icon: 'check_circle',
        iconColor: 'text-secondary',
        title: 'Edge Delivery',
        desc: 'Distributing content through edge servers (CDN Edge) to the closest geographic point in the Arab world.',
      },
    ],
    status: 'Status: Optimal',
    flowLabel: 'OLOMWEB Architectural Flow',
    tiers: [
      {
        icon: 'dataset',
        title: 'Headless Layer',
        sub: 'MDX, Qdrant, Postgres',
        tag: 'Single Source',
        tagCls: 'bg-primary/30 text-primary-fixed',
      },
      {
        icon: 'memory',
        title: 'Astro / Static Engine',
        sub: 'Compiler & Optimizer',
        tag: 'Prerendered SSG',
        tagCls: 'bg-secondary-container/20 text-secondary-fixed',
        highlight: true,
      },
      {
        icon: 'rocket',
        title: 'Edge & Client',
        sub: 'Global CDN Caching',
        tag: 'Score 100/100',
        tagCls: 'bg-emerald-500/20 text-emerald-300',
      },
    ],
    footer: [
      { label: '> bundle-size:', value: '0.00 kB hydrated JS', cls: 'text-emerald-400' },
      { label: '> build-time:', value: '1.84s', cls: 'text-secondary-fixed' },
      { label: '> accessibility:', value: 'AA compliant', cls: 'text-emerald-400' },
    ],
  },
  github: {
    title: 'Follow my direct contributions & activity on GitHub',
    desc: 'We believe in the power of open developer communities. You can inspect the code, browse daily commits, contribute to issues, or use the packages for free in your own projects.',
    metrics: [
      { value: '1,840+', cls: 'text-primary', label: 'Commits this year' },
      { value: '650+', cls: 'text-secondary', label: 'Stars on public repos' },
      { value: '84+', cls: 'text-tertiary', label: 'Merged Pull Requests' },
      { value: '100%', cls: 'text-on-surface', label: 'Code Transparency' },
    ],
    follow: 'Visit my GitHub profile',
    sponsor: 'Propose a joint project or sponsorship',
    handle: 'github.com/olomweb',
  },
};

export const galleryDict: Record<Locale, GalleryDict> = { ar, en };