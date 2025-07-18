import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';
import { PersonAttributes } from './PersonAttributes';

// UI in the Gutenberg block editor
function Edit({ attributes, setAttributes }: BlockEditProps<PersonAttributes>) {
  const { name = '', role = '' } = attributes;

  return (
    <div
      {...useBlockProps({
        className: 'person-block',
        style: {
          padding: '1rem',
          border: '1px solid #ccc',
          marginBottom: '1rem',
          borderRadius: '6px',
        },
      })}
    >
      <TextControl
        label="Name"
        value={name}
        onChange={(value) => setAttributes({ name: value })}
      />
      <TextControl
        label="Role"
        value={role}
        onChange={(value) => setAttributes({ role: value })}
      />
    </div>
  );
}

export default Edit;
