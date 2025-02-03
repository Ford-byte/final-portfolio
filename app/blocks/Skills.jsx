import Html from "@/public/icons/html";
import Javascript from "@/public/icons/javascript";
import Mysql from "@/public/icons/mysql";
import NodeJs from "@/public/icons/node";
import Php from "@/public/icons/php";
import ReactIcon from "@/public/icons/reactIcon";
const techStack = [
  {
    name: "Mysql",
    logo: Mysql, // Reference the imported Email component here
  },
  {
    name: "NodeJs",
    logo: NodeJs, // Reference the imported Github component here
  },
  {
    name: "Html",
    logo: Html, // If you have a logo for ExpressJs, you can use Logo, or leave it empty
  },
  {
    name: "Javascript",
    logo: Javascript, // Same for NextJs
  },
  {
    name: "PHP",
    logo: Php, // If you have a logo for PHP, use it here
  },
  {
    name: "React",
    logo: ReactIcon, // If you have a logo for React, use it here
  },
];

export default function Skills() {
  return (
    <div className="relative text-white center bg-black h-[80vh]">
      <div className="pt-24 w-full flex flex-col items-center h-full max-w-[70vw] gap-y-[24px]">
        <h2 className="text-[44px] text-primary underline">Skills</h2>
        <div className="grid grid-cols-2 w-full justify-center gap-x-[24px] px-[24px]">
          {techStack.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full justify-center items-center border-b-[4px] border-primary py-[12px] gap-x-[12px]">
                <div className="mb-2">
                  {item?.logo && (
                    <item.logo className="h-[20px] w-[20px] text-primary" />
                  )}
                </div>
                <div>{item?.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
