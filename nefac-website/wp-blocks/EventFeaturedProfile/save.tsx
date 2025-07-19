import { useBlockProps } from '@wordpress/block-editor';
import { EventFeaturedProfileAttributes } from './EventFeaturedProfileAttributes';

export default function save({ attributes }: { attributes: EventFeaturedProfileAttributes }) {
  const { imageUrl, subjectName, recognitionName, subjectShortDescription, subjectLongDescription } = attributes;

  return (
    <div {...useBlockProps.save()} 
        className="event-featured-profile" 
        style={{display: 'flex', flexDirection: 'column'}}
    >
        {recognitionName ? (
            <p>
                <strong>
                    <em>{recognitionName}</em> | {subjectName}
                    {subjectShortDescription && `, ${subjectShortDescription}`}
                </strong>
            </p>
        ) : (
            <p>
                <strong>
                    {subjectName}
                    {subjectShortDescription && `, ${subjectShortDescription}`}
                </strong>
            </p>
        )}
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            {subjectLongDescription && (
                <p>{subjectLongDescription}</p>
            )}
            {imageUrl && (
                <img src={imageUrl} alt={subjectName} style={{width:"100px", height:"100px"}}/>
            )}
        </div>
    </div>
  );
}