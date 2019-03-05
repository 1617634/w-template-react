

export default [
  {
    path: '/',
    model: ['home'],
    component: ()=> import('../pages/home')
  },
  {
    path: '/detail/:id',
    model: [],
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