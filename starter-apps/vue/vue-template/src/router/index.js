import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportABug from '../views/ReportABug.vue'

const routes  =[
  {
    path: '/:locale/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  { path: '/:locale/', name: 'Home', component: HomeView },
  { path: '/:locale/report-a-bug', name: 'ReportABug', component: ReportABug },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const locale = to.params.locale;
  if (!['en', 'fr'].includes(locale)) {
    return next('en');
  }
  next();
});

export default router
