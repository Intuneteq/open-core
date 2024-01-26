import React from "react";
import { DotIcon } from "./";

type Props = {
  textI: string;
  textII: string;
};

export default function CardDisplay({ textI, textII }: Props) {
  return (
    <div className="flex justify-start items-center gap-[1.34rem]">
      <p className="text-xl font-medium leading-[1.875rem]">{textI}</p>
      <DotIcon />
      <p className="text-xl font-medium leading-[1.875rem]">{textII}</p>
    </div>
  );
}
