"use client";
import Nav from "@/components/TimelineNav";
import Image from "next/image";

const MusePage = () => {
  return (
    <div className="min-h-[300vh] bg-background-black">
      <Nav />
      <div className="pt-52 px-56">
        <div
          className=" flex md:flex-row items-center
        md:gap-20"
        >
          <div className="relative w-64 h-64 overflow-hidden rounded-lg ">
            <Image
              src={"/Images/turno.svg"}
              alt="hell"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>

          {/* Name */}
          <div className="font-Poppins md:self-center w-[34rem]">
            <h1
              className="text-6xl text-background-light font-bold tracking-wide"
              style={{
                lineHeight: 1.2,
              }}
            >
              Muse
            </h1>
            <h3 className="text-text-gray text-xl">
              {" "}
              Founder / Frontend Developer / UI Designer{" "}
            </h3>
          </div>
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

export default MusePage;
