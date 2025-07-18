import React from 'react';
import PersonBlock from '../Person/view';
import PersonListAttributes from './PersonListAttributes';

interface WordPressBlock<T = any> {
  name: string;
  attributes: T;
  innerBlocks?: WordPressBlock[];
}

interface PersonListBlockProps {
  attributes: PersonListAttributes;
  innerBlocks?: WordPressBlock[];
}

const blocks: Record<string, React.FC<any>> = {
  'nefac/person': PersonBlock,
};

const PersonListBlock: React.FC<PersonListBlockProps> = ({ attributes, innerBlocks }) => (
  <div className="person-list-block">
    {attributes.title && (
      <h5 className="person-list-title" style={{ textAlign: 'center' }}>
        <span style={{ backgroundColor: '#ffff00' }}>{attributes.title}</span>
      </h5>
    )}
    <div className="person-list-people">
      {innerBlocks?.map((block, i) => {
        const BlockComponent = blocks[block.name];
        if (!BlockComponent) return null;
        return <BlockComponent {...block} key={i} />;
      })}
    </div>
  </div>
);

export default PersonListBlock;
