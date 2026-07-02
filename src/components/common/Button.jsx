import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-deep text-white shadow-card hover:-translate-y-0.5 hover:bg-ink',
  secondary: 'border border-deep/15 bg-white/55 text-deep hover:-translate-y-0.5 hover:bg-white',
  ghost: 'text-deep hover:bg-white/45',
};

export function Button({ children, href, variant = 'primary', className = '', type = 'button', ...props }) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} to={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
