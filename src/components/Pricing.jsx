export default function Pricing() {
    const platforms = [
        {
            name: 'Selar',
            currency: '₦',
            price: '3,500',
            featured: false,
            features: ['Instant Access', 'Nigerian Payment', 'Mobile Friendly', 'Full Content'],
            cta: 'Buy on Selar',
            link: 'https://selar.co'
        },
        {
            name: 'Gumroad',
            currency: '$',
            price: '10',
            featured: true,
            features: ['Instant Access', 'PayPal & Card', 'Email Delivery', 'Lifetime Access'],
            cta: 'Buy on Gumroad',
            link: 'https://gumroad.com'
        },
        {
            name: 'Payhip',
            currency: '$',
            price: '10',
            featured: false,
            features: ['Instant Access', 'Global Payments', 'Secure Checkout', 'Email Support'],
            cta: 'Buy on Payhip',
            link: 'https://payhip.com'
        }
    ];

    return (
        <section className="py-5 px-4" style={{ paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)', backgroundColor: '#f8f9fa' }}>
            <div className="section-container">
                <div className="text-center mb-5 animate-fade-in-up" style={{ marginBottom: 'clamp(1.5rem, 5vw, 3rem)' }}>
                    <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#0d6efd' }}>
                        Get Your Copy Today
                    </h2>
                    <p className="lead" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#495057', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Choose your preferred platform and start your journey to funded education. Instant access to all 10+ chapters and bonus resources.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: 'clamp(1.5rem, 5vw, 3rem)' }}>
                    {platforms.map((platform, idx) => (
                        <div
                            key={platform.name}
                            className={`card feature-card animate-fade-in-up ${platform.featured ? 'border-primary' : ''}`}
                            style={{ 
                                animationDelay: `${idx * 0.2}s`,
                                borderWidth: platform.featured ? '2px' : '1px',
                                transform: platform.featured ? 'scale(1.05)' : 'scale(1)',
                                transformOrigin: 'center',
                                backgroundColor: '#ffffff',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            {platform.featured && (
                                <div style={{ marginBottom: '1rem' }}>
                                    <span className="badge text-bg-primary" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}
                            
                            <h5 className="fw-bold mb-2" style={{ color: '#212529' }}>{platform.name}</h5>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0d6efd' }}>
                                    <span style={{ fontSize: '1rem', color: '#6c757d' }}>{platform.currency}</span>
                                    {platform.price}
                                </div>
                                <p style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>One-time payment</p>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                                {platform.features.map((feature) => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'center', color: '#212529', marginBottom: '0.75rem' }}>
                                        <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', color: '#0d6efd', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={platform.link}
                                className={`btn ${platform.featured ? 'btn-primary' : 'btn-outline-primary'}`}
                                style={{
                                    maxWidth: '100%',
                                    textAlign: 'center',
                                    display: 'block',
                                    padding: 'clamp(0.5rem, 2vw, 0.875rem) clamp(0.75rem, 3vw, 1.5rem)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s, box-shadow 0.2s, background-color 0.2s, color 0.2s',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    backgroundColor: platform.featured ? '#0d6efd' : 'transparent',
                                    color: platform.featured ? '#ffffff' : '#0d6efd',
                                    margin: '0 auto'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                                    e.target.style.backgroundColor = platform.featured ? '#0056b3' : '#e9ecef';
                                    e.target.style.color = platform.featured ? '#ffffff' : '#0d6efd';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                                    e.target.style.backgroundColor = platform.featured ? '#0d6efd' : 'transparent';
                                    e.target.style.color = platform.featured ? '#ffffff' : '#0d6efd';
                                }}
                            >
                                {platform.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
