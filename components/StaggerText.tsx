import { motion, useInView } from "framer-motion";
import { useRef } from "react";
type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  onComplete?: () => void;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const StaggerText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  onComplete,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const whiteWords = ["Pedro.", "develop", "design"];

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05 }}
        onAnimationComplete={onComplete}
      >
        {textArray.map((line, index) => (
          <motion.span key={index} className="block" transition={{ delay: 1 }}>
            {line.split(" ").map((word, indexWord) => (
              <span key={indexWord}>
                {word.split("").map((char, indexChar) => (
                  <motion.span
                    key={indexChar}
                    className={`inline-block ${
                      whiteWords.includes(word) ? "text-white" : ""
                    }`}
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp; </span>
              </span>
            ))}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
