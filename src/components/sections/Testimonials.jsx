import { Card } from '../common/Card';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading align="center" eyebrow="Testimonials" title="Words From The Kind Of Clients We Serve." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <p className="text-lg leading-8 text-ink">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-deep/10 pt-5">
                <p className="font-display font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
