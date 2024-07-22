"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function BentoGrid() {
  const hoverTexts = [
    "This is a short summary of my work with of Eave in just two sentences. I helped create a design system from the ground up, redesigned all pages and ultimately coded the frontend for the Project.",
  ];
  return (
    <div className="flex h-screen items-center justify-center  py-10">
      <div className="grid h-full w-3/4 grid-cols-4 grid-rows-6 gap-4 ">
        <Link
          href={"/Muse"}
          className={`col-span-2 row-span-4 rounded-xl  border-slate-400/10 bg-neutral-100 
          dark:bg-neutral-900`}
        >
          <ProjectCard name={"Eave"} hoverText={hoverTexts[0]} />
        </Link>

        <Link
          href={"/Muse"}
          className={`col-span-2 row-span-2 rounded-xl  border-slate-400/10 
          dark:bg-neutral-900`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-full w-full overflow-hidden rounded-lg  bg-background-card"
          >
            <Image
              src={"/Images/Muse.png"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </motion.div>
        </Link>
        <Link
          href="/Turno"
          className={`col-span-2 row-span-2 rounded-xl  
          dark:bg-neutral-900`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-row justify-center relative h-full w-full overflow-hidden rounded-lg bg-text-light"
          >
            <div className="relative  h-full aspect-1 ">
              {" "}
              {/* Ensure the parent has defined dimensions */}
              <Image
                src="/Images/Turno.png"
                alt="hell"
                layout="fill"
                objectFit="contain" // Maintains aspect ratio
                className="py-4 border-black "
              />
            </div>
            <div className="w-1/3 flex justify-start  items-center">
              <h1 className="text-4xl font-bold text-turno-pink">Turno</h1>
              {/* Additional text or content can go here */}
            </div>
          </motion.div>
        </Link>
        {/* <div
          className={`col-span-2 row-span-2 rounded-xl  border-slate-400/10 bg-neutral-100 p-4
          dark:bg-neutral-900`}
        >
          Hello{" "}
        </div> */}
        {/* <div
          className={`col-span-3 row-span-2 rounded-xl  border-slate-400/10 bg-neutral-100 p-4
          dark:bg-neutral-900`}
        >
          BNA{" "}
        </div>
        <div
          className={`col-span-1 row-span-2 rounded-xl  border-slate-400/10 bg-neutral-100 p-4
          dark:bg-neutral-900`}
        >
          VIDEO GAMES{" "}
        </div> */}
      </div>
    </div>
  );
}
