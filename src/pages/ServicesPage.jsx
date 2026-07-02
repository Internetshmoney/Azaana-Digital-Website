import { Services } from '../components/sections/Services';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';

export function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything your business needs to look credible and operate smarter online."
            description="Choose one focused service or combine strategy, web, automation, AI, content, and brand identity into one growth-ready system."
          />
        </Container>
      </section>
      <Services />
    </>
  );
}
