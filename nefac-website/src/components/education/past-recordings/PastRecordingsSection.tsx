import { PastRecording } from "./PastRecordingInterface";
import PastRecordingCard from "./PastRecordingCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface PastRecordingProps {
    recordings: PastRecording[];
}

const PastRecordingsSection: React.FC<PastRecordingProps> = ({ recordings }) => {
    const sorted = recordings.sort((a, b) => {
        return b.publishedDate.getTime() - a.publishedDate.getTime();
    });
    const [visibleCount, setVisibleCount] = useState(5);
    const visible = sorted.slice(0, visibleCount);

    const handleViewMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, sorted.length));
    };

    return (
        <div className="flex flex-col mt-16 mb-24 mx-4 items-center">
            {visible.length === 0 ? (
                <p>There are no past recordings for this program right now.</p>
            ) : (
                <div className="grid grid-cols-1 items-center space-y-6">
                    {visible.map((recording, index) => (
                        <PastRecordingCard key={index} recording={recording} />
                    ))}
                </div>
            )}
            {visibleCount < sorted.length && (
                <div className="group mb-4">
                    <button
                        onClick={handleViewMore}
                        className="flex flex-row mt-4 px-4 py-2 text-[#565353] gap-6 items-center"
                    >
                        <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">VIEW MORE</p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="group-hover:brightness-0 text-[24px]"
                        />
                    </button>
                </div>
            )}
            {visibleCount === sorted.length && sorted.length > 5 && (
                <div className="group mb-4">
                    <button
                        onClick={() => {
                            setVisibleCount(5);
                            window.scrollTo({top: 0, behavior: "smooth"});
                        }}
                        className="flex flex-row mt-4 px-4 py-2 text-[#565353] gap-6 items-center"
                    >
                        <p className="underline italic font-bold text-[#565353] text-xl group-hover:text-black">VIEW LESS</p>
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className="group-hover:brightness-0 text-[24px]"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default PastRecordingsSection;