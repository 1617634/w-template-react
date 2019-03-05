

import dva from 'dva';

import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

import '@/assets/styles/base.less'


const app = dva({
  history: createHistory(),
});

app.use(createLoading());


app.router(require('./router').default);

app.start('#root');

export default (app as any)._store; // eslint-disable-line

// hot-reload
if ((module as any).hot) {
  (module as any).hot.accept();
}
