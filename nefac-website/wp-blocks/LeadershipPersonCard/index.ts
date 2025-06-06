import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

registerBlockType({
  ...(metadata as BlockConfiguration),
  edit: Edit as any, // not ideal; use proper typing when wordpress NPM modules update for React 19
  save: () => null
});
