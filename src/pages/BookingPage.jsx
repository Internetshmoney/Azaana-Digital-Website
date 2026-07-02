import { Card } from '../components/common/Card';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { ConsultationForm } from '../components/forms/ConsultationForm';

export function BookingPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="Free Consultation" title="Book a focused strategy call." description="Pick a date and time. The backend checks Google Calendar, creates the event, and sends confirmation emails after setup." />
        <Card className="p-6 sm:p-8">
          <ConsultationForm />
        </Card>
      </Container>
    </section>
  );
}
