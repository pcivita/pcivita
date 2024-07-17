// app/muse.tsx
"use client";
import Nav from "@/components/TimelineNav";
import Image from "next/image";
const MusePage = () => {
  return (
    <div className="min-h-[300vh] bg-background-black">
      <Nav />
      <h1>Welcome to the Muse Page</h1>
      <p>This is the content of the Muse page.</p>
      <div className="w-96 overflow-hidden">
        <Image
          src={"/Images/MuseLogin.png"}
          width={1000}
          height={2000}
          alt="Muse Login"
        />
      </div>
    </div>
  );
};

export default MusePage;
