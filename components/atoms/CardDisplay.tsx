import React from "react";
import { DotIcon } from "../Icons";

type Props = {
  textI: string;
  textII: string;
  left?: boolean;
};

export default function CardDisplay({ textI, textII, left = false }: Props) {
  return (
    <div
      className={`flex sm:justify-start ${
        !left ? "justify-center" : ""
      } items-center gap-4 xxl:gap-[1.34rem]`}
    >
      <p className="text-sm xxl:text-xl font-medium xxl:leading-[1.875rem]">
        {textI}
      </p>
      <DotIcon />
      <p className="text-sm xxl:text-xl font-medium xxl:leading-[1.875rem]">
        {textII}
      </p>
    </div>
  );
}
