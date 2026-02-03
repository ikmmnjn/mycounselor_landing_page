import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <style>{`
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            height: 80px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
        }

        .header-scrolled {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .header-logo {
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--primary);
            cursor: pointer;
            text-decoration: none;
            letter-spacing: -0.05em;
        }

        .header-logo-suffix {
            font-weight: 400;
            font-size: 0.9rem;
            margin-left: 4px;
        }

        .desktop-nav {
            display: flex;
            gap: 40px;
            align-items: center;
        }

        .nav-list {
            display: flex;
            gap: 32px;
        }

        .nav-link {
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--primary);
        }

        .header-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
        }

        .mobile-toggle {
            cursor: pointer;
        }

        .mobile-menu-overlay {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: white;
            padding: 40px 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            z-index: 999;
        }

        .mobile-menu-link {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .mobile-menu-btn {
            width: 100%;
        }

        @media (max-width: 768px) {
            .desktop-only {
                display: none !important;
            }
        }

        @media (min-width: 769px) {
            .mobile-only {
                display: none !important;
            }
        }
      `}</style>
      <div className="container header-container">
        <a href="#hero" className="header-logo">
          MYCOUNSELOR <span className="header-logo-suffix">EAP</span>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-nav desktop-only">

          <a href="#contact" className="btn btn-primary header-btn">
            도입 문의
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-only mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu Overlay (Simplified) */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#strength-1" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>슈퍼바이저</a>
          <a href="#strength-2" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>기업 전용 플랫폼</a>
          <a href="#strength-3" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>보고 및 비밀보장</a>
          <a href="#strength-4" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>맞춤형 힐링 프로그램</a>
          <a href="#effectiveness-section" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>효과 및 후기</a>
          <a href="#contact" className="btn btn-primary mobile-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>도입 문의</a>
        </div>
      )}
    </header>
  );
};

export default Header;
