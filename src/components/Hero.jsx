// import ebookCover from "../assets/ebook-cover.png";

export default function Hero() {
    return (
        <section className="hero-gradient text-white py-5 px-4 overflow-hidden" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            <div className="section-container">
                <div className="row align-items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(1rem, 5vw, 3rem)', alignItems: 'center' }}>
                    {/* Left: Text Content */}
                    <div className="animate-fade-in-up">
                        <span className="badge text-bg-info mb-3" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                            YOUR PATH TO GLOBAL EDUCATION
                        </span>
                        <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', lineHeight: 1.2 }}>
                            Funded Dreams
                        </h1>
                        <p className="lead mb-4" style={{ fontSize: '1.25rem', fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
                            Your comprehensive step-by-step guide to studying abroad with full funding.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }} className="mb-4">
                            Discover how to navigate the complex world of international education financing. Learn proven strategies from students who have successfully secured scholarships and alternative funding options to make your dream education a reality.
                        </p>

                        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1rem)', flexWrap: 'wrap', marginTop: '2rem', marginBottom: '3rem' }}>
                            <a
                                href="https://selar.co"
                                className="btn btn-primary btn-lg"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 auto', minWidth: '200px' }}
                            >
                                Buy on Selar — ₦3,500
                            </a>
                            <a
                                href="https://gumroad.com"
                                className="btn btn-outline-light btn-lg"
                                style={{ borderWidth: '2px', flex: '1 1 auto', minWidth: '200px' }}
                            >
                                View on Gumroad
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div className="animate-pulse-subtle">
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0dcaf0' }}>10+</div>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Chapters</div>
                            </div>
                            <div className="animate-pulse-subtle" style={{animationDelay: '0.2s'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0dcaf0' }}>50+</div>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Success Stories</div>
                            </div>
                            <div className="animate-pulse-subtle" style={{animationDelay: '0.4s'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0dcaf0' }}>100%</div>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Practical Guide</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="animate-fade-in-down">
                        <div className="image-container" style={{ height: '400px' }}>
                            <svg
                                viewBox="0 0 400 500"
                                xmlns="http://www.w3.org/2000/svg"
                                className="animate-float"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <defs>
                                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{stopColor: '#0d6efd', stopOpacity: 0.1}} />
                                        <stop offset="100%" style={{stopColor: '#0dcaf0', stopOpacity: 0.1}} />
                                    </linearGradient>
                                </defs>
                                <rect width="400" height="500" fill="url(#bgGrad)" rx="20" />
                                <rect x="80" y="100" width="240" height="280" fill="#0d6efd" rx="10" />
                                <rect x="90" y="110" width="220" height="260" fill="white" rx="8" />
                                <circle cx="200" cy="150" r="30" fill="#0d6efd" opacity="0.1" />
                                <text x="200" y="240" textAnchor="middle" fontSize="24" fill="#0d6efd" fontWeight="bold">
                                    Funded Dreams
                                </text>
                                <text x="200" y="270" textAnchor="middle" fontSize="14" fill="#64748b">
                                    Study Abroad Guide
                                </text>
                                <path d="M 120 320 Q 130 330 140 320" stroke="#0d6efd" strokeWidth="2" fill="none" />
                                <path d="M 160 320 Q 170 330 180 320" stroke="#0d6efd" strokeWidth="2" fill="none" />
                                <path d="M 220 320 Q 230 330 240 320" stroke="#0d6efd" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
