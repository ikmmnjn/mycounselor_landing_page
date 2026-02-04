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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled || isMobileMenuOpen ? 'header-scrolled' : ''}`}>
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
            background-color: rgba(255, 255, 255, 1);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #e2e8f0;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 24px;
        }

        .header-logo {
            font-size: 1.5rem;
            font-weight: 900;
            color: #1e293b;
            text-decoration: none;
            letter-spacing: -0.05em;
            z-index: 1001;
        }

        .header-logo-suffix {
            font-weight: 400;
            font-size: 0.8rem;
            margin-left: 4px;
            color: #3b82f6;
        }

        .desktop-nav {
            display: flex;
            gap: 40px;
            align-items: center;
        }

        .header-btn {
            padding: 10px 24px;
            font-size: 0.95rem;
            font-weight: 700;
            border-radius: 12px;
        }

        .mobile-toggle {
            cursor: pointer;
            z-index: 1001;
            position: relative;
            color: #1e293b;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 100vh;
            height: 100dvh;
            background-color: #ffffff;
            padding: 100px 24px 40px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 1000;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }

        .mobile-menu-link {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1e293b;
            padding: 15px 0;
            border-bottom: 1px solid #f1f5f9;
            text-decoration: none;
            display: block;
        }

        .mobile-menu-btn {
            width: 100%;
            margin-top: 24px;
            padding: 18px;
            font-size: 1.1rem;
            font-weight: 800;
            border-radius: 12px;
            text-align: center;
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
        <a href="#hero" className="header-logo" onClick={() => setIsMobileMenuOpen(false)}>
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
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#strength-1" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            슈퍼바이저
          </a>
          <a href="#strength-2" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            기업 전용 플랫폼
          </a>
          <a href="#strength-3" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            보고 및 비밀보장
          </a>
          <a href="#strength-4" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            맞춤형 힐링 프로그램
          </a>
          <a href="#effectiveness-section" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
            효과 및 후기
          </a>
          <a href="#contact" className="btn btn-primary mobile-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
            도입 문의하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
