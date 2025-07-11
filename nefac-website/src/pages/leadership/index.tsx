import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Person = {
  name: string;
  role: string;
};

type Section = {
  key: string;
  title: string;
  people: Person[];
};

const GET_LEADERSHIP_PAGE = gql`
  query GetLeadershipPage {
    page(id: "/about/leadership-new-draft/", idType: URI) {
      title
      editorBlocks {
        __typename
        name
        ... on NefacPersonList {
          attributes {
            title
            people
          }
        }
      }
    }
  }
`;

// Custom component to render individual leadership cards
const LeadershipCard: React.FC<Person> = ({ name, role }) => {
  return (
    <div className="p-4 bg-gray-100 w-[200px] md:w-[260px] rounded-md">
      <p className="flex flex-wrap font-bold">{name}</p>
      {role && <p className="text-md">{role}</p>}
    </div>
  );
};


const SectionCard: React.FC<{ title: string; people: Person[] }> = ({ title, people }) => {
  const [expanded, setExpanded] = useState(false);
  // How many members we want to display by default
  const maxVisible = 3;
  const visiblePeople = expanded ? people : people.slice(0, maxVisible);

  return (
    <div id={title.replace(/\s+/g, "-").toLowerCase()} className="w-full mb-12 scroll-mt-8">
      <h2 className="text-xl text-[#464758] font-bold mb-4">{title.toUpperCase()}</h2>

      <div className="w-full">
        <div className="flex gap-10 flex-wrap">
          {visiblePeople.map((person, index) => (
            <LeadershipCard key={index} name={person.name} role={person.role} />
          ))}
        </div>

        {people.length > maxVisible && (
          <div className="mt-4 w-fit mx-auto">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer flex items-center gap-2 text-black"
            >
              <span className="text-base">{expanded ? "View Less" : "View More"}</span>
              <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const LeadershipPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_LEADERSHIP_PAGE, {
    fetchPolicy: "no-cache",
  });

  const [activeTab, setActiveTab] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error || !data?.page) return <div>Error loading leadership data.</div>;

  // Filter for your custom blocks
  const leadershipBlocks = (data.page.editorBlocks || []).filter(
    (block: any) => block.name === "nefac/person-list"
  );

  // Parse the people in JSON format
  const sections: Section[] = leadershipBlocks.map((block: any, index: number) => {
    const rawPeople = block.attributes?.people || [];
    const parsedPeople: Person[] = rawPeople
      .map((p: string) => {
        try {
          return JSON.parse(p) as Person;
        } catch {
          return null;
        }
      })
      .filter((p: any): p is Person => p !== null);

    return {
      key: `section-${index}`,
      title: block.attributes.title,
      people: parsedPeople,
    };
  });

  // Set default tab to first title
  if (!activeTab && sections.length > 0) {
    setActiveTab(sections[0].title);
  }

  return (
    <div className="flex p-4 gap-8 md:gap-10">
      <div className="sticky top-8 self-start flex flex-col space-y-2">
        {sections.map((section) => (
          <a
            key={section.key}
            href={`#${section.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div
              onClick={() => setActiveTab(section.title)}
              className={`p-3 cursor-pointer font-semibold border-l-4 text-xs sm:text-base ${
                activeTab === section.title
                  ? "border-black bg-white text-black"
                  : "border-transparent bg-white text-black hover:bg-gray-200"
              }`}
            >
              {section.title}
            </div>
          </a>
        ))}
      </div>

      <div className="flex-1">
        {sections.map((section, index) => (
          <React.Fragment key={section.key}>
            <SectionCard title={section.title} people={section.people} />
            {index < sections.length - 1 && (
              <div
                className="my-5 w-full h-1"
                style={{ backgroundColor: "#c4c4c4" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LeadershipPage;
