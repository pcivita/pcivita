"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BentoMobile() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center justify-center bg-slate-200 md:grid md:w-3/4 md:grid-cols-4 md:gap-4">
        {/* Flex layout for mobile, switches to grid layout for md and up */}
        <Link
          href={"/Muse"}
          className="rounded-xl border-slate-400/10 bg-neutral-100 dark:bg-neutral-900"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-full w-full overflow-hidden rounded-lg bg-white flex flex-col items-center"
          >
            <Image
              src={"/Images/muse.svg"}
              alt="Muse"
              layout="fill"
              objectFit="contain"
              className="p-4"
              // Ensure the image doesn't take the entire height so there's space for the text below
              style={{ maxHeight: "80%" }} // Adjust this percentage as needed
            />
            <div className="text-center p-4">
              {" "}
              {/* Added padding for some spacing */}
              <h1>Muse</h1>
              <h2>Letterboxd for Museums</h2>
            </div>
          </motion.div>
        </Link>
        {/* Repeat for other Links/components as needed */}
      </div>
    </div>
  );
}
