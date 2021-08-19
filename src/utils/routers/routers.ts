import { requireAuthT } from "../../types/routersTs/routersT";

/*
@setRotuerName
return去重数组
*/

export function setRotuerName(
  arr1: Array<string>,
  arr2: Array<string>
): Array<string> {
  let setArr = new Set([...arr1, ...arr2]);
  return Array.from(setArr);
}

/*
@requireAuth
return:{
  isRequireAuth:[]//需要登录权限的列表
  notRequireAuth:[]//不需要登录权限的列表
  isShowRoutes：[]//在导航中显示的列表
  routesNameList:[]//路由列表名称
}
*/
export function requireAuth(routes: any): requireAuthT {
  let isRequireAuth: Array<Object> = [];
  let notRequireAuth: Array<Object> = [];
  let isShowRoutes: Array<Object> = [];
  let routesNameList: Array<String> = [];

  routes.map((item: any) => {
    //是否存在子路由
    typeof item.children === "undefined" ? (item.children = []) : false;
    routesNameList.push(item.name);
    //路由登录权限需求判断
    typeof item.meta.requireAuth === "undefined"
      ? (item.meta.requireAuth = true)
      : false;
    if (item.meta.requireAuth) {
      isRequireAuth.push(item);
    } else {
      notRequireAuth.push(item);
    }
    //导航中是否显示判断
    typeof item.meta.isShowList === "undefined"
      ? (item.meta.isShowList = true)
      : false;
    if (item.meta.isShowList) {
      isShowRoutes.push(item);
    }
    //子路由有数据就递归
    if (item.children.length > 0) {
      requireAuth(item.children);
    }
  });
  return { isRequireAuth, notRequireAuth, isShowRoutes,routesNameList };
}

/*
@clearChildrenRouter
return:[],返回path路径只有一级 / 的路由，去除没有子路由的路由列表
*/
export function clearChildrenRouter(arr:any){
  const rule=/\//g
  let lastArr:Array<object>=[]
  arr.map((item:any)=>{
    let match=item.path.match(rule)
    if(match.length<=1){
      lastArr.push(item)
    }
  })
  return lastArr
}
