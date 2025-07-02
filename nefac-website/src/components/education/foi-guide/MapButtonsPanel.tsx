import React from "react";
import HoverButton from "./HoverButton";

// stub urls
const states = [
  { id: "ME", name: "Maine", url: "/education/maine" },
  { id: "MA", name: "Massachusetts", url: "/education/massachusetts" },
  { id: "VT", name: "Vermont", url: "/education/vermont" },
  { id: "RI", name: "Rhode Island", url: "/education/rhode-island" },
  { id: "NH", name: "New Hampshire", url: "/education/new-hampshire" },
  { id: "CN", name: "Connecticut", url: "/education/connecticut" },
  { id: "FOIA", name: "Federal FOIA", url: "/education/federal-foia" },
];

type Props = {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

// hover logic
export default function MapButtonsPanel({ hoveredId, setHoveredId }: Props) {
  return (
    <div className="flex flex-col w-full ">
      {/* Left Column: Title and buttons */}
      <div className="flex flex-col">
        <h1 className="flex text-2xl font-bold text-nefacblue font-poppins pt-5">
          Guide Information
        </h1>
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 h-full">
          {states.map((state) => (
            <div
              key={state.id}
              className={`w-full ${state.id === "FOIA" ? "col-span-2" : ""}`}
            >
              <HoverButton
                state={state}
                isHovered={hoveredId === state.id}
                setHoveredId={setHoveredId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
