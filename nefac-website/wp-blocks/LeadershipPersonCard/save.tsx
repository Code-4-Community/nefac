import { useBlockProps } from '@wordpress/block-editor';

interface LeadershipPersonAttributes {
  name?: string;
  description?: string;
  section?: 'director' | 'executive' | 'board' | 'advisors';
}

// How the blocks show up on the 
export default function save({ attributes }: { attributes: LeadershipPersonAttributes }) {
  const { name = '', description = '', section = 'board' } = attributes;
  
  return (
    <div {...useBlockProps.save()}>
      <div className="leadership-person-card" data-section={section}>
        <h3 className="person-name">{name}</h3>
        <p className="person-description">{description}</p>
        <span className="person-section" style={{ display: 'none' }}>{section}</span>
      </div>
    </div>
  );
}