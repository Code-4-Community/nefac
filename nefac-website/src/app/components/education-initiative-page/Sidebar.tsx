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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex sticky top-4 h-fit self-start">
        <div className="flex flex-col px-4 py-4 gap-2 w-[300px]">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setInitiative(i)}
              className={`cursor-pointer px-4 py-2 rounded-r-3xl 
                ${i === initiative ? "bg-gray-100 border-l-4 border-blue-600" : "bg-white"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="w-[3px] h-[300px] bg-gray-200" />
      </div>

      
      {!isOpen && (
        <div className="sticky top-4 h-fit self-start flex md:hidden items-start gap-2 z-40 bg-white">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl font-bold p-2"
          >
            &gt;&gt;&gt;
          </button>
          <div className="w-[3px] h-[300px] bg-gray-200" />
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-4 py-4">
          <button
            onClick={() => setIsOpen(false)}
            className=" flex justify-end text-6xl font-bold text-black pr-5"
          >
            x
          </button>

          <div className="flex flex-col gap-5 mt-20">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => {setInitiative(i)}}
                className={`cursor-pointer px-4 py-2 rounded-r-3xl text-3xl 
                  ${i === initiative ? "bg-gray-100 border-l-4 border-blue-600" : "bg-white"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
