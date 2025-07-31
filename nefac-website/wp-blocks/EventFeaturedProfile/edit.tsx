import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, TextareaControl } from "@wordpress/components";
import { BlockEditProps } from "@wordpress/blocks";
import { EventFeaturedProfileAttributes } from "./EventFeaturedProfileAttributes";

function Edit({ attributes, setAttributes }: BlockEditProps<EventFeaturedProfileAttributes>) {
    const { imageUrl = '', subjectName = '', recognitionName = '', subjectShortDescription = '', subjectLongDescription = '' } = attributes;
    return (
        <div {...useBlockProps({
            className: 'event-featured-profile-block',
            style: {
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '1rem',
            }
        })}>
            <TextControl
                label="Image URL (optional)"
                value={imageUrl}
                onChange={(value) => setAttributes({ imageUrl: value })}
            />
            <TextControl
                label="Subject Name"
                value={subjectName}
                onChange={(value) => setAttributes({ subjectName: value })}
                placeholder="Enter the name of the person or organization being featured"
            />
            <TextControl
                label="Recognition Name (optional)"
                value={recognitionName}
                onChange={(value) => setAttributes({ recognitionName: value })}
                placeholder="Enter the recognition or award name"
            />
            <TextControl
                label="Short Description (optional)"
                value={subjectShortDescription}
                onChange={(value) => setAttributes({ subjectShortDescription: value })}
                placeholder="Enter a subtitle (e.g. role/position)"
            />
            <TextareaControl
                label="Long Description"
                value={subjectLongDescription}
                onChange={(value) => setAttributes({ subjectLongDescription: value })}
                placeholder="Enter a paragraph description"
            />
        </div>
    );
}
export default Edit;