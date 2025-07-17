import React from 'react';

interface PersonBlockProps {
  attributes: {
    name?: string;
    role?: string;
  };
}

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
