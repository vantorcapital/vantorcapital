import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';
import { articles } from '../data/vantor-view-articles';
import type { Language } from '../data/vantor-view-articles';

const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwulHT2v3gZleMxhxRi0j03hPg-Vt6ZZfNZXr9Wqc1kpMZXHAh73cy-__QyODHcnwTU4w/exec';

function FadeIn({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
}

type FormStatus = 'idle' | 'submitting' | 'success';

function SubscribeForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) { setStatus('success'); return; }
    setStatus('submitting');
    const payload = { email, source: 'subscribe', website_hp: honeypot, type: 'Subscriber' };
    try {
      await fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(payload) });
    } catch { /* fall through */ }
    setStatus('success');
  }

  if (status === 'success') {
    return <p className="font-serif italic text-[18px] text-navy">{t('view_subscribe_success')}</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <input type="text" name="website_hp" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="sr-only" tabIndex={-1} autoComplete="off" />
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('view_subscribe_placeholder')}
          className="flex-1 border-b border-navy bg-transparent font-sans text-[15px] text-ink py-2 focus:outline-none focus:border-blue transition-colors placeholder:text-muted"
        />
        <button type="submit" disabled={status === 'submitting'} className="shrink-0 font-sans text-[14px] font-600 text-white bg-navy px-6 py-2.5 hover:bg-navy-deep transition-colors disabled:opacity-50">
          {status === 'submitting' ? t('cta_sending') : `${t('cta_subscribe')} →`}
        </button>
      </div>
      <p className="font-sans text-[12px] text-muted leading-relaxed">{t('view_subscribe_privacy')}</p>
    </form>
  );
}

export function VantorView() {
  const { language, t } = useTranslation();
  const lang: Language = (language ?? 'en') as Language;
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="bg-white">

      {/* Page header */}
      <div className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('view_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif text-[48px] md:text-[56px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
              {t('view_h1')}
            </h1>
            <p className="font-serif italic text-[18px] md:text-[20px] font-400 text-navy leading-snug">
              {t('view_lede')}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Hero image */}
      <div className="px-6 md:px-16 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <img src="/mountain-sunset.jpg" alt="" className="w-full h-auto block" />
        </div>
      </div>

      {/* Subscribe band */}
      <div className="bg-light-blue py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 md:items-center">
              <div className="w-full md:w-[52%]">
                <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-navy uppercase">
                  {t('view_subscribe_label')}
                </span>
                <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
                <h2 className="font-serif text-[40px] md:text-[48px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-5">
                  {t('view_subscribe_h2')}
                </h2>
                <p className="font-sans text-[16px] md:text-[17px] text-ink leading-[1.75] mb-8">
                  {t('view_subscribe_body')}
                </p>
                <SubscribeForm />
              </div>
              <div className="w-full md:w-[45%]">
                <img src="/art.jpg" alt="" className="w-full h-auto block" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Article index */}
      <div className="py-20 md:py-24 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('view_recent_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-12" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {sorted.map((article) => (
              <FadeIn key={article.slug}>
                <div className="border-t border-rule pt-6">
                  <p className="font-sans text-[11px] font-700 tracking-[0.15em] text-muted uppercase mb-3">
                    {article.category[lang]}&nbsp;&nbsp;·&nbsp;&nbsp;{formatDate(article.date)}
                  </p>
                  <h2 className="font-serif text-[28px] md:text-[30px] font-400 text-navy leading-tight mb-3">
                    {article.title[lang]}
                  </h2>
                  <p className="font-sans text-[15px] text-ink leading-[1.75] mb-3">
                    {article.excerpt[lang]}
                  </p>
                  <p className="font-sans text-[12px] text-muted mb-4">{article.readTime[lang]}</p>
                  <Link
                    to={`/the-vantor-view/${article.slug}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all"
                  >
                    {t('cta_read_article')} →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
