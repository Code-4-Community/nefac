import { CoreBlocks } from "@faustwp/blocks";
import { PersonListBlock } from "./PersonList/view";
 
const blocks = {
	'nefac/person-list': PersonListBlock,
	...CoreBlocks,
};

export default blocks;