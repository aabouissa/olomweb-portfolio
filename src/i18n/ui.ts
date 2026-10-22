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
      courses: 'شروحات ودورات يوتيوب',
      projects: 'معرض المشاريع',
      about: 'عني وعن شبكة علوم',
      contact: 'تواصل واستشارات',
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
        'منصة هندسية ومحطة تقنية متخصصة في هندسة البرمجيات، النظم المعمارية، وتقديم شروحات تقنية احترافية لإثراء المحتوى البرمجي العربي بأعلى معايير الدقة والجودة.',
      quickTitle: 'روابط سريعة',
      quick: {
        courses: 'شروحات يوتيوب البرمجية',
        projects: 'المشاريع البرمجية المفتوحة',
        about: 'السيرة الذاتية ورؤية الشبكة',
        contact: 'استشارات معمارية وتطوير',
      },
      communityTitle: 'التواصل والمجتمع',
      communityText: 'تابع المستجدات التقنية وانضم لمجتمع مطوري شبكة علوم عبر القنوات المعتمدة.',
      copyright: '© 2025 شبكة علوم OLOMWEB. جميع الحقوق محفوظة للمؤسس.',
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
      courses: 'YouTube Courses & Tutorials',
      projects: 'Projects Gallery',
      about: 'About & Mission',
      contact: 'Contact & Consulting',
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
        'An engineering hub and tech station specialized in software engineering, systems architecture, and professional technical tutorials, enriching the Arabic programming content with the highest standards of accuracy and quality.',
      quickTitle: 'Quick Links',
      quick: {
        courses: 'Programming YouTube tutorials',
        projects: 'Open-source projects',
        about: 'Biography & network vision',
        contact: 'Architecture & development consulting',
      },
      communityTitle: 'Contact & Community',
      communityText:
        'Stay up to date with technical releases and join the OLOMWEB developer community through our official channels.',
      copyright: '© 2025 OLOMWEB شبكة علوم. All rights reserved to the founder.',
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