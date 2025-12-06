import { useState, useEffect, useMemo } from "react";
import { useDarkMode } from "../DarkModeContext";
import { getExchangeRate, convertNGNtoUSD } from "../utils/exchangeRate";

export default function Pricing() {
    const { darkMode } = useDarkMode();
    const [exchangeRate, setExchangeRate] = useState(0.000610); // Correct NGN to USD rate
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch exchange rate on component mount
        getExchangeRate().then(rate => {
            console.log('Exchange rate fetched:', rate);
            setExchangeRate(rate);
            setLoading(false);
        });

        // Update exchange rate every hour
        const interval = setInterval(() => {
            getExchangeRate().then(rate => {
                console.log('Exchange rate updated:', rate);
                setExchangeRate(rate);
            });
        }, 3600000); // 1 hour

        return () => clearInterval(interval);
    }, []);

    // Use useMemo to recalculate prices when exchange rate changes
    const platforms = useMemo(() => {
        const gumroadPrice = convertNGNtoUSD(10000, exchangeRate);
        const gumroadOriginalPrice = convertNGNtoUSD(30000, exchangeRate);
        const payhipPrice = convertNGNtoUSD(10000, exchangeRate);
        const payhipOriginalPrice = convertNGNtoUSD(30000, exchangeRate);

        return [
            {
                name: 'Selar',
                currency: '₦',
                originalPrice: '30,000',
                price: '10,000',
                featured: true,
                isLimitedOffer: true,
                features: ['Instant Access', 'Nigerian Payment', 'Mobile Friendly', 'Full Content'],
                cta: 'Buy on Selar',
                link: 'https://selar.co'
            },
            {
                name: 'Gumroad',
                currency: '$',
                originalPrice: gumroadOriginalPrice,
                price: gumroadPrice,
                featured: false,
                isLimitedOffer: true,
                features: ['Instant Access', 'PayPal & Card', 'Email Delivery', 'Lifetime Access'],
                cta: 'Buy on Gumroad',
                link: 'https://gumroad.com'
            },
            {
                name: 'Payhip',
                currency: '$',
                originalPrice: payhipOriginalPrice,
                price: payhipPrice,
                featured: false,
                isLimitedOffer: true,
                features: ['Instant Access', 'Global Payments', 'Secure Checkout', 'Email Support'],
                cta: 'Buy on Payhip',
                link: 'https://payhip.com'
            }
        ];
    }, [exchangeRate]);

    return (
        <section id="pricing" style={{
            paddingTop: 'clamp(3rem, 8vw, 5rem)',
            paddingBottom: 'clamp(3rem, 8vw, 5rem)',
            background: darkMode
                ? 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)'
                : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.3s ease'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(13, 110, 253, 0.05)',
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(13, 110, 253, 0.05)',
                pointerEvents: 'none'
            }}></div>

            <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '800',
                        color: darkMode ? '#e6edf3' : '#1a1a2e',
                        marginBottom: '1rem'
                    }}>
                        Simple, Transparent Pricing
                    </h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                        color: darkMode ? '#d0d0d0' : '#666',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '1.6'
                    }}>
                        Choose your preferred platform and start your journey to funded education. Instant access to all chapters, bonus resources, and lifetime support.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: 'clamp(1.5rem, 3vw, 2rem)',
                    marginBottom: 'clamp(2rem, 5vw, 3rem)',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {platforms.map((platform, idx) => (
                        <div
                            key={platform.name}
                            style={{
                                animation: `slideUp 0.6s ease-out ${idx * 0.15}s both`,
                                borderRadius: '16px',
                                backgroundColor: darkMode ? '#161b22' : '#ffffff',
                                boxShadow: platform.featured
                                    ? (darkMode ? '0 20px 40px rgba(13, 110, 253, 0.3)' : '0 20px 40px rgba(13, 110, 253, 0.15)')
                                    : (darkMode ? '0 10px 25px rgba(0, 0, 0, 0.3)' : '0 10px 25px rgba(0, 0, 0, 0.08)'),
                                overflow: 'hidden',
                                border: platform.featured ? '2px solid #0d6efd' : (darkMode ? '1px solid #30363d' : '1px solid rgba(0, 0, 0, 0.05)'),
                                transform: platform.featured ? 'translateY(-12px) scale(1.02)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 'clamp(1.5rem, 4vw, 2rem)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = platform.featured ? 'translateY(-16px) scale(1.02)' : 'translateY(-8px) scale(1.02)';
                                e.currentTarget.style.boxShadow = platform.featured ? '0 30px 60px rgba(13, 110, 253, 0.2)' : '0 20px 40px rgba(0, 0, 0, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = platform.featured ? 'translateY(-12px) scale(1.02)' : 'scale(1)';
                                e.currentTarget.style.boxShadow = platform.featured ? '0 20px 40px rgba(13, 110, 253, 0.15)' : '0 10px 25px rgba(0, 0, 0, 0.08)';
                            }}
                        >
                            {platform.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #0d6efd 0%, #00d4ff 100%)'
                                }}></div>
                            )}

                            {platform.featured && (
                                <span style={{
                                    display: 'inline-block',
                                    backgroundColor: '#0d6efd',
                                    color: '#ffffff',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    marginBottom: '1rem',
                                    width: 'fit-content',
                                }}>
                                    ⭐ MOST POPULAR
                                </span>
                            )}
                            
                            <h3 style={{
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                color: darkMode ? '#e6edf3' : '#1a1a2e',
                                fontSize: '1.3rem'
                            }}>
                                {platform.name}
                            </h3>

                            <div style={{ marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                                {platform.isLimitedOffer && (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        flexWrap: 'wrap',
                                        padding: '0.5rem',
                                        backgroundColor: darkMode ? 'rgba(13, 110, 253, 0.1)' : 'rgba(13, 110, 253, 0.05)',
                                        borderRadius: '8px',
                                        border: `1px solid ${darkMode ? 'rgba(13, 110, 253, 0.3)' : 'rgba(13, 110, 253, 0.15)'}`
                                    }}>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: darkMode ? '#b0d0ff' : '#0d6efd',
                                            textDecoration: 'line-through',
                                            fontWeight: '500'
                                        }}>
                                            {platform.currency}{platform.originalPrice}
                                        </span>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: darkMode ? '#b0d0ff' : '#0d6efd',
                                            letterSpacing: '0.3px'
                                        }}>
                                            Limited Time
                                        </span>
                                    </div>
                                )}
                                <div style={{
                                    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                                    fontWeight: '800',
                                    marginBottom: '0.25rem',
                                    color: platform.featured ? '#0d6efd' : (darkMode ? '#e6edf3' : '#1a1a2e')
                                }}>
                                    <span style={{ fontSize: '0.9em', color: darkMode ? '#999' : '#999' }}>{platform.currency}</span>
                                    {platform.price}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: darkMode ? '#8b949e' : '#999', margin: 0, fontWeight: '500' }}>One-time payment</p>
                                {!platform.isLimitedOffer && (
                                    <p style={{ fontSize: '0.8rem', color: darkMode ? '#6e7681' : '#aaa', margin: '0.25rem 0 0 0', fontStyle: 'italic' }}>
                                        Updated hourly
                                    </p>
                                )}
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1 }}>
                                {platform.features.map((feature) => (
                                    <li key={feature} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        color: darkMode ? '#c9d1d9' : '#555',
                                        marginBottom: '0.9rem',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.5'
                                    }}>
                                        <svg style={{
                                            width: '1.2rem',
                                            height: '1.2rem',
                                            marginRight: '0.75rem',
                                            color: '#0d6efd',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textAlign: 'center',
                                    display: 'block',
                                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: platform.featured ? (darkMode ? '0 4px 15px rgba(13, 110, 253, 0.5)' : '0 4px 15px rgba(13, 110, 253, 0.3)') : (darkMode ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'),
                                    backgroundColor: platform.featured ? '#0d6efd' : (darkMode ? '#30363d' : '#f0f4f8'),
                                    color: platform.featured ? '#ffffff' : (darkMode ? '#e6edf3' : '#0d6efd'),
                                    border: 'none',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    letterSpacing: '0.3px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = platform.featured ? '0 8px 25px rgba(13, 110, 253, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = platform.featured ? '0 4px 15px rgba(13, 110, 253, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                {platform.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
