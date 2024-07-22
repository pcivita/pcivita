"use client";
import Nav from "@/components/TimelineNav";
import Image from "next/image";

const TurnoPage = () => {
  return (
    <div className="min-h-[300vh] bg-background-black">
      <Nav />
      <div className="pt-52 px-56">
        {/* Header Container */}
        <div
          className=" flex md:flex-row items-center border-2
        md:gap-20"
        >
          {/* Project Logo */}
          <div className="relative w-64 h-64 overflow-hidden rounded-lg ">
            <Image
              src={"/Images/turno.svg"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>
          {/* Name and Role*/}
          <div className="font-Poppins md:self-center w-[34rem]">
            <h1
              className="text-6xl text-background-light font-bold tracking-wide"
              style={{
                lineHeight: 1.2,
              }}
            >
              Turno
            </h1>
            <h3 className="text-text-gray text-xl">
              UX Researcher / Frontend Developer
            </h3>
            <h3 className="text-text-gray text-xl">
              September - December 2023
            </h3>
            <h3 className="text-text-gray text-xl">
              Awarded fourth place in the CS147 Project Fair
            </h3>
          </div>
        </div>
        {/* Check Bento Mobile for Draft */}
        <div className="border-2">
          <p className="text-background-light text-2xl mb-8">
            Turno is a mobile app that empowers users to overcome decision
            paralysis & establish long-term habits. The project served as the
            culmination of what I learned in{" "}
            <span className="font-bold">
              Stanford`&apos;`s staple HCI course
            </span>
            .
          </p>
          <p className="text-background-light text-2xl mb-8">
            Over ten weeks, my team and I continuously applied HCI topics
            ranging from needfinding and prototyping to usability tests and
            heuristic evaluations to iterate over our ideas. Then We coded our
            project in React Native. The intense course and project served as
            one of the most useful learning experiences of my undergraduate
            career.
          </p>
        </div>
        <div className="border-2 text-6xl text-background-light">
          <h1 className="font-bold">The Process</h1>
        </div>

        <div className="w-96 overflow-hidden">
          <Image
            src={"/Images/MuseLogin.png"}
            width={1000}
            height={2000}
            alt="Muse Login"
          />
        </div>
      </div>
    </div>
  );
};

export default TurnoPage;
