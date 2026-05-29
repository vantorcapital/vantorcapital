import { Link, useParams } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useTranslation } from '../i18n/LanguageContext';
import { articles } from '../data/vantor-view-articles';
import type { Language } from '../data/vantor-view-articles';

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

export function VantorViewArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useTranslation();
  const lang: Language = (language ?? 'en') as Language;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="bg-white pt-36 md:pt-44 pb-24 px-6 md:px-16">
        <div className="max-w-[720px] mx-auto">
          <p className="font-sans text-[15px] text-muted">{t('article_not_found')}</p>
          <Link to="/the-vantor-view" className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all mt-4 inline-block">
            {t('cta_back_to_articles')} →
          </Link>
        </div>
      </div>
    );
  }

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);
  const paragraphs = article.content[lang].split('\n\n');

  return (
    <div className="bg-white">
      <div className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-[720px] mx-auto">

          <FadeIn>
            <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
              {t('view_label')}
            </span>
            <div className="w-10 h-0.5 bg-navy mt-3 mb-8" />
            <Link
              to="/the-vantor-view"
              className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all inline-block mb-10"
            >
              {t('cta_back_to_articles')}
            </Link>
            <p className="font-sans text-[11px] font-700 tracking-[0.15em] text-muted uppercase mb-4">
              {article.category[lang]}&nbsp;&nbsp;·&nbsp;&nbsp;{formatDate(article.date)}
            </p>
            <h1 className="font-serif text-[40px] md:text-[48px] font-400 text-navy leading-[1.05] tracking-[-0.01em] mb-4">
              {article.title[lang]}
            </h1>
            <p className="font-sans text-[12px] text-muted mb-10">{article.readTime[lang]}</p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6 mb-16">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-serif text-[18px] md:text-[20px] font-400 text-ink leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="border-t border-rule pt-6 mb-4">
            <p className="font-sans text-[11px] text-muted leading-relaxed">
              {t('article_disclaimer')}
            </p>
          </div>

          {others.length > 0 && (
            <div className="border-t border-rule mt-16 pt-14">
              <FadeIn>
                <span className="font-sans text-[11px] font-700 tracking-[0.2em] text-blue uppercase">
                  {t('article_related_label')}
                </span>
                <div className="w-10 h-0.5 bg-navy mt-3 mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {others.map((a) => (
                    <div key={a.slug} className="border-t border-navy pt-5">
                      <h3 className="font-serif text-[20px] font-400 text-navy mb-3 leading-tight">{a.title[lang]}</h3>
                      <Link
                        to={`/the-vantor-view/${a.slug}`}
                        className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all"
                      >
                        {t('cta_read_article')} →
                      </Link>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          )}

          <div className="border-t border-rule mt-16 pt-14">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="font-serif text-[32px] font-400 text-navy leading-[1.05] mb-4">
                  {t('article_stay_informed_h2')}
                </h2>
                <p className="font-sans text-[16px] text-ink leading-[1.75] mb-5">
                  {t('article_stay_informed_body')}
                </p>
                <Link
                  to="/contact"
                  className="font-sans text-[14px] font-600 text-navy underline decoration-navy/30 hover:decoration-navy transition-all"
                >
                  {t('cta_sign_up')} →
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
