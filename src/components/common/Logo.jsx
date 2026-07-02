import { Link } from 'react-router-dom';

export function Logo({ className = 'h-12 w-auto sm:h-14 lg:h-16', showText = false }) {
  return (
    <Link
      to="/"
      className="focus-ring inline-flex origin-left items-center gap-3 rounded-xl transition-transform duration-300 hover:scale-[1.03]"
      aria-label="Azaana Digital home"
    >
      <img
        src="/logo.png"
        alt="Azaana Digital"
        className={['shrink-0', className].join(' ')}
        loading="eager"
        style={{ display: 'block' }}
      />
      {showText ? <span className="font-display text-lg font-bold text-ink">Azaana Digital</span> : null}
    </Link>
  );
}
