import React from "react";
import Member from "../../src/components/leadership-page/Member";

export interface LeadershipPersonBlockProps {
  attributes: {
    name: string;
    description?: string;
    section?: string;
  };
}

export const LeadershipPersonBlock: React.FC<LeadershipPersonBlockProps> = ({ attributes }) => (
  <Member name={attributes.name} title={attributes.description} />
);
