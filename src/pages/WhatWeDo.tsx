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

export function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('what_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif text-[48px] md:text-[56px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-7">
              {t('what_h1')}
            </h1>
            <p className="font-serif italic text-[18px] md:text-[20px] font-400 text-navy leading-snug">
              {t('what_lede')}
            </p>
          </FadeIn>
        </div>
      </div>

      <img
        src="/plant copy copy.jpeg"
        alt={t('what_image_alt')}
        className="w-full h-auto block"
      />

      <div className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.18em] text-blue uppercase">
              {t('what_p1_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
            <h2 className="font-serif text-[32px] font-400 text-navy leading-tight mb-7">
              {t('what_p1_h2')}
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">{t('what_p1_body1')}</p>
              <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">{t('what_p1_body2')}</p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[900px] mx-auto">
          <img src="/woman_thinking copy.jpeg" alt="" className="w-full h-auto block" />
        </div>
      </div>

      <div className="pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.18em] text-blue uppercase">
              {t('what_p2_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
            <h2 className="font-serif text-[32px] font-400 text-navy leading-tight mb-7">
              {t('what_p2_h2')}
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">{t('what_p2_body1')}</p>
              <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">{t('what_p2_body2')}</p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-20 md:pb-28">
        <div className="max-w-[900px] mx-auto">
          <img src="/museo_mex.jpeg" alt="" className="w-full h-auto block" />
        </div>
      </div>

    </div>
  );
}
