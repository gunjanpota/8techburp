// App.jsx
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";
import ClientLogos from "../components/ClientLogos";
import "./Testimonial.css";

const testimonials = [
    {
        quote: "8TechBurp's custom web development increased our traffic by 3X in 2 months. Their expertise in digital transformation is unparalleled.",
        name: "John Doe",
        designation: "CEO",
        company: "FinanceCorp",
        photo: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=400",
    },
    {
        quote: "The AI-powered solutions they implemented revolutionized our business operations. We've seen a 250% increase in efficiency.",
        name: "Sarah Johnson",
        designation: "CTO",
        company: "TechVision Inc",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
        quote: "Outstanding UI/UX design work! Our user engagement increased by 180% after the redesign. Highly recommended for digital solutions.",
        name: "Michael Chen",
        designation: "Product Director",
        company: "InnovateLab",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
        quote: "Their digital marketing strategies transformed our online presence. We achieved ROI within the first quarter itself.",
        name: "Emily Rodriguez",
        designation: "Marketing Head",
        company: "GrowthHub",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
];

const initialBlogs = [
    {
        image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800",
        title: "How AI is Transforming Business Operations",
        description: "Discover how artificial intelligence is revolutionizing the way businesses operate in 2025.",
        snippet: "From predictive analytics to automation, AI is reshaping business landscapes. Learn about the latest AI business strategies and digital transformation trends.",
        date: "Dec 10, 2025",
        author: "8TechBurp",
        category: "AI & Technology",
    },
    {
        image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?w=800",
        title: "Best Practices in UI/UX Design for 2025",
        description: "Explore the latest UI/UX best practices that will define user experience this year.",
        snippet: "Expert insights on creating intuitive interfaces, accessibility standards, and modern design patterns that enhance user engagement and satisfaction.",
        date: "Dec 8, 2025",
        author: "8TechBurp",
        category: "Design",
    },
    {
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
        title: "Top Digital Marketing Strategies for Small Businesses",
        description: "Effective digital marketing tips that help small businesses compete with industry giants.",
        snippet: "Learn proven strategies for SEO, content marketing, and social media that drive real results for businesses of all sizes.",
        date: "Dec 5, 2025",
        author: "8TechBurp",
        category: "Marketing",
    },
    {
        image: "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?w=800",
        title: "Digital Transformation: A Complete Guide",
        description: "Everything you need to know about digital transformation and industry insights for 2025.",
        snippet: "Understanding the key pillars of digital transformation and how custom software development can accelerate your business growth.",
        date: "Dec 3, 2025",
        author: "8TechBurp",
        category: "Business",
    },
    {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        title: "Cloud Computing Trends Shaping 2025",
        description: "Explore the latest cloud computing innovations driving business success.",
        snippet: "From multi-cloud strategies to edge computing, discover trends that are transforming enterprise technology infrastructure.",
        date: "Nov 30, 2025",
        author: "8TechBurp",
        category: "Cloud",
    },
    {
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
        title: "Cybersecurity Best Practices for Modern Enterprises",
        description: "Essential security measures to protect your business in the digital age.",
        snippet: "Expert digital solutions insights on implementing robust security frameworks and protecting sensitive business data.",
        date: "Nov 28, 2025",
        author: "8TechBurp",
        category: "Security",
    },
    {
        image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800",
        title: "How AI is Transforming Business Operations",
        description: "Discover how artificial intelligence is revolutionizing the way businesses operate in 2025.",
        snippet: "From predictive analytics to automation, AI is reshaping business landscapes. Learn about the latest AI business strategies and digital transformation trends.",
        date: "Dec 10, 2025",
        author: "8TechBurp",
        category: "AI & Technology",
    },
    {
        image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?w=800",
        title: "Best Practices in UI/UX Design for 2025",
        description: "Explore the latest UI/UX best practices that will define user experience this year.",
        snippet: "Expert insights on creating intuitive interfaces, accessibility standards, and modern design patterns that enhance user engagement and satisfaction.",
        date: "Dec 8, 2025",
        author: "8TechBurp",
        category: "Design",
    },
    {
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
        title: "Top Digital Marketing Strategies for Small Businesses",
        description: "Effective digital marketing tips that help small businesses compete with industry giants.",
        snippet: "Learn proven strategies for SEO, content marketing, and social media that drive real results for businesses of all sizes.",
        date: "Dec 5, 2025",
        author: "8TechBurp",
        category: "Marketing",
    },
    {
        image: "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?w=800",
        title: "Digital Transformation: A Complete Guide",
        description: "Everything you need to know about digital transformation and industry insights for 2025.",
        snippet: "Understanding the key pillars of digital transformation and how custom software development can accelerate your business growth.",
        date: "Dec 3, 2025",
        author: "8TechBurp",
        category: "Business",
    },
    {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        title: "Cloud Computing Trends Shaping 2025",
        description: "Explore the latest cloud computing innovations driving business success.",
        snippet: "From multi-cloud strategies to edge computing, discover trends that are transforming enterprise technology infrastructure.",
        date: "Nov 30, 2025",
        author: "8TechBurp",
        category: "Cloud",
    },
    {
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
        title: "Cybersecurity Best Practices for Modern Enterprises",
        description: "Essential security measures to protect your business in the digital age.",
        snippet: "Expert digital solutions insights on implementing robust security frameworks and protecting sensitive business data.",
        date: "Nov 28, 2025",
        author: "8TechBurp",
        category: "Security",
    },
];

function CustomArrow({ onClick, direction }) {
    return (
        <button
            onClick={onClick}
            className={`arrow ${direction === "left" ? "arrow-left" : "arrow-right"}`}
            aria-label={direction === "left" ? "Previous" : "Next"}
        >
            {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
        </button>
    );
}

export function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleBlogs, setVisibleBlogs] = useState(3);
    const [loading, setLoading] = useState(false);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };
    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleBlogs((prev) => Math.min(prev + 3, initialBlogs.length));
            setLoading(false);
        }, 800);
    };

    return (
        <div className="app-root">
            <motion.div
                ref={containerRef}
                style={{ y, opacity }}
                className="parallax-bg"
            />

            <header className="testimonials-hero">
                <div className="testimonials-hero-inner">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        Client Success Stories
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
                        Discover how we've helped businesses achieve digital transformation and drive measurable results
                    </motion.p>
                </div>
            </header>

            <section className="clients-section">
                <ClientLogos />
            </section>

            <section className="testimonials-section">
                <div className="carousel-wrap">
                    <CustomArrow onClick={prevSlide} direction="left" />
                    <CustomArrow onClick={nextSlide} direction="right" />

                    <div className="carousel-viewport">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <TestimonialCard {...testimonials[currentSlide]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="dots">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`dot ${i === currentSlide ? "active" : ""}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="blogs-section">
                <div className="section-inner">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-head">
                        <h2>Industry Insights & Trends</h2>
                        <p>Stay ahead with expert insights on digital transformation, AI strategies, and the latest industry trends</p>
                    </motion.div>

                    <div className="blogs-grid">
                        {initialBlogs.slice(0, visibleBlogs).map((b, idx) => (
                            <BlogCard key={idx} {...b} />
                        ))}
                    </div>

                    {visibleBlogs < initialBlogs.length && (
                        <div className="load-more-wrap">
                            <button onClick={handleLoadMore} disabled={loading} className="btn-primary">
                                {loading ? <><Loader2 className="spin" /> Loading...</> : "Load More Articles"}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <div className="visually-hidden">
                Digital transformation blog, Client success stories, Industry insights and trends, AI business strategies...
            </div>
        </div>
    );
}
