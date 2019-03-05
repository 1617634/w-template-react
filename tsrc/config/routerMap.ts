


export interface RouteType {
  path: string,
  model?: string[],
  component: ()=>void
}

const routerMap:Array<RouteType> = [
  {
    path: '/',
    model: ['home'],
    component: ()=> import('../pages/home')
  },
  {
    path: '/detail/:id',
    model: ['detail'],
    component: ()=> import('../pages/detail')
  },
  {
    path: '/shopping-cart',
    model: [],
    component: ()=> import('../pages/shopping-cart')
  },
  {
    path: '/user',
    model: [],
    component: ()=> import('../pages/user')
  },
  {
    path: '/user',
    model: [],
    component: ()=> import('../pages/user')
  },
  {
    path: '404',
    component: ()=> import('../pages/404')
  },
]

export default routerMap