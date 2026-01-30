import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Users, BarChart3, MessageCircle, Home, Briefcase, BookOpen, AlertCircle } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, desc, variant = "default", showIcon = true }) => (
    <div
        className={`info-card ${variant}`}
    >
        {showIcon && (
            <div className="info-card-icon">
                <Icon size={variant === "service" ? 32 : 28} />
            </div>
        )}
        <div className="info-card-content">
            <h3 className="info-card-title">{title}</h3>
            <p className="info-card-desc">{desc}</p>
        </div>
    </div>
);

const EapInfoSection = () => {
    const services = [
        { icon: MessageCircle, title: "심리상담", desc: "우울, 불안, 번아웃 등 직원의 내밀한 고민을 전문가가 1:1로 케어하여 심리적 회복을 돕습니다." },
        { icon: Briefcase, title: "직무 스트레스 관리", desc: "조직 내 갈등이나 과도한 업무 압박을 체계적으로 진단하고 관리하여 업무 효율을 극대화합니다." },
        { icon: BookOpen, title: "마음건강 교육 / 워크숍", desc: "회복탄력성 향상 및 소통 프로그램 등 조직원 전체를 위한 맞춤형 멘탈 케어 솔루션을 제공합니다." },
        { icon: AlertCircle, title: "위기 직원 조기 발견 & 연계", desc: "자해/자살 위험군 등 고위험 직원을 상시 모니터링하여 조기에 발견하고 전문 의료기관으로 신속하게 연계합니다." }
    ];

    const features = [
        { icon: Shield, title: "익명성/비밀보장", desc: "철저한 비밀 유지 프로토콜을 통해 사생활을 보호하며 안심하고 상담할 수 있는 환경을 제공합니다." },
        { icon: Brain, title: "1급 심리상담사", desc: "모든 상담은 1급 심리상담사가 상주하며 직접 진행하는 심리상담으로 운영됩니다." },
        { icon: Users, title: "조직 이슈 대응", desc: "개인을 넘어 조직 내 갈등, 괴롭힘, 직무 스트레스 등 다양한 조직 차원의 요구에 대응합니다." },
        { icon: BarChart3, title: "리포트/인사이트", desc: "데이터 기반의 통계 리포트를 통해 조직의 전반적인 심리 상태와 개선 방향을 제안합니다." }
    ];

    return (
        <section className="eap-info-section">
            <style>{`
                .eap-info-section {
                    padding: 60px 0;
                    background-color: var(--white);
                }

                .eap-info-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .eap-info-title {
                    font-size: 2.75rem;
                    font-weight: 900;
                    margin-bottom: 24px;
                    word-break: keep-all;
                    line-height: 1.25;
                    color: #0f172a;
                    letter-spacing: -0.02em;
                }

                .eap-info-title span {
                    color: var(--secondary);
                    position: relative;
                    display: inline-block;
                }

                .eap-info-title span::after {
                    content: '';
                    position: absolute;
                    bottom: 8px; left: 0; right: 0;
                    height: 12px;
                    background: var(--secondary);
                    opacity: 0.1;
                    z-index: -1;
                }

                .eap-info-desc {
                    color: #475569;
                    font-size: 1.15rem;
                    line-height: 1.8;
                    max-width: 750px;
                    margin: 0 auto;
                    word-break: keep-all;
                    font-weight: 500;
                }

                .section-subset {
                    margin-bottom: 60px;
                }

                .subset-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 32px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .subset-title::before {
                    content: '';
                    width: 4px;
                    height: 24px;
                    background-color: var(--secondary);
                    border-radius: 2px;
                }

                /* InfoCard Unified Styles */
                .card-grid {
                    display: grid;
                    gap: 24px;
                }

                .grid-2 { grid-template-columns: repeat(2, 1fr); }
                .grid-4 { grid-template-columns: repeat(4, 1fr); }

                .info-card {
                    padding: 40px 32px;
                    background-color: #f1f5f9;
                    border-radius: 24px;
                    border: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .info-card.service {
                    flex-direction: row;
                    align-items: flex-start;
                    background-color: var(--bg-alt);
                    border: none;
                }

                .info-card-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background-color: var(--white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
                    flex-shrink: 0;
                }

                .service .info-card-icon {
                    background-color: var(--primary);
                    color: var(--white);
                }

                .info-card-content {
                    display: flex;
                    flex-direction: column;
                }

                .info-card-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    color: var(--primary);
                }

                .info-card-desc {
                    color: var(--text-muted);
                    font-size: 1rem;
                    line-height: 1.7;
                    word-break: keep-all;
                }

                @media (max-width: 1024px) {
                    .grid-4 { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .grid-2, .grid-4 { grid-template-columns: 1fr; }
                    .info-card.service { flex-direction: column; }
                    .eap-info-header h2 { font-size: 2rem; }
                }

                #eap-info {
                    scroll-margin-top: 100px;
                }
            `}</style>
            <div className="container" id="eap-info">

                <div className="eap-info-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eap-info-title"
                    >
                        <span>EAP</span>(Employee Assistance Program)란?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="eap-info-desc"
                    >
                        직원의 삶의 질을 높이고 업무 생산성을 회복시키는 총체적 지원 시스템
                    </motion.p>
                </div>

                <div className="section-subset">
                    <h3 className="subset-title">EAP 주요 서비스 소개</h3>
                    <div className="card-grid grid-2">
                        {services.map((s, i) => (
                            <InfoCard
                                key={i}
                                {...s}
                                variant="service"
                            />
                        ))}
                    </div>
                </div>

                <div className="section-subset">
                    <h3 className="subset-title">마이카운슬러 EAP의 핵심 강점</h3>
                    <div className="card-grid grid-4">
                        {features.map((f, i) => (
                            <InfoCard key={i} {...f} showIcon={false} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default EapInfoSection;
