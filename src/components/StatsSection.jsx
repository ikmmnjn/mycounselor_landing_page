import React from 'react';

const StatCard = ({ label, value, unit }) => (
    <div className="stat-card">
        <p className="stat-label">{label}</p>
        <div className="stat-value">
            {value}<span className="stat-unit">{unit}</span>
        </div>
    </div>
);

const StatsSection = () => {
    const stats = [
        { label: "누적 상담 건수", value: "50,000", unit: "+" },
        { label: "상담 만족도", value: "98", unit: "%" },
        { label: "재이용률", value: "85", unit: "%" },
        { label: "도입 기업 수", value: "120", unit: "+" }
    ];

    return (
        <section id="stats" className="stats-section">
            <style>{`
                .stats-section {
                    padding: 80px 0;
                    background-color: transparent;
                }

                .stats-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .stats-header h2 {
                    font-size: 2rem;
                    font-weight: 800;
                    margin: 0;
                }

                .stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    background-color: white;
                    border-radius: 32px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    border: 1px solid var(--border);
                }

                .stat-card {
                    text-align: center;
                    padding: 40px;
                }

                .stat-label {
                    color: var(--text-muted);
                    font-size: 1rem;
                    margin-bottom: 16px;
                    font-weight: 500;
                }

                .stat-value {
                    font-size: 3rem;
                    font-weight: 800;
                    color: var(--secondary);
                }

                .stat-unit {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-left: 4px;
                }
            `}</style>
            <div className="container">
                <div className="stats-header">
                    <h2>숫자로 보는 마이카운슬러 EAP</h2>
                </div>

                <div className="stat-grid">
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
