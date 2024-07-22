"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BentoMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link
        href={"/Muse"}
        className="bg-background-card w-full flex flex-col items-center justify-center p-4 rounded-2xl"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center justify-center"
        >
          {/* <Image
            src={"/Images/muse.svg"}
            alt="Muse"
            layout="responsive" // 'responsive' layout will respect the width of the parent, and the height will adjust to maintain the image's aspect ratio
            width={1} // Setting width and height to 1 maintains the aspect ratio
            height={1}
            className="w-full" // This will make the image take the full width of its parent
          /> */}

          <div className="text-center">
            {" "}
            {/* This centers the text horizontally */}
            <h1 className="text-xl font-bold">Muse</h1>{" "}
            {/* Adjust font-size and weight as needed */}
            <h2 className="text-base ">Letterboxd for Museums</h2>{" "}
            {/* Adjust font-size as needed */}
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

{
  /* Bento Intro */
}
{
  /* <div className="grid grid-cols-2 gap-4 mb-4 border-2">
          <div className="bg-background-light">
            <h2 className="text-lg font-bold">Dates</h2>
            <p>Sept - Dec 2023</p>
          </div>
          <div className="bg-background-light rounded-lg">
            <h2 className="text-lg font-bold ">Project Type</h2>
            <p>Mobile App</p>
          </div>
        </div>
        <div>
          <p className="text-base">
            Turno was my 10 week long project for my class CS147. Its main
            purpose was to truly make us learn and dive deep into the HCI field.
            It allowed us to explore needfinding, prototyping, usability tests,
            heuristic evaluation, and React Native development.
          </p>
        </div> */
}
