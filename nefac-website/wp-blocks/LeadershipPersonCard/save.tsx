import { useBlockProps } from '@wordpress/block-editor';

interface LeadershipPersonAttributes {
  name?: string;
  description?: string;
  section?: 'director' | 'executive' | 'board' | 'advisors';
}

export default function save({ attributes }: { attributes: LeadershipPersonAttributes }) {
  const { name, description, section } = attributes;
  return (
    <div {...useBlockProps.save()} data-section={section}>
      <strong>{name}</strong><br />
      <span>{description}</span><br />
      <small>Section: {section}</small>
    </div>
  );
}
