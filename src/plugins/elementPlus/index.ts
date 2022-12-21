import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { App } from "vue";

function setupElementPlus(app: App) {
    app.use(ElementPlus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
    console.log("ElementPlus 挂载成功！");
}

export default setupElementPlus;
