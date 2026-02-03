import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-main">
            <style>{`
                .footer-main {
                    background-color: var(--bg-alt);
                    border-top: 1px solid var(--border);
                    padding-bottom: 40px;
                }

                .footer-container {
                    margin-top: 80px;
                    padding-top: 40px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 32px;
                }

                .footer-brand {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: var(--primary);
                    margin-bottom: 24px;
                    letter-spacing: -0.04em;
                }

                .footer-company-info {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.8;
                    font-weight: 500;
                }

                .footer-links-group {
                    display: flex;
                    gap: 48px;
                }

                .footer-links-title {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                .footer-links-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }

                .footer-link-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .footer-link-item a {
                    color: inherit;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: color 0.2s ease;
                }

                .footer-link-item a:hover {
                    color: var(--primary);
                }

                .footer-copyright {
                    margin-top: 60px;
                    text-align: center;
                    color: #CBD5E1;
                    font-size: 0.8rem;
                }

                @media (max-width: 768px) {
                    .footer-container {
                        flex-direction: column;
                        margin-top: 40px;
                    }

                    .footer-links-group {
                        gap: 32px;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
            <div className="container">
                <div className="footer-container">
                    <div>
                        <div className="footer-brand">마이카운슬러</div>
                        <p className="footer-company-info">
                            주식회사 마이카운슬러 | 대표이사: 권경애 <br />
                            서울특별시 마포구 마포대로 38, 907호
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div>
                            <h4 className="footer-links-title">Contact</h4>
                            <ul className="footer-links-list">
                                <li className="footer-link-item"><Phone size={16} /> 010-2416-3110</li>
                                <li className="footer-link-item"><Mail size={16} /> mycoun@mycoun21.com</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="footer-links-title">Links</h4>
                            <ul className="footer-links-list">
                                <li className="footer-link-item">
                                    <a href="https://mycoun21.com/" target="_blank" rel="noopener noreferrer">
                                        공식 홈페이지 <ExternalLink size={14} />
                                    </a>
                                </li>
                                <li>개인정보처리방침</li>
                                <li>이용약관</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    © 2026 MyCounselor. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
