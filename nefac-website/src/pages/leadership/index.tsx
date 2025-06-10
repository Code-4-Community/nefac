import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { groupBy } from "lodash";

const SECTION_LABELS: Record<string, string> = {
  executive: "Executive Committee",
  board: "Board of Directors",
  advisors: "Advisors",
  director: "Executive Director",
};

const TABS = ["executive", "board", "advisors", "director"];

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
const LeadershipCard: React.FC<{ name: string; description: string; section: string}> = ({ name, description, section }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-600 text-sm mb-2">{description}</p>
    <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
      {SECTION_LABELS[section] || section}
    </span>
  </div>
);

const SectionCard: React.FC<{ sectionKey: string; sectionTitle: string;  members: any[]}> = ({ sectionKey, sectionTitle, members }) => (
  <div id={sectionKey} className="w-full mb-12 scroll-mt-8">
    <h2 className="text-xl text-[#464758] font-bold mb-4">
      {sectionTitle.toUpperCase()}
    </h2>
    <div className="flex gap-8 flex-wrap">
      {members.map((block: any, index: number) => (
        <LeadershipCard
          key={index}
          name={block.attributes.name}
          description={block.attributes.description}
          section={block.attributes.section}
        />
      ))}
    </div>
  </div>
);

const LeadershipPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_LEADERSHIP_PAGE);

  const [activeTab, setActiveTab] = useState("board");

  if (loading) return <div>Loading...</div>;
  if (error || !data?.page) return <div>Error loading leadership data.</div>;

  console.log("All block names:", data.page.editorBlocks.map((block: any) => ({
    name: block.name,
    typename: block.__typename
  })));

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
    <div className="flex p-8 gap-8">
      <div className="w-269px flex flex-col space-y-2">
        {TABS.map((key) => (
          <div
            key={key}
            onClick={() => setActiveTab(key)}
            className={`p-3 cursor-pointer font-semibold border-l-4 ${
              activeTab === key
                ? "border-black bg-white text-black"
                : "border-transparent bg-white text-black hover:bg-gray-200"
            }`}
          >
            {SECTION_LABELS[key]}
          </div>
        ))}
      </div>

      <div className="flex-1">
        {TABS.map((key) => (
          <SectionCard
            key={key}
            sectionKey={key}
            sectionTitle={SECTION_LABELS[key]}
            members={grouped[key] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadershipPage;