const routes = {
  theory: {
    index: '/theory',
    caseStudy: '/theory/case-study',
  },
  blog: process.env.NEXT_PUBLIC_BLOG_URL ?? '/404',
  contactUs: '/contact-us',
  dash: 'https://app.turring.ai',
};

export default routes;
