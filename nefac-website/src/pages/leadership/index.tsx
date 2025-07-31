import React, { useState, useEffect, useRef } from "react";
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
    page(id: "/about/leadership-new-draft", idType: URI) {
      title
      editorBlocks {
        __typename
        name
        ... on NefacPersonList {
          attributes {
            title
          }
          innerBlocks {
            __typename
            name
            ... on NefacPerson {
              attributes {
                name
                role
              }
            }
          }
        }
      }
    }
  }
`;

const LeadershipCard: React.FC<Person> = ({ name, role }) => (
  <div className="p-4 bg-gray-100 w-[200px] md:w-[260px] rounded-md">
    <p className="flex flex-wrap font-bold">{name}</p>
    {role && <p className="text-md">{role}</p>}
  </div>
);

const SectionCard: React.FC<{ title: string; people: Person[] }> = ({
  title,
  people,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(4);

  useEffect(() => {
    // Function to calculate the number of cards per row (NOTE: CHANGE IF LeadershipCard COMPONENT HAS DIMENSIONS MODIFIED)
    const calculateCardsPerRow = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        // Estimate card width based on media query
        const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
        // Card width for dynamic calculations
        const cardWidth = isMediumScreen ? 260 : 200;
        const cardGap = 40; // Gap 10 in pixels (from SectionCard below)
        const fullCardWidth = cardWidth + cardGap;

        const cardsPerRow = Math.max(1, Math.floor(containerWidth / fullCardWidth));
        // Show More for more than 2 rows worth of cards
        setMaxVisible(2*cardsPerRow);
      }
    };

    calculateCardsPerRow();
    window.addEventListener("resize", calculateCardsPerRow);

    return () => window.removeEventListener("resize", calculateCardsPerRow);
  }, []);

  const visiblePeople = expanded ? people : people.slice(0, maxVisible);

  return (
    <div
      id={title.replace(/\s+/g, "-").toLowerCase()}
      className="w-full mb-12 scroll-mt-8"
    >
      <h2 className="text-xl text-[#464758] font-bold mb-4">{title.toUpperCase()}</h2>

      <div className="w-full" ref={containerRef}>
        <div className="flex gap-10 flex-wrap">
          {visiblePeople.map((person, i) => (
            <LeadershipCard key={i} name={person.name} role={person.role} />
          ))}
        </div>

        {people.length > maxVisible && (
          <div className="mt-4 w-fit mx-auto">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer flex items-center gap-2 text-black"
            >
              <span className="text-base">{expanded ? "View Less" : "View More"}</span>
              <FontAwesomeIcon
                icon={expanded ? faChevronUp : faChevronDown}
                className="text-lg"
              />
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
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    if (data?.page?.editorBlocks) {
      const leadershipBlocks = data.page.editorBlocks.filter(
        (block: any) => block.name === "nefac/person-list"
      );

      const sections: Section[] = leadershipBlocks.map((block: any, index: number) => {
        const people: Person[] = (block.innerBlocks || [])
          .filter((innerBlock: any) => innerBlock.name === "nefac/person")
          .map((innerBlock: any) => ({
            name: innerBlock.attributes.name,
            role: innerBlock.attributes.role,
          }));

        return {
          key: `section-${index}`,
          title: block.attributes.title,
          people,
        };
      });

      setSections(sections);

      if (sections.length > 0) {
        setActiveTab(sections[0].title);
      }
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error || !data?.page) return <div>Error loading leadership data.</div>;

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
