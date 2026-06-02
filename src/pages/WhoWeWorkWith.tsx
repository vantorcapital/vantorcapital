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

export function WhoWeWorkWith() {
  const { t } = useTranslation();

  const clients = [
    { titleKey: 'clients_1_title', bodyKey: 'clients_1_body', image: '/businesses.jpeg' },
    { titleKey: 'clients_2_title', bodyKey: 'clients_2_body', image: '/families.jpeg' },
    { titleKey: 'clients_3_title', bodyKey: 'clients_3_body', image: null },
  ] as const;

  return (
    <div className="bg-white">

      <div className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('clients_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
            <h1 className="font-serif text-[48px] md:text-[56px] font-400 text-navy leading-[1.05] tracking-[-0.01em]">
              {t('clients_h1')}
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="px-8 md:px-20 mb-0">
        <img
          src="/shrooms copy copy.jpeg"
          alt={t('clients_image_alt')}
          className="w-full h-auto block mx-auto max-w-sm"
        />
      </div>

      <div className="px-6 md:px-16 pb-16 md:pb-24 pt-4">
        <div className="max-w-[900px] mx-auto">
          {clients.map((client) => (
            <FadeIn key={client.titleKey}>
              <div className="border-t border-rule py-12">
                <h2 className="font-serif text-[28px] font-400 text-navy leading-tight mb-4">
                  {t(client.titleKey)}
                </h2>
                <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8]">
                  {t(client.bodyKey)}
                </p>
                {client.image && (
                  <div className="mt-8 flex justify-center">
                    <img src={client.image} alt="" className="h-auto block max-w-[520px] w-full" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-16 pt-0 pb-20 md:pb-28 -mt-4">
        <div className="max-w-[900px] mx-auto flex justify-center">
          <img src="/investors.jpeg" alt="" className="h-auto block max-w-[520px] w-full" />
        </div>
      </div>

    </div>
  );
}
