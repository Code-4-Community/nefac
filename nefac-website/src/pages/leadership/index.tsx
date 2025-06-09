import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { groupBy } from "lodash";
import { WordPressBlocksViewer } from "@faustwp/blocks";

const SECTION_LABELS: Record<string, string> = {
  executive: "Executive Committee",
  board: "Board of Directors",
  advisors: "Advisors",
  director: "Executive Director",
};

const TABS = ["executive", "board", "advisors", "director"];

const GET_LEADERSHIP_PAGE = gql`
  query GetLeadershipPage($uri: ID!) {
    page(id: $uri, idType: URI) {
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

const LeadershipPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_LEADERSHIP_PAGE, {
    variables: { uri: "/leadership" },
  });

  console.log("Data:" + data);
  const [activeTab, setActiveTab] = useState("executive");

  if (loading) return <div>Loading...</div>;
  if (error || !data?.page) return <div>Error loading leadership data.</div>;

  // Only use blocks of your custom type
  const leadershipBlocks = (data.page.editorBlocks || []).filter(
    (block: any) => block.__typename === "NefacLeadershipPersonCard"
  );
  const grouped = groupBy(
    leadershipBlocks,
    (block: any) => block.attributes.section || "executive"
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
        <h2 className="text-xl text-[#464758] font-bold mb-4">
          {SECTION_LABELS[activeTab]?.toUpperCase() || ""}
        </h2>
        <div className="flex gap-8 flex-wrap">
          <WordPressBlocksViewer blocks={grouped[activeTab] || []} />
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
