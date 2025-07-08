import React from "react";
import { UpcomingEvent } from "./UpcomingEventInterface";
import UpcomingEventCard from "./UpcomingEventCard";

interface UpcomingEventCalendarProps {
  events: UpcomingEvent[];
}

const UpcomingEventCalendar: React.FC<UpcomingEventCalendarProps> = ({ events }) => {
  // sort events by date (soonest first) and limit to 5
  const sortedEvents = [...events]
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col mt-16 mb-24 items-center">
      <div className="bg-gray-50 rounded-xl shadow-sm px-8 py-2 w-full max-w-2xl ">
        {sortedEvents.length === 0 ? (
          <div className="text-center text-gray-500">
            There are no upcoming presentations at this time.
          </div>
        ) : (
          sortedEvents.map((event, index) => (
            <div key={index}>
              <UpcomingEventCard event={event} />
              {index !== sortedEvents.length - 1 && (
                <hr className="border-gray-300" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEventCalendar;
