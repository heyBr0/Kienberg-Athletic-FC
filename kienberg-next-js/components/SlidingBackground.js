import styles from "../styles/SlidingBackground.module.css";
import { useEffect, useState } from "react";

const SlidingBackground = () => {
  const images = [
    "/sliding-background/1football1.png",
/*     "/sliding-background/football2.png", */
    "/sliding-background/football3.png",
    "/sliding-background/football4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set initial timeout of 0ms to trigger first transition immediately
    const initialTimer = setTimeout(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 0);

    // Set interval for subsequent transitions
    const intervalTimer = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 3000);

    // Clear timers on unmount
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div
      className={styles.slidingBackground}
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundPosition: `${index * 25}% 0`,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default SlidingBackground;
