import { Container } from '../common/Container';
import { NewsletterForm } from '../forms/NewsletterForm';

export function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-[2rem] bg-deep p-8 text-white shadow-soft sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Newsletter</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Get Digital Growth Notes With Substance.</h2>
              <p className="mt-4 text-white/72">Short, practical mails on websites, automation, AI, branding, and online visibility.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
