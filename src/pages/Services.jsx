import {
    Smartphone,
    Megaphone,
    Palette,
    PenTool,
    Cpu,
    Database,
    ShieldCheck,
    CheckCircle,
    ArrowRight,
    Menu,
    X,
    Globe,
    Mail,
    Phone,
    MapPin,
    Search,
    Zap,
    Gamepad2,
    Link
} from 'lucide-react';

import './Services.css';

export function Services() {

    // --- DATA ---
    const servicesData = [
        {
            title: "Web & Mobile App Development",
            icon: Smartphone,
            description: "We build custom, high-performance web and mobile applications designed to deliver seamless user experiences across platforms.",
            techStack: ["React.js", "Node.js", "Python", "Flutter", "Swift", "PHP Laravel"],
            services: ["Custom Web Apps", "iOS & Android Apps", "E-commerce Solutions", "API Development", "PWAs"]
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            description: "Our data-driven strategies boost your brand visibility, drive targeted traffic, and increase conversions.",
            techStack: ["Google Ads", "SEO", "Analytics", "SMM", "Email Marketing"],
            services: ["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Reporting"]
        },
        {
            title: "UI/UX Design",
            icon: Palette,
            description: "We create intuitive and engaging designs that enhance user satisfaction and drive business success.",
            techStack: ["Figma", "Adobe XD", "Sketch", "Protopie"],
            services: ["User Research", "Wireframing", "Interaction Design", "Usability Testing", "Responsive Design"]
        },
        {
            title: "Graphics Designing",
            icon: PenTool,
            description: "Our creative designs help establish a strong brand identity and communicate your message effectively.",
            techStack: ["Photoshop", "Illustrator", "CorelDRAW", "Indesign"],
            services: ["Logo & Brand Identity", "Marketing Collaterals", "Social Media Graphics", "Infographics", "Packaging"]
        },
        {
            title: "AI & Machine Learning",
            icon: Cpu,
            description: "We develop intelligent systems that automate processes and provide actionable insights.",
            techStack: ["TensorFlow", "PyTorch", "Python", "Scikit-learn", "Keras"],
            services: ["Predictive Analytics", "NLP", "Computer Vision", "Recommendation Systems", "AI Chatbots"]
        },
        {
            title: "Data Science",
            icon: Database,
            description: "Our data analytics services help you make informed business decisions and uncover hidden opportunities.",
            techStack: ["Pandas", "NumPy", "Tableau", "Power BI", "Spark"],
            services: ["Data Mining", "Big Data Analytics", "Data Visualization", "Statistical Analysis", "BI Solutions"]
        },
        {
            title: "Quality Assurance (QA)",
            icon: ShieldCheck,
            description: "We ensure flawless functionality and optimal performance of your digital products through rigorous testing practices.",
            techStack: ["Selenium", "Appium", "JMeter", "LoadRunner", "JUnit"],
            services: ["Manual & Automated Testing", "Performance Testing", "Security Testing", "Usability Testing", "Regression Testing"]
        },
        {
            title: "Blockchain Development",
            icon: Link, // Suggested icon variable name
            description: "We deliver secure, decentralized, and scalable blockchain solutions that help businesses build trust, automate processes, and reduce operational costs.",
            techStack: ["Solidity", "Rust", "Ethereum", "Hyperledger", "Web3.js"],
            services: ["Smart Contract Development", "DApps", "Crypto Wallet Development", "NFT Marketplaces", "Private/Consortium Blockchain"]
        },
        {
            title: "Gaming Development",
            icon: Gamepad2, // Suggested icon variable name
            description: "We create immersive, high-performance games across mobile, PC, console, AR, and VR platforms, combining creativity with advanced technology.",
            techStack: ["Unity", "Unreal Engine", "C#", "C++", "AR/VR SDKs"],
            services: ["Mobile & PC Games", "AR/VR Development", "Multiplayer Online Games", "Game UI/UX Design", "Character Animation"]
        }
    ];

    return (
        <div className="services-app-container">

            {/* --- HERO SECTION --- */}
            <header className="services-hero">
                <div className="services-container">
                    <span className="services-tag-pill">MODERN SOLUTIONS 2026</span>
                    <h1><span className="services-highlight1">Services & </span><br /><span className="services-highlight">Solutions</span></h1>
                    <p>At 8TechBurp, we deliver specialized services tailored to your unique business needs, combining the latest technologies and best practices.</p>
                    {/* <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="services-btn services-btn-primary">
                            Explore Services <ArrowRight size={18} />
                        </button>
                        <button className="services-btn services-btn-outline">
                            View Work
                        </button>
                    </div> */}
                </div>
            </header>

            {/* --- SERVICES GRID --- */}
            <section className="services-section-padding">
                <div className="services-container">
                    <div className="services-section-header">
                        <div>
                            <h2>Our Expertise</h2>
                            <p style={{ color: 'var(--text-light)' }}>Every service is delivered with a commitment to excellence.</p>
                        </div>
                    </div>

                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <div key={index} className="services-card">
                                <div className="services-card-icon">
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                <div className="services-tech-stack">
                                    {service.techStack.map((tech, i) => (
                                        <span key={i} className="services-tech-pill">{tech}</span>
                                    ))}
                                </div>

                                <div className="services-list">
                                    <h5 style={{ fontSize: '11px', color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '1px' }}>Deliverables</h5>
                                    <ul>
                                        {service.services.slice(0, 3).map((item, i) => (
                                            <li key={i}>
                                                <CheckCircle size={14} className="services-highlight" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div className="services-card" style={{ background: 'linear-gradient(135deg, var(--primary), #0e5a74)', color: 'white', borderColor: 'transparent' }}>
                            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>Have a unique idea?</h3>
                                <p style={{ color: '#e0f2fe' }}>Our engineering team is ready to tackle complex challenges with custom solutions.</p>
                                {/* <button className="services-btn" style={{ backgroundColor: 'white', color: 'var(--primary)', width: '100%', justifyContent: 'center' }}>
                                    <a href="https://8techburp.com/contactus">
                                        Contact Us
                                    </a>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="services-section-padding" style={{ background: 'white' }}>
                <div className="services-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2>Why Choose 8TechBurp?</h2>
                        <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>Our team of expert developers, designers, and digital strategists works collaboratively to help you succeed.</p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        {[
                            "Expertise Across Technologies",
                            "Tailored Solutions",
                            "End-to-End Services",
                            "Client-Centric Approach"
                        ].map((item, i) => (
                            <div key={i} className="services-feature-box">
                                <CheckCircle size={32} className="services-highlight-sec" />
                                <h4>{item}</h4>
                                <p>We deliver excellence tailored to your specific business requirements and goals.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEO & HIRE SECTION --- */}
            <section className="services-section-padding services-seo-section">
                <div className="services-container services-split-layout">
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' }}>
                            <Globe size={18} /> GLOBAL TALENT POOL
                        </div>
                        <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
                            Hire Dedicated Developers & <span className="services-highlight-sec">Offshore Teams</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px' }}>
                            Looking to scale your development capabilities? At 8TechBurp, you can <strong>hire dedicated developers</strong> who integrate seamlessly with your in-house team. Whether you need a <strong>Software Development Company in India</strong> or specialized experts.
                        </p>
                        <div className="services-seo-tags">
                            {["Hire Dedicated Developers India", "Offshore Teams", "IT Staff Augmentation", "React Developers", "Node.js Experts"].map((tag, i) => (
                                <span key={i} className="services-seo-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: 1, width: '100%' }}>
                        <div className="services-trend-box">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                <Search size={20} className="services-highlight" /> Trending Searches
                            </h3>
                            <div className="services-trend-grid">
                                {["React Native Developers", "Python Django Experts", "MERN Stack Team", "DevOps Engineers", "AWS Cloud Architects", "Full Stack Developers"].map((role, i) => (
                                    <div key={i} className="services-trend-item">
                                        <Zap size={16} style={{ color: '#94a3b8' }} /> {role}
                                    </div>
                                ))}
                            </div>
                            {/* <button className="services-btn services-btn-primary" style={{ width: '100%', marginTop: '30px', justifyContent: 'center', background: 'var(--dark)' }}>
                                Find Your Team
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};