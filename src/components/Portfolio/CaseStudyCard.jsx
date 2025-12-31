import { motion } from "motion/react";
import { ExternalLink, Play, TrendingUp } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import "./CaseStudyCard.css";

export function CaseStudyCard({
  title,
  industry,
  problem,
  solution,
  technologies,
  results,
  demoLink,
  videoLink,
  beforeImage,
  afterImage,
  testimonial,
}) {
  return (
    <motion.div
      className="case-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Before / After */}
      {beforeImage && afterImage && (
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
        />
      )}

      <div className="case-content">
        {/* Header */}
        <div className="case-header">
          <h3>{title}</h3>
          <span className="industry">{industry}</span>
        </div>

        {/* Problem */}
        <div className="case-section">
          <h4>🎯 Problem Statement</h4>
          <p>{problem}</p>
        </div>

        {/* Solution */}
        <div className="case-section">
          <h4>💡 Solution Approach</h4>
          <p>{solution}</p>
        </div>

        {/* Tech Stack */}
        <div className="case-section">
          <h4>🔧 Tech Stack</h4>
          <div className="tech-list">
            {technologies.map((tech, i) => (
              <span key={i} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="case-section">
          <h4 className="results-title">
            <TrendingUp size={18} />
            Impact & Results
          </h4>

          <ul className="results-list">
            {results.map((item, i) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="case-actions">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer" className="btn primary">
              <ExternalLink size={16} />
              View Live Demo
            </a>
          )}

          {videoLink && (
            <a href={videoLink} target="_blank" rel="noreferrer" className="btn secondary">
              <Play size={16} />
              Watch Demo
            </a>
          )}
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div className="testimonial">
            <p className="quote">"{testimonial.text}"</p>
            <p className="author">{testimonial.author}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
