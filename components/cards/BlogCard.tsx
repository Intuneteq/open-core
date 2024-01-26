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
    <div className="w-[33.62075rem] h-[41.49414rem] border-[13.482px] border-white rounded-[1.34819rem]">
      <div className="h-1/2 w-full liner flex justify-center items-start bg-gradientII rounded-t-[1.34819rem]">
        <div className="w-[17.75631rem] h-[17.75631rem] relative">
          <Image src={src} fill objectFit="cover" alt={alt} />
        </div>
      </div>
      <div className="w-full h-1/2 liner px-[2.02rem] pt-[2.7rem] pb-[2.02rem] flex flex-col justify-between items-start rounded-b-[1.34819rem]">
        <div>
          <CardDisplay textI={headerText1} textII={headerText2} />
          <p className="text-[2.5rem] font-medium leading-[3.125rem]">
            {mainText}
          </p>
        </div>
        <CardDisplay textI={footerText1} textII={footerText2} />
      </div>
    </div>
  );
}
