const routes = {
  theory: {
    index: '/theory',
    caseStudy: '/theory/case-study',
  },
  contactUs: '/contact-us',
  blog: process.env.NEXT_PUBLIC_BLOG_URL ?? '/404',
};

export default routes;
