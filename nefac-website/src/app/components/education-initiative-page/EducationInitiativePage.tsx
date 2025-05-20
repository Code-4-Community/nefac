import InitiativeDescription from "./InitiativeDescription";
import Sidebar from "./Sidebar";

interface EducationInitiativePageProps {
    initDescSect: boolean;
    upcomingPresSection: boolean;
    pastPresSection: boolean;
}

// Single page of education initiative component
// Page will later need to be updated to use the WordPress API to get the actual information
export default function EducationInitiativePage({
    // Parameters for what sections of the page should exist
    initDescSect,
    upcomingPresSection,
    pastPresSection
}: EducationInitiativePageProps) {
    return (
        <div className="min-h-screen">
            <div className="text-nefacblue text-[36px] font-bold px-8">
                Education Initiatives
            </div>
            <div className="w-full flex flex-row gap-10">
                <Sidebar />
                <div className="w-full flex flex-col">
                    {initDescSect && (
                    <InitiativeDescription 
                        header = "This is the Header Portion"
                        description="Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative.
                        Testing text for the First Amendment and Free Press Education Initiative."
                        thumbnailUrl="https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
                    />
                    )}
                    {/* TODO: Replace this with the abstract components from tickets 50 and 51 */}
                    {upcomingPresSection && (
                    <div className="w-full text-[32px]">
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                    </div>
                    )}
                    {pastPresSection && (
                    <div className="w-full text-[32px]">
                        Past Presentations Section Display Text
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}