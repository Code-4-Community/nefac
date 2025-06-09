import { setConfig } from "@faustwp/core";
import templates from "./src/wp-templates/index";
import possibleTypes from "./possibleTypes.json";


export default setConfig({
	templates,
	plugins: [],
	possibleTypes,
});