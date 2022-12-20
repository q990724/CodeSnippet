import { createApp } from "vue";
import App from "./App.vue";
import "./samples/node-api";
import setupAllPlugins from "./plugins";
import setupRouter from "./router/router";
import "./assets/global.scss";

function bootstrap() {
    const app = createApp(App);

    setupAllPlugins(app);
    setupRouter(app);
    app.mount("#app").$nextTick(() => {
        postMessage({ payload: "removeLoading" }, "*");
    });
}

bootstrap();
