
export default [
  {
    path: '/login',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ],
  },
  {
    path:'/index',
    component:() =>import('components/login/list')
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }

]