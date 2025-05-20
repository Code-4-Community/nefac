import { useState } from "react";

const items: string[] = [
  "30-Minute Skill",
  "First Amendment & Free Press",
  "FOI Guide",
  "NEFAC Mentors",
  "Negri Institute",
];

export default function Sidebar() {
  const [initiative, setInitiative] = useState(0);

  return (
    <div className="sticky top-4 flex shrink-0 py-2 h-fit self-start">
      <div className="flex flex-col px-4 py-4 gap-2 w-[300px]">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setInitiative(i)}
            className={`cursor-pointer px-4 py-2 rounded-r-3xl transition 
              ${i === initiative ? "bg-gray-100 border-l-4 border-blue-600" : "bg-white"}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-[3px] h-[300px] bg-gray-200" />
    </div>
  );
}
