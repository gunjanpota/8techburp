import {
    Stethoscope,
    ShoppingCart,
    GraduationCap,
    Landmark,
    Building2,
    Factory,
    Film,
    Cpu,
    ArrowRight,
    Menu,
    X,
    Globe,
    Smartphone,
    BarChart3,
    Briefcase
} from 'lucide-react';
import './Industries.css';

export function Industries() {

    // Industry Data
    const industries = [
        {
            title: "Healthcare",
            icon: <Stethoscope size={28} />,
            description: "We build secure healthcare web portals and patient management systems that streamline operations and improve patient care.",
            keywords: ["Healthcare web portals", "Digital transformation"]
        },
        {
            title: "E-Commerce",
            icon: <ShoppingCart size={28} />,
            description: "Drive up to 2X increases in online sales with our custom e-commerce website development and optimization services.",
            keywords: ["E-commerce website development", "Online sales"]
        },
        {
            title: "Education",
            icon: <GraduationCap size={28} />,
            description: "Empowering institutions with robust Learning Management Systems (LMS) for seamless remote and on-campus education.",
            keywords: ["Learning Management System (LMS)", "Education tech"]
        },
        {
            title: "Fintech",
            icon: <Landmark size={28} />,
            description: "Secure and scalable Fintech software development that modernizes banking and financial services for the digital age.",
            keywords: ["Fintech software development", "Secure banking"]
        },
        {
            title: "Real Estate",
            icon: <Building2 size={28} />,
            description: "Optimizing property management with tailored Real estate CRM solutions that enhance agent productivity and client relations.",
            keywords: ["Real estate CRM solutions", "Property management"]
        },
        {
            title: "Manufacturing",
            icon: <Factory size={28} />,
            description: "Streamlining production lines with custom Manufacturing ERP systems designed for efficiency and real-time tracking.",
            keywords: ["Manufacturing ERP systems", "Industrial automation"]
        },
        {
            title: "Media & Entertainment",
            icon: <Film size={28} />,
            description: "Engaging audiences through high-performance media & entertainment platforms built for streaming and interaction.",
            keywords: ["Media & entertainment platforms", "Content delivery"]
        },
        {
            title: "Technology & AI",
            icon: <Cpu size={28} />,
            description: "Leveraging AI-powered automation and custom software solutions to keep tech-forward companies ahead of the curve.",
            keywords: ["AI-powered automation", "Custom software solutions"]
        }
    ];

    const features = [
        {
            title: "Web & Mobile",
            icon: <Smartphone className="industries-feat-icon" />,
            text: "High-performance industry-specific websites & custom mobile applications."
        },
        {
            title: "Enterprise Solutions",
            icon: <Globe className="industries-feat-icon" />,
            text: "Robust enterprise software solutions tailored to complex business needs."
        },
        {
            title: "Data & Growth",
            icon: <BarChart3 className="industries-feat-icon" />,
            text: "Data analytics services and strategies for website visitor engagement."
        }
    ];

    return (
        <div className="industries-app-container">
            {/* Hero Section */}
            <header className="industries-hero">
                <div className="industries-hero-overlay"></div>
                <div className="industries-hero-container">
                    <h1 className="industries-hero-title">Industries We Serve</h1>
                    <p className="industries-hero-desc">
                        At 8TechBurp, we pride ourselves on supporting a diverse range of industries throughout their <span className="industries-highlight-text">digital transformation journey</span>.
                        From developing high-performance industry-specific websites to driving up to 2X increases in online sales, our digital solutions empower companies to thrive.
                    </p>
                </div>
            </header>

            {/* Core Services Summary */}
            <section className="industries-section">
                <div className="industries-container">
                    <div className="industries-header-center">
                        <span className="industries-badge">Our Capabilities</span>
                        <h2 className="industries-section-title">Comprehensive Digital Solutions</h2>
                    </div>

                    <div className="industries-features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="industries-feature-card">
                                <div className="industries-feature-icon-box">
                                    {feature.icon}
                                </div>
                                <h3 className="industries-feature-title">{feature.title}</h3>
                                <p style={{ color: '#666' }}>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="industries-grid-section">
                <div className="industries-container">
                    <div className="industries-header-center">
                        <h2 className="industries-section-title">Industry Web Development & Solutions</h2>
                        <p style={{ maxWidth: '600px', margin: '10px auto', color: '#666' }}>
                            We provide <strong>custom software solutions for various industries</strong>, tailored to meet specific regulatory and operational needs.
                        </p>
                    </div>

                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div key={index} className="industries-grid-card">
                                <div className="industries-card-body">
                                    <div className="industries-card-header">
                                        <div className="industries-card-icon">
                                            {industry.icon}
                                        </div>
                                        <div className="industries-card-arrow">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>

                                    <h3 className="industries-card-title">{industry.title}</h3>
                                    <p className="industries-card-desc">{industry.description}</p>

                                    <div className="industries-card-footer">
                                        <div className="industries-tags-wrapper">
                                            {industry.keywords.map((kw, idx) => (
                                                <span key={idx} className="industries-tag">{kw}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Other Industries Card */}
                        <div className="industries-grid-card industries-other-card">
                            <div className="industries-card-body industries-other-content">
                                <div style={{ marginBottom: '15px', color: '#ccc' }}>
                                    <Briefcase size={40} />
                                </div>
                                <h3 className="industries-card-title">Other Industries</h3>
                                <p style={{ color: '#777', marginBottom: '15px' }}>
                                    Don't see your industry listed? We build custom solutions for niche markets too.
                                </p>
                                <button className="industries-link-text">
                                    Contact Us for Custom Solutions
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="industries-cta-section">
                <div className="industries-container">
                    <h2 className="industries-cta-title">
                        Ready to Optimize Your <br />
                        <span className="industries-cta-highlight">Website Visitor Engagement?</span>
                    </h2>
                    <p style={{ fontSize: '18px', opacity: 0.9 }}>
                        From data analytics services to full-scale enterprise software solutions, let's build something extraordinary together.
                    </p>
                </div>
            </section>
        </div>
    );
};