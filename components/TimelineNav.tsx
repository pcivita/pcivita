import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex w-full justify-center pt-10"
    >
      <nav
        className="flex justify-between gap-3 rounded-3xl bg-background-card opacity-90 p-5 *:rounded-xl  *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200 
      font-circular font-bold"
      >
        <a
          href="#"
          className="text-background-light bg-background-black rounded-md"
        >
          Introduction
        </a>
        <a href="#" className="text-background-light">
          Process
        </a>
        <a href="#" className="text-background-light">
          Designs
        </a>
        <a href="#" className="text-background-light">
          Conclusion
        </a>
      </nav>
    </motion.div>
  );
};

export default Nav;
