import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./AnimatedStats.css";

function AnimatedStat({ value, label, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

export function AnimatedStats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          <AnimatedStat value={10} suffix="+" label="Projects Completed" />
          <AnimatedStat value={98} suffix="%" label="Client Satisfaction" />
          <AnimatedStat value={50} suffix="+" label="Industries Served" />
          <AnimatedStat value={24} suffix="/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
}
