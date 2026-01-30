import React from 'react';
import { motion } from 'framer-motion';

const HookSection = () => {
    return (
        <section id="hook" className="hook-section">
            <style>{`
                .hook-section {
                    background-color: var(--primary);
                    color: white;
                    padding: 100px 0;
                    text-align: center;
                }

                .hook-title {
                    font-size: max(40px, 3.5vw);
                    font-weight: 800;
                    line-height: 1.3;
                    color: white;
                    word-break: keep-all;
                    margin: 0;
                }

                .hook-title span {
                    color: #10B981;
                }

                .hook-divider {
                    margin: 40px auto 0;
                    height: 2px;
                    width: 80px;
                    background-color: #10B981;
                }
            `}</style>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="hook-title">
                        “지금 조직에 필요한 것은
                        단순한 '복지'가 아니라 <span>'회복력'</span>입니다.”
                    </h2>
                    <div className="hook-divider" />
                </motion.div>
            </div>
        </section>
    );
};

export default HookSection;
