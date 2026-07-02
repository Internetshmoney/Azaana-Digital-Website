import { useEffect, useMemo, useState } from 'react';
import { createBooking, getAvailableSlots } from '../../lib/api';
import { bookingDefaults } from '../../lib/constants';
import { isEmail, validateRequired } from '../../lib/validators';
import { Button } from '../common/Button';

const initialForm = {
  date: '',
  time: '',
  name: '',
  email: '',
  businessName: '',
  purpose: '',
  website: '',
};

const fallbackSlots = ['09:00', '10:00', '11:30', '13:00', '14:30', '16:00'];

export function ConsultationForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [form, setForm] = useState(initialForm);
  const [slots, setSlots] = useState([]);
  const [slotStatus, setSlotStatus] = useState('idle');
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  useEffect(() => {
    if (!form.date) return;
    let active = true;
    setSlotStatus('loading');
    getAvailableSlots({ date: form.date, timezone: bookingDefaults.timezone })
      .then((data) => {
        if (active) setSlots(data.slots || fallbackSlots);
      })
      .catch(() => {
        if (active) setSlots(fallbackSlots);
      })
      .finally(() => {
        if (active) setSlotStatus('ready');
      });
    return () => {
      active = false;
    };
  }, [form.date]);

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validateRequired({
      date: form.date,
      time: form.time,
      name: form.name,
      email: form.email,
      businessName: form.businessName,
      purpose: form.purpose,
    });
    if (Object.keys(errors).length || !isEmail(form.email)) {
      setStatus({ type: 'error', message: 'Please complete every booking field with a valid email.' });
      return;
    }
    try {
      setStatus({ type: 'loading', message: 'Booking your consultation...' });
      await createBooking({ ...form, timezone: bookingDefaults.timezone, startedAt, submittedAt: Date.now() });
      setForm(initialForm);
      setSlots([]);
      setStatus({ type: 'success', message: 'Your consultation is booked. Please check your email for confirmation.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Date" type="date" value={form.date} onChange={(value) => setForm({ ...form, date: value, time: '' })} />
        <label className="grid gap-2 text-sm font-semibold text-deep">
          Time
          <div className="grid grid-cols-2 gap-2">
            {(slots.length ? slots : fallbackSlots).map((slot) => (
              <button
                key={slot}
                type="button"
                className={`focus-ring rounded-full border px-4 py-3 text-sm font-bold transition ${
                  form.time === slot ? 'border-deep bg-deep text-white' : 'border-deep/12 bg-white/70 text-deep hover:border-teal'
                }`}
                onClick={() => setForm({ ...form, time: slot })}
              >
                {slot}
              </button>
            ))}
          </div>
          <span className="text-xs font-normal text-muted">
            {slotStatus === 'loading' ? 'Checking Google Calendar...' : `Timezone: ${bookingDefaults.timezone}`}
          </span>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} autoComplete="name" />
        <Field label="Email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} autoComplete="email" />
      </div>
      <Field label="Business Name" value={form.businessName} onChange={(value) => setForm({ ...form, businessName: value })} />
      <label className="grid gap-2 text-sm font-semibold text-deep">
        Purpose of Consultation
        <textarea
          className="min-h-32 rounded-3xl border border-deep/12 bg-white/70 px-5 py-4 text-base font-normal text-ink outline-none transition focus:border-teal"
          value={form.purpose}
          onChange={(event) => setForm({ ...form, purpose: event.target.value })}
          maxLength="1600"
        />
      </label>
      <input className="hidden" tabIndex="-1" autoComplete="off" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} aria-hidden="true" />
      <Button type="submit" disabled={status.type === 'loading'}>Book Free Consultation</Button>
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
