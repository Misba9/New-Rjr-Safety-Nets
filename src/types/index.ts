export interface Service {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  bannerImage: string;
  contentSections: { title: string; text: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface WhyChooseUsItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}
