import { useState, useEffect } from "react";
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate && !isOpen) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [animate, isOpen]);

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
                  ${isActive ? "bg-gray-100 border-l-4 border-blue-600" : "bg-white"}`}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="w-[3px] h-[300px] bg-gray-200" />
      </div>

      {!isOpen && !animate && (
        <div className="sticky top-4 self-start flex md:hidden items-start z-40 bg-white">
          <button
            onClick={() => {
              setIsOpen(true);
              setAnimate(true);
            }}
            className="fixed bottom-20 left-0 z-50 bg-gray-200 w-[60px] h-[60px] text-2xl font-bold rounded-r-md shadow-md flex items-center justify-center animate-[slideInLeft_0.4s_ease-out_forwards]"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}

      {(isOpen || animate) && (
        <div
          className={`bg-transparent fixed inset-0 z-50 flex flex-col px-4 py-4 md:hidden
            ${isOpen ? "sidebar-slide-in" : "sidebar-slide-out"}`}
        >
          <button
            onClick={() => {
              setIsOpen(false);
              setAnimate(true);
            }}
            className="fixed top-5 right-5 w-[60px] h-[60px] 
              text-2xl font-bold flex items-center justify-center"
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
                    setAnimate(true);
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
