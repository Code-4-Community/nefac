import React from "react";
import { UpcomingEvent } from "./UpcomingEventInterface";

interface UpcomingEventCardProps {
  event: UpcomingEvent;
}

const formatDate = (date: Date) => {
  return {
    month: date.toLocaleString("default", { month: "short" }),
    day: date.getDate(),
  };
};

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  const { month, day } = formatDate(event.startDate);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 w-full gap-2 sm:gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
        <div className="flex flex-col items-center justify-center ml-1 sm:min-w-[60px]">
          <div className="text-sm text-gray-500">{month}</div>
          <div className="text-2xl text-gray-800">{day}</div>
        </div>

        <div className="hidden sm:block border-l h-10 border-gray-300" />

        <div className="flex flex-col">
          <div className="text-base font-medium text-black">{event.title}</div>
          <div className="text-sm text-gray-500 underline">{event.location}</div>
        </div>
      </div>

      {event.infoUrl && (
        <a
          href={event.infoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline text-[#2D4E91] whitespace-nowrap"
        >
          Register
        </a>
      )}
    </div>

  );
};

export default UpcomingEventCard;
