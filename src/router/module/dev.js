const devRoutes = [
  {
    path: '/console',
    name: 'console',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Console.vue'),
  },
  {
    path: '/binddev',
    name: 'binddev',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Binddev.vue'),
  },
  {
    path: '/readall',
    name: 'readall',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Readall.vue'),
  },
  {
    path: '/readdev',
    name: 'readdev',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Readdev.vue'),
  },
  {
    path: '/ctrldev',
    name: 'ctrldev',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Ctrldev.vue'),
  },
];
export default devRoutes;
