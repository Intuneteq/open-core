import React from "react";
import { DotIcon } from "./";

type Props = {
  textI: string;
  textII: string;
};

export default function CardDisplay({ textI, textII }: Props) {
  return (
    <div className="flex justify-start items-center gap-4 xxl:gap-[1.34rem]">
      <p className="text-sm xxl:text-xl font-medium xxl:leading-[1.875rem]">{textI}</p>
      <DotIcon />
      <p className="text-sm xxl:text-xl font-medium xxl:leading-[1.875rem]">{textII}</p>
    </div>
  );
}
