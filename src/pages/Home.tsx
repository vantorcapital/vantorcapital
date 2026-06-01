import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';

function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
}

export function Home() {
  const { t } = useTranslation();

  const quadrant = [
    { titleKey: 'home_quad_who_title',     bodyKey: 'home_quad_who_body',     ctaKey: 'cta_find_out_more', to: '/who-we-are' },
    { titleKey: 'home_quad_what_title',    bodyKey: 'home_quad_what_body',    ctaKey: 'cta_find_out_more', to: '/what-we-do' },
    { titleKey: 'home_quad_how_title',     bodyKey: 'home_quad_how_body',     ctaKey: 'cta_read_more',     to: '/how-we-think' },
    { titleKey: 'home_quad_clients_title', bodyKey: 'home_quad_clients_body', ctaKey: 'cta_get_in_touch',  to: '/who-we-work-with' },
  ] as const;

  return (
    <div className="bg-white">

      {/* SECTION 1: HERO */}
      <section className="pt-32 md:pt-44 pb-20 px-6 md:px-16">
        <div className="max-w-[1320px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
              <div className="w-full md:w-[55%]">
                <h1 className="font-serif text-[72px] md:text-[88px] lg:text-[96px] font-400 text-navy leading-[1.0] tracking-[-0.02em]">
                  {t('home_hero_title')}
                </h1>
              </div>
              <div className="w-full md:w-[45%] flex flex-col justify-start pt-0">
                <p className="font-sans text-[16px] md:text-[17px] text-ink leading-[1.75] mb-5">
                  {t('home_hero_p1')}
                </p>
<Link
                  to="/contact"
                  className="inline-block font-sans text-[14px] font-600 text-white bg-navy px-7 py-3 hover:bg-navy-deep transition-colors self-start"
                >
                  {t('cta_begin_conversation')} →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: HERO IMAGE */}
      <div className="w-full bg-white">
        <img
          src="/Brickell_Skyline copy copy.jpeg"
          alt={t('home_hero_image_alt')}
          className="w-full h-auto block"
          style={{ maxHeight: '640px', objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>

      {/* SECTION 3: EMPOWERING YOU */}
      <section id="empowering-you" className="bg-white py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-[1320px] mx-auto">

          <FadeIn>
            <div className="mb-14">
              <span className="font-sans text-[13px] md:text-[14px] font-700 text-blue tracking-[0.22em] uppercase">
                {t('home_empowering_label')}
              </span>
              <div className="w-10 h-0.5 bg-navy mt-3 mb-7" />
              <p className="font-serif italic text-[18px] md:text-[20px] font-400 text-navy leading-snug">
                {t('home_empowering_lede')}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {quadrant.map((cell) => (
              <FadeIn key={cell.to}>
                <div className="border-t border-navy pt-6 flex flex-col">
                  <h3 className="font-serif text-[26px] md:text-[28px] font-400 text-navy leading-tight mb-4">
                    {t(cell.titleKey)}
                  </h3>
                  <p className="font-sans text-[15px] md:text-[16px] text-ink leading-[1.8] mb-5 flex-1">
                    {t(cell.bodyKey)}
                  </p>
                  <Link
                    to={cell.to}
                    className="font-sans text-[14px] font-600 text-white bg-navy px-5 py-3 hover:opacity-80 transition-opacity duration-200 inline-flex items-center gap-2 self-start"
                  >
                    {t(cell.ctaKey)} →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: MIDTOWN IMAGE */}
      <div className="w-full bg-white">
        <img
          src="/Midtown_Miami.jpeg"
          alt="Midtown Miami aerial"
          className="w-full h-auto block"
          style={{ maxHeight: '640px', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

    </div>
  );
}
