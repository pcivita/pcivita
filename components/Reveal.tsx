import { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "w-fit" | "w-full";
  delay?: number;
  duration?: number;
  color?: string;
}

const colorClassMap: { [key: string]: string } = {
  Eave: "bg-text-eave",
  Website: "bg-background-dark",
  Turno: "bg-turno-pink",
  Muse: "bg-text-muse",
};

export const Reveal = ({
  children,
  width = "w-fit",
  delay = 0.25,
  duration = 0.5,
  color = "Website",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  });
  return (
    <div ref={ref} className={`overflow-hidden relative ${width}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
      >
        {" "}
        {children}{" "}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration, ease: "easeIn" }}
        className={`absolute top-2 bottom-0 left-0 right-0 z-20 ${colorClassMap[color]}`}
      ></motion.div>
    </div>
  );
};
