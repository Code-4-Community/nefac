import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { groupBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const section_map: Record<string, string> = {
  executive: "Executive Committee",
  board: "Board of Directors",
  advisors: "Advisors",
};

const tabs = ["executive", "board", "advisors"];

// Placeholder query till live site is working
const GET_LEADERSHIP_PAGE = gql`
  query GetLeadershipPage {
    page(id: "/about/leadership-new-draft/", idType: URI) {
      title
      editorBlocks {
        __typename
        name
        ... on NefacLeadershipPersonCard {
          attributes {
            name
            description
            section
          }
        }
      }
    }
  }
`;


// QUERY FOR WHEN WE SWITCH TO LCOAL WORDPRESS SITE AND THE WP BLOCK EDITOR IS ATTACHED TO THERE

// const GET_LEADERSHIP_PAGE = gql`
//   query GetLeadershipPage($uri: ID!) {
//     page(id: $uri, idType: URI) {
//       title
//       editorBlocks {
//         __typename
//         name
//         ... on NefacLeadershipPersonCard {
//           attributes {
//             name
//             description
//             section
//           }
//         }
//       }
//     }
//   }
// `;


// Custom component to render individual leadership cards
const LeadershipCard: React.FC<{ name: string; description: string; section: string}> = ({ name, description, section }) => {
  return (
      <div className="p-4 bg-gray-100 w-72 rounded-md">
        <p className="font-inter font-bold">{name}</p>
        {description && <p className="text-md">{description}</p>}
      </div>
    );
};

const SectionCard: React.FC<{ sectionKey: string; sectionTitle: string; members: any[] }> = ({
  sectionKey,
  sectionTitle,
  members,
}) => {
  const [expanded, setExpanded] = useState(false);
  // How many members we want to display by default
  const maxVisible = 3;
  const visibleMembers = expanded ? members : members.slice(0, maxVisible);

  return (
    <div id={sectionKey} className="w-full mb-12 scroll-mt-8">
      <h2 className="text-xl text-[#464758] font-bold mb-4">
        {sectionTitle.toUpperCase()}
      </h2>

      <div className="w-full">
        <div className="flex gap-8 flex-wrap">
          {visibleMembers.map((block: any, index: number) => (
            <LeadershipCard
              key={index}
              name={block.attributes.name}
              description={block.attributes.description}
              section={block.attributes.section}
            />
          ))}
        </div>

        {members.length > maxVisible && (
          <div className="mt-4 w-fit mx-auto">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer flex items-center gap-2 text-black"
            >
              <span className="text-base">
                {expanded ? "View Less" : "View More"}
              </span>
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
    fetchPolicy: "no-cache"
  })

  const [activeTab, setActiveTab] = useState("executive");

  if (loading) return <div>Loading...</div>;
  if (error || !data?.page) return <div>Error loading leadership data.</div>;

  // Filter for your custom blocks
  const leadershipBlocks = (data.page.editorBlocks || []).filter(
    (block: any) => block.name === "nefac/leadership-person-card"
  );

  console.log("Leadership blocks:", leadershipBlocks);

  const grouped = groupBy(
    leadershipBlocks,
    (block: any) => block.attributes?.section || "executive"
  );

  return (
    <div className="flex p-8 gap-10">
      <div className="sticky top-8 self-start flex flex-col space-y-2">
        {tabs.map((key) => (
          <a key={key} href={`#${key}`}>
            <div
              onClick={() => setActiveTab(key)}
              className={`p-3 cursor-pointer font-semibold border-l-4 text-xs sm:text-base ${
                activeTab === key
                  ? "border-black bg-white text-black"
                  : "border-transparent bg-white text-black hover:bg-gray-200"
              }`}
            >
              {section_map[key]}
            </div>
          </a>
        ))}
      </div>

      <div className="flex-1">
        {tabs.map((key, index) => (
          <>
            <SectionCard
              key={key}
              sectionKey={key}
              sectionTitle={section_map[key]}
              members={grouped[key] || []}
            />
            {index < tabs.length - 1 && (
              <div className="my-5 w-full h-1" style={{ backgroundColor: "#c4c4c4" }} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default LeadershipPage;