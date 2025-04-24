import styles from "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    `${process.env.PUBLIC_URL}/food1.jpg`,
    `${process.env.PUBLIC_URL}/food2.jpg`,
    `${process.env.PUBLIC_URL}/food3.jpg`,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out",
          transform: `translateX(${-imageIndex * 100}%)`,
        }}
      >
        {images.map((imgPath, idx) => (
          <img
            key={idx}
            src={imgPath}
            alt={`Home Image ${idx + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
