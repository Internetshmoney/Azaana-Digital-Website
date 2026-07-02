import { FiArrowUpRight } from 'react-icons/fi';
import { Card } from '../common/Card';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { projects } from '../../data/portfolio';

export function Portfolio() {
  return (
    <section className="py-20" id="portfolio">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="A Preview Of The Kind Of Digital Presence We Build."
            description="Placeholder projects are included so real case studies can be dropped in later without redesigning the section."
          />
          <Button href="/portfolio" variant="secondary">View All Projects</Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition hover:-translate-y-1 hover:bg-white/78">
              <div className="aspect-[4/3]" style={{ background: project.image }} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink">{project.category}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-deep">
                  Visit Project <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
