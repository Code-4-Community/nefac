import React from "react";
import { useState, useCallback } from "react";
import HoverButton from "./HoverButton";
import NewEnglandMap from "./NewEnglandMap";

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
// hover logic
export default function MapButtonsPanel() {
  const [hoveredId, setHoveredIdGlobal] = useState<string | null>(null);

  const setHoveredId = useCallback((id: string | null) => {
    setHoveredIdGlobal(id);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Left Column: Title and buttons */}
      <h1 className="col-span-1 text-2xl font-bold text-nefacblue font-poppins pt-5">
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
      {/* Right Column - Map */}
      <div className="absolute top-[36%] right-[4%]">
        <NewEnglandMap hoveredId={hoveredId} setHoveredId={setHoveredId} />
      </div>
    </div>
  );
}
