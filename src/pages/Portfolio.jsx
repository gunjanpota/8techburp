import './Portfolio.css';
import { PortfolioHero } from '../components/Portfolio/PortfolioHero';
import { AnimatedStats } from '../components/Portfolio/AnimatedStats';
import { MicroInteractions } from '../components/Portfolio/MicroInteractions';
import { IndustryShowcase } from '../components/Portfolio/IndustryShowcase';
import { CaseStudyCard } from '../components/Portfolio/CaseStudyCard';
import { TechStack } from '../components/Portfolio/TechStack';
import { CTASection } from '../components/Portfolio/CTASection';

export function Portfolio() {
    const caseStudies = [
        {
            title: "AI-Powered E-Commerce Platform",
            industry: "E-Commerce",
            problem: "A growing retail business needed to scale their online presence with personalized shopping experiences and real-time inventory management across multiple locations.",
            solution: "Developed a custom e-commerce platform with AI-powered product recommendations, automated inventory sync, and integrated payment gateway supporting multiple currencies.",
            technologies: ["React", "Node.js", "TensorFlow", "PostgreSQL", "AWS", "Stripe"],
            results: [
                "3X increase in online traffic within 2 months",
                "50% increase in sales conversion rate",
                "Reduced cart abandonment by 35%",
                "99.9% uptime with auto-scaling infrastructure"
            ],
            demoLink: "https://example.com/demo",
            videoLink: "https://example.com/video",
            beforeImage: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjY2NTIzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            afterImage: "https://images.unsplash.com/photo-1758670496782-cb11b7b56675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdG9yZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjY2NTIzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            testimonial: {
                text: "The custom e-commerce platform helped us increase sales by 50% in 3 months. The AI recommendations are incredibly accurate!",
                author: "Sarah Johnson",
                role: "CEO, RetailCo"
            }
        },
        {
            title: "Telemedicine Mobile App",
            industry: "Healthcare",
            problem: "Healthcare provider needed a secure telemedicine solution to enable remote consultations while maintaining HIPAA compliance and integrating with existing patient management systems.",
            solution: "Built a cross-platform mobile application with video consultations, e-prescription capabilities, secure medical record access, and real-time appointment scheduling with automated reminders.",
            technologies: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS", "HIPAA Compliant"],
            results: [
                "Served 10,000+ virtual consultations in first 6 months",
                "Reduced wait times by 60%",
                "95% patient satisfaction rating",
                "Full HIPAA compliance achieved"
            ],
            demoLink: "https://example.com/demo",
            videoLink: "https://example.com/video",
            beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY1NjM4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            afterImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2NjY1MjMzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
            testimonial: {
                text: "This platform revolutionized how we deliver care to our patients. The integration was seamless and the support has been outstanding.",
                author: "Dr. Michael Chen",
                role: "Chief Medical Officer, HealthPlus"
            }
        },
        {
            title: "Enterprise Resource Planning System",
            industry: "Corporate",
            problem: "A mid-size manufacturing company struggled with disconnected systems for inventory, sales, and finance, leading to data inconsistencies and operational inefficiencies.",
            solution: "Designed and implemented a comprehensive ERP system integrating all business processes, with real-time analytics dashboard, automated workflows, and role-based access control.",
            technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "Docker"],
            results: [
                "Reduced operational costs by 40%",
                "Improved data accuracy to 99.5%",
                "Automated 80% of manual processes",
                "Real-time visibility across all departments"
            ],
            demoLink: "https://example.com/demo",
            beforeImage: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NjI0MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            afterImage: "https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY1NjI4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            testimonial: {
                text: "The ERP system transformed our business operations. We now have complete visibility and control over every aspect of our business.",
                author: "Robert Martinez",
                role: "Operations Director, ManufacturePro"
            }
        }
    ];

    return (
        <div className="portfolio">

            {/* SEO Keywords - Hidden but accessible */}
            <div className="sr-only">
                Custom software development solutions, Responsive websites development,
                Mobile applications development, AI-powered software solutions,
                Industry-specific digital solutions, E-commerce platform development,
                Corporate website development, Finance industry web solutions,
                AI chatbot development, Healthcare mobile app development,
                Telemedicine app solutions, Data-driven digital solutions,
                Scalable online store solutions, Custom enterprise software development
            </div>
            {/* HERO */}
            <PortfolioHero />

            {/* STATS */}
            <AnimatedStats />

            {/* MICRO INTERACTIONS */}
            <MicroInteractions />

            {/* INDUSTRIES */}
            <IndustryShowcase />

            {/* CASE STUDIES */}
            <section id="case-studies" className="case-studies">
                <div className="container">
                    <h2 className="section-title">Interactive Case Studies</h2>
                    <p className="section-subtitle">
                        Real projects, real business impact.
                    </p>

                    <div className="space-y-12">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <TechStack />

            {/* CTA */}
            <CTASection />
        </div>
    );
}