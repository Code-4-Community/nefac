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
    <div className="md:p-6">
        {recognitionName && (
            <h1 className="text-xl md:text-3xl text-gray-600 mb-3 md:mb-5">{recognitionName}</h1>
        )}
        {imageUrl ? (
            <img 
            src={imageUrl} 
            alt={subjectName}
            className="w-full md:w-64 md:h-64 md:float-left mr-6 mb-4 md:mb-2 rounded-lg"
            />
        ) : (
            <div className="w-8 h-8 bg-gray-200 float-left"></div>
        )}
        <div className="flex flex-row gap-2.5 mb-3">
            <div className="w-0.5 self-stretch bg-nefacblue"></div>
            <div className="flex flex-col">
                <h1 className="md:text-3xl font-bold">{subjectName}</h1>
                {subjectShortDescription && (
                    <p className="text-gray-600 text-xs md:text-base">
                        {subjectShortDescription}
                    </p>
                )}
            </div>
        </div>
        {subjectLongDescription && (
            <div className="text-sm md:text-base md:leading-relaxed">
                <p>{subjectLongDescription}</p>
            </div>
        )}
    </div>
  );
};

export default Profile;