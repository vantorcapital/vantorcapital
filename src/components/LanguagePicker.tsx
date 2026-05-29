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
      <div className="max-w-3xl w-full px-6 md:px-12 py-16">
        {/* Eyebrow */}
        <div className="font-sans text-[11px] font-700 text-blue tracking-[0.2em] uppercase mb-3">
          WELCOME · BIENVENIDO
        </div>
        <div className="w-10 h-0.5 bg-navy mb-8" />

        {/* Two-column layout mirroring reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-ink/10">
          {/* English column */}
          <div className="md:pr-10">
            <h1
              id="picker-title"
              className="font-serif text-4xl md:text-5xl font-400 text-navy leading-tight mb-10"
            >
              Choose your language.
            </h1>
            <div className="border-t-2 border-navy pt-6">
            <div className="font-sans text-[11px] font-600 text-ink/50 tracking-[0.15em] uppercase mb-4">
              English
            </div>
            <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.7] mb-8">
              Vantor Global Capital works across the United States and Latin America. Choose the language you would like to read the site in. We will remember your choice for 90 days.
            </p>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className="font-sans text-[14px] font-600 text-navy hover:opacity-60 transition-opacity duration-200"
            >
              Continue in English →
            </button>
            </div>
          </div>

          {/* Spanish column */}
          <div className="md:pl-10 mt-10 md:mt-0">
            <h2
              className="font-serif text-4xl md:text-5xl font-400 text-navy leading-tight mb-10"
            >
              Elige tu idioma.
            </h2>
            <div className="border-t-2 border-navy pt-6">
            <div className="font-sans text-[11px] font-600 text-ink/50 tracking-[0.15em] uppercase mb-4">
              Español
            </div>
            <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.7] mb-8">
              Vantor Global Capital trabaja entre Estados Unidos y América Latina. Elige el idioma en el que prefieres leer el sitio. Recordaremos tu elección durante 90 días.
            </p>
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className="font-sans text-[14px] font-600 text-navy hover:opacity-60 transition-opacity duration-200"
            >
              Continuar en español →
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
