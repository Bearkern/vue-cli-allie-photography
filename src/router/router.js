import { createRouter, createWebHashHistory } from 'vue-router';

const title = '艾里攝影工作室';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: `${title} - 首頁`,
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
          title: `${title} - 關於艾里`,
        },
      },
      {
        path: '/photographs',
        name: 'photographs',
        component: () => import('@/views/Photographs.vue'),
        meta: {
          title: `${title} - 攝影作品`,
        },
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/Projects.vue'),
        meta: {
          title: `${title} - 攝影方案`,
        },
      },
      {
        path: '/project/:projectId',
        name: 'project',
        component: () => import('@/views/Project.vue'),
        meta: {
          title: `${title} - 攝影方案詳細內容`,
        },
      },
      {
        path: '/appointment',
        name: 'appointment',
        component: () => import('@/views/Appointment.vue'),
        meta: {
          title: `${title} - 線上預約`,
        },
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
          title: `${title} - 聯絡我們`,
        },
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/Admin.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/admin/Dashboard.vue'),
        meta: {
          title: `${title} - 後台管理`,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/The404.vue'),
    meta: {
      title,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
