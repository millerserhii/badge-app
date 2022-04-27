import { createApp } from 'vue'
import App from './App'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon , FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)


app.mount("#app");