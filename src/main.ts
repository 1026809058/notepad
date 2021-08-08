import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./assets/css/global.scss";
import "./assets/iconfont/iconfont.css";
import globa from "./components/globalComponents";

const app = createApp(App);
app.use(ElementPlus);
globa(app);
app.mount("#app");
