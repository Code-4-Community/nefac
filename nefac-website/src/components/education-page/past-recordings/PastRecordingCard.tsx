import { PastRecording } from "./PastRecordingInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

interface PastRecordingCardProps {
    recording: PastRecording;
}

const PastRecordingCard: React.FC<PastRecordingCardProps> = ({ recording }) => {
  return (
    <div className="flex flex-col md:flex-row 
                    items-start md:items-center 
                    bg-[#2F5C9F] text-white 
                    rounded-xl max-w-4xl shadow-xl p-4">
        <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
            <a href={recording.recordingUrl} target="_blank" rel="noopener noreferrer">
                <img 
                    src={recording.thumbnailUrl} 
                    alt={recording.title} 
                    className="rounded-lg w-full aspect-video object-cover border-[3px] border-[#D8DADD]" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <FontAwesomeIcon 
                        icon={faYoutube} 
                        style={{ fontSize: "50px", color: "red", opacity: 0.8 }}
                    />
                </div>
            </a>
        </div>
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
    </div>
  );
};

export default PastRecordingCard;
