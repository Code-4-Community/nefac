import React from 'react';

interface PersonBlockProps {
  attributes: {
    name?: string;
    role?: string;
  };
}

// How it appears on the React frontend
const PersonBlock = (props: any) => {
  const { attributes } = props;
  const { name = '', role = '' } = attributes || {};
  return (
    <div className="person" style={{ textAlign: 'center' }}>
      {name}
      <br />
      {role}
    </div>
  );
};

export default PersonBlock;
