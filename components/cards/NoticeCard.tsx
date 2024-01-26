import React, { ReactNode } from "react";
import { CardDisplay } from "../atoms";
import Image from "next/image";

type Props = {
  children: ReactNode;
  headerText1: string;
  headerText2: string;
  footerText1: string;
  footerText2: string;
  mainText: string;
  showImg?: boolean;
};

export default function NoticeCard({
  children,
  headerText1,
  headerText2,
  footerText1,
  footerText2,
  mainText,
  showImg = false,
}: Props) {
  return (
    <div className="border-[10px] border-white bg-grey w-full shadow-box1 h-[36rem] sm:h-[27.5625rem] xxl:h-[36.8rem] rounded-2xl sm:rounded-[1.5rem] xxl:rounded-[2.00319rem] flex flex-col sm:flex-row justify-center items-center">
      <div className="flex-1 relative h-[22.66rem] sm:h-full w-full sm:w-1/2 rounded-l-none sm:rounded-l-[2.00319rem] rounded-t-[2.00319rem] sm:rounded-t-none">
        {children}
      </div>
      <div className="flex-1 w-full sm:w-1/2 h-[17.125rem] sm:h-0 flex flex-col sm:flex-row justify-start items-center">
        <div className=" max-w-[26.227rem] xxl:max-w-[36.66038rem] mx-auto px-4 sm:px-0 pt-[2.54rem] sm:pt-none">
          <CardDisplay textI={headerText1} textII={headerText2} />
          <p className="text-blackII text-center sm:text-left text-[2rem] sm:text-[2.5rem] xxl:text-[3.5rem] font-medium leading-[3rem] sm:leading-[3.3125rem] xxl:leading-[5rem] sm:mt-[1.25rem] xxl:mt-[1.67rem] mb-10 sm:mb-[6.06rem] xxl:mb-[8.1rem]">
            {mainText}
          </p>
          <CardDisplay textI={footerText1} textII={footerText2} />
        </div>
      </div>
      {showImg ? (
        <div className="w-full h-[6.71rem] sm:hidden relative rotate-180">
          <Image
            src={"/frames.svg"}
            alt="header image"
            fill
            objectFit="cover"
          />
        </div>
      ) : null}
    </div>
  );
}
