// to represent an upcoming event for a particular education initiative program
export interface UpcomingEvent {
	// a Date object representing the start date/time of the event
	startDate: Date;

	// event title
	title: string;

	// event location
	location: string;

	// optional URL the user can click on to register or learn more
	infoUrl?: string;
}