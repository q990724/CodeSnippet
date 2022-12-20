import { App } from "vue";
import setupTailwindcss from "./tailwindcss";
import setupElementPlus from "./elementPlus";

function setupAllPlugins(app: App) {
	setupTailwindcss();
	setupElementPlus(app);
}

export default setupAllPlugins;
