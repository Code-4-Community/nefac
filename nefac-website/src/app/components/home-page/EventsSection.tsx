import { useState } from "react";


// Temporary dummy data for the events
const events = [
  {
    title: "Title 1",
    date: "2025-02-12",
    time: "6:30-7:30",
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 2",
    date: "2025-02-02",
    time: "6:30-7:30",
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 3",
    date: "2025-03-13",
    time: "6:30-7:30",
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "Title 4",
    date: "2025-04-29",
    time: "6:30-7:30",
    selectImage: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
  },
  {
    title: "This is the title 5, the title that tests to see if there is an image here, in which case there is none.",
    date: "2025-04-16",
    time: "6:30-7:30"
  }
];


// const events: any[] = [];




const sortedEvents = events.sort((a, b) => a.date.localeCompare(b.date))


export default function EventsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);


  // Format date to properly display the month name (e.g: 2025-05-09 becomes May 9)
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const newDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    return newDate;
  }


  function handleEventClick(i: number) {
    setSelectedIndex(i);
  }


  return (
    <div className="py-6 mb-16">
      <div className="flex items-center mb-8 overflow-hidden">
        <h2 className="text-nefacblue font-bold text-2xl md:text-3xl pl-4 md:pl-24">Events</h2>
        <div className="grow h-2 bg-nefacblue translate-x-12 rounded-l-full" />
      </div>


      <div className="pr-24">
        <div className="bg-nefacblue text-white rounded-r-xl py-8 flex flex-col md:flex-row gap-8 mt-4 px-24">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-8">Related Events</h2>
            {sortedEvents.length === 0 ? (
              <p>Sorry, there are no events as of right now. <u><a href="#">See past events here.</a></u></p>
            ) : (
              <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col gap-4 w-1/2">
                  {sortedEvents.map((event, i) => (
                    <div
                      key={i}
                      onClick={() => handleEventClick(i)}
                      className={`flex items-start overflow-hidden text-black shadow cursor-pointer transition-all ${i === selectedIndex ? 'bg-white rounded-l-md' : 'bg-gray-200 rounded-md'}`}
                      style={{ width: i === selectedIndex ? '100%' : '95%' }}
                    >
                      <div className={`rounded-lg p-3 font-semibold text-sm text-left w-1/5 ${i === selectedIndex ? 'bg-black text-white' : 'bg-white text-nefacblue'}`}>
                        <div>{formatDate(event.date)}</div>
                        <div className="text-xs font-normal">{event.time}</div>
                      </div>
                      <div className="px-4 py-2 text-sm flex-1">
                        {event.title}
                      </div>
                    </div>
                  ))}
                </div>


                <div className="w-full md:w-1/2">
                  <div className="w-full h-[385px] bg-white rounded-md p-8 text-black flex flex-col justify-between -mt-2.5">
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
                            <b>Date: </b>{formatDate(sortedEvents[selectedIndex].date)}
                            <br />
                            <b>Time: </b>{sortedEvents[selectedIndex].time}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col justify-center h-full">
                        <p className="font-bold mb-3 text-lg md:text-4xl">
                          {sortedEvents[selectedIndex].title}
                        </p>
                        <p className="text-nefacblue text-xl">
                          <b>Date: </b>{formatDate(sortedEvents[selectedIndex].date)}
                        </p>
                        <p className="text-nefacblue text-xl">
                          <b>Time: </b>{sortedEvents[selectedIndex].time}
                        </p>
                      </div>
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