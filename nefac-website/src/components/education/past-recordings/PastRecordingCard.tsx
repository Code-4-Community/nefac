import { PastRecording } from "./PastRecordingInterface";

interface PastRecordingCardProps {
  recording: PastRecording;
  variant?: "vertical" | "grid"; 
}

const PastRecordingCard: React.FC<PastRecordingCardProps> = ({
  recording,
  variant = "vertical",
}) => {
  const isGrid = variant === "grid";

  return (
    <div
      className={
        isGrid
          ? "rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
          : "flex flex-col md:flex-row items-start md:items-center bg-[#2F5C9F] text-white rounded-xl max-w-4xl shadow-xl p-4"
      }
    >
      <div className={`relative ${isGrid ? "" : "w-full sm:w-1/3 mb-4 sm:mb-0"}`}>
        <a href={recording.recordingUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={recording.thumbnailUrl}
            alt={recording.title}
            className={`rounded-lg w-full aspect-video object-cover ${
              isGrid ? "" : "border-[3px] border-[#D8DADD]"
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/icons/youtube.png"
              alt="YouTube Logo"
              className="w-10 h-auto opacity-75"
            />
          </div>
        </a>
      </div>

      {isGrid ? (
        <div className="bg-[#2F5C9F] text-white p-3 rounded-b-xl -mt-6 relative z-10 flex-1">
          <h3 className="font-bold text-md">{recording.title}</h3>
          {recording.author && (
            <p className="text-sm italic mt-1">{recording.author}</p>
          )}
        </div>
      ) : (
        <div className="sm:ml-6 flex-1">
          <h3 className="text-lg font-semibold mb-2">{recording.title}</h3>
          {recording.description && (
            <p className="text-sm mb-2">{recording.description}</p>
          )}
          {recording.notesUrl && (
            <a
              href={recording.notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm mt-2 inline-block hover:underline"
            >
              Discussion notes and links.
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PastRecordingCard;