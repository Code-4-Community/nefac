import { PastRecording } from "./PastRecordingInterface";
import PastRecordingCard from "./PastRecordingCard";
import { usePaginatedRecordings } from "./usePaginatedRecordings";

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
    <div className="flex flex-col items-center mt-16 mb-24 mx-4">
      {visible.length === 0 ? (
        <p>There are no past recordings for this program right now.</p>
      ) : (
        <div
          className={
            isGrid
              ? "grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-xl"
              : "grid grid-cols-1 items-center space-y-6"
          }
        >
          {visible.map((recording, index) => (
            <PastRecordingCard
              key={index}
              recording={recording}
              variant={variant}
            />
          ))}
        </div>
      )}

      {visibleCount < totalCount && (
        <div className={`group ${isGrid ? "mt-6" : "mb-4"}`}>
          <button
            onClick={viewMore}
            className={`flex flex-row px-4 py-2 text-[#565353] gap-6 items-center ${
              isGrid ? "" : "mt-4"
            }`}
          >
            <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">
              VIEW MORE
            </p>
            <img
              src="/icons/down.svg"
              alt="down arrow"
              className="w-6 h-6 group-hover:brightness-0"
            />
          </button>
        </div>
      )}

      {isAllVisible && totalCount > defaultInitialCount && (
        <div className={`group ${isGrid ? "mt-4" : "mb-4"}`}>
          <button
            onClick={viewLess}
            className={`flex flex-row px-4 py-2 text-[#565353] gap-6 items-center ${
              isGrid ? "" : "mt-4"
            }`}
          >
            <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">
              VIEW LESS
            </p>
            <img
              src="/icons/up.svg"
              alt="up arrow"
              className="w-6 h-6 group-hover:brightness-0"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default PastRecordingsDisplay;