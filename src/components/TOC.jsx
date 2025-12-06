import React, { useState } from "react";
import { useDarkMode } from "../DarkModeContext";

export default function TOC() {
    const { darkMode } = useDarkMode();
    const chapters = [
        {
            title: "Preface",
            description: "Introduction to your journey of funded education.",
            graphic: "📘",
            details: "Set the foundation for your funded education journey. Learn why this guide exists and how it will transform your approach to studying abroad."
        },
        {
            title: "Chapter 1: The Dream and the Reality",
            description: "Understanding the global education landscape.",
            graphic: "🌍",
            details: "Explore the current state of international education, market trends, and what it really takes to succeed in the global education system."
        },
        {
            title: "Chapter 2: What is MPOWER Financing?",
            description: "Deep dive into funding options.",
            graphic: "💰",
            details: "Understand MPOWER financing in detail—how it works, eligibility criteria, loan amounts, and why it's a game-changer for funding education."
        },
        {
            title: "Chapter 3: Schools Eligible for Funding",
            description: "List of universities offering funding.",
            graphic: "🏫",
            details: "Discover which universities and programs qualify for MPOWER financing. Get insights into tier-1 schools and hidden gem institutions."
        },
        {
            title: "Chapter 4: Courses Leading to PR",
            description: "Programs that lead to permanent residency.",
            graphic: "📜",
            details: "Learn which courses and programs position you for permanent residency. Strategic planning for long-term migration goals."
        },
        {
            title: "Chapter 5: How to Apply for MPOWER Funding",
            description: "Step-by-step application guide.",
            graphic: "📝",
            details: "Master the complete MPOWER application process. Avoid common mistakes and maximize your approval chances with our proven strategies."
        },
        {
            title: "Chapter 6: Success Stories",
            description: "Real testimonials from funded students.",
            graphic: "🎉",
            details: "Be inspired by real students who secured full funding. Learn from their experiences, challenges overcome, and actionable lessons."
        },
        {
            title: "Chapter 7: How to Build a Study-Abroad Plan",
            description: "Strategic planning for funding success.",
            graphic: "🗺️",
            details: "Create a comprehensive 5-year plan for your education abroad. Timeline, milestones, and strategic decision points explained."
        },
        {
            title: "Chapter 8: Bonus Tools & Resources",
            description: "Templates and resources for your journey.",
            graphic: "🛠️",
            details: "Access exclusive templates, checklists, and resources. From application docs to interview prep materials—everything you need."
        },
        {
            title: "Chapter 9: Understanding Credit, Loans & Repayments",
            description: "Financial management strategies.",
            graphic: "💳",
            details: "Master credit building, loan repayment strategies, and financial management. Plan your finances for long-term success."
        },
        {
            title: "Chapter 10: Life Abroad, Adapting, Thriving & Giving Back",
            description: "Cultural adaptation and career development.",
            graphic: "🌟",
            details: "Navigate life in a new country. From cultural adjustment to networking, career building, and mentoring future students."
        },
    ];

    const [activeChapter, setActiveChapter] = useState(null);

    return (
        <section id="toc" style={{
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
            backgroundColor: darkMode ? '#0f1419' : '#f5f7fa',
            transition: 'background-color 0.3s ease',
            color: darkMode ? '#e6edf3' : '#000000',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '-150px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                right: '-100px',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 12s ease-in-out infinite 1s',
                pointerEvents: 'none'
            }}></div>

            <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)', animation: 'fadeIn 0.8s ease' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '800',
                        color: darkMode ? '#00d4ff' : '#0d6efd',
                        marginBottom: '1rem'
                    }}>
                        📚 Table of Contents
                    </h2>
                    <p style={{
                        color: darkMode ? '#8b949e' : '#666',
                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '1.6'
                    }}>
                        Explore all chapters covering everything you need to know about funding your international education.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "clamp(1.5rem, 3vw, 2rem)",
                    }}
                >
                    {chapters.map((chapter, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "clamp(1.5rem, 3vw, 2rem)",
                                borderRadius: "12px",
                                boxShadow: activeChapter === index
                                    ? (darkMode ? "0 15px 40px rgba(13, 110, 253, 0.3)" : "0 15px 40px rgba(13, 110, 253, 0.2)")
                                    : (darkMode ? "0 6px 20px rgba(0, 0, 0, 0.2)" : "0 6px 20px rgba(0, 0, 0, 0.08)"),
                                cursor: "pointer",
                                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                textAlign: "center",
                                backgroundColor: darkMode ? '#161b22' : "white",
                                border: activeChapter === index
                                    ? (darkMode ? "1px solid rgba(13, 110, 253, 0.5)" : "1px solid rgba(13, 110, 253, 0.3)")
                                    : (darkMode ? "1px solid #30363d" : "1px solid #e8e8e8"),
                                color: darkMode ? '#e6edf3' : '#000000',
                                transform: activeChapter === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={() => setActiveChapter(index)}
                            onMouseLeave={() => setActiveChapter(null)}
                            onClick={() => setActiveChapter(activeChapter === index ? null : index)}
                        >
                            {/* Background gradient for active state */}
                            {activeChapter === index && (
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: darkMode
                                        ? 'linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)'
                                        : 'linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(0, 212, 255, 0.03) 100%)',
                                    pointerEvents: 'none',
                                    zIndex: 0
                                }}></div>
                            )}

                            <div
                                style={{
                                    fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                                    marginBottom: "1rem",
                                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    transform: activeChapter === index ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                {chapter.graphic}
                            </div>

                            <h3 style={{
                                fontWeight: '700',
                                marginBottom: '0.75rem',
                                color: activeChapter === index
                                    ? '#0d6efd'
                                    : (darkMode ? '#e6edf3' : '#1a1a2e'),
                                fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                                transition: 'color 0.3s ease',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {chapter.title}
                            </h3>

                            <p
                                style={{
                                    color: darkMode ? '#8b949e' : "#666",
                                    marginTop: "0.5rem",
                                    marginBottom: "0rem",
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5',
                                    opacity: activeChapter === index ? 1 : 0.8,
                                    transition: "opacity 0.3s ease",
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                {chapter.description}
                            </p>

                            {/* Expandable details section */}
                            {activeChapter === index && (
                                <div style={{
                                    marginTop: '1.2rem',
                                    paddingTop: '1.2rem',
                                    borderTop: `1px solid ${darkMode ? 'rgba(13, 110, 253, 0.3)' : 'rgba(13, 110, 253, 0.2)'}`,
                                    animation: 'expandDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        color: darkMode ? '#c9d1d9' : '#555',
                                        margin: 0,
                                        fontStyle: 'italic'
                                    }}>
                                        ✨ {chapter.details}
                                    </p>
                                </div>
                            )}

                            {/* Hover indicator */}
                            {activeChapter === index && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(90deg, #0d6efd, #00d4ff)',
                                    animation: 'slideInRight 0.4s ease'
                                }}></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Quick scroll indicator */}
                <div style={{
                    textAlign: 'center',
                    marginTop: 'clamp(2rem, 5vw, 3rem)',
                    fontSize: '0.9rem',
                    color: darkMode ? '#6e7681' : '#999',
                    animation: 'fadeIn 1.2s ease'
                }}>
                    💡 Click on any chapter to expand details
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-30px);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideInRight {
                    from {
                        transform: scaleX(0);
                        transform-origin: left;
                    }
                    to {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }

                @keyframes expandDown {
                    from {
                        opacity: 0;
                        max-height: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        max-height: 200px;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}

