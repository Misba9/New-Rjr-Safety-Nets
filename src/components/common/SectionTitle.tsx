import { cn } from '../../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('text-center mb-12', className)}>
      {subtitle && <p className="text-brand-primary font-semibold text-lg mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue">{title}</h2>
    </div>
  );
};

export default SectionTitle;
