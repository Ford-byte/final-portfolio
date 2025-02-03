import BgBanner from "@/public/icons/bgBanner";
import Email from "@/public/icons/email";
import Github from "@/public/icons/github";
import LinkedIn from "@/public/icons/linkedin";
import Logo from "@/public/icons/logo";
export default function Banner() {
  return (
    <div className="relative text-white h-[99vh]">
      <div className="absolute top-0 w-full h-full">
        <BgBanner className={``} />
      </div>
      <div className="absolute top-0 left-0 z-20 center items-center h-screen font-poppins">
        <div className="container">
          <div className="flex gap-12">
            <div className="flex flex-col gap-4 justify-center">
              <section
                id="intro"
                className="text-[72px] flex flex-col gap-2 tracking-[10px] leading-[95px]">
                <span>
                  HI, I'm <span className="text-primary">Clifford</span>,
                </span>
                <span>Web Developer. |</span>
              </section>
              <span id="button" className="">
                <button className="px-[54px] py-[14px] text-[24px] pointer bg-primary text-white w-fit h-fit rounded-lg">
                  Contact
                </button>
              </span>
            </div>
            <div>
              <Logo className={`size-[400px]`} fill={`white`} />
            </div>
          </div>
          <div className="absolute bottom-12 flex gap-4">
            <span>
              <LinkedIn />
            </span>
            <span>
              <Github />
            </span>
            <span>
              <Email />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
