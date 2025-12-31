import { motion } from "motion/react";
import { Zap, Sparkles, TrendingUp, Shield } from "lucide-react";
import "./MicroInteractions.css";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Beautiful interfaces that users love",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "Built to grow with your business",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security standards",
  },
];

export function MicroInteractions() {
  return (
    <section className="micro-section">
      {/* Background blobs */}
      <div className="micro-bg">
        <motion.div
          className="blob blue"
          animate={{ scale: [1, 1.5, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob orange"
          animate={{ scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container">
        {/* Heading */}
        <motion.div
          className="micro-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Us</h2>
          <p>Delivering excellence through innovation and attention to detail</p>
        </motion.div>

        {/* Cards */}
        <div className="micro-grid">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="micro-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="icon-wrapper"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="icon-bg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(22,140,180,0)",
                        "0 0 0 12px rgba(22,140,180,0.1)",
                        "0 0 0 0 rgba(22,140,180,0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon size={32} color="#168CB4" />
                  </motion.div>

                  <motion.span
                    className="particle"
                    animate={{ y: [-5, -15, -5], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="hover-line" />
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className={`dot ${i % 2 === 0 ? "blue" : "orange"}`}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
