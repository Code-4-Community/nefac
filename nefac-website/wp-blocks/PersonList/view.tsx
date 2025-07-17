import { InnerBlocks } from '@wordpress/block-editor';

interface PersonListBlockProps {
  attributes: {
    title?: string;
  };
}

const PersonListBlock = (props: any) => {
  const { attributes } = props;
  const { title = '' } = attributes || {};
  return (
    <div className="person-list-block">
      {title && (
        <h5 className="person-list-title" style={{ textAlign: 'center' }}>
          <span style={{ backgroundColor: '#ffff00' }}>{title}</span>
        </h5>
      )}
      <div className="person-list-people">
        <InnerBlocks.Content />
      </div>
    </div>
  );
};

export default PersonListBlock;