import Image from "next/image";
import { Reveal } from "./Reveal";
import FlipLink from "./FlipLink";

const colorClassMap: { [key: string]: string } = {
  Eave: "text-text-eave",
  Website: "text-background-dark",
  Turno: "text-turno-pink",
  Muse: "text-text-muse",
};

const bgClassMap: { [key: string]: string } = {
  Eave: "bg-text-eave",
  Website: "bg-background-dark",
  Turno: "bg-turno-pink",
  Muse: "bg-text-muse",
};

export default function MainProject({
  role,
  project,
  caption,
  caption2,
  button,
}: {
  role: string;
  project: string;
  caption: string;
  caption2?: string;
  button?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-text-light px-4 md:px-48 pt-20 pb-0 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between border-2">
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
              <a href="https://eave.fyi">
                <h1
                  className={`text-3xl md:text-7xl font-bold font-circular ${colorClassMap[project]}`}
                >
                  {project}
                </h1>
              </a>
            </div>
          </Reveal>
          <Reveal color={project}>
            <>
              <h3 className="text-lg md:text-xl"> {role} </h3>
              <div
                className={`mt-2 ${bgClassMap[project]} w-fit text-blue px-2 rounded-md font-bold`}
              >
                <h1 className={`text-white`}>{button} </h1>
              </div>
            </>
          </Reveal>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <Reveal color={project} width={"w-full"}>
            <>
              <div className="text-lg md:text-xl">{caption}</div>
              {caption2 && (
                <div className="text-lg md:text-xl mt-2 ">{caption2}</div>
              )}
            </>
          </Reveal>
          <FlipLink> Github </FlipLink>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex items-center justify-center h-full mt-4 overflow-hidden border-2">
        <Reveal color={project}>
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
        </Reveal>
      </div>

      {/* Horizontal Line */}
      <div className="flex justify-center py-4">
        <div className="w-11/12 border-t-2 border-grey"></div>
      </div>
    </div>
  );
}
