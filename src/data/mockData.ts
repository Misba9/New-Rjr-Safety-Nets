import { faker } from '@faker-js/faker';
import { Service, Testimonial, GalleryImage, WhyChooseUsItem } from '../types';
import { ShieldCheck, Users, Wrench, Award, Clock } from 'lucide-react';

const imageMap: Record<string, { imageUrl: string; bannerImage: string }> = {
  'balcony-safety-nets': { imageUrl: '/images/pages/balcony-02.jpg', bannerImage: '/images/pages/balcony-03.jpg' },
  'children-safety-nets': { imageUrl: '/images/pages/children-safety-net.jpg', bannerImage: '/images/pages/children-safety-net.jpg' },
  'pigeon-safety-nets': { imageUrl: '/images/pages/pigeon-nets-02.jpg', bannerImage: '/images/pages/pigeo-net-01.jpg' },
  'monkey-safety-nets': { imageUrl: '/images/slider/monkey-protection-nets.jpg', bannerImage: '/images/slider/monkey-protection-nets.jpg' },
  'construction-safety-nets': { imageUrl: '/images/slider/construction-safety-nets.jpg', bannerImage: '/images/slider/construction-safety-nets.jpg' },
  'coconut-tree-safety-nets': { imageUrl: '/images/Coconut-Tree-Safety-Nets.jpg', bannerImage: '/images/pages/building-1.jpg' },
  'staircase-safety-nets': { imageUrl: '/images/pages/building-1.jpg', bannerImage: '/images/pages/building-1.jpg' },
  'sports-practice-nets': { imageUrl: '/images/cricket-nets.jpg', bannerImage: '/images/pages/cricket.jpg' },
  'industrial-safety-nets': { imageUrl: '/images/pages/all-sports.jpg', bannerImage: '/images/pages/all-sports.jpg' },
  'parking-lot-safety-nets': { imageUrl: '/images/pages/building-1.jpg', bannerImage: '/images/pages/building-1.jpg' },
  'swimming-pool-safety-nets': { imageUrl: '/images/pages/all-sports.jpg', bannerImage: '/images/pages/all-sports.jpg' },
  'anti-bird-spikes': { imageUrl: '/images/Anti-Bird-Spikes.jpg', bannerImage: '/images/pages/pigeon-nets-02.jpg' },
  'invisible-grills': { imageUrl: '/images/pages/balcony-02.jpg', bannerImage: '/images/pages/balcony-03.jpg' },
  'cloth-hanger': { imageUrl: '/images/pages/balcony-02.jpg', bannerImage: '/images/pages/balcony-03.jpg' },
};

const generateService = (name: string, slug: string): Service => {
  const mapped = imageMap[slug];
  return {
    id: faker.string.uuid(),
    slug,
    name,
    imageUrl: mapped ? mapped.imageUrl : `/images/pages/balcony-02.jpg`,
    bannerImage: mapped ? mapped.bannerImage : `/images/pages/balcony-03.jpg`,
    shortDescription: `High-quality ${name.toLowerCase()} for maximum safety and durability.`,
    longDescription: faker.lorem.paragraphs(2),
    features: Array.from({ length: 4 }, () => faker.lorem.words(5)),
    contentSections: [
      { title: `About Our ${name}`, text: faker.lorem.paragraph() },
      { title: 'Installation Process', text: faker.lorem.paragraph() },
      { title: 'Material and Quality', text: faker.lorem.paragraph() },
    ],
  };
};

export const services: Service[] = [
    generateService('Balcony Safety Nets', 'balcony-safety-nets'),
    generateService('Children Safety Nets', 'children-safety-nets'),
    generateService('Pigeon Safety Nets', 'pigeon-safety-nets'),
    generateService('Monkey Safety Nets', 'monkey-safety-nets'),
    generateService('Construction Safety Nets', 'construction-safety-nets'),
    generateService('Coconut Tree Safety Nets', 'coconut-tree-safety-nets'),
    generateService('Staircase Safety Nets', 'staircase-safety-nets'),
    generateService('Sports Practice Nets', 'sports-practice-nets'),
    generateService('Industrial Safety Nets', 'industrial-safety-nets'),
    generateService('Parking Lot Safety Nets', 'parking-lot-safety-nets'),
    generateService('Swimming Pool Safety Nets', 'swimming-pool-safety-nets'),
    generateService('Anti-Bird Spikes', 'anti-bird-spikes'),
    generateService('Invisible Grills', 'invisible-grills'),
    generateService('Cloth Hanger', 'cloth-hanger'),
];

export const testimonials: Testimonial[] = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  quote: faker.lorem.sentence(),
  name: faker.person.fullName(),
  location: faker.location.city(),
}));

export const galleryImages: GalleryImage[] = [
  { id: faker.string.uuid(), src: '/images/pages/balcony-02.jpg', alt: 'Balcony Net', category: 'balcony' },
  { id: faker.string.uuid(), src: '/images/pages/balcony-03.jpg', alt: 'Balcony Net 2', category: 'balcony' },
  { id: faker.string.uuid(), src: '/images/pages/children-safety-net.jpg', alt: 'Children Safety Net', category: 'children' },
  { id: faker.string.uuid(), src: '/images/pages/pigeon-nets-02.jpg', alt: 'Pigeon Net', category: 'pigeon' },
  { id: faker.string.uuid(), src: '/images/cricket-nets.jpg', alt: 'Cricket Nets', category: 'sports' },
  { id: faker.string.uuid(), src: '/images/slider/monkey-protection-nets.jpg', alt: 'Monkey Protection Net', category: 'monkey' },
  { id: faker.string.uuid(), src: '/images/slider/duct-area-safety-nets.jpg', alt: 'Duct Area Net', category: 'duct' },
  { id: faker.string.uuid(), src: '/images/slider/construction-safety-nets.jpg', alt: 'Construction Net', category: 'construction' },
];

export const heroSlides = [
  { id: 1, image: '/images/slider/balcony-safety-nets.jpg', title: 'Welcome to RJR Safety Nets in Bangalore', description: 'RJR Safety Nets offers top-quality balcony nets, bird protection nets, construction nets and more. Call +91 7075051812 or +91 8074514411 for immediate assistance.' },
  { id: 2, image: '/images/slider/construction-safety-nets.jpg', title: 'Expert Installation Services', description: 'Our professional team ensures a perfect and secure installation every time.' },
  { id: 3, image: '/images/pages/all-sports.jpg', title: 'Durable and Reliable Solutions', description: 'Made from the highest quality materials to ensure longevity and safety.' },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
    { id: '1', icon: ShieldCheck, title: 'Quality Assurance', description: 'We use only the highest-grade materials for all our safety nets.' },
    { id: '2', icon: Users, title: 'Expert Team', description: 'Our team consists of experienced and highly trained professionals.' },
    { id: '3', icon: Wrench, title: 'Custom Solutions', description: 'We provide tailored netting solutions to meet your specific requirements.' },
    { id: '4', icon: Award, title: 'Industry Standards', description: 'All our services and installations meet rigorous safety standards.' },
];

export const stats = [
    { id: '1', value: '10+', label: 'Years Experience' },
    { id: '2', value: '5K+', label: 'Happy Clients' },
    { id: '3', value: '10K+', label: 'Projects Done' },
    { id: '4', value: '24/7', label: 'Support' },
];