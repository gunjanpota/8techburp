import './AboutUs.css';
import aboutusimg1 from '../assets/aboutus-img1.jpeg';
// import aboutusimg2 from '../assets/aboutus-img2.jpeg';
// import aboutusimg3 from '../assets/aboutus-img3.jpeg';
import aboutusimg3 from '../assets/8techburp-aboutus-services-dark.svg';
import aboutusimg4 from '../assets/aboutus-img4.jpeg';
import aboutusimg5 from '../assets/8techburp-who-we-are-world-map.jpg';
import { Target, Eye, Users, Code, Zap, Award, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutUs() {

    return (
        <div>
            {/* about-Hero Section */}
            <section className="about-hero-section">
                <div className="about-hero-background">
                    <img
                        src={aboutusimg1}
                        alt="8TechBurp Team - Custom Web Development and Digital Solutions"
                        className="about-hero-image"
                    />
                    <div className="about-hero-overlay"></div>
                </div>

                <div className="about-hero-content">
                    <div className="about-hero-text">
                        <h1>About Us</h1>
                        <p>Delivering innovative digital solutions and custom web development
                            services to transform your business in the digital age.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Introduction */}
            <section className="intro-section">
                <div className="intro-container">
                    <div className="intro-grid">
                        {/* Left Text */}
                        <div className="intro-text">
                            <h2>Who We Are</h2>
                            <p>
                                At <strong>8TechBurp</strong>, we are committed to delivering the
                                highest quality digital solutions, focusing on client satisfaction,
                                innovation, and long-term success. As a dynamic and agile
                                organization, we specialize in providing custom web development
                                services, mobile app development, digital marketing solutions,
                                UI/UX design services, AI and Machine Learning solutions, and data
                                science consulting — all delivered through the power of remote
                                development and cutting-edge technologies.
                            </p>
                            <p>
                                We understand that every business is unique, with specific goals
                                and challenges. That's why we don't offer generic services – we
                                provide tailored digital solutions for businesses of all sizes.
                                Whether you're a startup aiming to establish your online presence
                                or an established company seeking a digital transformation
                                strategy, we analyze your needs to deliver scalable, secure, and
                                cost-effective solutions designed to accelerate your growth.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="intro-image-box">
                            <img
                                src={aboutusimg5}
                                alt="Digital Innovation and AI Solutions"
                                className="intro-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mv-section">
                <div className="mv-container">
                    <div className="mv-grid">

                        {/* Mission Card */}
                        <div className="mv-card">
                            <div className="mv-card-header">
                                <div className="mv-icon mv-icon-blue">
                                    <Target />
                                </div>
                                <h2>🚀 Our Mission</h2>
                            </div>

                            <p>
                                Our mission is to empower businesses by providing innovative,
                                reliable, and affordable IT solutions and digital services that
                                drive growth, maximize ROI, and ensure a competitive edge in the
                                digital age.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="mv-card">
                            <div className="mv-card-header">
                                <div className="mv-icon mv-icon-purple">
                                    <Eye />
                                </div>
                                <h2>🌐 Our Vision</h2>
                            </div>

                            <p>
                                We aim to be a trusted global partner in web development, mobile
                                application development, digital marketing, AI-driven solutions,
                                and data science services, transforming business ideas into
                                reality through continuous innovation and dedicated service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="wc-section">
                <div className="wc-container">
                    <div className="wc-heading">
                        <h2>✔ Why Choose 8TechBurp?</h2>
                        <p>
                            We combine expertise, innovation, and client-focused service to
                            deliver exceptional results for your business.
                        </p>
                    </div>

                    <div className="wc-grid">

                        {/* Client-Centric Approach */}
                        <div className="wc-card wc-blue">
                            <div className="wc-icon wc-blue-icon">
                                <Users />
                            </div>
                            <h3>✅ Client-Centric Approach</h3>
                            <p>
                                We prioritize your business goals, offering custom software
                                development solutions and delivering projects on time, with a
                                focus on long-term success.
                            </p>
                        </div>

                        {/* Expert Remote Developers */}
                        <div className="wc-card wc-purple">
                            <div className="wc-icon wc-purple-icon">
                                <Code />
                            </div>
                            <h3>✅ Expert Remote Developers</h3>
                            <p>
                                Our team of experienced remote developers provides efficient,
                                high-quality development services across web, mobile, and AI
                                platforms, offering flexibility and reducing costs for our
                                clients.
                            </p>
                        </div>

                        {/* Quality & Performance */}
                        <div className="wc-card wc-green">
                            <div className="wc-icon wc-green-icon">
                                <Award />
                            </div>
                            <h3>✅ Quality & Performance Focused</h3>
                            <p>
                                Rigorous QA testing and performance optimization are integrated
                                into every project to ensure robust, bug-free, and high-performing
                                digital solutions.
                            </p>
                        </div>

                        {/* End-to-End Services */}
                        <div className="wc-card wc-orange">
                            <div className="wc-icon wc-orange-icon">
                                <Zap />
                            </div>
                            <h3>✅ End-to-End Digital Services</h3>
                            <p>
                                From website design and development to digital marketing strategy,
                                UI/UX design, AI & ML integration, and data science analytics,
                                we deliver comprehensive digital services to meet all your
                                business needs.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="so-section">
                <div className="so-container">
                    <div className="so-grid">

                        {/* Image */}
                        <div className="so-image-box">
                            <img
                                src={aboutusimg3}
                                alt="Remote Development Team Working on Custom Software"
                                className="so-image"
                            />
                        </div>

                        {/* Text List */}
                        {/* <div className="so-list">
                            <h2>Our Comprehensive Services</h2>

                            <ul>
                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Custom Web Development Services</span>
                                </li>

                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Mobile App Development</span>
                                </li>

                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Digital Marketing Solutions & Strategy</span>
                                </li>

                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>UI/UX Design Services</span>
                                </li>

                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>AI and Machine Learning Solutions</span>
                                </li>

                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Data Science Consulting & Analytics</span>
                                </li>
                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Quality Assurance (QA)</span>
                                </li>
                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Graphics Designing</span>
                                </li>
                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Game Development Services</span>
                                </li>
                                <li>
                                    <span className="so-icon">✓</span>
                                    <span>Blockchain Development Services</span>
                                </li>
                            </ul>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* Partnership Statement */}
            <section className="ps-section">
                <div className="ps-container">
                    <div className="ps-inner">
                        <HeadphonesIcon className="ps-icon" />
                        <h2>Building Long-Lasting Partnerships</h2>
                        <p>
                            At <strong>8TechBurp</strong>, we don't just develop websites and
                            apps; we build long-lasting partnerships. Our goal is to enable
                            your business to thrive in an increasingly digital world by
                            delivering solutions that are innovative, efficient, and easy to
                            maintain.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-grid">
                        {/* Left content */}
                        <div className="cta-text">
                            <h2>👉 Ready to Transform Your Business?</h2>
                            <p>
                                Contact us today to get the best custom software development
                                services, digital marketing solutions, and AI-powered business
                                tools for your growth.
                            </p>
                            <Link to="/contactus"
                                className={location.pathname === "/contactus" ? 'link-active' : 'link'}
                            >
                                <button className="cta-button">
                                    <span>Get Started Today</span>
                                    <ArrowRight className="cta-button-icon" />
                                </button>
                            </Link>
                        </div>

                        {/* Right image */}
                        <div className="cta-image-box">
                            <img
                                src={aboutusimg4}
                                alt="Business Growth and Digital Transformation Success"
                                className="cta-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}