import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';

const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwulHT2v3gZleMxhxRi0j03hPg-Vt6ZZfNZXr9Wqc1kpMZXHAh73cy-__QyODHcnwTU4w/exec';

type FormStatus = 'idle' | 'submitting' | 'success';

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', type: '', company: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) { setStatus('success'); return; }
    setStatus('submitting');
    const payload = { ...form, source: 'contact', website_hp: honeypot };
    try {
      await fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(payload) });
    } catch { /* fall through */ }
    setStatus('success');
  }

  if (status === 'success') {
    return <p className="font-serif italic text-[18px] text-navy">{t('contact_success')}</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-8">
      <input type="text" name="website_hp" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="sr-only" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block font-sans text-[11px] font-700 tracking-[0.12em] text-muted uppercase mb-2">
          {t('contact_field_name')} <span className="text-navy">*</span>
        </label>
        <input type="text" required value={form.name} onChange={(e) => set('name', e.target.value)} className="w-full border-b border-rule bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-navy transition-colors" />
      </div>

      <div>
        <label className="block font-sans text-[11px] font-700 tracking-[0.12em] text-muted uppercase mb-2">
          {t('contact_field_email')} <span className="text-navy">*</span>
        </label>
        <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className="w-full border-b border-rule bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-navy transition-colors" />
      </div>

      <div>
        <label className="block font-sans text-[11px] font-700 tracking-[0.12em] text-muted uppercase mb-2">
          {t('contact_field_type')} <span className="text-navy">*</span>
        </label>
        <select required value={form.type} onChange={(e) => set('type', e.target.value)} className="w-full border-b border-rule bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer">
          <option value="" disabled>{t('contact_select_one')}</option>
          <option value="Business">{t('contact_type_business')}</option>
          <option value="Family / Individual">{t('contact_type_family')}</option>
          <option value="Investor">{t('contact_type_investor')}</option>
          <option value="Other">{t('contact_type_other')}</option>
        </select>
      </div>

      <div>
        <label className="block font-sans text-[11px] font-700 tracking-[0.12em] text-muted uppercase mb-2">
          {t('contact_field_company')}
        </label>
        <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} className="w-full border-b border-rule bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-navy transition-colors" />
      </div>

      <div>
        <label className="block font-sans text-[11px] font-700 tracking-[0.12em] text-muted uppercase mb-2">
          {t('contact_field_message')} <span className="text-navy">*</span>
        </label>
        <textarea required rows={4} value={form.message} onChange={(e) => set('message', e.target.value)} className="w-full border-b border-rule bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-navy transition-colors resize-none" />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all disabled:opacity-50">
        {status === 'submitting' ? t('cta_sending') : `${t('cta_send')} →`}
      </button>

      <p className="font-sans text-[12px] text-muted leading-relaxed">{t('contact_privacy')}</p>
    </form>
  );
}

function FadeIn({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-[720px] mx-auto">

          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">{t('contact_label')}</span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif italic text-[48px] md:text-[56px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
              {t('contact_h1')}
            </h1>
            <p className="font-serif text-[18px] md:text-[20px] font-400 text-ink leading-[1.7] mb-10">
              {t('contact_intro')}
            </p>

            <div className="space-y-2 mb-10">
              <p className="font-sans text-[15px] font-600 text-navy">
                {t('contact_email_label')}&nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="mailto:marco@vantorcapital.com" className="font-400 underline decoration-navy/30 hover:decoration-navy transition-all">
                  marco@vantorcapital.com
                </a>
              </p>
              <p className="font-sans text-[15px] font-600 text-navy">
                {t('contact_phone_label')}&nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="tel:+17287774648" className="font-400 underline decoration-navy/30 hover:decoration-navy transition-all">
                  (728) 777-4648
                </a>
              </p>
              <p className="font-sans text-[15px] font-600 text-navy">
                {t('contact_location_label')}&nbsp;&nbsp;·&nbsp;&nbsp;<span className="font-400">{t('contact_location_value')}</span>
              </p>
            </div>
          </FadeIn>

          <div className="border-t border-rule my-12" />
          <ContactForm />

        </div>
      </div>
    </div>
  );
}
