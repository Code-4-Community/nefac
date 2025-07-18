import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import PersonListAttributes from './PersonListAttributes';

export default function save({ attributes }: { attributes: PersonListAttributes }) {
  const { title = '' } = attributes;

  return (
    <div {...useBlockProps.save()}>
      {title &&         
        <h5
          className="person-list-title"
          style={{ textAlign: 'center' }}
        >
          <span style= {{ backgroundColor: '#ffff00' }}>{title}</span>
        </h5>}
      <div className="person-list-people">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
