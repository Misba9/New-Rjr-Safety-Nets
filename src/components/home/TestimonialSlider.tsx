import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/mockData';
import { Quote } from 'lucide-react';

const TestimonialSlider = () => {
  return (
    <Section className="bg-brand-light-gray">
      <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <Quote className="w-10 h-10 text-brand-primary/50 mb-4" />
                <p className="text-brand-text italic mb-6">"{testimonial.quote}"</p>
                <div className="font-bold text-brand-dark-blue">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default TestimonialSlider;
