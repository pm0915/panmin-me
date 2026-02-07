export const SITE = {
  website: 'https://astro-paper.pages.dev/', // replace this with your deployed domain
  author: 'Sat Naing',
  profile: 'https://satnaing.dev/',
  desc: '一个简约、响应式且 SEO 友好的 Astro 博客主题。',
  title: 'Miles Pan',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: '编辑此页',
    url: 'https://github.com/satnaing/astro-paper/edit/main/',
  },
  dynamicOgImage: true,
  dir: 'ltr', // "rtl" | "auto"
  lang: 'zh-CN', // html lang code. Set this empty and default will be "en"
  timezone: 'Asia/Shanghai', // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
