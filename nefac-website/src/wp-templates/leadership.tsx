import { FaustTemplate } from "@faustwp/core";
import { gql } from "@apollo/client";
import NameCard from "../components/leadership-page/Member";
import { groupBy } from 'lodash';


interface LeadershipBlockAttributes {
  name: string;
  description?: string;
  section?: string;
}

interface LeadershipBlock {
  name: string;
  attributes: LeadershipBlockAttributes;
}

const LeadershipTemplate: FaustTemplate<any> = (props) => {
  const page = props.data.page;
  const blocks: LeadershipBlock[] = page?.blocks || [];

  const leadershipBlocks = blocks.filter(
    (block): block is LeadershipBlock =>
      block.name === "nefac/leadership-person-card"
  );

  const grouped: Record<string, LeadershipBlock[]> = groupBy(
    leadershipBlocks,
    (block: LeadershipBlock) => block.attributes.section || "Other"
  );

  return (
    <div>
      <h1>{page.title}</h1>
      {Object.entries(grouped).map(([section, memberBlocks]) => (
        <div key={section} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{section}</h2>
          <div className="flex flex-wrap gap-4">
            {memberBlocks.map((block) => (
              <NameCard
                key={block.attributes.name}
                name={block.attributes.name}
                title={block.attributes.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

LeadershipTemplate.query = gql`
  query GetLeadershipPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      blocks {
        name
        attributes
      }
    }
  }
`;

LeadershipTemplate.variables = (seedQuery: { uri?: string }, ctx: any) => ({
  uri: seedQuery?.uri,
});

export default LeadershipTemplate;
