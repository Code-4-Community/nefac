import { init } from "next/dist/compiled/webpack/webpack";
import InitiativeDescription from "./InitiativeDescription";
import Sidebar from "./Sidebar";

interface EducationInitiativePageProps {
    initDescSect: boolean;
    upcomingPresSection: boolean;
    pastPresSection: boolean;
}



// Single page of education initiative component. Take in the boolean components accordingly
// Page will need to be abstracted later so that it uses WordPress API to get the actual information, should it exist
export default function EducationInitiativePage({
    initDescSect,
    upcomingPresSection,
    pastPresSection
}: EducationInitiativePageProps) {
    return (
        <div>
            <div className="text-nefacblue text-[36px] font-bold px-8">
                Education Initiatives
            </div>
            <div className="flex flex-row gap-10">
                <Sidebar />
                <div className="flex flex-col">
                    {initDescSect && (
                    <InitiativeDescription 
                        header = "This is the Header Portoin"
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
                    {upcomingPresSection && (
                    <div className="text-[100px]">
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                        Upcoming Presentations Section Display Text.
                    </div>
                    )}
                    {pastPresSection && (
                    <div className="text-[100px]">
                        Past Presentations Section Display Text
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}