import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  hoverText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, hoverText }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative flex flex-col justify-center h-full w-full overflow-hidden rounded-lg bg-text-light p-10"
    >
      <div className="relative h-full aspect-1 border-2">
        {/* Ensure the parent has defined dimensions */}
        <Image
          src={`/Images/${name}.png`}
          alt={`${name} project image`}
          layout="fill"
          objectFit="contain" // Maintains aspect ratio
          className="py-4 border-black"
        />
      </div>
      <div className="flex justify-center font-circular items-center border-2 mt-4">
        <h1 className="text-4xl font-bold text-text-eaveBlue">{name}</h1>
      </div>
      <motion.div
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 font-circular flex items-center justify-center bg-black bg-opacity-90 opacity-0 transition-opacity duration-300
        p-10"
      >
        <h1> {name} </h1>
        <h2 className="text-white text-2xl">{hoverText}</h2>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
