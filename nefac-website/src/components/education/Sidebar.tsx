import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarItem {
  title: string;
  link: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex sticky top-4 h-fit self-start">
        <div className="flex flex-col px-4 py-4 gap-2 w-[300px]">
          {items.map((item, i) => {
            const isActive = pathname === item.link;
            return (
              <div
                key={i}
                onClick={() => router.push(item.link)}
                className={`cursor-pointer px-4 py-2 rounded-r-3xl 
                  ${isActive ? "bg-gray-100 border-l-4 border-nefacblue" : "bg-white"}`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="w-[3px] h-[300px] bg-gray-200" />
      </div>

      {!isOpen && (
        <div className="sticky top-4 h-fit self-start flex md:hidden items-start gap-2 z-40 bg-white">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl font-bold p-2"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="w-[3px] h-[300px] bg-gray-200" />
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-4 py-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex justify-end text-6xl font-bold text-black pr-5"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div className="flex flex-col gap-5 mt-20">
            {items.map((item, i) => {
              const isActive = pathname === item.link;
              return (
                <div
                  key={i}
                  onClick={() => {
                    router.push(item.link);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 rounded-r-3xl text-3xl 
                    ${isActive ? "bg-gray-100 border-l-4 border-blue-600" : "bg-white"}`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
