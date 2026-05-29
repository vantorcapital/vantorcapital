import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

function FadeIn({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

function SectionLabel({ n }: { n: string }) {
  return (
    <>
      <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">{n}</span>
      <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
    </>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-[22px] font-400 text-navy leading-tight mt-10 mb-4">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.7] mb-6">{children}</p>
  );
}

function Rule() {
  return <div className="border-t border-rule mt-20 mb-20" />;
}

export function Legal() {
  const { t } = useTranslation();

  const s2Subs: [TranslationKey, TranslationKey[]][] = [
    ['legal_s2_sub1', ['legal_s2_p1', 'legal_s2_p2']],
    ['legal_s2_sub2', ['legal_s2_p3', 'legal_s2_p4']],
    ['legal_s2_sub3', ['legal_s2_p5']],
    ['legal_s2_sub4', ['legal_s2_p6']],
    ['legal_s2_sub5', ['legal_s2_p7']],
    ['legal_s2_sub6', ['legal_s2_p8']],
  ];

  const s3Subs: [TranslationKey, TranslationKey][] = [
    ['legal_s3_sub1', 'legal_s3_p1'],
    ['legal_s3_sub2', 'legal_s3_p2'],
    ['legal_s3_sub3', 'legal_s3_p3'],
    ['legal_s3_sub4', 'legal_s3_p4'],
    ['legal_s3_sub5', 'legal_s3_p5'],
    ['legal_s3_sub6', 'legal_s3_p6'],
    ['legal_s3_sub7', 'legal_s3_p7'],
  ];

  const s4Subs: [TranslationKey, TranslationKey][] = [
    ['legal_s4_sub1', 'legal_s4_p1'],
    ['legal_s4_sub2', 'legal_s4_p2'],
    ['legal_s4_sub3', 'legal_s4_p3'],
    ['legal_s4_sub4', 'legal_s4_p4'],
    ['legal_s4_sub5', 'legal_s4_p5'],
    ['legal_s4_sub6', 'legal_s4_p6'],
    ['legal_s4_sub7', 'legal_s4_p7'],
  ];

  return (
    <div className="bg-white">
      <div className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">{t('legal_label')}</span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif text-[48px] md:text-[56px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
              {t('legal_h1')}
            </h1>
            <p className="font-serif text-[18px] md:text-[20px] font-400 text-ink leading-[1.7] max-w-2xl">
              {t('legal_intro')}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <div className="border-t border-rule mb-20" />

          {/* Section 1: Disclaimer */}
          <section id="disclaimer">
            <FadeIn>
              <SectionLabel n={t('legal_s1_label')} />
              <h2 className="font-serif text-[36px] md:text-[44px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
                {t('legal_s1_h2')}
              </h2>
              <p className="font-sans text-[13px] text-muted italic mb-8">{t('legal_last_updated')}</p>
              <P>{t('legal_s1_p1')}</P>
              <P>{t('legal_s1_p2')}</P>
              <P>{t('legal_s1_p3')}</P>
              <P>{t('legal_s1_p4')}</P>
              <P>{t('legal_s1_p5')}</P>
              <P>{t('legal_s1_p6')}</P>
              <P>{t('legal_s1_p7')}</P>
            </FadeIn>
          </section>

          <Rule />

          {/* Section 2: Privacy Policy */}
          <section id="privacy">
            <FadeIn>
              <SectionLabel n={t('legal_s2_label')} />
              <h2 className="font-serif text-[36px] md:text-[44px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
                {t('legal_s2_h2')}
              </h2>
              <p className="font-sans text-[13px] text-muted italic mb-8">{t('legal_last_updated')}</p>
              <P>{t('legal_s2_intro')}</P>
              {s2Subs.map(([subKey, pKeys]) => (
                <div key={subKey}>
                  <SubHeading>{t(subKey)}</SubHeading>
                  {pKeys.map((pk) => <P key={pk}>{t(pk)}</P>)}
                </div>
              ))}
            </FadeIn>
          </section>

          <Rule />

          {/* Section 3: Terms of Use */}
          <section id="terms">
            <FadeIn>
              <SectionLabel n={t('legal_s3_label')} />
              <h2 className="font-serif text-[36px] md:text-[44px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
                {t('legal_s3_h2')}
              </h2>
              <p className="font-sans text-[13px] text-muted italic mb-8">{t('legal_last_updated')}</p>
              <P>{t('legal_s3_intro')}</P>
              {s3Subs.map(([subKey, pKey]) => (
                <div key={subKey}>
                  <SubHeading>{t(subKey)}</SubHeading>
                  <P>{t(pKey)}</P>
                </div>
              ))}
            </FadeIn>
          </section>

          <Rule />

          {/* Section 4: Regulatory Information */}
          <section id="regulatory">
            <FadeIn>
              <SectionLabel n={t('legal_s4_label')} />
              <h2 className="font-serif text-[36px] md:text-[44px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-6">
                {t('legal_s4_h2')}
              </h2>
              <p className="font-sans text-[13px] text-muted italic mb-8">{t('legal_last_updated')}</p>
              <P>{t('legal_s4_intro')}</P>
              {s4Subs.map(([subKey, pKey]) => (
                <div key={subKey}>
                  <SubHeading>{t(subKey)}</SubHeading>
                  <P>{t(pKey)}</P>
                </div>
              ))}
            </FadeIn>
          </section>

          {/* End-of-page note */}
          <div className="border-t border-rule mt-20 mb-10" />
          <div className="pb-24 md:pb-32 space-y-3">
            <p className="font-sans text-[13px] text-muted italic leading-relaxed">
              {t('legal_end_note')}
            </p>
            <p className="font-sans text-[13px] text-muted leading-relaxed">
              {t('legal_end_copyright')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
