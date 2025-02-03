export default function Project({}) {
  return (
    <>
      <div className="relative text-white center bg-black h-screen">
        <div className="pt-24 w-full flex flex-col items-center h-full max-w-[70vw] gap-y-[24px]">
          <h2 className="text-[44px] text-primary underline">Projects</h2>
          <div className="grid grid-cols-2 w-full items-center justify-center gap-x-[24px] gap-y-[24px] px-[24px]">
            <div className="h-[200px]">
              <div className="w-full h-full bg-gray-50 rounded-md animate-pulse"></div>
            </div>
            <div className="h-[200px]">
              <div className="w-full h-full bg-gray-50 rounded-md animate-pulse"></div>
            </div>
            <div className="h-[200px]">
              <div className="w-full h-full bg-gray-50 rounded-md animate-pulse"></div>
            </div>
            <div className="h-[200px]">
              <div className="w-full h-full bg-gray-50 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
