
import { nextTick } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import {rotuerName} from '../utils/routers/routers'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name:'Login',
    component: () => import('@/views/system/login/index.vue'),
    meta:{
       hidden: true,
    }
  },
  {
    path: '/register',
    name:'Register',
    component: () => import('@/views/system/register/index.vue'),
    meta:{
       hidden: true,
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/system/error/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/system/error/404.vue'),
    meta:{
       hidden: true,
    }
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('@/views/system/error/notFound.vue'),
    meta:{
       hidden: true,
    }
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//router.addRoute前的路由列表
const staticRouters=rotuerName(router.getRoutes())
router.addRoute(
  {
    path: '/',
    name: 'MyStudy',
    component: () => import('@/views/notepad/myStudy/index.vue'),
    children: [{ path: '/settings',name:'Settings', component: () => import('@/views/notepad/myStudy/index.vue')}],
  },
)
router.replace(router.currentRoute.value.fullPath)
//router.addRoute后的路由列表
const dynamicRouters=rotuerName(router.getRoutes())

router.beforeEach((to, from,next) => {
  if(staticRouters.indexOf(to)!==-1){
    next()
  }else{

  }
  // ...
  // 返回 false 以取消导航
  return false
})
export default router
