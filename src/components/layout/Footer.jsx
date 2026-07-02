import { FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { NewsletterForm } from '../forms/NewsletterForm';
import { navLinks } from '../../data/navigation';
import { services } from '../../data/services';
import { siteConfig } from '../../lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-deep/10 bg-deep text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <Logo className="h-14 w-auto rounded-lg bg-white/90 p-1" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/76">{siteConfig.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[FiInstagram, FiLinkedin, FiTwitter, FiMail].map((Icon, index) => (
              <a
                key={index}
                href={index === 3 ? `mailto:${siteConfig.email}` : '#'}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan hover:text-deep"
                aria-label="Azaana Digital social link"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-base font-bold">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} className="text-sm text-white/72 hover:text-white" to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-base font-bold">Services</h2>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} className="text-sm text-white/72 hover:text-white" to="/services">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-base font-bold">Newsletter</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">Get practical notes on websites, automation, AI, and brand growth.</p>
          <div className="mt-5">
            <NewsletterForm compact />
          </div>
          <p className="mt-5 text-sm text-white/65">{siteConfig.location}</p>
        </div>
      </Container>
      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/64 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Azaana Digital. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
        </div>
      </Container>
    </footer>
  );
}
