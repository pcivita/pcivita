import Image from "next/image";
import { Reveal } from "./Reveal";

const colorClassMap: { [key: string]: string } = {
  Eave: "text-text-eave",
  Website: "text-background-dark",
  Turno: "text-turno-pink",
  Muse: "text-text-muse",
};

export default function MainProject({
  role,
  project,
  caption,
}: {
  role: string;
  project: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col h-screen bg-text-light px-48 pt-20 pb-0">
      {/* Header */}
      <div className="flex flex-row justify-between">
        {/* Left Side */}
        <div className="flex-col flex gap-4">
          <Reveal color={project}>
            <div className="flex flex-row gap-4">
              <Image
                src={`/Images/Bullet${project}.svg`}
                alt="hello"
                width={50}
                height={50}
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
              <h1
                className={`text-7xl font-bold font-circular ${colorClassMap[project]}`}
              >
                {" "}
                {project}{" "}
              </h1>
            </div>
          </Reveal>
          <Reveal color={project}>
            <h3 className="text-xl"> {role} </h3>
          </Reveal>
        </div>
        {/* Right Side */}
        <div className="w-1/3 pt-4">
          <Reveal color={project} width={"w-full"}>
            <div>{caption}</div>
          </Reveal>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex items-center justify-center h-full">
        <Image
          src={`/Images/${project}.png`}
          alt="hello"
          className="p-4"
          width={500}
          height={500}
          style={{
            objectFit: "contain",
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center py-4">
        <div className="w-11/12 border-t-2 border-grey"></div>
      </div>
    </div>
  );
}
