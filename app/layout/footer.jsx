import Logo from "@/public/icons/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative">
        <div className="min-h-[300px] center  text">
          <div className="container py-[87px]">
            <div className="grid gap-y-[24px] lg:grid-cols-3">
              <div className="center flex-col items-center gap-y-[22px]">
                {/* <div>
                  <Link href="c.iyac123@gmail.com">Gmail</Link>
                </div>
                <div>
                  <Link href="iyacc@yahoo.com">Facebook</Link>
                </div>
                <div>
                  <Link href="linkedin.com/in/iyac-clifford-jay-999071346/">
                    LinkedIn
                  </Link>
                </div> */}
              </div>
              <div className="items-center justify-center lg:flex hidden">
                <Logo className={`size-24`} />
              </div>
              <div className="center flex-col items-center gap-y-[22px]">
                {/* <div>
                  <Link href="c.iyac123@gmail.com">Gmail</Link>
                </div>
                <div>
                  <Link href="iyacc@yahoo.com">Facebook</Link>
                </div>
                <div>
                  <Link href="linkedin.com/in/iyac-clifford-jay-999071346/">
                    LinkedIn
                  </Link>
                </div> */}
              </div>
              <div className="items-center justify-center lg:hidden flex">
                <Logo className={`size-24`} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-end bottom-[12px]">
            @2025 all rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
