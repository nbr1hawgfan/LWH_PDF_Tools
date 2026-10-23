/**
 * Site configuration
 */
export const siteConfig = {
  name: 'LWH PDF Tools',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://pdf.logisticswarehouse.net',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/nbr1hawgfan/LWH_PDF_Tools',
    twitter: 'https://twitter.com/pdfcraft',
  },
  creator: 'Logistics Warehouse, Inc. (based on PDFCraft, AGPL-3.0)',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | LWH PDF Tools',
    defaultTitle: 'LWH PDF Tools',
    twitterHandle: '@pdfcraft',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Contact', href: '/contact' },
  ],
};
