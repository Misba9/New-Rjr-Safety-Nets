type ServiceData = {
  name: string;
  slug?: string;
  description?: string;
  image?: string;
  url?: string;
};

const SITE = {
  name: 'RJR Safety Nets',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://rjr-safetynets.example',
  telephone: ['+91 7075051812', '+91 8074514411'],
  address: {
    streetAddress: 'Bangalore, Karnataka',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
};

export function updateMetaTags(title: string, description: string, keywords?: string, canonical?: string, ogImage?: string) {
  if (title) document.title = title;

  const setMetaName = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const setMetaProperty = (prop: string, content: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaName('description', description || '');
  if (keywords) setMetaName('keywords', keywords);
  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description || '');
  setMetaName('twitter:title', title);
  setMetaName('twitter:description', description || '');

  if (ogImage) {
    setMetaProperty('og:image', ogImage);
    setMetaName('twitter:image', ogImage);
  }

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
}

export function injectStructuredData(jsonLd: object, id = 'structured-data') {
  // remove previous
  const prev = document.getElementById(id);
  if (prev) prev.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = JSON.stringify(jsonLd, null, 2);
  document.head.appendChild(script);
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    description: 'RJR Safety Nets provides high-quality safety nets in Bangalore including balcony safety nets, pigeon nets, and professional installation services.',
    image: '/images/logo/logo-navbar.png',
    sameAs: [],
  };
}

export function generateServiceSchema(service: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description || `${service.name} by ${SITE.name} in Bangalore` ,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.telephone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.streetAddress,
        addressLocality: SITE.address.addressLocality,
        addressRegion: SITE.address.addressRegion,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.addressCountry,
      }
    },
    image: service.image || '/images/pages/balcony-02.jpg',
    url: service.url || `${SITE.url}/services/${service.slug || ''}`,
  };
}

export function generateSiteKeywords() {
  return 'Safety Nets Bangalore, Safety Net Dealers in Bangalore, Safety Net Suppliers in Bangalore, Balcony Safety Nets in Bangalore, Balcony Safety Nets Bangalore, Balcony Netting, Balcony Protection Net, Balcony Safety Net Installation, Balcony Safety Nets Price, Best pigeon safety nets in Bengaluru';
}