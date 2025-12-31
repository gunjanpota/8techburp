import { useState } from "react";
import { motion } from "motion/react";
import "./BeforeAfterSlider.css";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  return (
    <div
      className="before-after-container"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image */}
      <div className="image-layer">
        <img src={afterImage} alt={afterLabel} />
        <span className="label after">{afterLabel}</span>
      </div>

      {/* Before Image */}
      <div
        className="image-layer before-layer"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt={beforeLabel} />
        <span className="label before">{beforeLabel}</span>
      </div>

      {/* Slider Handle */}
      <motion.div
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
        whileHover={{ scaleX: 1.3 }}
      >
        <div className="slider-handle">
          <span />
          <span />
        </div>
      </motion.div>
    </div>
  );
}
