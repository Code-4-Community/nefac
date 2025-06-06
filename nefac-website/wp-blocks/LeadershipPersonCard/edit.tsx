import React from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, TextareaControl, SelectControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

interface LeadershipPersonAttributes {
  name?: string;
  description?: string;
  section?: 'director' | 'executive' | 'board' | 'advisors';
}

// interface EditProps {
//   attributes: LeadershipPersonAttributes;
//   setAttributes: (attrs: Partial<LeadershipPersonAttributes>) => void;
// }

const Edit: React.FC<BlockEditProps<LeadershipPersonAttributes>> = ({ attributes, setAttributes }) => {
  const { name, description, section = 'executive' } = attributes;

  return (
    <div {...useBlockProps()}>

      <TextControl
        label="Name"
        value={name || ''}
        onChange={(value) => setAttributes({ name: value })}
      />

      <TextControl
        label="Description"
        value={description || ''}
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
        onChange={(value) => setAttributes({ section: value as LeadershipPersonAttributes['section'] })}
      />
    </div>
  );
};

export default Edit;
