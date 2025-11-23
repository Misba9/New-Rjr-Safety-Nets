import PageBanner from '../components/layout/PageBanner';
import Section from '../components/common/Section';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { useEffect } from 'react';
import { updateMetaTags, generateOrganizationSchema, injectStructuredData, generateSiteKeywords } from '../lib/seoUtils';

const Gallery = () => {
  useEffect(() => {
    // Set meta tags for the gallery page
    const title = "Safety Net Installation Gallery | RJR Safety Nets Bangalore";
    const description = "View our gallery of safety net installations in Bangalore. See examples of balcony safety nets, pigeon nets, invisible grills, and cloth hangers installed by our expert team.";
    updateMetaTags(title, description, generateSiteKeywords(), window.location.href, '/images/pages/all-sports.jpg');

    // Inject structured data
    const schema = generateOrganizationSchema();
    injectStructuredData(schema);
  }, []);

  return (
    <>
      <PageBanner title="Our Gallery" imageUrl="/images/pages/all-sports.jpg" />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
};

export default Gallery;