import { CoreBlocks } from "@faustwp/blocks";
import PersonListBlock from "./PersonList/view";
import PersonBlock from "./Person/view";

const blocks = {
  'nefac/person-list': PersonListBlock,
  'nefac/person': PersonBlock,
  ...CoreBlocks,
};

export default blocks;