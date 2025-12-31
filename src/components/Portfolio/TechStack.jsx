import { motion } from "motion/react";
import "./TechStack.css";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "TypeScript", category: "Frontend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Next.js", category: "Frontend" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
];

export function TechStack() {
  return (
    <section className="techstack">
      <div className="techstack-container">
        <motion.div
          className="techstack-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technologies We Master</h2>
          <p>
            Cutting-edge technology stack to build scalable, secure, and
            performant solutions
          </p>
        </motion.div>

        <div className="techstack-list">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
