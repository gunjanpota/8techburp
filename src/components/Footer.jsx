import "./Footer.css";
import {
    Facebook,
    Instagram,
    Linkedin,
    X,
    Youtube,
    Globe,
    Dribbble,
    Twitter,
    LucideTwitter,
    RedoDotIcon,
    PaintbrushVertical,
    YoutubeIcon
} from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaPinterestP, FaTumblr, FaRedditAlien, FaBehance, FaDribbble } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo2 from "../assets/8techburp2.png"

export function Footer() {
    return (
        <>
            <section className="seo-section">
                <div className="seo-container">
                    <div className="seo-inner">

                        {/* LOGO */}
                        <div className="footer-logo">
                            <img className="logo2" src={logo2} alt="8TechBurp" />
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/8techburp" target="_blank" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.instagram.com/8techburp" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/8TechBurp" target="_blank" aria-label="Twitter">
                                <BsTwitterX />
                            </a>
                            <a href="https://dribbble.com/8techburp-8tb" target="_blank" aria-label="Dribble">
                                <FaDribbble />
                            </a>
                            <a href="https://www.behance.net/8techburp8tb" target="_blank" aria-label="Behance">
                                <FaBehance />
                            </a>
                            <a href="https://www.reddit.com/user/8TechBurp" target="_blank" aria-label="Reddit">
                                <FaRedditAlien />
                            </a>
                            <a href="https://www.tumblr.com/8techburp" target="_blank" aria-label="Tumblr">
                                <FaTumblr />
                            </a>
                            <a href="https://in.pinterest.com/8TechBurp" target="_blank" aria-label="Pinterest">
                                <FaPinterestP />
                            </a>
                        </div>

                        {/* SEO KEYWORDS (HIDDEN – GOOGLE SAFE) */}
                        <p className="seo-keywords">
                            Specialized in: Digital Solutions | Custom Web Development Services |
                            Mobile App Development | Digital Marketing Solutions | UI/UX Design Services |
                            AI and Machine Learning Solutions | Data Science Consulting |
                            Remote Development | IT Solutions | Digital Transformation Strategy
                        </p>

                        {/* COPYRIGHT */}
                        <p className="seo-copy">
                            Providing world-class custom software development solutions and
                            AI-powered business tools.
                        </p>
                        <p className="seo-copy">
                            © 2025 8TechBurp. All rights reserved.
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}
