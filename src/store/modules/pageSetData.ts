const state={
  // 页面宽度
  screenWidth:null,
  // 页面高度
  screenHeight:null,
  //sideBar侧边栏展开收起状态
  sideBarType:true,
}
const getters={}
const mutations={
  getScreenWidth(state:any,val:Number){
    state.screenWidth=val
  },
  getScreenHeight(state:any,val:Number){
    state.screenHeight=val
  },
  getSideBarType(state:any,val:Boolean){
    state.sideBarType=val
  }
}
const actions={}
export default{state,getters,mutations,actions}
