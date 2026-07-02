import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { submitNewsletter } from '../../lib/api';
import { isEmail } from '../../lib/validators';

export function NewsletterForm({ compact = false }) {
  const [form, setForm] = useState({ firstName: '', email: '', website: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.firstName.trim() || !isEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please enter your first name and a valid email.' });
      return;
    }
    try {
      setStatus({ type: 'loading', message: 'Subscribing...' });
      await submitNewsletter({ ...form, submittedAt: new Date().toISOString() });
      setForm({ firstName: '', email: '', website: '' });
      setStatus({ type: 'success', message: 'You are subscribed. Welcome to the list.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  const inputClass = compact
    ? 'min-h-11 rounded-full border border-white/12 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:border-cyan focus:outline-none'
    : 'min-h-12 rounded-full border border-deep/12 bg-white/70 px-5 text-sm text-ink placeholder:text-muted/70 focus:border-teal focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className={compact ? 'grid gap-3' : 'grid gap-4 sm:grid-cols-[1fr_1.2fr_auto]'}>
      <label className="sr-only" htmlFor={compact ? 'footer-first-name' : 'newsletter-first-name'}>First name</label>
      <input
        id={compact ? 'footer-first-name' : 'newsletter-first-name'}
        className={inputClass}
        placeholder="First name"
        autoComplete="given-name"
        value={form.firstName}
        onChange={(event) => setForm({ ...form, firstName: event.target.value })}
      />
      <label className="sr-only" htmlFor={compact ? 'footer-email' : 'newsletter-email'}>Email</label>
      <input
        id={compact ? 'footer-email' : 'newsletter-email'}
        className={inputClass}
        placeholder="Email address"
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <input
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        value={form.website}
        onChange={(event) => setForm({ ...form, website: event.target.value })}
        aria-hidden="true"
      />
      <button
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan px-5 text-sm font-bold text-deep transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status.type === 'loading'}
      >
        Subscribe <FiArrowRight aria-hidden="true" />
      </button>
      {status.message ? (
        <p className={`text-sm ${compact ? 'text-white/72' : status.type === 'error' ? 'text-red-700' : 'text-deep'}`} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
