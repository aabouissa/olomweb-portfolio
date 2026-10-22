export type Locale = 'ar' | 'en';

export const ui = {
  ar: {
    brandAr: 'شبكة علوم',
    brandEn: 'OLOMWEB',
    brandLine: 'OLOMWEB | شبكة علوم',
    metaTitle: 'شبكة علوم | منصة الهندسة البرمجية والتقنية العربية',
    metaDescription:
      'منصة هندسية ومحطة تقنية متخصصة في هندسة البرمجيات، النظم المعمارية، وشروحات برمجية احترافية لإثراء المحتوى التقني العربي.',
    langLabel: 'اللغة',
    nav: {
      home: 'الرئيسية',
      courses: 'الدورات',
      projects: 'معرض المشاريع',
      about: 'من نحن',
    },
    bookConsulting: 'احجز استشارة',
    social: {
      youtube: 'قناة يوتيوب',
      github: 'مستودعات كود',
      posts: 'منشورات وتحديثات',
      profile: 'الملف المهني',
      telegram: 'مجتمع تيليجرام',
      x: 'حساب X',
      linkedin: 'حساب Linkedin',
    },
    footer: {
      tagline:
        'شبكة علوم تهتم بتقديم محتوى علمي تقني يهدف لإثراء المحتوى البرمجي العربي بأعلى معايير الجودة والدقة.',
      quickTitle: 'روابط سريعة',
      quick: {
        courses: 'شروحات يوتيوب',
        projects: 'المشاريع البرمجية',
        about: 'السيرة الذاتية',
      },
      communityTitle: 'التواصل والمجتمع',
      communityText: 'تابع المستجدات التقنية وانضم لمجتمع مطوري شبكة علوم عبر القنوات المعتمدة.',
      copyright: 'جميع الحقوق محفوظة لشبكة علوم.',
      builtWith: 'Built with Clean Astro Component Architecture',
      skipToContent: 'تخطى إلى المحتوى',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      switchLang: 'English',
    },
    routes: {
      home: '/',
      courses: '/courses/',
      projects: '/projects/',
      about: '/about/',
      contact: '/contact/',
    },
  },
  en: {
    brandAr: 'شبكة علوم',
    brandEn: 'OLOMWEB',
    brandLine: 'OLOMWEB | شبكة علوم',
    metaTitle: 'OLOMWEB | Arabic Software Engineering & Tech Platform',
    metaDescription:
      'English page of OLOMWEB (شبكة علوم) — an engineering hub specialized in software engineering, systems architecture, and professional technical tutorials enriching the Arabic programming content.',
    langLabel: 'Language',
    nav: {
      home: 'Home',
      courses: 'Courses & Tutorials',
      projects: 'Projects Gallery',
      about: 'About',
    },
    bookConsulting: 'Book a Consultation',
    social: {
      youtube: 'YouTube channel',
      github: 'Code repositories',
      posts: 'Posts & updates',
      profile: 'Professional profile',
      telegram: 'Telegram community',
      x: 'X profile',
      linkedin: 'LinkedIn profile',
    },
    footer: {
      tagline:
        'OLOMWEB dedicated to providing technical and scientific content aimed at enriching Arabic programming content with the highest standards of quality and accuracy.',
      quickTitle: 'Quick Links',
      quick: {
        courses: 'YouTube tutorials',
        projects: 'Projects',
        about: 'Biography',
      },
      communityTitle: 'Contact & Community',
      communityText:
        'Stay up to date with technical releases and join the OLOMWEB developer community through our official channels.',
      copyright: 'All rights reserved to OLOMWEB.',
      builtWith: 'Built with Clean Astro Component Architecture',
      skipToContent: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'العربية',
    },
    routes: {
      home: '/en/',
      courses: '/en/courses/',
      projects: '/en/projects/',
      about: '/en/about/',
      contact: '/en/contact/',
    },
  },
} as const;

export type UI = typeof ui.ar;

export function localizedRoutes(lang: Locale): Record<string, string> {
  if (lang === 'en') {
    return { home: '/en/', courses: '/en/courses/', projects: '/en/projects/', about: '/en/about/', contact: '/en/contact/' };
  }
  return { home: '/', courses: '/courses/', projects: '/projects/', about: '/about/', contact: '/contact/' };
}

export function pathFor(lang: Locale, page: keyof ReturnType<typeof localizedRoutes>): string {
  return localizedRoutes(lang)[page];
}

export function altLangFor(lang: Locale): Locale {
  return lang === 'ar' ? 'en' : 'ar';
}