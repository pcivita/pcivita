import ProjectCard from "./ProjectCard";
import ProjectCardHorizontal from "./ProjectCardHorizontal";

export default function BentoGrid() {
  const hoverTexts = [
    "Creating this website was an amazing exploration. It allowed me to learn about framer motion, hone in on my iteration and frontend skills. I am still constantly iterating and deploying it, hoping to make it more robust and polished. ",
    "Spiritwood was my first serious exploration with Game Design. It taught me a lot about the user experience through playtesting, and the power of following best coding practices. It was also extremely fun.",

    "dfg",
  ];
  return (
    <div className="flex h-screen items-center justify-center  py-10">
      <div className="grid h-full w-3/4 grid-cols-4 grid-rows-6 gap-4 ">
        <div
          className={`col-span-2 row-span-4 rounded-xl  border-slate-400/10 bg-neutral-100 
          dark:bg-neutral-900`}
        >
          <ProjectCard name={"Portfolio"} hoverText={hoverTexts[0]} />
        </div>

        <div
          className={`col-span-2 row-span-2 rounded-xl  border-slate-400/10 
          dark:bg-neutral-900`}
        >
          <ProjectCard name={"SpiritWood"} hoverText={hoverTexts[0]} />
        </div>
        <div
          className={`col-span-2 row-span-2 rounded-xl  
          dark:bg-neutral-900`}
        >
          <ProjectCardHorizontal name={"Flock"} hoverText={hoverTexts[0]} />
        </div>
        <div
          className={`col-span-4 row-span-2 rounded-xl  
          dark:bg-neutral-900`}
        >
          <ProjectCard name={"Develop For Good"} hoverText={hoverTexts[0]} />
        </div>
      </div>
    </div>
  );
}
