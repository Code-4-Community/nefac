import React from "react";

// logic for hover interactivity
type StateShapeProps = {
  id: string;
  isHovered: boolean;
  setHoveredId: (id: string | null) => void;
  children: React.ReactNode;
};

// Interactive wrapper for a state — memoized to re-render when hover status changes
const StateShape = React.memo(
  function StateShape({
    id,
    isHovered,
    setHoveredId,
    children,
  }: StateShapeProps) {
    return (
      <g
        id={id}
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
        className="transition-colors duration-300 cursor-pointer"
      >
        {children}
      </g>
    );
  }
);

export default StateShape;
