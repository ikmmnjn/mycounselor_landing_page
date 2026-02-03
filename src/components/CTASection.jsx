import React from 'react';
import ContactSection from './ContactSection';

const CTASection = () => {
    return (
        <>
            <style>{`
                .client-logos-section {
                    padding: 80px 0;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                    background-color: var(--white);
                    border-top: 1px solid var(--border);
                }

                .client-logos-section h2 {
                    font-size: clamp(1.75em, 2vw, 4.5rem);
                    color: #000000;
                    margin-bottom: 60px;
                    font-weight: 800;
                    letter-spacing: -0.04em;
                }
                .logo-marquee-container {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                }

                .logo-marquee-container::before,
                .logo-marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 200px;
                    height: 100%;
                    z-index: 2;
                }

                .logo-marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, #ffffff, transparent);
                }

                .logo-marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, #ffffff, transparent);
                }

                .logo-marquee-track {
                    display: flex;
                    align-items: center;
                    width: max-content;
                    animation: marquee 50s linear infinite;
                    gap: 90px;
                    padding-right: 90px;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .logo-item img {
                    height: 90px;
                    width: auto;
                    max-width: 280px;
                    object-fit: contain;
                    transition: all 0.3s ease;
                }

                .cta-wrapper-section {
                    padding: 80px 0;
                    background-color: var(--bg-alt);
                }

                .contact-wrapper-section {
                    padding: 0 0 100px 0;
                    background-color: var(--bg-alt);
                    margin-top: -60px; /* Overlap slightly with CTA for tighter feel if needed, or just regular padding */
                }

                .cta-box {
                    background-color: var(--primary);
                    border-radius: 40px;
                    padding: 80px 40px;
                    color: white;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(26, 43, 69, 0.15);
                    z-index: 2;
                }

                .cta-decoration {
                    position: absolute;
                    top: -10%;
                    right: -5%;
                    width: 350px;
                    height: 350px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
                    pointer-events: none;
                }

                .cta-title {
                    color: white;
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 24px;
                    line-height: 1.3;
                }

                .cta-desc {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .client-logos-section { padding: 60px 0; }
                    .cta-wrapper-section { padding: 80px 0; }
                    .cta-box { padding: 60px 24px; }
                    .cta-title { font-size: 1.75rem; }
                    .cta-desc { font-size: 1.1rem; }
                    .logo-marquee-container::before,
                    .logo-marquee-container::after { width: 80px; }
                    .logo-marquee-track { gap: 40px; padding-right: 40px; }
                    .logo-item img { height: 32px; }
                }
            `}</style>

            <section id="partners" className="client-logos-section">
                <div className="container">
                    <h2>협력 업체</h2>
                    <div className="logo-marquee-container">
                        <div className="logo-marquee-track">
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
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
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta-wrapper-section">
                <div className="container">
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
                </div>
            </section>

            <section id="contact" className="contact-wrapper-section">
                <div className="container">
                    <ContactSection />
                </div>
            </section>
        </>
    );
};

export default CTASection;
