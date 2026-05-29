import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ to, children, className = '', onClick }: LinkProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to.startsWith('#')) {
      const element = document.getElementById(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <RouterLink
      to={to}
      onClick={to.startsWith('#') ? handleClick : onClick}
      className={`font-sans text-navy underline underline-offset-4 hover:text-blue transition-colors duration-200 ${className}`}
    >
      {children} →
    </RouterLink>
  );
}
