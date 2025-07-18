import React from 'react';

interface ProfileProps {
  imageUrl?: string;
  subjectName: string;
  recognitionName?: string;
  subjectShortDescription?: string;
  subjectLongDescription: string;
}

const Profile: React.FC<ProfileProps> = ({
  imageUrl,
  subjectName,
  recognitionName,
  subjectShortDescription,
  subjectLongDescription
}) => {
  return (
    <div className="p-6">
        {recognitionName && (
            <h1 className="text-3xl text-gray-600 mb-5">{recognitionName}</h1>
        )}
        {imageUrl ? (
            <img 
            src={imageUrl} 
            alt={subjectName}
            className="w-64 h-64 float-left mr-6 mb-2 rounded-lg"
            />
        ) : (
            <div className="w-8 h-8 bg-gray-200 float-left"></div>
        )}
        <div className="flex flex-row gap-2.5 mb-3">
            <div className="w-0.5 self-stretch bg-nefacblue"></div>
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">{subjectName}</h1>
                {subjectShortDescription && (
                    <p className="text-gray-600 text-base">
                        {subjectShortDescription}
                    </p>
                )}
            </div>
        </div>
        {subjectLongDescription && (
            <div className="leading-relaxed ">
            {subjectLongDescription.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                </p>
                )
            ))}
            </div>
        )}
    </div>
  );
};

export default Profile;