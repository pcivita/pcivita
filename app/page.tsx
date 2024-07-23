"use client";
import BentoGrid from "@/components/BentoGrid";
import BentoMobile from "@/components/BentoMobile";
import Image from "next/image";
import { SocialIcon } from "react-social-icons/component";
import { useRef, useState } from "react";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";
import { motion } from "framer-motion";
import { StaggerText } from "@/components/StaggerText";
import { FaChevronDown } from "react-icons/fa";
import MainProject from "@/components/MainProject";
import { Reveal } from "@/components/Reveal";
import React from "react";

// import { AnimateReveal } from "@/components/AnimateReveal";

export default function Home() {
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleFirstAnimationComplete = () => {
    console.log("First animation completed");
    setTimeout(() => {
      console.log("1 second delay passed");
      setFirstAnimationComplete(true);
    }, 300); // 1 second delay
  };

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      {/* Header */}
      <div
        className="flex 
      flex-col h-screen
       bg-background-dark"
      >
        {/* Content Container */}
        <div className="flex-grow flex justify-center md:flex-row-reverse items-center md:gap-20">
          {firstAnimationComplete ? (
            <Reveal delay={0.01} duration={1}>
              <div className="relative w-96 h-96 p-8">
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-full border-dashed border-4 border-background-light"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 100,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/Images/profile.JPG"
                    alt="SDSD"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
              </div>
            </Reveal>
          ) : (
            <div className="relative w-96 h-96 p-8"></div>
          )}

          {/* Name */}
          <motion.div className="font-circular md:self-center w-[38rem] min-h-52">
            <StaggerText
              text={["Hi, I'm Pedro."]}
              className="text-6xl font-bold"
              once
              onComplete={handleFirstAnimationComplete}
            />
            {firstAnimationComplete && (
              <Reveal delay={0.7} duration={0.8}>
                <h1 className="text-6xl font-bold">
                  I love to{" "}
                  <span className="text-background-light">design</span> and{" "}
                  <span className="text-background-light">develop</span>{" "}
                  interfaces.
                </h1>
              </Reveal>
            )}
          </motion.div>
        </div>

        {/* Test Container */}
        <motion.div
          className="flex justify-center
          items-center py-10"
          animate={{ y: [0, 5, 0] }} // Keyframes for the bounce effect
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {" "}
          <Reveal delay={0.7}>
            <motion.div
              // whileHover={{
              //   scale: 1.2,
              // }}
              // whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              animate={{ color: isClicked ? "#00FF00" : "#FFFFFF" }}
            >
              <FaChevronDown size={50} style={{ color: "white" }} />
            </motion.div>
          </Reveal>
        </motion.div>
      </div>
      <MainProject
        role={"DESIGN TECHNOLOGIST INTERN"}
        project={"Eave"}
        caption={
          "As Eave's First hire, I was tasked with Conceptualized and implemented Eave's Design System. Redesigned and programmed screens and product flows. "
        }
      />
      <MainProject
        project={"Muse"}
        role={"CO-FOUNDER"}
        caption={
          "Muse is a Social Media Arts Platform built as part of my Stanford Capstone Project. With amazing UI the project aims to revolutionize how we interact with museums. It won third place out of 40 team in the Stanford Software Fair."
        }
      />
      <MainProject
        role={"DESIGN TECHNOLOGIST INTERN"}
        project={"Turno"}
        caption={
          "Turno is a mobile app that empowers users to overcome decision paralysis & establish long-term habits. The project served as the culmination of what I learned in"
        }
      />
      {/* Body */}
      <div className="bg-text-light w-full p-8">
        {/* Featured Work */}
        <div>
          <h1 className="text-center text-text-light_green font-circular font-bold text-5xl mt-10 mb-10">
            Other Projects
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
