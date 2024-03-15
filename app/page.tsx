import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen border-2 border-black">
      <div className="flex bg-background-dark h-[66vh] w-full justify-center align-center">
        {/* Info Grid */}
        <div className="mx-96 my-10 border-2 border-black flex">
          {/* Left Side */}
          <div className="flex justify-center items-center ml-4 w-2/3">
            <div className="flex flex-col gap-5 border-black border-2 p-5">
              <h1 className="font-bold text-text-dark text-7xl border-2">
                Hi, I'm{" "}
                <span className="text-background-light">Pedro Civita</span> I
                blurb, blurb, and blurb.
              </h1>
              <div className="w-24 h-2 bg-purple my-4"></div>
              <h2 className="text-text-sub text-2xl border-2">
                I’m a Stanford Masters Student Studying
                <span className="text-text-dark font-bold">
                  {" "}
                  Human Computer Interaction{" "}
                </span>
                and I love it a lot lot lot lot lot it's just the best thing
                ever.
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center border-2 w-1/3">
            <div className="rounded-full overflow-hidden border-8 border-background-light ">
              <img
                src="/profilePic.jpg"
                alt="Person's Name"
                className="object-cover"
                style={{
                  height: undefined,
                  aspectRatio: "1 / 1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-light h-1/2 w-full">
        <h1>Next </h1>
      </div>
    </div>
  );
}
