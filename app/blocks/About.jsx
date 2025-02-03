import Image from "next/image";

export default function About({}) {
  return (
    <>
      <div className="relative text-white center bg-black h-screen">
        <div className=" pt-24 w-full flex flex-col items-center h-full max-w-[70vw] gap-y-[24px]">
          <h2 className="text-[44px] text-primary underline">About</h2>
          {/*  */}
          <div className="grid grid-cols-2 w-full h-[400px] ">
            <div className="h-full w-full">
              <Image src={`/profile.png`} alt="alt" width={1280} height={800} className="h-[400px] object-cover rounded-3xl" />
            </div>
            <div className="flex flex-col gap-y-[24px] max-w-[500px] p-[24px]">
              <h2 className="text-[32px]">Hello</h2>
              <p className=" line-clamp-[9] font-[400]">
                Hard working software engineering student from Zenica in my
                third and final year. I'm also a former Pharmacy technician and
                a future full stack developer. I’ve found my passion in web
                development. I love spending time coding and encountering new
                challenges. I’m highly adaptable to new challenges and projects.
                I'm a Junior Scholar at Bosnia and Herzegovina Futures
                foundation and that is the best thing that happened to me.
              </p>
              <div className="flex justify-end">
                <div className="px-[15px] py-[16px] bg-primary font-[700] w-fit rounded-lg pointer">
                  DOWNLOAD CV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
