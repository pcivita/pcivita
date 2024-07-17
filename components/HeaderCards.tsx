import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ComponentContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`my-10 flex flex-row gap-4 h-20
      }`}
    >
      {[0, 1, 2].map((index) => (
        <ComponentCard
          key={index}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

export const ComponentCard = ({ index, hoveredIndex, setHoveredIndex }) => {
  const isOpen = hoveredIndex === index;
  const isNotHovered = hoveredIndex !== null && hoveredIndex !== index;

  const images = [
    "/Images/Stanford.webp",
    "/Images/Figma.png",
    "/Images/React.png",
  ];

  return (
    <motion.div
      layout
      className={`bg-background-light rounded-md items-center justify-start w-10${
        isOpen ? "isOpen" : ""
      }`}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      animate={{
        width: isNotHovered ? "20%" : "100%",
      }}
      transition={{
        width: { duration: 0.3 },
      }}
    >
      <motion.div layout className="flex flex-row  border-black">
        <div className="relative w-10 h-10">
          {" "}
          {/* Setting the container size */}
          <Image
            src={images[index]}
            alt="Profile Pic"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
            quality={75} // Adjust quality as needed (default is 75)
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
