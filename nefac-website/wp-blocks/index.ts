import { CoreBlocks } from "@faustwp/blocks";
import { LeadershipPersonBlock } from "./LeadershipPersonCard/view";
 
const blocks = {
	'nefac/leadership-person-card': LeadershipPersonBlock,
	...CoreBlocks,
};

export default blocks;