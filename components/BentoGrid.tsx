"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <div className="flex h-screen items-center justify-center  py-10">
      <div className="grid h-full w-3/4 grid-cols-4 grid-rows-6 gap-4 ">
        <Link
          href={"/Muse"}
          className={`col-span-2 row-span-4 rounded-xl  border-slate-400/10 bg-neutral-100 
          dark:bg-neutral-900`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-full w-full overflow-hidden rounded-lg bg-background-card "
          >
            <Image
              src={"/Images/muse.svg"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </motion.div>
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
              src={"/Images/turno.svg"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </motion.div>
        </Link>
        <Link
          href="/Muse"
          className={`col-span-2 row-span-2 rounded-xl  
          dark:bg-neutral-900`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-full w-full overflow-hidden rounded-lg  bg-background-card"
          >
            <Image
              src={"/Images/dfg.png"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
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
