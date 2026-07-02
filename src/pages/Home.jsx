import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';
import { ContactForm } from '../components/forms/ContactForm';
import { ConsultationForm } from '../components/forms/ConsultationForm';
import { Card } from '../components/common/Card';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';

export function Home() {
  return (
    <>
      <Hero />
      <Services limit={6} />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6 sm:p-8">
            <SectionHeading eyebrow="Book" title="Start with a free consultation." description="Choose a time and tell us what you are building. We will help you find the clearest next step." />
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </Card>
          <Card className="p-6 sm:p-8">
            <SectionHeading eyebrow="Contact" title="Have a project in mind?" description="Send a short note and we will reply manually with thoughtful next steps." />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
