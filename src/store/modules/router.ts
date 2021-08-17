const state={
  //需要登录和不需要登录路由列表
  requireAuth:null,
  //当前路由name
  routeName:null,
}
const getters={

}
const mutations={
  upIsRequireAuth(state:any,val:any){
    state.requireAuth=val
  },
  upRouteName(state:any,val:String){
    state.routeName=val
  }
}
const actions={}
export default{naemspaced:true, state,getters,mutations,actions}
