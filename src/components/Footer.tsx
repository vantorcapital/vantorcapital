import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

function FooterLanguageToggle() {
  const { language, setLanguage, t } = useTranslation();
  const current: Language = language ?? 'en';
  return (
    <div className="font-sans text-[13px] text-white/40 mb-8 flex items-center gap-2">
      <span>{t('footer_lang_label')}:</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`transition-colors ${current === 'en' ? 'text-white' : 'text-white/40 underline underline-offset-4 hover:text-white'}`}
        aria-current={current === 'en' ? 'true' : undefined}
      >
        English
      </button>
      <span className="text-white/20">·</span>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`transition-colors ${current === 'es' ? 'text-white' : 'text-white/40 underline underline-offset-4 hover:text-white'}`}
        aria-current={current === 'es' ? 'true' : undefined}
      >
        Español
      </button>
    </div>
  );
}

export function Footer() {
  const { t, resetLanguage } = useTranslation();
  const navigate = useNavigate();

  const learnLinks = [
    { key: 'nav_who_we_are',   to: '/who-we-are' },
    { key: 'nav_what_we_do',   to: '/what-we-do' },
    { key: 'nav_how_we_think', to: '/how-we-think' },
    { key: 'nav_who_we_work',  to: '/who-we-work-with' },
    { key: 'nav_vantor_view',  to: '/the-vantor-view' },
    { key: 'nav_contact',      to: '/contact' },
  ] as const;

  const legalLinks = [
    { key: 'footer_legal_disclaimer', to: '/legal#disclaimer' },
    { key: 'footer_legal_privacy',    to: '/legal#privacy' },
    { key: 'footer_legal_terms',      to: '/legal#terms' },
    { key: 'footer_legal_regulatory', to: '/legal#regulatory' },
  ] as const;

  return (
    <footer>
      {/* Fraud band */}
      <div className="bg-[#3d4a56] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-[36px] md:text-[48px] font-400 text-white leading-[1.1] mb-6 max-w-3xl">
            {t('footer_fraud_h')}
          </h2>
          <div className="max-w-3xl space-y-4 mb-8">
            <p className="font-sans text-[16px] text-white/80 leading-[1.75]">
              {t('footer_fraud_p1')}
            </p>
            <p className="font-sans text-[16px] text-white/80 leading-[1.75]">
              {t('footer_fraud_p2')}
            </p>
          </div>
          <Link
            to="/contact"
            className="font-sans text-[14px] font-600 text-white hover:text-white/65 transition-colors"
          >
            {t('cta_contact_us_directly')} →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#1e2a35] px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row">

            {/* Col 1 — Learn */}
            <div className="flex-1 md:pr-12">
              <h3 className="font-serif text-[22px] md:text-[24px] font-400 text-white mb-8">
                {t('footer_learn_h')}
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {learnLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-sans text-[14px] font-600 text-white hover:text-white/65 transition-colors"
                  >
                    {t(l.key)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:block w-px bg-white/15 mx-12 self-stretch" />
            <div className="block md:hidden h-px bg-white/15 my-10" />

            {/* Col 2 — Legal */}
            <div className="w-full md:w-[280px]">
              <h3 className="font-serif text-[22px] md:text-[24px] font-400 text-white mb-8">
                {t('footer_legal_h')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-y-3 gap-x-6">
                {legalLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-sans text-[14px] font-600 text-white/70 hover:text-white transition-colors"
                  >
                    {t(l.key)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:block w-px bg-white/15 mx-12 self-stretch" />
            <div className="block md:hidden h-px bg-white/15 my-10" />

            {/* Col 3 — Contact */}
            <div className="w-full md:w-[240px]">
              <h3 className="font-serif text-[22px] md:text-[24px] font-400 text-white mb-6">
                {t('footer_contact_h')}
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:marco@vantorcapital.com"
                  className="block font-sans text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  marco@vantorcapital.com
                </a>
                <a
                  href="tel:+17287774648"
                  className="block font-sans text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  (728) 777-4648
                </a>
                <p className="font-sans text-[14px] text-white/40">
                  Miami, FL
                </p>
              </div>
            </div>

          </div>

          {/* Language toggle */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <FooterLanguageToggle />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <Link to="/" className="flex items-center" />
            <button
              type="button"
              onClick={() => { resetLanguage(); navigate('/'); }}
              className="font-sans text-[12px] text-white/30 cursor-pointer bg-transparent border-none p-0"
            >
              {t('footer_copyright')}
            </button>
          </div>

          {/* Compliance disclaimer */}
          <div className="mt-6 space-y-3 max-w-4xl">
            <p className="font-sans text-[11px] text-white/30 leading-relaxed">
              {t('footer_disc_1')}
            </p>
            <p className="font-sans text-[11px] text-white/30 leading-relaxed">
              {t('footer_disc_2')}
            </p>
            <p className="font-sans text-[11px] text-white/30 leading-relaxed">
              {t('footer_disc_3')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
