import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, ShieldCheck, Award } from 'lucide-react';

const ReportSecuritySection = () => {
    return (
        <section className="security-section" id="strength-3">
            <style>{`
                .security-section {
                    padding: 120px 0;
                    background-color: var(--white);
                    overflow: hidden;
                }

                .security-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .strength-badge {
                    display: inline-block;
                    padding: 8px 20px;
                    background-color: var(--secondary);
                    color: white;
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 24px;
                    letter-spacing: 0.05em;
                }

                .security-header h2 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    margin-bottom: 24px;
                    color: var(--primary);
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                    word-break: keep-all;
                }

                /* Layout structure */
                .zigzag-container {
                    display: flex;
                    flex-direction: column;
                    gap: 120px;
                }

                .zigzag-grid {
                    display: flex;
                    align-items: center;
                    justify-content: center; /* Center horizontally */
                    gap: 80px;
                    max-width: 1100px; /* Constrain grid width for better centering */
                    margin: 0 auto; /* Center the grid box itself */
                }

                .reverse .zigzag-grid {
                    flex-direction: row-reverse;
                }

                /* Card Styles */
                .bubble-card {
                    flex: 0.85; /* Proportional sizing */
                    max-width: 440px;
                    background-color: #f0f7ff;
                    border-radius: 40px;
                    padding: 32px;
                    position: relative;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
                }

                .zigzag-content {
                    flex: 1.15; /* Relative proportionality */
                    max-width: 520px;
                }

                .bubble-card.green {
                    background-color: #f2faf5;
                }

                /* The Pointer/Arrow */
                .bubble-card::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    width: 0;
                    height: 0;
                    border: 18px solid transparent;
                    transform: translateY(-50%);
                }

                /* Pointing from card to content */
                .left-card::after {
                    right: -35px;
                    border-left-color: #f0f7ff;
                }

                .right-card::after {
                    left: -35px;
                    border-right-color: #f2faf5;
                }

                .card-category {
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--secondary);
                    margin-bottom: 12px;
                    display: block;
                }

                .green .card-category {
                    color: #10b981;
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: var(--primary);
                    margin-bottom: 32px;
                    line-height: 1.3;
                    word-break: keep-all;
                    white-space: pre-wrap;
                }

                .card-image-box {
                    background: white;
                    border-radius: 20px;
                    padding: 20px;
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    overflow: hidden;
                }

                .card-image-box img {
                    width: 100%;
                    height: auto;
                    border-radius: 12px;
                    display: block;
                }

                .card-illu-wrapper {
                    position: absolute;
                    width: 180px;
                    height: 180px;
                    z-index: 5;
                    pointer-events: none;
                }

                .left-card .card-illu-wrapper {
                    top: -60px;
                    right: -40px;
                }

                .right-card .card-illu-wrapper {
                    top: -60px;
                    left: -40px;
                }

                .card-illu-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
                }

                /* Content Styles */
                .zigzag-content {
                    flex: 1;
                    max-width: 500px;
                }

                .zigzag-content h3 {
                    font-size: clamp(1.75rem, 4vw, 2.5rem);
                    font-weight: 900;
                    color: var(--primary);
                    margin-bottom: 24px;
                    line-height: 1.2;
                    letter-spacing: -0.03em;
                    word-break: keep-all;
                }

                .zigzag-content p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-muted);
                    font-weight: 500;
                    word-break: keep-all;
                }

                .iso-badge-inline {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #f1f5f9;
                    padding: 6px 14px;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-top: 16px;
                }

                @media (max-width: 968px) {
                    .zigzag-grid, .reverse .zigzag-grid {
                        flex-direction: column;
                        text-align: center;
                        gap: 40px;
                    }

                    .bubble-card::after {
                        display: none;
                    }

                    .zigzag-content {
                        max-width: 100%;
                    }
                }
            `}</style>

            <div className="container">
                <div className="security-header">
                    <motion.span
                        className="strength-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        마이카운슬러의 차별점 3
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        통계 보고 및 비밀 보장 체계
                    </motion.h2>
                </div>

                <div className="zigzag-container">
                    {/* Block 1: Reporting */}
                    <div className="zigzag-item">
                        <div className="zigzag-grid">
                            <motion.div
                                className="bubble-card left-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >

                                <span className="card-category">정기 운영 보고</span>
                                <h4 className="card-title">
                                    " EAP 지표를 통해 이용 현황을 실시간으로 확인하고 싶어요 "
                                </h4>
                                <div className="card-image-box">
                                    <img src={`${import.meta.env.BASE_URL}assets/report_sample.jpg`} alt="EAP 운영 보고서 샘플" />
                                </div>
                            </motion.div>

                            <div className="zigzag-content">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    체계적인 운영 관리와<br />
                                    정기 리포트로<br />
                                    성과를 명확히 보여드립니다
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    월간 이용 현황과 상담 운영 결과를 정교한 통계 지표로 정기 보고합니다.
                                    개인 식별이 불가능한 데이터 기반 분석을 통해, 조직 전반의 심리 상태와 프로그램 효과를 객관적으로 확인할 수 있는 관리 체계를 제공합니다.
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Block 2: Security */}
                    <div className="zigzag-item reverse">
                        <div className="zigzag-grid">
                            <motion.div
                                className="bubble-card green right-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="card-illu-wrapper">

                                </div>
                                <span className="card-category">비밀보장 및 정보보호</span>
                                <h4 className="card-title">
                                    " 임직원의 소중한 상담 정보,<br />
                                    완벽한 보안이 필요해요 "
                                </h4>
                                <div className="card-image-box">
                                    <img src={`${import.meta.env.BASE_URL}assets/iso_cert_new.png`} alt="ISO 27001 인증서" />
                                </div>
                            </motion.div>

                            <div className="zigzag-content">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    철저한 비밀보장과<br />
                                    검증된 보안 시스템으로<br />
                                    신뢰를 더합니다
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    비밀보장 원칙에 기반한 상담 운영은 물론,
                                    국제 정보보호 표준인 <strong>ISO/IEC 27001 인증</strong>을 보유한 관리 체계를 구축하였습니다.
                                    인증된 관리 체계를 바탕으로 상담 정보와 개인 데이터를 안전하게 보호합니다.
                                    상담 기록과 개인정보는 엄격한 기준에 따라 관리됩니다.
                                </motion.p>
                                <div className="iso-badge-inline">
                                    <Award size={16} /> ISO/IEC 27001 인증 보유
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportSecuritySection;
