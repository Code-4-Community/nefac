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
  // Used to control sliding in and out
  const [isOpen, setIsOpen] = useState(false);
  // Use to mount sidebar
  const [visible, setVisible] = useState(false);

  const openSidebar = () => {
    setVisible(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setTimeout(() => setVisible(false), 500);
  };

  // Locks the scroll when the navbar is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <>
      <div className="invisible w-0 md:visible md:w-[300px] sticky top-4 h-fit self-start">
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

      {!visible && (
        <button
          onClick={openSidebar}
          className="fixed bottom-5 left-0 z-50 bg-gray-200 w-[60px] h-[60px] text-2xl font-bold rounded-r-md shadow-md flex items-center justify-center md:hidden"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      )}

      {visible && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white px-4 py-4 flex flex-col z-50 md:hidden
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <button
            onClick={closeSidebar}
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
                    closeSidebar();
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
