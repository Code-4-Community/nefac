import { BlockConfiguration, registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType('nefac/leadership-person-card', {
  ...(metadata as BlockConfiguration),
  edit: Edit,
  save: save
});