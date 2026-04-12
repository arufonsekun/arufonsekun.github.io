import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Starfield } from "./libs/starfield";

import "./assets/main.css";
import {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
} from "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
new Starfield(document.querySelector("canvas"), {
  speed: 0.5,
  density: 0.3,
  starSize: 1.5,
});

window.bootstrap = {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Offcanvas,
  Popover,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
};
