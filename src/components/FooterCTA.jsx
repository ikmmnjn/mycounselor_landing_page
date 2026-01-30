import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import ContactSection from './ContactSection';

const FooterCTA = () => {
    return (
        <section id="contact-cta" className="footer-cta-section">
            <style>{`
                .footer-cta-section {
                    background-color: var(--bg-alt);
                    border-top: 1px solid var(--border);
                    padding: 100px 0;
                }

                .client-logos-section {
                    margin-bottom: 80px;
                    text-align: center;
                }

                .client-logos-section h4 {
                    font-size: 1rem;
                    color: var(--text-muted);
                    margin-bottom: 40px;
                    letter-spacing: 0.1em;
                }

                .logo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 30px;
                    align-items: center;
                }

                .logo-item img {
                    max-width: 120px;
                    height: auto;
                    mix-blend-mode: multiply;
                }

                .cta-box {
                    background-color: var(--primary);
                    border-radius: 32px;
                    padding: 80px 40px;
                    color: white;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .cta-decoration {
                    position: absolute;
                    top: -10%;
                    right: -5%;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
                    pointer-events: none;
                }

                .cta-title {
                    color: white;
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 24px;
                }

                .cta-desc {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    margin-bottom: 0;
                    max-width: 600px;
                    margin: 0 auto 0;
                }

                .footer-info-container {
                    margin-top: 80px;
                    padding-top: 40px;
                    border-top: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 32px;
                }

                .footer-brand {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: var(--primary);
                    margin-bottom: 16px;
                }

                .footer-company-info {
                    color: var(--text-muted);
                    font-size: 0.875rem;
                    line-height: 2;
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

                .footer-copyright {
                    margin-top: 60px;
                    padding-bottom: 40px;
                    text-align: center;
                    color: #CBD5E1;
                    font-size: 0.8rem;
                }

                @media (max-width: 768px) {
                    .cta-title {
                        font-size: 2rem;
                    }
                    
                    .logo-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .footer-info-container {
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
                <div className="client-logos-section">
                    <h4>주요 파트너사</h4>
                    <div className="logo-grid">
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/jiran.png`} alt="지란지교소프트" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/kobaco.png`} alt="KOBACO" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/gyeongnam.png`} alt="경상남도교육청" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/srt_new.png`} alt="SRT" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/daesang.png`} alt="DAESANG" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/women_new.png`} alt="한국여성인권진흥원" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/sudokwon_new.png`} alt="수도권매립지관리공사" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/bucheon_new.png`} alt="부천대학교" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/gyeonggi_new.jpg`} alt="경기도" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/jeonnam.png`} alt="전라남도" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/seoul_family.png`} alt="서울시여성가족재단" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/gwanak_new.jpg`} alt="관악구" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/gangnam_new.png`} alt="강남구" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/yeongdeungpo_new.jpg`} alt="영등포구" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/kyobo.png`} alt="교보문고" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/daeju.png`} alt="대주산업" /></div>
                        <div className="logo-item"><img src={`${import.meta.env.BASE_URL}assets/logos/flatpoint.png`} alt="플랫포인트" /></div>
                    </div>
                </div>

                <div className="cta-box">
                    <div className="cta-decoration" />

                    <h2 className="cta-title">
                        지금, 우리 조직의<br />
                        변화를 시작하세요.
                    </h2>
                    <p className="cta-desc">
                        도입 관련 궁금한 점이 있으신가요? <br />
                        전문 컨설턴트가 기업의 특성에 맞는 최적의 플랜을 제안해 드립니다.
                    </p>
                </div>

                <ContactSection />

                <div className="footer-info-container">
                    <div>
                        <div className="footer-brand">마이카운슬러</div>
                        <p className="footer-company-info">
                            주식회사 마이카운슬러 | 대표이사: OOO <br />
                            사업자등록번호: 000-00-00000 | 통신판매업신고: 제 2024-서울-0000호 <br />
                            서울특별시 OO구 OO로 00, 00층
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
                                <li className="footer-link-item">공식 홈페이지 <ExternalLink size={14} /></li>
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
        </section>
    );
};

export default FooterCTA;
