import { UpcomingEvent } from "@/app/components/education-page/UpcomingEventInterface";
import UpcomingEventsCalendar from "@/app/components/education-page/UpcomingEventsCalendar";

// mock data for a properly filled calendar of events
const mockFiveUpcomingEvents: UpcomingEvent[] = [
    {
        startDate: new Date("2025-04-29T14:00:00"),
        title: " First Amendment and the Free Press",
        location: "University of Massachusetts Amherst",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-02T14:00:00"),
        title: "New England Scholastic Press Association Conference",
        location: "Boston University",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-14T14:00:00"),
        title: "First Amendment Law: Defamation and Privacy",
        location: "Nackey S. Loeb School of Communications | Saint Anselm College",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-14T14:00:00"),
        title: "Young Journalists Workshop",
        location: "Endicott College",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-04-21T10:00:00"),
        title: "Londonderry (N.H.) Town Council",
        location: "Online",
    }];

// mock data for a calendar of events with more than 5 events
const mockSevenUpcomingEvents: UpcomingEvent[] = [
    {
        startDate: new Date("2025-04-29T14:00:00"),
        title: " First Amendment and the Free Press",
        location: "University of Massachusetts Amherst",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-02T14:00:00"),
        title: "New England Scholastic Press Association Conference",
        location: "Boston University",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-14T14:00:00"),
        title: "First Amendment Law: Defamation and Privacy",
        location: "Nackey S. Loeb School of Communications | Saint Anselm College",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-05-14T14:00:00"),
        title: "Young Journalists Workshop",
        location: "Endicott College",
        infoUrl: "https://www.google.com/",
    },
    {
        startDate: new Date("2025-04-21T10:00:00"),
        title: "Londonderry (N.H.) Town Council",
        location: "Online",
    },
    {
        startDate: new Date("2025-07-21T10:00:00"),
        title: "NEFAC Meeting",
        location: "Online",
    },
    {
        startDate: new Date("2025-04-29T14:00:00"),
        title: "C4C Meeting",
        location: "Snell Library",
    }];

const mockEmptyEvents: UpcomingEvent[] = [];

const EducationPage: React.FC = () => {
    return (
        <UpcomingEventsCalendar events={mockFiveUpcomingEvents} />
    )
};

export default EducationPage;  