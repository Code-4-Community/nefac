import { useBlockProps } from '@wordpress/block-editor';
import { PersonAttributes } from './PersonAttributes';

// How it appears in the actual website UI
export default function save({ attributes }: { attributes: PersonAttributes }) {
  const blockProps = useBlockProps.save()
  const { name, role } = attributes;

  return (
    <div {...blockProps} className="person">
      <p style={{ textAlign: 'center' }}>
        <strong>{name}</strong>
        <br />
        {role}
      </p>
    </div>
  );
}
