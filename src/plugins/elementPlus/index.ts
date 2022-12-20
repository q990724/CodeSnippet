import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { App } from "vue";

function setupElementPlus(app: App) {
	app.use(ElementPlus);
	console.log("ElementPlus 挂载成功！");
}

export default setupElementPlus;
