"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BentoMobile() {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-4">
      <Link
        href={"/Muse"}
        className="bg-red-200 w-full  flex flex-col items-center justify-center p-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={"/Images/muse.svg"}
            alt="Muse"
            layout="responsive" // 'responsive' layout will respect the width of the parent, and the height will adjust to maintain the image's aspect ratio
            width={1} // Setting width and height to 1 maintains the aspect ratio
            height={1}
            className="w-full" // This will make the image take the full width of its parent
          />

          <div className="text-center">
            {" "}
            {/* This centers the text horizontally */}
            <h1 className="text-xl font-bold">Muse</h1>{" "}
            {/* Adjust font-size and weight as needed */}
            <h2 className="text-base">Letterboxd for Museums</h2>{" "}
            {/* Adjust font-size as needed */}
          </div>
        </motion.div>
      </Link>
      <Link
        href={"/Muse"}
        className="bg-red-200 w-full  flex flex-col items-center justify-center p-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={"/Images/muse.svg"}
            alt="Muse"
            layout="responsive" // 'responsive' layout will respect the width of the parent, and the height will adjust to maintain the image's aspect ratio
            width={1} // Setting width and height to 1 maintains the aspect ratio
            height={1}
            className="w-full" // This will make the image take the full width of its parent
          />

          <div className="text-center">
            {" "}
            {/* This centers the text horizontally */}
            <h1 className="text-xl font-bold">Muse</h1>{" "}
            {/* Adjust font-size and weight as needed */}
            <h2 className="text-base">Letterboxd for Museums</h2>{" "}
            {/* Adjust font-size as needed */}
          </div>
        </motion.div>
      </Link>
      <Link
        href={"/Muse"}
        className="bg-red-200 w-full  flex flex-col items-center justify-center p-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src={"/Images/muse.svg"}
            alt="Muse"
            layout="responsive" // 'responsive' layout will respect the width of the parent, and the height will adjust to maintain the image's aspect ratio
            width={1} // Setting width and height to 1 maintains the aspect ratio
            height={1}
            className="w-full" // This will make the image take the full width of its parent
          />

          <div className="text-center">
            {" "}
            {/* This centers the text horizontally */}
            <h1 className="text-xl font-bold">Muse</h1>{" "}
            {/* Adjust font-size and weight as needed */}
            <h2 className="text-base">Letterboxd for Museums</h2>{" "}
            {/* Adjust font-size as needed */}
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
