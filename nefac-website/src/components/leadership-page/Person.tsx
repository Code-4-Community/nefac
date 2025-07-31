import React from "react";

export interface PersonProps {
  name: string;
  role?: string;
}

const Person: React.FC<PersonProps> = ({ name, role }) => (
  <div className="p-4 bg-gray-100 w-72 rounded-md">
    <p className="font-inter font-bold">{name}</p>
    {role && <p className="text-md">{role}</p>}
  </div>
);

export default Person;
