import { useBlockProps } from '@wordpress/block-editor';
import PersonListAttributes from './PersonListAttributes';

export default function save({ attributes }: { attributes: PersonListAttributes }) {
  const { title = '', people = [] } = attributes;

  return (
    <div {...useBlockProps.save()}>
      {people.map((person, index) => (
        <div key={index} data-section={title}>
          <p style={{ textAlign: 'center' }}>
            <strong>{person.name}</strong>
            <br />
            {person.role}
          </p>
          <span style={{ display: 'none' }}>{title}</span>
        </div>
      ))}
    </div>
  );
}
