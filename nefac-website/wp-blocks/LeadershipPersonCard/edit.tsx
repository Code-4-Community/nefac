import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, TextareaControl, SelectControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

interface LeadershipPersonAttributes {
  name?: string;
  description?: string;
  section?: 'director' | 'executive' | 'board' | 'advisors';
}

// Edit function to be used in the WP block editor
function Edit(props: BlockEditProps<LeadershipPersonAttributes>) {
  const { attributes, setAttributes } = props;
  const { name = '', description = '', section = 'executive' } = attributes;

  return (
    <div {...useBlockProps()}>
      <TextControl
        label="Name"
        value={name}
        onChange={(value) => setAttributes({ name: value })}
      />

      <TextareaControl
        label="Description"
        value={description}
        onChange={(value) => setAttributes({ description: value })}
      />

      <SelectControl
        label="Section"
        value={section}
        options={[
          { label: 'Executive Director', value: 'director' },
          { label: 'Executive Committee', value: 'executive' },
          { label: 'Board of Directors', value: 'board' },
          { label: 'Advisors', value: 'advisors' }
        ]}
        onChange={(value) =>
          setAttributes({ section: value as LeadershipPersonAttributes['section'] })
        }
      />
    </div>
  );
}

export default Edit;
