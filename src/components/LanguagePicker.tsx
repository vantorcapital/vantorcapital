import { useTranslation } from '../i18n/LanguageContext';

export function LanguagePicker() {
  const { language, setLanguage } = useTranslation();
  if (language) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      role="dialog"
      aria-modal="true"
      aria-labelledby="picker-title"
    >
      <div className="w-full max-w-3xl px-5 md:px-12 py-6 md:py-0">
        {/* Eyebrow */}
        <div className="font-sans text-[10px] font-700 text-blue tracking-[0.2em] uppercase mb-2">
          WELCOME · BIENVENIDO
        </div>
        <div className="w-8 h-0.5 bg-navy mb-4 md:mb-6" />

        <div className="grid grid-cols-2 divide-x divide-ink/10 gap-0">
          {/* English column */}
          <div className="pr-4 md:pr-10">
            <h1
              id="picker-title"
              className="font-serif text-[22px] md:text-[42px] font-400 text-navy leading-[1.1] mb-3 md:mb-6"
            >
              Choose your language.
            </h1>
            <div className="border-t-2 border-navy pt-3 md:pt-5">
              <div className="font-sans text-[9px] md:text-[10px] font-600 text-ink/50 tracking-[0.15em] uppercase mb-2">
                English
              </div>
              <p className="font-sans text-[11px] md:text-[15px] text-ink leading-[1.55] mb-3 md:mb-6">
                Vantor Global Capital works across the United States and Latin America. Choose the language you would like to read the site in. We will remember your choice for 90 days.
              </p>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className="font-sans text-[11px] md:text-[14px] font-600 text-white bg-navy px-3 py-2 md:px-5 md:py-3 hover:opacity-80 transition-opacity duration-200 inline-flex items-center gap-1.5"
              >
                Continue in English →
              </button>
              <p className="font-sans text-[9px] md:text-[11px] text-ink/40 leading-relaxed mt-3 md:mt-5">
                This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security.
              </p>
            </div>
          </div>

          {/* Spanish column */}
          <div className="pl-4 md:pl-10">
            <h2
              className="font-serif text-[22px] md:text-[42px] font-400 text-navy leading-[1.1] mb-3 md:mb-6"
            >
              Elige tu idioma.
            </h2>
            <div className="border-t-2 border-navy pt-3 md:pt-5">
              <div className="font-sans text-[9px] md:text-[10px] font-600 text-ink/50 tracking-[0.15em] uppercase mb-2">
                Español
              </div>
              <p className="font-sans text-[11px] md:text-[15px] text-ink leading-[1.55] mb-3 md:mb-6">
                Vantor Global Capital trabaja entre Estados Unidos y América Latina. Elige el idioma en el que prefieres leer el sitio. Recordaremos tu elección durante 90 días.
              </p>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className="font-sans text-[11px] md:text-[14px] font-600 text-white bg-navy px-3 py-2 md:px-5 md:py-3 hover:opacity-80 transition-opacity duration-200 inline-flex items-center gap-1.5"
              >
                Continuar en español →
              </button>
              <p className="font-sans text-[9px] md:text-[11px] text-ink/40 leading-relaxed mt-3 md:mt-5">
                Este sitio web tiene fines informativos únicamente y no constituye una oferta de venta ni una solicitud de oferta de compra de valor alguno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
