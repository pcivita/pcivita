import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  hoverText: string;
}

const ProjectCardHorizontal: React.FC<ProjectCardProps> = ({
  name,
  hoverText,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-row justify-center gap-4 relative h-full w-full overflow-hidden rounded-lg bg-background-light_green"
    >
      <div className="relative  h-full aspect-1 flex justify-center items-center">
        {" "}
        <Image
          src={`/Images/${name}.png`}
          alt="hello"
          width={500} // Example: Set the width of the image
          height={500}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-4" // Example: Apply padding with Tailwind CSS classes
          style={{
            objectFit: "contain", // Example: Contain the image within its container
            objectPosition: "center center", // Example: Center the image
          }}
        />
      </div>
      <div className="w-1/3 flex justify-start  items-center">
        <h1 className="text-5xl font-bold ">{name}</h1>
      </div>
    </motion.div>
  );
};

export default ProjectCardHorizontal;
