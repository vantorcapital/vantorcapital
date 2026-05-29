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

export function WhoWeAre() {
  const { t } = useTranslation();

  const values = [
    { titleKey: 'who_value1_title', bodyKey: 'who_value1_body' },
    { titleKey: 'who_value2_title', bodyKey: 'who_value2_body' },
    { titleKey: 'who_value3_title', bodyKey: 'who_value3_body' },
    { titleKey: 'who_value4_title', bodyKey: 'who_value4_body' },
  ] as const;

  return (
    <div className="bg-white">

      {/* Section 1: About us header */}
      <div className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
              <div className="w-full md:w-[40%]">
                <h1 className="font-serif text-[56px] md:text-[64px] font-400 text-navy leading-[1.0] tracking-[-0.02em]">
                  {t('who_about_h1')}
                </h1>
              </div>
              <div className="w-full md:w-[55%]">
                <p className="font-sans text-[16px] md:text-[17px] text-ink leading-[1.75]">
                  {t('who_about_body')}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Section 2: Hero image */}
      <div className="w-full px-0">
        <img
          src="/palm_trees.jpeg"
          alt={t('who_image_alt')}
          className="w-full h-auto block"
        />
      </div>

      {/* Section 3: Two markets */}
      <div className="py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('who_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h2 className="font-serif text-[40px] md:text-[48px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-8">
              {t('who_two_markets_h2')}
            </h2>
            <p className="font-serif text-[18px] md:text-[20px] font-400 text-ink leading-[1.7] max-w-3xl">
              {t('who_two_markets_body')}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Section 4: Philosophy and values */}
      <div className="bg-cream py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <h2 className="font-serif text-[40px] md:text-[48px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-5">
              {t('who_philosophy_h2')}
            </h2>
            <p className="font-sans text-[16px] md:text-[17px] text-ink leading-[1.75] mb-16 max-w-2xl">
              {t('who_philosophy_lede')}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {values.map((v) => (
              <FadeIn key={v.titleKey}>
                <div className="border-t border-navy pt-6">
                  <h3 className="font-serif text-[22px] md:text-[24px] font-400 text-navy leading-tight mb-4">
                    {t(v.titleKey)}
                  </h3>
                  <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">
                    {t(v.bodyKey)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: The founder */}
      <div className="bg-white py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('who_founder_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
            <h2 className="font-serif text-[32px] md:text-[36px] font-400 text-navy leading-tight mb-10">
              {t('who_founder_name')}
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-full md:w-[40%]">
                <div
                  className="bg-rule flex items-center justify-center"
                  style={{ aspectRatio: '4/5', width: '100%' }}
                >
                  <span className="font-sans text-[13px] text-muted">{t('who_founder_placeholder')}</span>
                </div>
              </div>
              <div className="w-full md:w-[55%]">
                <p className="font-sans text-[16px] md:text-[17px] text-ink leading-[1.8]">
                  {t('who_founder_bio')}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}
