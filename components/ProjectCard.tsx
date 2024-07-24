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
      className="relative flex flex-col justify-center h-full w-full overflow-hidden rounded-lg bg-background-light_green p-10"
    >
      <div className="relative h-full aspect-1 ">
        {/* Ensure the parent has defined dimensions */}
        <Image
          src={`/Images/${name}.png`}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-4"
          style={{
            objectFit: "contain",
            objectPosition: "center center",
          }}
        />
      </div>
      <div className="flex justify-center font-circular items-center mt-4">
        <h1 className="text-5xl font-bold text-text-eaveBlue">{name} </h1>
      </div>
      <motion.div
        whileHover={{ opacity: 1 }}
        className="absolute  w-full h-full inset-0 font-circular flex flex-col items-start gap-2 justify-center bg-black bg-opacity-90 opacity-0 transition-opacity duration-300
        p-10"
      >
        <h1 className="text-white text-3xl	font-circular font-bold ">
          {" "}
          {name}{" "}
        </h1>
        <h2 className="text-white text-lg font-circular leading-tight">
          {hoverText}
        </h2>
        <div className="flex flex-row gap-4 text-lg font-circular">
          <div
            className={`mt-2 bg-background-green w-fit text-blue px-4 py-1 rounded-full font-bold`}
          >
            <h1 className={`text-white`}> Figma </h1>
          </div>
          <div
            className={`mt-2 bg-background-dark w-fit text-blue px-4 py-1 rounded-full font-bold`}
          >
            <h1 className={`text-white`}> Figma </h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
