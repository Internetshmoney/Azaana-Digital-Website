import { FiHeart, FiShield, FiTarget } from 'react-icons/fi';
import { Card } from '../components/common/Card';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';

export function AboutPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Azaana Digital is built for businesses that want to be taken seriously online."
          description="We help founders, teams, and professionals move from scattered digital presence to a polished system that communicates value, captures leads, and supports growth."
        />
        <div className="grid gap-5">
          {[
            ['Strategy before pixels', 'Every page and workflow should support a business outcome.', FiTarget],
            ['Trust as a design material', 'Clarity, polish, speed, and accessibility all shape credibility.', FiShield],
            ['Friendly, long-term partnership', 'We build with care, then keep improving as your business evolves.', FiHeart],
          ].map(([title, body, Icon]) => (
            <Card key={title} className="p-6">
              <Icon className="text-3xl text-teal" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">{title}</h2>
              <p className="mt-3 leading-8 text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
