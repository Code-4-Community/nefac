import Person from "../../src/components/leadership-page/Person";

interface Person {
  name: string;
  role: string;
}

interface PersonListBlockProps {
  attributes: {
    title?: string;
    people?: Person[];
  };
}

export const PersonListBlock = ({ attributes }: PersonListBlockProps) => {
  const { title = '', people = [] } = attributes;

  return (
    <div className="person-list-block">
      {title && <h2 className="person-list-title">{title}</h2>}

      <div className="person-list-person">
        {people.map((person, index) => (
          <Person key={index} name={person.name} role={person.role} />
        ))}
      </div>
    </div>
  );
};
