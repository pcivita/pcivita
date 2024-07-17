"use client";
import BentoGrid from "@/components/BentoGrid";
import BentoMobile from "@/components/BentoMobile";
import Image from "next/image";
import { SocialIcon } from "react-social-icons/component";
import { useState } from "react";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";
import { ComponentContainer } from "@/components/HeaderCards";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      {/* Header */}
      <div
        className="
      flex
      flex-col
      bg-background-dark 

      md:flex-row-reverse
      md:justify-center
      md:py-20
      border-2
      "
      >
        {/* Content Container */}
        <div
          className=" flex md:flex-row-reverse items-center
        md:gap-20"
        >
          {/* Image */}
          <div className="w-56">
            <div className="w-full aspect-1 rounded-full overflow-hidden  border-white">
              <Image
                src={"/Images/profilePic.JPG"}
                alt="Profile Pic"
                layout="responsive"
                width={1} // Aspect ratio's width
                height={1} // Aspect ratio's height, keeping it 1:1
                quality={75} // Adjust quality as needed (default is 75)
                priority
              />
            </div>
          </div>

          {/* Name */}
          <div className="font-circular md:self-center w-[28rem]">
            <h1 className="text-5xl text-text-dark font-bold tracking-wide">
              Hi, I&apos;m <span className="text-text-light">Pedro.</span>
            </h1>
            <h1 className="text-5xl text-text-dark font-bold">
              I love to <span className="text-text-light">design</span> and{" "}
              <span className="text-text-light">develop</span> interfaces.
            </h1>
            <ComponentContainer />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="bg-background-black w-full p-8">
        {/* Featured Work */}
        <div>
          <h1 className="text-center text-text-light_green font-circular font-bold text-5xl mb-8">
            FEATURED WORK
          </h1>
        </div>

        {/* Featured Grid */}
        <div>
          <div className="block md:hidden">
            <BentoMobile />
          </div>

          {/* Show BentoGrid on medium and larger screens */}
          <div className="hidden md:block">
            <BentoGrid />
          </div>
        </div>
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
