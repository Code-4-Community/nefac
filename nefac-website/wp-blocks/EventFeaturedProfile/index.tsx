import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType('nefac/event-featured-profile', {
  ...(metadata as BlockConfiguration),
  edit: Edit,
  save: save
});