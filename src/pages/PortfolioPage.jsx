import { Portfolio } from '../components/sections/Portfolio';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';

export function PortfolioPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Placeholder case studies ready for real client work."
            description="These sample projects demonstrate the visual standard and structure. Replace them with real work as the agency portfolio grows."
          />
        </Container>
      </section>
      <Portfolio />
    </>
  );
}
