import { useState } from "react";

// to represent an event
interface Event {
  // event title
  title: string;

  startDate: Date;
  endDate: Date;

  // image URL to be shown when selected (optional)
  selectImage?: string;

  // URL the user can open to learn more / register / view (optional)
  infoUrl?: string;
}


// Temporary dummy data for the events
const events: Event[] = [
  {
    title: "Title 1",
    startDate: new Date("2025-02-12T18:30:00"),
    endDate: new Date("2025-02-12T19:30:00"),
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 2",
    startDate: new Date("2025-02-02T18:30:00"),
    endDate: new Date("2025-02-02T19:30:00"),
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 3",
    startDate: new Date("2025-03-13T18:30:00"),
    endDate: new Date("2025-03-13T19:30:00"),
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 4",
    startDate: new Date("2025-04-29T18:30:00"),
    endDate: new Date("2025-04-29T19:30:00"),
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg",
    infoUrl: "https://nefac.org"
  },
  {
    title: "This is the title 5, the title that tests to see if there is an image here, in which case there is none.",
    startDate: new Date("2025-04-16T18:30:00"),
    endDate: new Date("2025-04-16T19:30:00"),
  },
  {
    title: "Title 6",
    startDate: new Date("2025-05-27T18:30:00"),
    endDate: new Date("2025-05-27T19:30:00"),
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg",
    infoUrl: "https://google.com"
  },
];

// Uncomment this line and comment the above events to test layout without any events
//const events: any[] = [];


const sortedEvents = events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime()).slice(0, 5);

export default function EventsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Extract human-readable date from date object (2025-02-12 becomes February 12th)
  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  }

  // Extract human-readable time from date object (2025-02-12T18:30:00 becomes 6:30)
  function formatTime(date: Date): string {
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", });
  }

  return (
    <div className="py-6 mb-16">
      <div className="flex items-center mb-8 overflow-hidden">
        <h2 className="text-nefacblue font-bold text-2xl md:text-3xl pl-4 md:pl-24">Events</h2>
        <div className="grow h-2 bg-nefacblue translate-x-12 rounded-l-full" />
    </div>

      <div className="md:pr-24 px-4 md:px-0">
        <div className="bg-nefacblue text-white rounded-r-xl py-8 flex flex-col md:flex-row gap-8 mt-4 md:px-24 px-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-8">Related Events</h2>

            {sortedEvents.length === 0 ? (
              <p>
                Sorry, there are no events as of right now.{" "}
                <u>
                  <a href="#">See past events here.</a>
                </u>
              </p>
            ) : (
              <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col gap-4 md:w-1/2 w-full">
                  {sortedEvents.map((event, i) => (
                    <div key={i} className="w-full">
                      <div
                        onClick={() => setSelectedIndex(i)}
                        className={`flex items-start overflow-hidden text-black shadow cursor-pointer transition-all
                          ${i === selectedIndex ? "bg-white rounded-l-md md:w-full" : "bg-gray-200 rounded-md md:w-[95%]"}
                        `}
                      >
                        <div
                          className={`transition-all rounded-md p-3 font-semibold text-sm text-left w-1/5 md:w-1/5 ${
                            i === selectedIndex ? "bg-black text-white" : "bg-white text-nefacblue"
                          }`}
                        >
                          <div className="text-xs sm:text-xs md:text-sm lg: text-base">{formatDate(event.startDate)}</div>
                          <div className="text-xs font-normal">{formatTime(event.startDate)}-{formatTime(event.endDate)}</div>
                        </div>
                        <div className="px-4 py-2 text-sm flex-1">{event.title}</div>
                      </div>

                      {/* Mobile-layout */}
                      {i === selectedIndex && (
                        <div className="md:hidden mt-2 bg-white rounded-md p-4 text-black">
                          {event.selectImage ? (
                            <>
                              <img
                                src={event.selectImage}
                                className="w-full h-48 object-cover rounded mb-4"
                                alt="Event"
                              />
                              <p className="font-bold text-lg">{event.title}</p>
                              <p className="text-nefacblue text-base">
                                <b>Date:</b> {formatDate(event.startDate)}
                              </p>
                              <p className="text-nefacblue text-base">
                                <b>Time:</b> {formatTime(event.startDate)}-{formatTime(event.endDate)}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="font-bold text-lg">{event.title}</p>
                              <p className="text-nefacblue text-base">
                                <b>Date:</b> {formatDate(event.startDate)}
                              </p>
                              <p className="text-nefacblue text-base">
                                <b>Time:</b> {formatTime(event.startDate)}-{formatTime(event.endDate)}
                              </p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="hidden md:block w-1/2">
                  <div className={"w-full h-full bg-white rounded-md p-8 text-black flex flex-col flex-grow justify-between" + (selectedIndex == 0 ? " md:rounded-tl-none" : "")}>
                    {sortedEvents[selectedIndex].selectImage ? (
                      <>
                        <div className="h-1/2">
                          <img
                            src={sortedEvents[selectedIndex].selectImage}
                            className="w-full h-full object-cover rounded"
                            alt="Event"
                          />
                        </div>
                        <div className="flex flex-col gap-6">
                          <p className="font-bold text-lg md:text-2xl">
                            {sortedEvents[selectedIndex].title}
                          </p>
                          <p className="text-nefacblue">
                            <b>Date: </b>{formatDate(sortedEvents[selectedIndex].startDate)}
                            <br />
                            <b>Time: </b>{formatTime(sortedEvents[selectedIndex].startDate)}-{formatTime(sortedEvents[selectedIndex].endDate)}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col justify-center h-full">
                        <p className="font-bold mb-3 text-lg md:text-4xl">
                          {sortedEvents[selectedIndex].title}
                        </p>
                        <p className="text-nefacblue text-base md:text-xl">
                          <b>Date: </b>{formatDate(sortedEvents[selectedIndex].startDate)}
                        </p>
                        <p className="text-nefacblue text-base md:text-xl">
                          <b>Time: </b>{formatTime(sortedEvents[selectedIndex].startDate)}-{formatTime(sortedEvents[selectedIndex].endDate)}
                        </p>
                      </div>
                    )}
                    {sortedEvents[selectedIndex].infoUrl && (
                        <a className="bg-nefacblue text-white text-center rounded-md p-2" href={sortedEvents[selectedIndex].infoUrl} target="_blank">Learn More</a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
}
