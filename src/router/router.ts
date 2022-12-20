import { RouterOptions, createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { App } from "vue";

const options: RouterOptions = {
	history: createWebHistory(),
	routes: routes,
};

const router = createRouter(options);

function setupRouter(app: App) {
	app.use(router);
}

export default setupRouter;
