import React from 'react';
import { gql } from '@apollo/client';
import NameCard, { NameCardProps } from '../../src/components/leadership-page/NameCard';

interface LeadershipPersonBlockProps {
  attributes: NameCardProps & {
    section?: string;
  };
}

export const LeadershipPersonBlock: React.FC<LeadershipPersonBlockProps> = ({ attributes }) => (
  <NameCard {...attributes} />
);

export const fragments = gql`
  fragment LeadershipPersonFragment on LeadershipPerson {
    attributes {
      name
      role
      description
      section
    }
  }
`;
