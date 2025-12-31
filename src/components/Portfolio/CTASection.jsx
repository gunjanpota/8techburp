import { motion } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import "./CTASection.css";

export function CTASection() {
  return (
    <section className="cta-section">
      {/* Animated background blob */}
      <motion.div
        className="cta-blob"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let’s discuss how our custom software development solutions can help
            you achieve your business goals.
          </p>

          <div className="cta-buttons">
            <motion.a
              href="mailto:contact@8techburp.com"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
