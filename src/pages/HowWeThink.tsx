import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';

function FadeIn({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      {children}
    </div>
  );
}

export function HowWeThink() {
  const { t } = useTranslation();

  const paragraphKeys = ['how_p1', 'how_p2', 'how_p3', 'how_p4'] as const;

  return (
    <div className="bg-cream">

      <div className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('how_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif text-[44px] md:text-[52px] font-400 text-navy leading-[1.05] tracking-[-0.01em]">
              {t('how_h1')}
            </h1>
          </FadeIn>
        </div>
      </div>

      <img src="/mountain_guy copy.jpeg" alt="" className="w-full h-auto block" />

      <div className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <div className="space-y-7">
              {paragraphKeys.map((key) => (
                <p key={key} className="font-serif text-[18px] md:text-[20px] font-400 text-ink leading-[1.7]">
                  {t(key)}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="pb-32 md:pb-40 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <img src="/art copy copy.jpeg" alt="" className="w-full h-auto block" />
          </FadeIn>
        </div>
      </div>

    </div>
  );
}
