import ebookCover from "../assets/ebookCover.png";
import { useDarkMode } from "../DarkModeContext";

export default function Hero() {
    const { darkMode } = useDarkMode();

    return (
        <section
            id="hero"
            style={{
                background: darkMode
                    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
                    : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                paddingTop: "clamp(3rem, 8vw, 5rem)",
                paddingBottom: "clamp(3rem, 8vw, 5rem)",
                transition: 'background 0.3s ease',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                right: '-150px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite 1s',
                pointerEvents: 'none'
            }}></div>

            <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                        gap: "clamp(2rem, 5vw, 3rem)",
                        alignItems: "center",
                    }}
                >
                    {/* Image with enhanced styling */}
                    <div
                        style={{
                            order: -1,
                            animation: 'slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '100%'
                        }}>
                            {/* Glowing border effect */}
                            <div style={{
                                position: 'absolute',
                                inset: '-8px',
                                background: 'linear-gradient(135deg, #0d6efd, #00d4ff, #0d6efd)',
                                borderRadius: '12px',
                                opacity: 0.6,
                                animation: 'glow 3s ease-in-out infinite',
                                zIndex: -1
                            }}></div>
                            <img
                                src={ebookCover}
                                alt="Funded Dreams Ebook Cover"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "8px",
                                    background: "none",
                                    boxShadow: '0 20px 60px rgba(13, 110, 253, 0.4)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
                                }}
                            />
                        </div>
                    </div>

                    {/* Text Content with animations */}
                    <div style={{ animation: 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                background: 'linear-gradient(135deg, #0d6efd, #00d4ff)',
                                color: '#ffffff',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '50px',
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                marginBottom: '1.5rem',
                                animation: 'fadeIn 0.8s ease 0.2s both',
                                boxShadow: '0 4px 15px rgba(13, 110, 253, 0.3)'
                            }}
                        >
                            ✨ YOUR PATH TO GLOBAL EDUCATION
                        </span>

                        <h1
                            style={{
                                fontSize: "clamp(2.8rem, 10vw, 4rem)",
                                lineHeight: 1.1,
                                fontWeight: 800,
                                marginBottom: '1rem',
                                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'fadeIn 0.8s ease 0.3s both'
                            }}
                        >
                            Funded Dreams
                        </h1>

                        <p
                            style={{
                                fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                                fontWeight: 300,
                                color: "rgba(255,255,255,0.95)",
                                marginBottom: '1rem',
                                animation: 'fadeIn 0.8s ease 0.4s both'
                            }}
                        >
                            Your comprehensive step-by-step guide to studying abroad with full funding.
                        </p>

                        <p
                            style={{
                                fontSize: "1rem",
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.8,
                                marginBottom: "2rem",
                                animation: 'fadeIn 0.8s ease 0.5s both'
                            }}
                        >
                            Discover how to navigate the complex world of international education financing. Learn proven strategies from students who have successfully secured scholarships and alternative funding options to make your dream education a reality.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "clamp(0.75rem, 2vw, 1.5rem)",
                                flexWrap: "wrap",
                                marginBottom: "2.5rem",
                                animation: 'fadeIn 0.8s ease 0.6s both'
                            }}
                        >
                            <a
                                href="https://selar.com/747m077905"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.8rem)',
                                    background: 'linear-gradient(135deg, #0d6efd, #0050d8)',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    boxShadow: '0 8px 20px rgba(13, 110, 253, 0.4)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(13, 110, 253, 0.6)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(13, 110, 253, 0.4)';
                                }}
                            >
                                Buy on Selar
                            </a>

                            <a
                                href="https://gumroad.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.8rem)',
                                    background: 'transparent',
                                    color: '#ffffff',
                                    border: '2px solid rgba(255, 255, 255, 0.5)',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = '#00d4ff';
                                    e.currentTarget.style.color = '#00d4ff';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                View on Gumroad
                            </a>
                        </div>

                        {/* Stats with enhanced styling */}
                        <div style={{
                            display: "flex",
                            gap: "clamp(1.5rem, 3vw, 2.5rem)",
                            flexWrap: "wrap",
                            animation: 'fadeIn 0.8s ease 0.7s both'
                        }}>
                            {[
                                { number: '10+', label: 'Chapters', delay: '0s' },
                                { number: '20+', label: 'Success Stories', delay: '0.1s' },
                                { number: '100%', label: 'Practical Guide', delay: '0.2s' }
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '1rem 1.5rem',
                                        background: 'rgba(13, 110, 253, 0.1)',
                                        border: '1px solid rgba(13, 110, 253, 0.3)',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(10px)',
                                        animation: `slideInUp 0.6s ease ${stat.delay} both`
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "1.8rem",
                                            fontWeight: 700,
                                            background: 'linear-gradient(135deg, #00d4ff, #0dcaf0)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "rgba(255,255,255,0.8)",
                                            marginTop: '0.25rem'
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
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

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-30px);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                }
            `}</style>
        </section>
    );
}

