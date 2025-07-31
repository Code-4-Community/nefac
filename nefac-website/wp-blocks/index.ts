import { CoreBlocks } from "@faustwp/blocks";
import PersonListBlock from "./PersonList/view";
import PersonBlock from "./Person/view";
import EventFeaturedProfileBlock from "./EventFeaturedProfile/view";

const blocks = {
  'nefac/person-list': PersonListBlock,
  'nefac/person': PersonBlock,
	'nefac/event-featured-profile': EventFeaturedProfileBlock,
	...CoreBlocks,
};

export default blocks;