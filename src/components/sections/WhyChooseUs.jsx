import { FiClock, FiLifeBuoy, FiMonitor, FiSearch, FiSmartphone, FiZap } from 'react-icons/fi';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const reasons = [
  ['Fast delivery', 'Focused project flow without sacrificing polish.', FiClock],
  ['Modern designs', 'Premium visual systems that feel clear and current.', FiMonitor],
  ['SEO optimized', 'Technical foundations that help search engines understand your site.', FiSearch],
  ['Mobile responsive', 'Designed for desktop, laptop, tablet, and mobile from day one.', FiSmartphone],
  ['Automation expertise', 'Forms, booking, email, and AI workflows that reduce admin load.', FiZap],
  ['Long-term support', 'A practical partner for updates, improvements, and growth.', FiLifeBuoy],
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built For Brands That Need Trust Before The First Conversation."
          description="Azaana Digital combines strategy, design, technology, and operational thinking so your online presence feels credible and works behind the scenes."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(([title, description, Icon]) => (
            <div key={title} className="rounded-3xl border border-deep/10 bg-white/52 p-5">
              <Icon className="text-2xl text-teal" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
