import EducationInitiativeWrapper from "@/components/education/EducationInitiativeWrapper";
import InitiativeDescription from "@/components/education/InitiativeDescription";
import MapButtonsPanel from "@/components/education/foi-guide/MapButtonsPanel";

const EducationPage: React.FC = () => {
    return (
        <EducationInitiativeWrapper>
            <InitiativeDescription 
                header="FOI Guide" 
                description="This guide is intended as general information for journalists and other citizens. It is not to be considered legal advice. Individuals should seek the advice of counsel regarding specific situations or issues."
            />
            <MapButtonsPanel />
        </EducationInitiativeWrapper>
    )
};

export default EducationPage;