import { CoreBlocks } from "@faustwp/blocks";
import { LeadershipPersonBlock } from "./LeadershipPersonCard/view";
import EventFeaturedProfileBlock from "./EventFeaturedProfile/view";
 
const blocks = {
	'nefac/leadership-person-card': LeadershipPersonBlock,
	'nefac/event-featured-profile': EventFeaturedProfileBlock,
	...CoreBlocks,
};

export default blocks;