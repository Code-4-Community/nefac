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
      <h1 className="page-title">{nodeByUri?.title}</h1>

      <div className="page-content-wrapper">
        <div
          className="custom-html-content"
          dangerouslySetInnerHTML={{ __html: nodeByUri?.content ?? "" }}
        />
      </div>
    </div>
  );
};

SingularTemplate.query = gql`
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Post {
        title
        content
      }
      ... on Page {
        title
        content
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
