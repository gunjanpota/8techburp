import { motion } from "motion/react";
import {
  Heart,
  ShoppingCart,
  Building2,
  Briefcase,
  Bot,
  Stethoscope,
} from "lucide-react";
import "./IndustryShowcase.css";

const industries = [
  {
    icon: <Heart size={32} />,
    name: "Healthcare",
    description: "AI-Powered healthcare solutions for modern medical practices",
    solutions: [
      "Telemedicine App Solutions",
      "AI-Powered Appointment Systems",
      "Patient Management Tools",
      "Healthcare Mobile App Development",
    ],
    color: "#168CB4",
  },
  {
    icon: <ShoppingCart size={32} />,
    name: "E-Commerce",
    description: "Scalable online stores with seamless user experiences",
    solutions: [
      "Multi-Vendor Marketplaces",
      "Payment Gateway Integration",
      "Scalable Online Store Solutions",
      "E-commerce Platform Development",
    ],
    color: "#FFB367",
  },
  {
    icon: <Briefcase size={32} />,
    name: "Finance",
    description: "Secure and compliant financial technology solutions",
    solutions: [
      "Finance Industry Web Solutions",
      "Data-Driven Digital Solutions",
      "Custom Enterprise Software Development",
      "AI-Powered Analytics",
    ],
    color: "#168CB4",
  },
  {
    icon: <Building2 size={32} />,
    name: "Corporate",
    description: "Enterprise-grade solutions for business transformation",
    solutions: [
      "Corporate Website Development",
      "Custom Enterprise Software Development",
      "Industry-Specific Digital Solutions",
      "Responsive Websites Development",
    ],
    color: "#FFB367",
  },
  {
    icon: <Bot size={32} />,
    name: "AI & Automation",
    description: "Intelligent automation solutions powered by AI",
    solutions: [
      "AI Chatbot Development",
      "AI-Powered Software Solutions",
      "Custom Software Development Solutions",
      "Data-Driven Digital Solutions",
    ],
    color: "#168CB4",
  },
  {
    icon: <Stethoscope size={32} />,
    name: "Mobile Solutions",
    description: "Cross-platform mobile applications for all devices",
    solutions: [
      "Mobile Applications Development",
      "Responsive Websites Development",
      "Healthcare Mobile App Development",
      "Industry-Specific Digital Solutions",
    ],
    color: "#FFB367",
  },
];

export function IndustryShowcase() {
  return (
    <section id="industries" className="industry-section">
      <div className="industry-container">
        <motion.div
          className="industry-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Industry-Specific Solutions</h2>
          <p>
            Tailored digital solutions designed for your industry's unique
            challenges and opportunities
          </p>
        </motion.div>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="industry-icon"
                style={{ backgroundColor: `${industry.color}15` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span style={{ color: industry.color }}>
                  {industry.icon}
                </span>
              </motion.div>

              <h3 style={{ color: industry.color }}>
                {industry.name}
              </h3>

              <p className="industry-desc">
                {industry.description}
              </p>

              <ul className="industry-list">
                {industry.solutions.map((item, idx) => (
                  <li key={idx}>
                    <span
                      className="dot"
                      style={{ backgroundColor: industry.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="industry-link">
                <a href="#case-studies" style={{ color: industry.color }}>
                  View Projects →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
