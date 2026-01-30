import React from 'react';
import { motion } from 'framer-motion';

const ServiceOverview = () => {
    const services = [
        {
            tag: "Quality Control",
            title: "우리는 1급 슈퍼바이저가\\n직접 상담을 진행합니다",
            desc: "단순한 상담이 아닙니다. 엄격한 자격 검증을 거친 석/박사급 1급 전문가와 슈퍼바이저 그룹이 수준 높은 케어 서비스를 제공합니다.",
            image: "https://via.placeholder.com/600x450?text=Premium+Supervisors"
        },
        {
            tag: "Accessibility",
            title: "전국 어디서나 편리한\\n압도적인 상담 인프라",
            desc: "수도권에 집중된 타 서비스와 달리, 마이카운슬러는 전국적인 오프라인 네트워크를 통해 임직원들이 어디서나 편리하게 상담받을 수 있습니다.",
            image: "https://via.placeholder.com/600x450?text=Nationwide+Network"
        },
        {
            tag: "Insight & Data",
            title: "데이터로 증명하는\\n조직 효과성 리포트",
            desc: "전 전용 관리자 페이지를 통해 실시간 이용 통계부터 상세 보고서까지 제공합니다. 모호했던 도입 효과를 수치와 데이터로 투명하게 확인하세요.",
            image: "https://via.placeholder.com/600x450?text=Admin+Report+Dashboard"
        }
    ];

    return (
        <section className="service-overview">
            <style>{`
                .service-overview {
                    padding: 160px 0;
                    background-color: #fafafa;
                }

                .overview-header {
                    text-align: center;
                    margin-bottom: 120px;
                }

                .overview-tag {
                    color: #3b82f6;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    margin-bottom: 24px;
                    display: block;
                }

                .overview-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.2;
                }

                .service-item {
                    display: flex;
                    align-items: center;
                    gap: 100px;
                    margin-bottom: 160px;
                }

                .service-item:last-child {
                    margin-bottom: 0;
                }

                .service-item:nth-child(even) {
                    flex-direction: row-reverse;
                }

                .service-image {
                    flex: 1.2;
                    aspect-ratio: 4/3;
                    background: #f1f5f9;
                    border-radius: 40px;
                    overflow: hidden;
                    box-shadow: 0 40px 80px rgba(0,0,0,0.08);
                    position: relative;
                }

                .service-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .service-content {
                    flex: 1;
                }

                .item-tag {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #3b82f6;
                    margin-bottom: 20px;
                    display: block;
                }

                .item-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #1e293b;
                    margin-bottom: 24px;
                    white-space: pre-line;
                    line-height: 1.3;
                    letter-spacing: -0.01em;
                }

                .item-desc {
                    font-size: 1.2rem;
                    color: #64748b;
                    line-height: 1.8;
                    word-break: keep-all;
                }

                @media (max-width: 1024px) {
                    .service-item { gap: 60px; }
                    .item-title { font-size: 2rem; }
                }

                @media (max-width: 768px) {
                    .service-item, .service-item:nth-child(even) {
                        flex-direction: column;
                        gap: 40px;
                        margin-bottom: 100px;
                    }
                    .service-image { width: 100%; }
                    .overview-title { font-size: 2rem; }
                    .item-title { font-size: 1.8rem; }
                }
            `}</style>

            <div className="container">
                <div className="overview-header">
                    <span className="overview-tag">SERVICE OVERVIEW</span>
                    <h2 className="overview-title">비교할수록 답은 명확합니다</h2>
                </div>

                <div className="service-list">
                    {services.map((item, i) => (
                        <div className="service-item" key={i}>
                            <motion.div
                                className="service-image"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <img src={item.image} alt={item.tag} />
                            </motion.div>

                            <motion.div
                                className="service-content"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className="item-tag">{item.tag}</span>
                                <h3 className="item-title">{item.title}</h3>
                                <p className="item-desc">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
