import { Profile } from "@/components/negri-institute/Profile";

interface EventFeaturedProfileBlockProps {
    attributes: {
        imageUrl?: string;
        subjectName: string;
        recognitionName?: string;
        subjectShortDescription?: string;
        subjectLongDescription: string;
    };
}

const EventFeaturedProfileBlock = ({ attributes }: EventFeaturedProfileBlockProps) => {
    const { imageUrl, subjectName, recognitionName, subjectShortDescription, subjectLongDescription } = attributes;

    return (
        <Profile
            imageUrl={imageUrl}
            subjectName={subjectName}
            recognitionName={recognitionName}
            subjectShortDescription={subjectShortDescription}
            subjectLongDescription={subjectLongDescription}
        />
    );
}

export default EventFeaturedProfileBlock;