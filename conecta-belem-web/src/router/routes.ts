import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/user', component: () => import('pages/user/Login.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it

  // FINAL USER
  {
    path:'/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/user/Login.vue') },
      { path: 'signup', name: 'Register', component: () => import('pages/user/SignUp.vue') }
    ]
  },
  //EQUIPE DE CAMPO
  {
    path:'/equipe',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/user/Login.vue') }
    ]
  },
  //SUPORTE
  {
    path:'/suporte',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/user/Login.vue') }
    ]
  },
  //ADMIN
  {
    path:'/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/user/Login.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
