import Sidebar from "./Sidebar";

export interface SidebarItem {
  title: string;
  link: string;
}

interface SidebarWrapper {
  title: string;
  items: SidebarItem[];
  children?: any;
}

// Generic reusable wrapper for Education Initiative pages
export default function SidebarWrapper({
  title,
  items,
  children,
}: SidebarWrapper) {
    return (
        <div className="min-h-screen">
            <div className="text-nefacblue text-[36px] font-bold px-10 pt-10 pb-3 ">
                {title}
            </div>
            <div className="w-full flex flex-row px-8 md:gap-9 text-[20px]">
                <Sidebar items={items} />
                <div className="w-full flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}