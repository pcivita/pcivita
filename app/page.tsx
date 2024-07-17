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
import FlipLink from "@/components/FlipLink";

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
          {/* <div className="w-56 h-56 border-2 rounded-full overflow-hidden">
            <Image
              src="/Images/profile.JPG"
              alt="Profile Pic"
              layout="responsive"
              width={1} // Aspect ratio's width
              height={2} // Aspect ratio's height, keeping it 1:1
              className="object-fit w-full h-screen"
              priority
            />
          </div> */}
          <div className="w-80 h-80 overflow-hidden rounded-full border-4 border-background-light">
            <Image
              src="/Images/profile.jpg"
              alt="Profile Pic"
              width={1000} // Aspect ratio's width
              height={1000} // Aspect ratio's height, keeping it 1:1
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="font-circular md:self-center w-[34rem]">
            <h1
              className="text-6xl text-text-dark font-bold tracking-wide"
              style={{
                lineHeight: 1.2,
              }}
            >
              Hi, I&apos;m <FlipLink>Pedro.</FlipLink>
            </h1>
            <h1 className="text-6xl text-text-dark font-bold">
              I love to <FlipLink>design</FlipLink> and{" "}
              <FlipLink>develop</FlipLink> interfaces.
            </h1>

            {/* <ComponentContainer /> */}
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
