import { useState } from "react";
import { PastRecording } from "@/components/education/past-recordings/PastRecordingInterface";

export function usePaginatedRecordings(recordings: PastRecording[], initialCount: number, step: number) {
  const sorted = recordings
    .slice()
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());

  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visible = sorted.slice(0, visibleCount);

  const viewMore = () => setVisibleCount((prev) => Math.min(prev + step, sorted.length));
  const viewLess = () => setVisibleCount(initialCount);

  return {
    visible,
    visibleCount,
    totalCount: sorted.length,
    viewMore,
    viewLess,
    isAllVisible: visibleCount >= sorted.length,
  };
}
