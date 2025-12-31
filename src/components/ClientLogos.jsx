import { motion } from "motion/react";
import "./ClientLogos.css";

const logos = [
    { name: "TechCorp", color: "#168CB4" },
    { name: "FinanceHub", color: "#FFB367" },
    { name: "DataFlow", color: "#168CB4" },
    { name: "CloudNet", color: "#FFB367" },
    { name: "SmartAI", color: "#168CB4" },
    { name: "WebFlow", color: "#FFB367" },
    { name: "BizSoft", color: "#168CB4" },
    { name: "ProSuite", color: "#FFB367" },
];

export default function ClientLogos() {
    return (
        <div className="logos-section">
            <motion.div
                className="logos-track"
                animate={{ x: [0, -1920] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={index} className="logo-card">
                        <div className="logo-inner">
                            <div
                                // className="logo-circle"
                                // style={{ backgroundColor: logo.color }}
                            />
                            <span className="logo-name">{logo.name}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
