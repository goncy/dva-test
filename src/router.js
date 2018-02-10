import { Router, Route } from 'dva/router';

import Index from "./routes/Index"

const router = ({history}) =>
  <Router history={history}>
    <Route path="/" component={Index} />
  </Router>

export default router