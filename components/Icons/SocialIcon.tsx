import React from "react";
import Image from "next/image";

type Props = {
  path: string;
  alt: string;
};

export default function SocialIcon({ path, alt }: Props) {
  return (
    <div className="w-[7.904rem] h-[7.808rem] bg-transparent relative">
      <Image src={path} alt={alt} fill objectFit="contain" />
    </div>
  );
}
