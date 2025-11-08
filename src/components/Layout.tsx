// components/Layout.tsx
import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import { useLanguage } from '../contexts/LanguageContext';
import './layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, toggleLanguage, t, currentLanguage } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('header.title')}</title>
        <meta name="description" content={t('header.subtitle')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="layout-container">
        <header className="main-header">
          <div className="header-content">
            {/* Logo and Brand */}
            <div className="brand-section">
              <div className="logo">
                <span className="logo-icon">🔧</span>
                <div className="logo-text">
                  <span className="logo-primary">Craft-Connect</span>
                </div>
              </div>
             
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <div className="nav-links">
                <a href="#" className="nav-link active">
                  <span className="nav-icon">🏠</span>
                  {t('header.home')}
                </a>
                <a href="#" className="nav-link">
                  <span className="nav-icon">👥</span>
                  {t('header.professionals')}
                </a>
                <a href="#" className="nav-link">
                  <span className="nav-icon">🏙️</span>
                  {t('header.cities')}
                </a>
                <a href="#" className="nav-link">
                  <span className="nav-icon">💼</span>
                  {t('header.services')}
                </a>
               
              </div>

              <div className="header-actions">
                <button 
                  className="language-switcher"
                  onClick={toggleLanguage}
                  title={t('header.switchLanguage')}
                >
                  <span className="language-flag">
                    {currentLanguage.flag}
                  </span>
                  <span className="language-text">
                    {locale === 'en' ? 'हिंदी' : 'English'}
                  </span>
                </button>
                <button className="auth-btn secondary">
                  <span className="btn-icon">🔑</span>
                  {t('header.signIn')}
                </button>
                <button className="auth-btn primary">
                  <span className="btn-icon">👤</span>
                  {t('header.joinAsPro')}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              <div className="mobile-nav-content">
                <button 
                  className="mobile-language-switcher"
                  onClick={toggleLanguage}
                >
                  <span className="language-flag">
                    {currentLanguage.flag}
                  </span>
                  <span className="language-text">
                    {locale === 'en' ? 'Switch to Hindi' : 'Switch to English'}
                  </span>
                </button>
                
                <a href="#" className="mobile-nav-link active">
                  <span className="nav-icon">🏠</span>
                  {t('header.home')}
                </a>
                <a href="#" className="mobile-nav-link">
                  <span className="nav-icon">👥</span>
                  {t('header.professionals')}
                </a>
                <a href="#" className="mobile-nav-link">
                  <span className="nav-icon">🏙️</span>
                  {t('header.cities')}
                </a>
                <a href="#" className="mobile-nav-link">
                  <span className="nav-icon">💼</span>
                  {t('header.services')}
                </a>
                <a href="#" className="mobile-nav-link">
                  <span className="nav-icon">⭐</span>
                  {t('header.reviews')}
                </a>

                <div className="mobile-auth-buttons">
                  <button className="mobile-auth-btn secondary">
                    <span className="btn-icon">🔑</span>
                    {t('header.signIn')}
                  </button>
                  <button className="mobile-auth-btn primary">
                    <span className="btn-icon">👤</span>
                    {t('header.joinAsPro')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="main-footer">
          <div className="footer-content">
            <p className="text-center text-gray-500">
              © 2024 Craft-Connect. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;