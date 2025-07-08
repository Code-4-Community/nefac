import SidebarWrapper from "../sidebar/SidebarWrapper";

interface EducationInitiativeWrapperProps {
  children?: any;
}

export default function EducationInitiativeWrapper({ children }: EducationInitiativeWrapperProps) {
  return (
    <SidebarWrapper
      title="Education Initiatives"
      items={[
        { title: "30 Minute Skills", link: "/education-initiative" },
        { title: "First Amendment and the Free Press", link: "/education-initiative-abc" },
        { title: "FOI Guide", link: "/education-initiative-def" },
        { title: "NEFAC Mentors", link: "/education/nefac-mentors" },
        { title: "Negri Institute", link: "/education-initiative-jkl" },
      ]}
    >
      {children}
    </SidebarWrapper>
  );
}
