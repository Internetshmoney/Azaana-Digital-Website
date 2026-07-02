import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { navLinks } from '../../data/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-cream/86 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6 py-2 lg:min-h-20">
        <Logo className="h-12 w-auto sm:h-14 lg:h-16" />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-white/70 text-deep' : 'text-muted hover:bg-white/50 hover:text-deep'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/book" variant="ghost">Book Consultation</Button>
          <Button href="/contact">Get Started</Button>
        </div>
        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white/55 text-deep lg:hidden"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-deep/10 bg-cream/95 lg:hidden">
          <Container className="grid gap-2 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="focus-ring rounded-2xl px-4 py-3 font-semibold text-deep hover:bg-white/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <Button href="/book" variant="secondary" onClick={() => setOpen(false)}>Book Consultation</Button>
              <Button href="/contact" onClick={() => setOpen(false)}>Get Started</Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
