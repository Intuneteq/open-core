import React, { ReactNode } from "react";
import { CardDisplay } from "../atoms";

type Props = {
  children: ReactNode;
  headerText1: string;
  headerText2: string;
  footerText1: string;
  footerText2: string;
  mainText: string;
};

export default function NoticeCard({
  children,
  headerText1,
  headerText2,
  footerText1,
  footerText2,
  mainText,
}: Props) {
  return (
    <div className="border-[10px] border-white bg-grey w-full shadow-box1 h-[27.5625rem] xxl:h-[36.8rem] rounded-[1.5rem] xxl:rounded-[2.00319rem] flex justify-center items-center">
      <div className="flex-1 liner relative h-full w-1/2 rounded-l-[2.00319rem]">
        {children}
      </div>
      <div className="flex-1 liner w-1/2 flex flex-col justify-start items-center">
        <div className=" max-w-[26.227rem] xxl:max-w-[36.66038rem] mx-auto liner">
          <CardDisplay textI={headerText1} textII={headerText2} />
          <p className="text-blackII text-[2.5rem] xxl:text-[3.5rem] font-medium leading-[3.3125rem] xxl:leading-[5rem] mt-[1.25rem] xxl:mt-[1.67rem] mb-[6.06rem] xxl:mb-[8.1rem]">
            {mainText}
          </p>
          <CardDisplay textI={footerText1} textII={footerText2} />
        </div>
      </div>
    </div>
  );
}
