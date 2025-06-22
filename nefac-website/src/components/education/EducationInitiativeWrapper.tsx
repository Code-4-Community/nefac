import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface EducationInitiativeWrapperProps {
  children: any;
}

// Single page of education initiative component
// Page will later need to be updated to use the WordPress API to get the actual information
export default function EducationInitiativeWrapper(
  props: EducationInitiativeWrapperProps
) {
  return (
    <div className="min-h-screen pl-10 py-20">
      <h1 className="text-nefacblue text-5xl font-bold pb-9 px-8">
        Education Initiatives
      </h1>
      <div className="w-full flex flex-row gap-9">
        {/* Sidebar component (kept here because the Sidebar is present in every EducationInitiative) */}
        <Sidebar
          items={[
            { title: "30 Minute Skills", link: "/education-initiative" },
            { title: "First Amendment and the Free Press", link: "/education-initiative-abc"},
            { title: "FOI Guide", link: "/education/foi-guide" },
            { title: "NEFAC Mentors", link: "/education-initiative-ghi" },
            { title: "Negri Institute", link: "/education-initiative-jkl" },
          ]}
        />
        <div className="w-full flex flex-col">{props.children}</div>
      </div>
    </div>
  );
}