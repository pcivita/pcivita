import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  // const { scrollY } = useScroll();
  // const lastYRef = useRef(0);

  return (
    <motion.div className="fixed z-10 flex w-full justify-center pt-10">
      <nav
        className="
        flex 
        justify-between 
        gap-3 p-4 px-14
        rounded-full
        bg-background-card  opacity-90 

        *:px-7 *:py-2  *:rounded-full
        *:transition-colors *:duration-300 
      hover:*:bg-background-black
        font-circular font-bold"
      >
        <a
          href="#"
          className="text-background-light bg-background-black rounded-md "
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
