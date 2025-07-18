import React from 'react';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';
import PersonListAttributes from './PersonListAttributes';

function Edit({ attributes, setAttributes }: BlockEditProps<PersonListAttributes>) {
  const { title = '' } = attributes;

  return (
    <div {...useBlockProps()}>
      <TextControl
        label="Section Title"
        value={title}
        onChange={(value) => setAttributes({ title: value })}
      />

      <div style={{ marginTop: '16px', borderTop: '1px solid #ccc', paddingTop: '12px' }}>
        <InnerBlocks
          allowedBlocks={['nefac/person']}
          orientation="vertical"
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    </div>
  );
}

export default Edit;
