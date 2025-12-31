import { useState } from 'react';
import './ContactUs.css';
import { Mail, Phone, Globe, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import aws from '../assets/aws-svgrepo.svg';
import google from '../assets/google-svgrepo.svg';
import hubspot from '../assets/hubspot-svgrepo.svg';
import microsoft from '../assets/microsoft-svgrepo.svg';


export function ContactUs() {

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', mobile: '', email: '', message: '' });

        const url = "https://script.google.com/macros/s/AKfycby91Le7XaDjWVeNJ2NQXkEKHO0wO-ogDLdVYab_SZ1doouCMxoNjrmBNU62ITj9_lYzGQ/exec";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`Name=${e.target.name.value}&Mobile=${e.target.mobile.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`)
        }).then(res => res.text()).then(data => {
            toast.info(data)
        }).catch(error => console.log(error))

        console.log('Form Data Submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="contact-page">
            {/* SEO Keywords - Hidden but indexable */}
            <div className="sr-only">
                Contact digital solutions provider, Custom software development consultation,
                Expert web and mobile app development contact, AI-powered business solutions support,
                Data-driven digital marketing contact, Professional UI/UX design inquiry,
                Enterprise software development contact, Next-gen software solutions consultation
            </div>

            {/* Hero Form Section */}
            <section className="contact-hero">
                <div className="contact-container">
                    <div className="contact-hero-inner">
                        <div className="contact-hero-text">
                            <h1>LET&apos;S BUILD SOMETHING AMAZING TOGETHER!</h1>
                            <p>
                                At 8TechBurp, we believe in bold ideas, innovative solutions, and
                                meaningful digital connections. Whether you&apos;re a startup looking for
                                your first website, a business aiming for digital transformation, or
                                an enterprise seeking custom software solutions — we&apos;re ready
                                to help you grow.
                            </p>
                        </div>

                        {/* Form Section */}
                        <div className="contact-form-wrapper">
                            <h2>Get In Touch With Us</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                        className="contact-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        pattern="[6-9][0-9]{9}"
                                        maxlength="10"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Mobile No."
                                        required
                                        className="contact-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="contact-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        required
                                        rows={4}
                                        className="contact-textarea"
                                    />
                                </div>
                                <button type="submit" className="contact-submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Section */}
                        <div className="contact-side">
                            {/* <div className="contact-side-links">
                                    <div className="contact-side-item">
                                        <Mail className="icon" />
                                        <a href="mailto:contact@8techburp.com">
                                            contact@8techburp.com
                                        </a>
                                    </div>
                                    <div className="contact-side-item">
                                        <Phone className="icon" />
                                        <a href="tel:+919023615266">
                                            +91 90236 15266
                                        </a>
                                    </div>
                                    <div className="contact-side-item">
                                        <Globe className="icon" />
                                        <a
                                            href="https://8techburp.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://8techburp.com
                                        </a>
                                    </div>
                                </div> */}

                            <div className="contact-why">
                                <h3>Why Contact 8TechBurp?</h3>
                                <div className="contact-why-list">
                                    <div className="contact-why-item">
                                        <CheckCircle className="icon small" />
                                        <p>Fast &amp; friendly expert support</p>
                                    </div>
                                    <div className="contact-why-item">
                                        <CheckCircle className="icon small" />
                                        <p>Personalized solutions built on the latest tech (AI, ML, Cloud)</p>
                                    </div>
                                    <div className="contact-why-item">
                                        <CheckCircle className="icon small" />
                                        <p>
                                            Proven track record in web development, mobile apps,
                                            digital marketing, and enterprise software
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Featured In Section */}
                        <div className="contact-featured">
                            <h3>Featured In</h3>
                            <div className="contact-featured-logos">
                                <div>
                                    <img className="featured-logo" src={aws} alt="aws" />
                                </div>
                                <div>
                                    <img className="featured-logo" src={google} alt="google" />
                                </div>
                                <div>
                                    <img className="featured-logo" src={hubspot} alt="hubspot" />
                                </div>
                                <div>
                                    <img className="featured-logo" src={microsoft} alt="microsoft" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="contact-cards-section">
                <div className="contact-container">
                    <div className="contact-cards">
                        {/* Email Card */}
                        <div className="contact-card card-email">
                            <div className="contact-card-inner">
                                <div className="contact-card-icon email-icon">
                                    <Mail className="icon large" />
                                </div>
                                <h2>📧 Email</h2>
                                <div className="contact-card-content">
                                    <a href="mailto:contact@8techburp.com">
                                        ✉️ contact@8techburp.com
                                    </a>
                                    <p>
                                        Get expert digital solutions support and project inquiries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="contact-card card-phone">
                            <div className="contact-card-inner">
                                <div className="contact-card-icon phone-icon">
                                    <Phone className="icon large" />
                                </div>
                                <h2>📞 Phone</h2>
                                <div className="contact-card-content">
                                    <a href="tel:+919023615266">
                                        📲 +91 90236 15266
                                    </a>
                                    <p>
                                        Talk directly to our CEO and digital strategists for fast consultation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}