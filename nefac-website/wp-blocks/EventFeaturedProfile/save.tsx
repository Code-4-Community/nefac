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
            <h4>
                {recognitionName} | {subjectName}
                {subjectShortDescription && `, ${subjectShortDescription}`}
            </h4>
        ) : (
            <h4>
                {subjectName}
                {subjectShortDescription && `, ${subjectShortDescription}`}
            </h4>
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