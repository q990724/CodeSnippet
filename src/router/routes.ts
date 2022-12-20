import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		name: "index",
		path: "/",
		component: () => import("../views/Index.vue"),
	},
];

export default routes;
