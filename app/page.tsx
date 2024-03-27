"use client";
import BentoGrid from "@/components/BentoGrid";
import BentoMobile from "@/components/BentoMobile";
import Image from "next/image";
import { SocialIcon } from "react-social-icons/component";
import { useState } from "react";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";
import Navbar from "@/components/Navbar";

// TODO: Chhange IMAGE W and H
// TODO: IMAGE SIZE, TOO LONG TO LOAD

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Navbar open={open} setOpen={setOpen} />
      {/* Header */}
      <div className="flex flex-col bg-background-dark p-4 gap-4">
        {/* Image */}
        <div className="flex border-black border-2 align-middle justify-center ">
          <div className="w-44 h-44  rounded-full overflow-hidden border-8 border-white ">
            <Image
              src={"/Images/profilePic.JPG"}
              alt="Profile Pic"
              layout="responsive"
              width={1} // Aspect ratio's width
              height={1} // Aspect ratio's height, keeping it 1:1
              // className="object-cover" // Ensure this for responsive images, but it's more useful with layout="fill"
            />
          </div>
        </div>
        {/* Name */}
        <div className="border-black border-2">
          <h1 className="text-5xl text-text-dark font-bold">
            Hi, I&apos;m{" "}
            <span className="text-background-light">Pedro Civita.</span>
          </h1>
        </div>
        {/* Blurb */}
        <div className="border-black border-2">
          <h1 className="text-5xl text-text-dark font-bold">
            I blurb, blurb, and blurb.
          </h1>
        </div>
        {/* Line */}
        <div>
          <div className="w-24 h-2 bg-purple my-4"></div>
        </div>
        <div>
          <p className="text-2xl font-poppins text-text-sub">
            I’m a Stanford Masters Student Studying{" "}
            <span className="font-bold text-text-dark">
              {" "}
              Human Computer Interaction{" "}
            </span>
            and I love it a lot lot lot lot lot its just the best thing ever.
          </p>
        </div>
      </div>

      {/* WORK */}
      <div className="bg-background-light w-full p-8">
        <div>
          <h1 className="text-center">MY RECENT WORK</h1>
        </div>
        <BentoMobile />
        {/* <BentoGrid/> */}
      </div>

      {/* FOOTER */}
      <div>
        {" "}
        <a href="/Images/Pedro-Civita Resume-2024.pdf">Resume</a>
        <SocialIcon url="https://www.linkedin.com/in/pedro-civita/" />
        <SocialIcon
          url="mailto:pcivita@stanford.edu?subject = Feedback&body = Message"
          network="mailto"
        />
      </div>
    </div>
  );
}
