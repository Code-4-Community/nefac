import { useBlockProps } from '@wordpress/block-editor';
import LeadershipPersonAttributes from './LeadershipPersonAttributes';

export default function save({ attributes }: { attributes: LeadershipPersonAttributes }) {
  const { name = '', description = '', section = 'board' } = attributes;
  
  return (
    <div {...useBlockProps.save()}>
      <div data-section={section}>
        <p style={{ textAlign: 'center' }}>
          <strong>{name}</strong>
          <br />
          {description}
        </p>
        <span style={{ display: 'none' }}>{section}</span>
      </div>
    </div>
  );
}