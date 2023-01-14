import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/assets/base.scss";
import "material-icons/iconfont/material-icons.css";
// import "@material-design-icons/font";

const app = createApp(App)
    .directive('hoist', el => {
        const elementClass = el.className ?? null
        if (el.tagName === 'TEMPLATE') {
            el.content.children[0].classList.add(elementClass)
            el.replaceWith(el.content)
        } else {
            el.children[0].classList.add(elementClass)
            el.replaceWith(...el.children)
        }
    }
)

app.use(createPinia());
app.use(router);

app.mount("#app");
