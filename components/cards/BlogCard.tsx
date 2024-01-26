import React from "react";
import Image from "next/image";

import { CardDisplay } from "../atoms";

type Props = {
  headerText1: string;
  headerText2: string;
  footerText1: string;
  footerText2: string;
  src: string;
  alt: string;
  mainText: string;
};

export default function BlogCard({
  src,
  alt,
  headerText1,
  headerText2,
  footerText1,
  footerText2,
  mainText,
}: Props) {
  return (
    <div className="w-[24.9375rem] xxl:w-[33.62075rem] h-[32.25rem] xxl:h-[41.49414rem] border-[10px] xxl:border-[13.482px] border-white rounded-2xl xxl:rounded-[1.34819rem]">
      <div className="h-1/2 w-full liner flex justify-center items-start bg-gradientII rounded-t-[0.5rem] xxl:rounded-t-[1.34819rem]">
        <div className="w-[8.49rem] xxl:w-[17.75631rem] h-[8.49rem] xxl:h-[17.75631rem] relative">
          <Image src={src} fill objectFit="cover" alt={alt} />
        </div>
      </div>
      <div className="w-full h-1/2 liner px-6 xxl:px-[2.02rem] pt-8 xxl:pt-[2.7rem] pb-6 xxl:pb-[2.02rem] flex flex-col justify-between items-start rounded-b-[1.34819rem]">
        <div>
          <CardDisplay textI={headerText1} textII={headerText2} />
          <p className="text-[1.8rem] xxl:text-[2.5rem] font-medium leading-[3rem] xxl:leading-[3.125rem]">
            {mainText}
          </p>
        </div>
        <CardDisplay textI={footerText1} textII={footerText2} />
      </div>
    </div>
  );
}
