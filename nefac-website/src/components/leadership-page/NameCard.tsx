import React from "react";

interface NameCardProps {
  name: string
  title? : string;
}

const NameCard: React.FC<NameCardProps> = ({ name, title }) => {
  return (
    <div className="flex flex-col box-border w-[367px] h-[83px] bg-[#EBEBEB] border-1 rounded-lg">
        <h1 className="text-sm text-left pl-[27px] flex flex-shrink font-bold pt-[18px] pr-3"> {name} </h1>
        <h1 className="text-sm text-left pl-[27px] flex flex-shrink pb-[18px]"> {title} </h1>
    </div>
  )};

export default NameCard;