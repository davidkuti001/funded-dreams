import React, { useEffect, useState } from 'react';

export default function TOC() {
    const chapters = [
        {
            title: 'Preface',
            description: 'Introduction to your journey of funded education and what to expect from this guide.'
        },
        {
            title: 'Chapter 1: The Dream and the Reality',
            description: 'Understanding the global education landscape and debunking common myths about studying abroad.'
        },
        {
            title: 'Chapter 2: What is MPOWER Financing?',
            description: 'Deep dive into one of the most popular funding options for international students.'
        },
        {
            title: 'Chapter 3: Schools Eligible for Funding',
            description: 'Comprehensive list of universities and institutions that offer funding opportunities.'
        },
        {
            title: 'Chapter 4: Courses Leading to PR',
            description: 'Programs that lead to permanent residency and how funding plays a role in your career path.'
        },
        {
            title: 'Chapter 5: How to Apply for MPOWER Funding',
            description: 'Step-by-step guide to completing your MPOWER application successfully.'
        },
        {
            title: 'Chapter 6: Success Stories',
            description: 'Real testimonials and experiences from students who secured full funding.'
        },
        {
            title: 'Chapter 7: How to Build a Study-Abroad Plan',
            description: 'Strategic planning framework to maximize your chances of securing funding.'
        },
        {
            title: 'Chapter 8: Bonus Tools & Resources',
            description: 'Practical templates, checklists, and downloadable resources to aid your journey.'
        },
        {
            title: 'Chapter 9: Understanding Credit, Loans & Repayments Abroad',
            description: 'Financial management strategies for international students and loan repayment options.'
        },
        {
            title: 'Chapter 10: Life Abroad, Adapting, Thriving & Giving Back',
            description: 'Beyond academics: cultural adaptation, career development, and contributing to your new community.'
        },
    ];

    const [active, setActive] = useState(0);

    const makeId = (text, idx) =>
        `chapter-${idx}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;

    useEffect(() => {
        const ids = chapters.map((c, i) => makeId(c.title, i));
        const onScroll = () => {
            const offsets = ids.map((id) => {
                const el = document.getElementById(id);
                if (!el) return Number.POSITIVE_INFINITY;
                const rect = el.getBoundingClientRect();
                return Math.abs(rect.top - 120);
            });
            const nearest = offsets.indexOf(Math.min(...offsets));
            if (nearest >= 0) setActive(nearest);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [chapters]);

    const onSelect = (e, idx, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActive(idx);
    };

    return (
        <section className="py-5 px-4" style={{ paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)', backgroundColor: 'white' }}>
            <div className="section-container">
                <div className="text-center mb-5 animate-fade-in-up" style={{ marginBottom: 'clamp(1.5rem, 5vw, 3rem)' }}>
                    <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                        Table of Contents
                    </h2>
                    <p className="lead" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#6c757d', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Explore all 10+ chapters covering everything you need to know about funding your international education.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'start' }}>
                    {/* TOC Navigation */}
                    <aside className="animate-slide-in-left">
                        <nav
                            aria-label="Table of contents"
                            className="card"
                            style={{ position: 'sticky', top: '100px' }}
                        >
                            <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#212529' }}>Navigate</h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {chapters.map((chapter, idx) => {
                                    const id = makeId(chapter.title, idx);
                                    const isActive = idx === active;
                                    return (
                                        <li key={id} style={{ marginBottom: '0.5rem' }}>
                                            <a
                                                href={`#${id}`}
                                                onClick={(e) => onSelect(e, idx, id)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '0.75rem',
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    borderRadius: '0.375rem',
                                                    backgroundColor: isActive ? '#0d6efd' : 'transparent',
                                                    color: isActive ? 'white' : '#212529',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.15s ease-in-out',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                                                        e.currentTarget.style.color = '#0d6efd';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                        e.currentTarget.style.color = '#212529';
                                                    }
                                                }}
                                                aria-current={isActive ? 'true' : undefined}
                                            >
                                                <span
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '1.5rem',
                                                        height: '1.5rem',
                                                        borderRadius: '50%',
                                                        backgroundColor: isActive ? 'white' : '#e9ecef',
                                                        color: isActive ? '#0d6efd' : '#212529',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 700,
                                                        flexShrink: 0
                                                    }}
                                                    aria-hidden="true"
                                                >
                                                    {idx + 1}
                                                </span>
                                                <span style={{ lineHeight: 1.2 }}>{chapter.title}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </aside>

                    {/* Content */}
                    <div className="animate-slide-in-right">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {chapters.map((chapter, idx) => (
                                <section
                                    id={makeId(chapter.title, idx)}
                                    key={`content-${idx}`}
                                    className="card feature-card"
                                    style={{ scrollMarginTop: '100px' }}
                                    aria-labelledby={`heading-${idx}`}
                                >
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div>
                                            <div
                                                style={{
                                                    width: '3rem',
                                                    height: '3rem',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '1.25rem',
                                                    fontWeight: 700,
                                                    flexShrink: 0
                                                }}
                                            >
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h5 id={`heading-${idx}`} className="fw-bold mb-2">
                                                {chapter.title}
                                            </h5>
                                            <p style={{ color: '#6c757d', marginBottom: '1rem', lineHeight: 1.75 }}>
                                                {chapter.description}
                                            </p>
                                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #dee2e6' }}>
                                                <span
                                                    className="badge"
                                                    style={{
                                                        backgroundColor: '#e7f1ff',
                                                        color: '#0d6efd',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600,
                                                        marginTop: '0.75rem'
                                                    }}
                                                >
                                                    📖 Reading Time: {5 + idx} min
                                                </span>
                                                <span
                                                    className="badge"
                                                    style={{
                                                        backgroundColor: '#e7f3ff',
                                                        color: '#0dcaf0',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600,
                                                        marginTop: '0.75rem'
                                                    }}
                                                >
                                                    ✅ Essential
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
