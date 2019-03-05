import * as React from 'react'
import { Router,  Route, Switch, }  from 'dva/router';
import Loadable from 'react-loadable'
import routerMap, { RouteType } from '@/config/routerMap'


const dynamicWrapper = (app, models: Array<string> = [], component: ()=>void ) => {
  models.forEach(model => {
    // eslint-disable-next-line
    app.model(require(`./models/${model}`).default);
  });

  return Loadable({
    loader: component,
    loading: () => {
      return (
        <div style={{textAlign: 'center', marginTop: '30%'}}>loading...</div>
      )
    },
  });
}

const getRouterData = (app):object => {
  let routerConfig = {}
  routerMap.forEach(v=>{
    routerConfig[v.path] = dynamicWrapper(app, v.model || [], v.component);
  })
  return routerConfig;
}


const RouterConfig: React.StatelessComponent<any> = ({ history, app }) => {
  const routerData = getRouterData(app)
  const NotFound = routerData['404']
  return (
    <Router history={history}>
      <Switch>
        {
          Object.keys(routerData).map(v=> <Route path={v} key={v} exact component={routerData[v]} /> )
        }
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}


export default RouterConfig;
