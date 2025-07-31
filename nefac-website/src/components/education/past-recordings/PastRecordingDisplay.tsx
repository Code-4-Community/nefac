import { PastRecording } from "./PastRecordingInterface";
import PastRecordingCard from "./PastRecordingCard";
import { usePaginatedRecordings } from "@/lib/usePaginatedRecordings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface PastRecordingsDisplayProps {
  recordings: PastRecording[];
  variant?: "grid" | "vertical";
}

const PastRecordingsDisplay: React.FC<PastRecordingsDisplayProps> = ({
  recordings,
  variant = "vertical",
}) => {

  const defaultInitialCount = variant === "grid" ? 4 : 5;
  const defaultIncrementCount = variant === "grid" ? 4 : 5;

  const {
    visible,
    viewMore,
    viewLess,
    visibleCount,
    totalCount,
    isAllVisible,
  } = usePaginatedRecordings(
    recordings,
    defaultInitialCount,
    defaultIncrementCount
  );

  const isGrid = variant === "grid";

  return (
    <div className="flex flex-col mt-16 mb-24 w-full items-center">
      {visible.length === 0 ? (
        <p>There are no past recordings for this program right now.</p>
      ) : (
        <div
          className={
            isGrid
              ? "grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5 max-w-[900px] w-full"
              : "grid grid-cols-1 items-center space-y-6"
          }
        >
          {visible.map((recording, index) => (
              <PastRecordingCard
                recording={recording}
                variant={variant}
              />
          ))}
        </div>
      )}

      {visibleCount < totalCount && (
        <div className={`group flex justify-center ${isGrid ? "mt-6" : "mb-4"}`}>
          <button
            onClick={viewMore}
            className={`flex flex-row px-4 py-2 text-[#565353] gap-6 items-center ${isGrid ? "" : "mt-4"
              }`}
          >
            <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">
              VIEW MORE
            </p>
            <FontAwesomeIcon icon={faAngleDown} className="" />
          </button>
        </div>
      )}

      {isAllVisible && totalCount > defaultInitialCount && (
        <div className={`group flex justify-center ${isGrid ? "mt-4" : "mb-4"}`}>
          <button
            onClick={viewLess}
            className={`flex flex-row px-4 py-2 text-[#565353] gap-6 items-center ${isGrid ? "" : "mt-4"
              }`}
          >
            <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">
              VIEW LESS
            </p>
            <FontAwesomeIcon icon={faAngleUp} className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PastRecordingsDisplay;