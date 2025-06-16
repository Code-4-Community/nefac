import { useBlockProps } from '@wordpress/block-editor';
import LeadershipPersonAttributes from './LeadershipPersonAttributes';

export default function save({ attributes }: { attributes: LeadershipPersonAttributes }) {
  const { name = '', description = '', section = 'board' } = attributes;
  
  return (
    <div {...useBlockProps.save()}>
      <div className="leadership-person-card" data-section={section}>
        <h3>{name}</h3>
        <p>{description}</p>
        <span style={{ display: 'none' }}>{section}</span>
      </div>
    </div>
  );
}