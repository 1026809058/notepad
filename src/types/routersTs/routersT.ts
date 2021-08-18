
export interface requireAuthT{
  isRequireAuth:Array<Object>//需要权限的路由
  notRequireAuth:Array<Object>//不需要权限的路由
  isShowRoutes:Array<Object>//显示在导航栏中的路由
  routesNameList:Array<String>//路由名称列表
}
