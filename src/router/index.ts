/*
meta:{
       requireAuth: bool,//是否需要登录
       title:string,//标题
       isShowList:bool,//是否在导航栏显示，默认显示
    },
*/

import { nextTick } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { rotuerName, requireAuth } from "../utils/routers/routers";
import setting from "../setting/setting"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/system/login/index.vue"),
    meta: {
      requireAuth: false,
      isShowList:false
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/system/register/index.vue"),
    meta: {
      requireAuth: false,
      isShowList:false
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/system/error/403.vue"),
    meta: {
      requireAuth: false,
      isShowList:false
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/system/error/404.vue"),
    meta: {
      requireAuth: false,
      isShowList:false
    },
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@/views/system/error/notFound.vue"),
    meta: {
      requireAuth: false,
      isShowList:false
    },
  },
  {
    path: "/myStudy",
    name: "MyStudy",
    component: () => import("@/views/notepad/myStudy/index.vue"),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "/myStudy/settings",
        name: "Settings",
        component: () => import("@/views/notepad/myStudy/index.vue"),
        meta: {
          requireAuth: true,
          title:'设置'
        },
      },
    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 路由列表名称
let routesName=rotuerName(router.getRoutes());
//路由是否需要登录列表
let routeList= requireAuth(router.getRoutes());

//路由守卫
router.beforeEach((to, from, next) => {
  //是否该存在路由
      console.log(11,routesName)
  if(routesName.indexOf(to.name as String)===-1){
    next({ name: 'NotFound' })
  }else{
    //是否开启登录拦截
    if(setting.isBeforeEach){
      console.log(routeList.isRequireAuth)
      if(routeList.notRequireAuth.indexOf(to.name as String)!==-1){
        next({ name: 'Login' })
      }else{
        next()
      }
    next()
    }
  }
})





export default router;
