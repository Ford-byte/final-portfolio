import Logo from "@/public/icons/logo";

export default function Footer() {
  return (
    <>
      <footer className="relative">
        <div className="min-h-[300px] center bg-[#14191B] text-white">
          <div className="container py-[87px]">
            <div className="grid grid-cols-3">
              <div className="center flex-col items-center gap-y-[22px]">
                <div>2</div>
                <div>2</div>
                <div>2</div>
              </div>
              <div className="center items-center">
                <Logo className={`size-24`} fill={`white`}/>
              </div>
              <div className="center flex-col items-center gap-y-[22px]">
                <div>2</div>
                <div>2</div>
                <div>2</div>
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
