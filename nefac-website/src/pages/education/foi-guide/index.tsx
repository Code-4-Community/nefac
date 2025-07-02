import { useState } from "react";
import EducationInitiativeWrapper from "@/components/education/EducationInitiativeWrapper";
import InitiativeDescription from "@/components/education/InitiativeDescription";
import MapButtonsPanel from "@/components/education/foi-guide/MapButtonsPanel";
import NewEnglandMap from "@/components/education/foi-guide/NewEnglandMap";

const EducationPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <EducationInitiativeWrapper>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_580px] w-full relative gap-x-6">
        {/* Left: Description and buttons */}
        <div>
          <InitiativeDescription
            header="FOI Guide"
            description={`This guide is intended as general information for journalists and other citizens.\n
              It is not to be considered legal advice.\n
              Individuals should seek the advice of counsel regarding specific situations or issues.`}
          />
          <div className="md:pr-0 pr-4">
            <MapButtonsPanel
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          </div>
        </div>
        {/* Right: Map stays in its column and doesn't overlap */}
        <div className="hidden md:flex justify-center items-start">
          <NewEnglandMap hoveredId={hoveredId} setHoveredId={setHoveredId} />
        </div>
      </div>
    </EducationInitiativeWrapper>
  );
};

export default EducationPage;
