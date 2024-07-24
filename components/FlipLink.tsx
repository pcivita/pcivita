import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string | string[] }) => {
  const childString = Array.isArray(children) ? children.join("") : children;
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="text-xl underline relative overflow-hidden  whitespace-nowrap w-min inline-block font-bold cursor-pointer"
      style={{
        lineHeight: 1.3,
      }}
    >
      <div>
        {childString.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-120%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block underline"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 underline">
        {childString.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block underline"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};
export default FlipLink;
