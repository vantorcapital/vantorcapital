import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navLinks = [
    { key: 'nav_who_we_are',   to: '/who-we-are' },
    { key: 'nav_what_we_do',   to: '/what-we-do' },
    { key: 'nav_how_we_think', to: '/how-we-think' },
    { key: 'nav_who_we_work',  to: '/who-we-work-with' },
    { key: 'nav_vantor_view',  to: '/the-vantor-view' },
    { key: 'nav_contact',      to: '/contact' },
  ] as const;

  function handleLinkClick(to: string) {
    setMobileOpen(false);
    navigate(to);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2838]">
        <div className="border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-center h-[88px] md:h-[100px]">
              <Link
                to="/"
                className="flex items-center shrink-0"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/Vanitor_global_capital_Horizontal.png"
                  alt={t('nav_logo_alt')}
                  className="h-16 md:h-20 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-7 ml-10 flex-1">
                {navLinks.slice(0, 5).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-sans text-[14px] font-400 text-white/70 hover:text-white transition-colors duration-150 whitespace-nowrap"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center ml-auto">
                <Link
                  to="/contact"
                  className="font-sans text-[14px] font-400 text-white/70 hover:text-white transition-colors duration-150"
                >
                  {t('nav_contact')}
                </Link>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="ml-auto lg:hidden font-sans text-[14px] font-400 text-white/80 hover:text-white transition-colors"
              >
                {mobileOpen ? t('nav_close') : t('nav_menu')}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#141f2b] border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <p className="font-sans text-[12px] font-400 text-white py-[7px] leading-none">
              {t('nav_risk_strip')}
            </p>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a2838] lg:hidden pt-[130px] overflow-y-auto">
          <nav className="flex flex-col px-6">
            {navLinks.map((item) => (
              <button
                key={item.to}
                onClick={() => handleLinkClick(item.to)}
                className="font-sans text-[17px] font-400 text-left border-b border-white/10 py-5 text-white/70 hover:text-white transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
