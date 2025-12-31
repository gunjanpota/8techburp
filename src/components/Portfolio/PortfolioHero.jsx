import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import "./PortfolioHero.css";

export function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      {/* Animated background blobs */}
      <div className="portfolio-hero-bg">
        <motion.div
          className="blob blob-one"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob blob-two"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="portfolio-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="portfolio-hero-h1">
            Transforming Ideas Into
            <span>Digital Solutions</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Custom software development solutions tailored to your industry needs.
            From AI-powered platforms to responsive web applications.
          </motion.p>

          <motion.div
            className="portfolio-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#case-studies" className="btn primary">
              View Case Studies
            </a>
            <a href="#industries" className="btn secondary">
              Explore Solutions
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
