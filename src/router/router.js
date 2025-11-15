import { createWebHistory, createRouter } from 'vue-router';
import home from '@/router/page/page-home.vue';

const notice = {
    path: '/notice', component: () => import('@/router/page/page-notice.vue'),
    children: [
        { path: '/notice/:title', component: () => import('@/router/view/notice-articles.vue') },
    ]
}

const forum = {
    path: '/forum', component: () => import('@/router/page/page-forum.vue')
}

const streaming = {
    path: '/streaming', component: () => import('@/router/page/page-streaming.vue')
}

const strategy = {
    path: '/strategy', component: () => import('@/router/page/page-strategy.vue'),
    redirect: '/strategy/1-1',
    children: [
        { path: '/strategy/1-1', component: () => import('@/router/view/strategy/strategy-1.vue') },
        { path: '/strategy/2-1', component: () => import('@/router/view/strategy/strategy-2.vue') },
        { path: '/strategy/2-2', component: () => import('@/router/view/strategy/strategy-2.vue') },
        { path: '/strategy/2-3', component: () => import('@/router/view/strategy/strategy-2.vue') },
        { path: '/strategy/3-1', component: () => import('@/router/view/strategy/strategy-3.vue') },
        { path: '/strategy/3-2', component: () => import('@/router/view/strategy/strategy-3.vue') },
        { path: '/strategy/3-3', component: () => import('@/router/view/strategy/strategy-3.vue') },
    ]
}

const handbook = {
    path: '/handbook', component: () => import('@/router/page/page-handbook.vue')
}

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    notice,
    forum,
    streaming,
    strategy,
    handbook,
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
        window.scrollTo(0, 0);
    }
    next();
});

export default router