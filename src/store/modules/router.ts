const state = {
  /*
  requireAuth:{
  isRequireAuth:[]//需要登录权限的列表
  notRequireAuth:[]//不需要登录权限的列表
  isShowRoutes：[]//在导航中显示的列表
  routesNameList:[]//路由列表名称
}
  */
  requireAuth: null,
};
const getters = {};
const mutations = {
  upIsRequireAuth(state: any, val: any) {
    state.requireAuth = val;
  },
  upRouteName(state: any, val: String) {
    state.routeName = val;
  },
};
const actions = {};
export default { naemspaced: true, state, getters, mutations, actions };
