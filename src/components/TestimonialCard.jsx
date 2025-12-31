import { motion } from "motion/react";
import { Quote } from "lucide-react";
import "./TestimonialCard.css";

export default function TestimonialCard({ quote, name, designation, company, photo }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="testimonial-card"
        >
            <div className="quote-badge">
                <Quote className="quote-icon" />
            </div>

            <div className="content">
                <p className="quote-text">"{quote}"</p>

                <div className="user-info">
                    <img src={photo} alt={name} className="user-photo" />
                    <div>
                        <h4 className="user-name">{name}</h4>
                        <p className="user-designation">
                            {designation}, {company}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
