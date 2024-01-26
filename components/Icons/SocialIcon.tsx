import React from "react";
import Image from "next/image";

type Props = {
  path: string;
  alt: string;
};

export default function SocialIcon({ path, alt }: Props) {
  return (
    <div className="w-[3.59856rem] sm:w-[5.851rem] xxl:w-[7.904rem] h-[3.67294rem] sm:h-[5.97188rem] xxl:h-[7.808rem] bg-transparent relative">
      <Image src={path} alt={alt} fill objectFit="contain" />
    </div>
  );
}
