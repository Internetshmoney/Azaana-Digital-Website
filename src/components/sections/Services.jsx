import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { services } from '../../data/services';

export function Services({ limit }) {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-20" id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Digital Services Built Around Credibility, Speed, And Growth."
          description="From polished websites to AI-powered operations, Azaana Digital helps your brand look trustworthy and work smarter."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/78">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-xl text-cyan">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-muted">{service.description}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-deep">
                  Learn More <FiArrowUpRight className="transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
