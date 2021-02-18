import { ClientsOpinions, Login, Logup } from './pages';

const routing = {
  complete: {
    paths: [],
    routes: [
      {path: '/logup', component: Logup},
      {path: '/opinions/:username', component: ClientsOpinions},
    ]
  },
  nofooter: {
    paths: [],
    routes: [
      {path: '/login', component: Login},
    ]
  }
};

let { complete, nofooter } = routing;
complete.paths = complete.routes.map(route => route.path);
nofooter.paths = nofooter.routes.map(route => route.path);

export default routing;