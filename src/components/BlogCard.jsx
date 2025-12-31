import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";
import "./BlogCard.css";

export default function BlogCard({
  image,
  title,
  description,
  snippet,
  date,
  author,
  category,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="blog-card"
    >
      <div className="blog-image-container">
        <motion.img
          src={image}
          alt={title}
          className="blog-image"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />

        <div className="blog-category">{category}</div>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="meta-item">
            <Calendar className="meta-icon" />
            {date}
          </span>

          <span className="meta-item">
            <User className="meta-icon" />
            {author}
          </span>
        </div>

        <h3 className="blog-title">{title}</h3>

        <p className="blog-description">{description}</p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="blog-snippet"
        >
          <p>{snippet}</p>
        </motion.div>

        <button className="read-more-btn">
          Read More <ArrowRight className="arrow-icon" />
        </button>
      </div>
    </motion.article>
  );
}
