import StateShape from "./StateShape";
import { NEStates } from "./NEStates";
import React from "react";

type Props = {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

const NewEnglandMap = React.memo(function NewEnglandMap({
  hoveredId,
  setHoveredId,
}: Props) {
  return (
    <svg
      width="460"
      height="600"
      viewBox="0 0 442 588"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[500px] h-[620px]"
    >
      {NEStates.map((state) => {
        const isHovered = hoveredId === state.id; // ← boolean, changes for ONE state, memoization
        return (
          <StateShape
            key={state.id}
            id={state.id}
            isHovered={isHovered}
            setHoveredId={setHoveredId}
          >
            <path
              d={state.shapePath}
              stroke="#2C4E91"
              strokeWidth="2"
              strokeLinejoin="round"
              className={`transition-colors ${
                isHovered ? "fill-nefacblue" : "fill-white"
              }`}
            />
            {state.labelPath && (
              <path
                d={state.labelPath}
                className={`transition-colors ${
                  isHovered ? "fill-white" : "fill-nefacblue"
                }`}
              />
            )}
          </StateShape>
        );
      })}
    </svg>
  );
});

export default NewEnglandMap;