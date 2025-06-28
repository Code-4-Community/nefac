// to represent a past event recording
export interface PastRecording {
	// a Date object representing the publication date of the recording
	publishedDate: Date;

	// a URL pointing to the video
	recordingUrl: string;

	// thumbnail image URL
	thumbnailUrl: string;

	// event/recording title
	title: string;
	
	// event/recording description (optional)
	description?: string;

	// a URL pointing to a page with notes and other info (optional)
	notesUrl?: string;

	// author of the recording (optional)
	author?: string;
}