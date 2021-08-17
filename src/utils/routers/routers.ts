import { RouteRecordRaw } from "vue-router";
// import {routesMeta} from "../../types/routersTs/routers"

/*
@rotuerName
return路由列表的name值
*/
export function rotuerName(router: any):Array<String|null|undefined> {
  let nameList: Array<String|null|undefined> = [];
  router.map((item: { children?: any; name: any }) => {
    if (typeof item.children !== "undefined") {
      if (item.children.length > 0) {
        nameList.push(item.name);
        rotuerName(item.children);
      } else {
        nameList.push(item.name);
      }
    } else {
      nameList.push(item.name);
    }
  });
  return nameList;
}

/*
@setRotuerName
return去重数组
*/

export function setRotuerName(arr1: Array<string>, arr2: Array<string>):Array<string> {
  let setArr = new Set([...arr1, ...arr2]);
  return Array.from(setArr);
}

/*
@requireAuth
return是否需要登录权限
*/
export function requireAuth(routes:any){
  let isRequireAuth:Array<Object>=[]
  let notRequireAuth:Array<Object>=[]
  routes.map((item:any)=>{
    if(typeof item.children!=='undefined'){
      if(item.children.length>0){
        if(typeof item.meta.requireAuth!=="undefined"){
          if(item.meta.requireAuth){
            isRequireAuth.push(item)
          }else{
            notRequireAuth.push(item)
          }
        }
        requireAuth(item.children)
      }else{
        if(typeof item.meta.requireAuth!=="undefined"){
          if(item.meta.requireAuth){
            isRequireAuth.push(item)
          }else{
            notRequireAuth.push(item)
          }
        }
      }
    }else{
        if(typeof item.meta.requireAuth!=="undefined"){
          if(item.meta.requireAuth){
            isRequireAuth.push(item)
          }else{
            notRequireAuth.push(item)
          }
        }
    }

  })
  return {isRequireAuth,notRequireAuth}
}
