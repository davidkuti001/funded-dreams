import { useState, useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import reviewsData from "../data/reviews.json";

export default function Reviews() {
    const { darkMode } = useDarkMode();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const reviews = reviewsData;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
                setIsAnimating(false);
            }, 300);
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextReview = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            setIsAnimating(false);
        }, 300);
    };

    const prevReview = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <section id="reviews" style={{
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
            background: darkMode
                ? 'linear-gradient(135deg, #161b22 0%, #0d1117 50%, #161b22 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.3s ease'
        }}>
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                right: '-150px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 12s ease-in-out infinite',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(13, 110, 253, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 15s ease-in-out infinite 2s',
                pointerEvents: 'none'
            }}></div>

            <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '800',
                        color: darkMode ? '#00d4ff' : '#0d6efd',
                        marginBottom: '1rem'
                    }}>
                        ⭐ What Our Readers Say
                    </h2>
                    <p style={{
                        color: darkMode ? '#8b949e' : '#666',
                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '1.6'
                    }}>
                        Real experiences from students who have transformed their educational journeys with Funded Dreams.
                    </p>
                </div>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {/* Review Card */}
                    <div style={{
                        backgroundColor: darkMode ? '#0d1117' : '#ffffff',
                        borderRadius: '16px',
                        padding: 'clamp(2rem, 4vw, 3rem)',
                        boxShadow: darkMode ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        border: darkMode ? '1px solid #30363d' : '1px solid rgba(0, 0, 0, 0.05)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Quote Icon */}
                        <div style={{
                            fontSize: '3rem',
                            color: '#0d6efd',
                            marginBottom: '1.5rem',
                            opacity: 0.6
                        }}>
                            "
                        </div>

                        {/* Review Text */}
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                            lineHeight: '1.7',
                            color: darkMode ? '#e6edf3' : '#333',
                            marginBottom: '2rem',
                            fontStyle: 'italic'
                        }}>
                            {reviews[currentIndex].review}
                        </p>

                        {/* Reviewer Name */}
                        <div style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: darkMode ? '#00d4ff' : '#0d6efd'
                        }}>
                            — {reviews[currentIndex].name}
                        </div>

                        {/* Rating Stars */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.25rem',
                            marginTop: '1rem'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} style={{
                                    fontSize: '1.2rem',
                                    color: '#ffd700'
                                }}>
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: darkMode ? '#30363d' : '#f0f4f8',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            color: darkMode ? '#e6edf3' : '#0d6efd',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        aria-label="Previous review"
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextReview}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: darkMode ? '#30363d' : '#f0f4f8',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            color: darkMode ? '#e6edf3' : '#0d6efd',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                        }}
                        aria-label="Next review"
                    >
                        ›
                    </button>

                    {/* Dots Indicator */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '2rem'
                    }}>
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAnimating(true);
                                    setTimeout(() => {
                                        setCurrentIndex(index);
                                        setIsAnimating(false);
                                    }, 300);
                                }}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: index === currentIndex
                                        ? (darkMode ? '#00d4ff' : '#0d6efd')
                                        : (darkMode ? '#30363d' : '#e9ecef'),
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
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

                @media (max-width: 768px) {
                    #reviews .section-container > div > div > button {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
