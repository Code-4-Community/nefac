import Sidebar from "./Sidebar";

export interface SidebarItem {
  title: string;
  link: string;
}

interface EducationInitiativeWrapperProps {
  title: string;
  items: SidebarItem[];
  children?: React.ReactNode;
}

// Generic reusable wrapper for Education Initiative pages
export default function SidebarWrapper({
  title,
  items,
  children,
}: EducationInitiativeWrapperProps) {
    return (
        <div className="min-h-screen">
            <div className="text-nefacblue text-[36px] font-bold px-8">
                {title}
            </div>
            <div className="w-full flex flex-row px-8 pt-4">
                <Sidebar items={items} />
                <div className="w-full flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}