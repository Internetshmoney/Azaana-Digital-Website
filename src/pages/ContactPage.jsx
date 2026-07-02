import { Card } from '../components/common/Card';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';

export function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Contact" title="Tell Us What You Are Building." description="Share the project, challenge, or idea. We will reply manually and help you choose the next practical step." />
        <Card className="p-6 sm:p-8">
          <ContactForm />
        </Card>
      </Container>
    </section>
  );
}
