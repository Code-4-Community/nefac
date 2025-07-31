import React, { useState } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';
import { PersonAttributes } from './PersonAttributes';
import { Icon } from '@wordpress/icons';
import { chevronDown, chevronRight } from '@wordpress/icons';

function Edit({ attributes, setAttributes }: BlockEditProps<PersonAttributes>) {
  const { name = '', role = '' } = attributes;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      {...useBlockProps({
        className: 'person-block',
        style: {
          padding: '0.5rem 0.75rem',
          border: '1px solid #ccc',
          marginBottom: '0.5rem',
          borderRadius: '6px',
        },
      })}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>
          {name} {role ? ` • ${role}` : ''}
        </p>
        <Icon icon={isOpen ? chevronDown : chevronRight} />
      </div>

      {isOpen && (
        <div style={{ marginTop: '1rem' }}>
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
      )}
    </div>
  );
}

export default Edit;
