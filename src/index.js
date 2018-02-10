import dva from 'dva';

import counter from "./models/counter"
import router from "./router"

// Init
const app = dva();

// Models
app.model(counter);

// Router
app.router(router);

// Start
app.start('#root');
