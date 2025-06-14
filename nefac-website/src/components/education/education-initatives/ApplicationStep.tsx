import React from 'react';

interface ApplicationStepProps {
  number: number;
  isLast?: boolean;
  children: React.ReactNode;
}

const ApplicationStep: React.FC<ApplicationStepProps> = ({ number, isLast = false, children }) => {
  return (
    <div className="relative w-[75%] h-14 overflow-visible">
      {!isLast && (
        <div className="absolute left-[1.5rem] top-6 bottom-[-2rem] w-[3px] bg-nefacblue z-0" />
      )}

      <div className="relative h-full text-white text-lg bg-nefacblue p-1 rounded-l-full rounded-r-md flex items-center gap-6">
        <div className="h-full aspect-square bg-white text-nefacblue rounded-full flex items-center justify-center font-bold text-base">
          {number}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default ApplicationStep;
