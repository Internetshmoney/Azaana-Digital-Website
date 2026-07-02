import { useMemo, useState } from 'react';
import { submitContact } from '../../lib/api';
import { isEmail, validateRequired } from '../../lib/validators';
import { Button } from '../common/Button';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export function ContactForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validateRequired({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });
    if (Object.keys(errors).length || !isEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please complete every field with a valid email address.' });
      return;
    }
    try {
      setStatus({ type: 'loading', message: 'Sending your message...' });
      await submitContact({ ...form, startedAt, submittedAt: Date.now() });
      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent. We will reply as soon as possible.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} autoComplete="name" />
        <Field label="Email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} type="email" autoComplete="email" />
      </div>
      <Field label="Subject" value={form.subject} onChange={(value) => setForm({ ...form, subject: value })} />
      <label className="grid gap-2 text-sm font-semibold text-deep">
        Message
        <textarea
          className="min-h-36 rounded-3xl border border-deep/12 bg-white/70 px-5 py-4 text-base font-normal text-ink outline-none transition focus:border-teal"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          maxLength="2000"
        />
      </label>
      <input
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        value={form.website}
        onChange={(event) => setForm({ ...form, website: event.target.value })}
        aria-hidden="true"
      />
      <Button type="submit" className="w-full sm:w-fit" disabled={status.type === 'loading'}>
        Send Message
      </Button>
      {status.message ? <p className={status.type === 'error' ? 'text-sm text-red-700' : 'text-sm text-deep'} role="status">{status.message}</p> : null}
    </form>
  );
}

function Field({ label, value, onChange, type = 'text', autoComplete }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-deep">
      {label}
      <input
        className="min-h-12 rounded-full border border-deep/12 bg-white/70 px-5 text-base font-normal text-ink outline-none transition focus:border-teal"
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
