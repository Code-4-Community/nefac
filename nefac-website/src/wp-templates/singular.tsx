import { gql } from "@apollo/client";
import { FaustTemplate } from "@faustwp/core";
import React from "react";

interface NodeByUri {
  title?: string;
  content?: string;
}

interface SingularData {
  nodeByUri?: NodeByUri | null;
}

const SingularTemplate: FaustTemplate<SingularData> = ({ data }) => {
  const { nodeByUri } = data || {};

  if (!nodeByUri) {
    return <div>Content not found.</div>;
  }

  return (
    <div className="page-wrapper">
      {nodeByUri?.title && (
        <h1 className="text-2xl lg:text-6xl max-w-[90%] lg:max-w-[70%] font-bold text-center py-10">{nodeByUri.title}</h1>
      )}

      <div className="page-content-wrapper">
        <div
          className="custom-html-content"
          dangerouslySetInnerHTML={{ __html: nodeByUri?.content ?? "" }}
        />
      </div>
    </div>
  );
};

// Kept for pages and posts as catch alls for both their titles and content
SingularTemplate.query = gql`
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithContentEditor {
        content
      }
      ... on NodeWithTitle {
        title
      }
    }
  }
`;

SingularTemplate.variables = (seedQuery: { uri?: string }) => {
  return {
    uri: seedQuery?.uri,
  };
};

export default SingularTemplate;
