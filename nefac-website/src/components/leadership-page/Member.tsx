import React from "react";

export interface MemberProps {
  name: string;
  title?: string;
}

const Member: React.FC<MemberProps> = ({ name, title }) => (
  <div className="p-4 bg-gray-100 w-72 rounded-md">
    <p className="font-inter font-bold">{name}</p>
    {title && <p className="text-md">{title}</p>}
  </div>
);

export default Member;
