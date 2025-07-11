import React, { useState } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, Button, PanelBody, PanelRow } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';
import PersonListAttributes, { Person } from './PersonListAttributes';

function Edit(props: BlockEditProps<PersonListAttributes>) {
  const { attributes, setAttributes } = props;
  const { title = '', people = [] } = attributes;

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');

  const addPerson = () => {
    if (!newName || !newRole) return;

    const updatedPeople = [...people, { name: newName, role: newRole }];
    setAttributes({ people: updatedPeople });

    setNewName('');
    setNewRole('');
  };

  const removePerson = (indexToRemove: number) => {
    const updatedPeople = people.filter((_, i) => i !== indexToRemove);
    setAttributes({ people: updatedPeople });
  };

  return (
    <div {...useBlockProps()}>
      <TextControl
        label="Section Title"
        value={title}
        onChange={(value) => setAttributes({ title: value })}
      />

      <div>
        <strong>People List:</strong>
        {people.length === 0 && <p>No people added yet.</p>}
        {people.map((person, index) => (
          <PanelBody
            key={index}
            title={`${person.name} ${person.role}`}
            initialOpen={false}
          >
            <PanelRow>
              <Button
                variant="secondary"
                onClick={() => removePerson(index)}
              >
                Remove
              </Button>
            </PanelRow>
          </PanelBody>
        ))}
      </div>

      <div style={{ marginTop: '8px', borderTop: '1px solid #ccc', paddingTop: '4px' }}>
        <h4>Add a New Person</h4>
        <TextControl
          label="Name"
          value={newName}
          onChange={(value) => setNewName(value)}
        />
        <TextControl
          label="Role"
          value={newRole}
          onChange={(value) => setNewRole(value)}
        />
        <Button
          variant="primary"
          onClick={addPerson}
          style={{ marginTop: '2px' }}
        >
          Add Person
        </Button>
      </div>
    </div>
  );
}

export default Edit;
