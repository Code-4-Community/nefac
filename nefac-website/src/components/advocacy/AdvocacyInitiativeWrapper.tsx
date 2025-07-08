import SidebarWrapper from "../sidebar/SidebarWrapper";

interface AdvocacyeInitiativeWrapperProps {
  children?: any;
}

export default function AdvocacyInitiativeWrapper({ children }: AdvocacyeInitiativeWrapperProps) {
  return (
    <SidebarWrapper
      title="Advocacy"
      items={[
        { title: "NEFAC Report (spotify link)", link: "https://rss.com/podcasts/nefacreport/" },
        { title: "Commentary and Coverage", link: "/advocacy/commentary-and-coverage" },
        { title: "Statements and Letters", link: "/advocacy/statements-and-letters" },
        { title: "New England First Amendment Awards", link: "/advocacy/new-england-first-amendment-awards" },
        { title: "Sunshine Week", link: "/advocacy/sunshine-week" },
      ]}
    >
      {children}
    </SidebarWrapper>
  );
}
