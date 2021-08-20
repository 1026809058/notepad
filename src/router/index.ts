/*
meta:{
       requireAuth: bool,//是否需要登录,true
       title:string,//标题
       isShowList:bool,//是否在导航栏显示，true
    },
*/

// import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";
import { requireAuth } from "../utils/routers/routers";
import setting from "../setting/setting"
import Notepad from "../views/notepad/index.vue"



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
    component: Notepad,
    meta: {
      requireAuth: true,
      icon:'el-icon-location',
      title:'学习dome'
    },
    children: [
      {
        path: "/myStudy/canvas",
        name: "Canvas",
        component: () => import("@/views/notepad/myStudy/canvas/index.vue"),
        meta: {
          icon:'el-icon-location',
          title:'Canvas'
        },
        // children: [
        //   {
        //     path: "/myStudy/canvas/canvas_01",
        //     name: "Canvas_01",
        //     component: () => import("@/views/notepad/myStudy/canvas/canvas_01/canvas_01.vue"),
        //     meta: {
        //       icon:'el-icon-location',
        //       title:'Canvas_01',
        //       isShowList:false
        //     },
        //   },
        // ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
//路由是否需要登录列表
const routeList= requireAuth(router.getRoutes());
store.commit('upIsRequireAuth', routeList)
console.log(routeList);

//路由守卫
router.beforeEach((to, from, next) => {
  //是否该存在路由
  if(routeList.routesNameList.indexOf(to.name as String)===-1){
    next({ name: 'NotFound' })
  }else{
    //是否开启登录拦截
    if(setting.isBeforeEach){
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
