import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Spinner from './Spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-orange-600 hover:scale-105 focus:ring-brand-primary shadow-sm hover:shadow-lg',
        secondary: 'bg-brand-dark-blue text-white hover:bg-blue-900 focus:ring-brand-dark-blue shadow-sm hover:shadow-lg',
        outline: 'border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
      },
      size: {
        default: 'py-2.5 px-6 text-sm sm:py-3 sm:px-8 sm:text-base',
        sm: 'py-1.5 px-4 text-xs sm:py-2 sm:px-6 sm:text-sm',
        lg: 'py-3 px-8 text-base sm:py-4 sm:px-10 sm:text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asLink?: boolean;
  to?: string;
  loading?: boolean;
}

const Button = ({ className, variant, size, asLink = false, to = '/', loading = false, ...props }: ButtonProps) => {
  if (asLink) {
    return (
      <Link to={to} className={cn(buttonVariants({ variant, size, className }))}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }), loading ? 'opacity-80 cursor-wait' : '')}
      disabled={loading || props.disabled}
      aria-busy={loading}
      {...props}
    >
      {loading && <span className="mr-3"><Spinner className="text-white" /></span>}
      <span className="inline-flex items-center">{props.children}</span>
    </button>
  );
};

export default Button;