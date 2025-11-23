import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn('py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20', className)}>
      <div className="container mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;