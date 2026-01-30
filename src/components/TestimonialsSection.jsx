import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Building2, Globe, Briefcase, GraduationCap, Landmark, Factory } from 'lucide-react';

const TestimonialsSection = () => {
    const reviews = [
        {
            category: "공공기관 A",
            role: "인사관리 담당자",
            icon: Landmark,
            title: "민원 담당 직원의 스트레스 관리에 탁월합니다",
            content: "민원 업무가 많은 부서원들의 감정 노동 해소를 위해 도입했습니다. 상담 후 직원들의 직무 몰입도가 눈에 띄게 좋아졌고, 조직 전체의 활력이 살아난 것을 느낍니다.",
        },
        {
            category: "글로벌 IT 기업 B",
            role: "HR 매니저",
            icon: Globe,
            title: "체계적인 프로그램과 전문성에 놀랐습니다",
            content: "다양한 EAP 업체를 검토했지만, 마이카운슬러만큼 체계적이고 전문적인 곳은 없었습니다. 특히 상담사 매칭 만족도가 매우 높아 임직원들의 만족도가 최상입니다.",
        },
        {
            category: "대기업 C",
            role: "복지기획팀",
            icon: Briefcase,
            title: "이직률 감소와 업무 생산성 향상을 체감합니다",
            content: "도입 이후 이직률이 유의미하게 감소했습니다. 단순히 복지를 넘어 기업의 실질적인 손실을 줄여주는 필수적인 경영 전략이라고 생각합니다.",
        },
        {
            category: "교육기관 D",
            role: "학생지원처",
            icon: GraduationCap,
            title: "전문 상담사들의 진심 어린 케어가 느껴집니다",
            content: "상담사분들의 전문성이 매우 뛰어납니다. 형식적인 상담이 아니라 정말 구성원의 마음을 어루만져주는 진정성 있는 케어 덕분에 학교 분위기가 매우 밝아졌습니다.",
        },
        {
            category: "금융권 E",
            role: "노사협력팀",
            icon: Building2,
            title: "비밀보장에 대한 신뢰가 이용률을 높였습니다",
            content: "철저한 비밀보장 시스템 덕분에 구성원들이 부담 없이 이용하고 있습니다. 누적 이용률이 타사 대비 2배 이상 높은 이유가 여기에 있다고 봅니다.",
        },
        {
            category: "제조업 F",
            role: "보건관리자",
            icon: Factory,
            title: "24시간 대응 시스템으로 든든합니다",
            content: "현장직 비중이 높은 업종 특성상 긴급 상황 대응이 중요한데, 마이카운슬러의 빠른 피드백과 체계적인 관리 덕분에 안심하고 운영하고 있습니다.",
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <style>{`
                .testimonials-section {
                    padding: 100px 0;
                    background-color: var(--bg-alt);
                }

                .testi-header {
                    text-align: center;
                    margin-bottom: 70px;
                }

                .testi-badge {
                    display: inline-block;
                    padding: 8px 20px;
                    background-color: white;
                    border: 1px solid var(--border);
                    border-radius: 100px;
                    color: var(--secondary);
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 24px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
                }

                .testi-title {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    color: var(--primary);
                    margin-bottom: 24px;
                    word-break: keep-all;
                    line-height: 1.15;
                    letter-spacing: -0.04em;
                }

                .testi-title span {
                    color: var(--secondary);
                }

                .testi-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }

                .testi-card {
                    background: white;
                    border-radius: 24px;
                    padding: 40px;
                    border: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .testi-card-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: var(--primary);
                    line-height: 1.4;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    word-break: keep-all;
                }

                .quote-icon-left {
                    color: var(--secondary);
                    opacity: 0.3;
                    flex-shrink: 0;
                    margin-top: 4px;
                    transform: rotate(180deg);
                }

                .quote-icon-right {
                    color: var(--secondary);
                    opacity: 0.3;
                    flex-shrink: 0;
                    align-self: flex-end;
                    margin-bottom: 4px;
                }

                .testi-card-content {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text-muted);
                    word-break: keep-all;
                    flex-grow: 1;
                }

                .testi-card-footer {
                    padding-top: 24px;
                    border-top: 1px solid #f1f5f9;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .client-avatar {
                    width: 44px;
                    height: 44px;
                    background-color: #f1f5f9;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--secondary);
                }

                .client-meta {
                    display: flex;
                    flex-direction: column;
                }

                .client-company {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .client-role {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }

                @media (max-width: 1024px) {
                    .testi-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .testi-grid {
                        grid-template-columns: 1fr;
                    }
                    .testi-title {
                        font-size: 2rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="testi-header">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="testi-badge"
                    >
                        Customer Success
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="testi-title"
                    >
                        도입 이후 변화된 <span>생생한 고객사 후기</span>
                    </motion.h2>
                </div>

                <div className="testi-grid">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            className="testi-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="testi-card-title">
                                <Quote size={20} className="quote-icon-left" />
                                <span>{rev.title}</span>
                                <Quote size={20} className="quote-icon-right" />
                            </h3>
                            <p className="testi-card-content">{rev.content}</p>
                            <div className="testi-card-footer">
                                <div className="client-avatar">
                                    <rev.icon size={20} />
                                </div>
                                <div className="client-meta">
                                    <span className="client-company">{rev.category}</span>
                                    <span className="client-role">{rev.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center', marginTop: '60px', fontWeight: 500 }}>
                    * 본 후기는 실제 고객사의 피드백을 바탕으로 익명으로 재구성되었습니다.
                </p>
            </div>
        </section>
    );
};

export default TestimonialsSection;
