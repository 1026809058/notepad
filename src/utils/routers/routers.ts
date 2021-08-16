/*
@rotuerName
return路由列表的name值
*/
export function rotuerName(router:any):Object[]{
  let nameList:Array<object>=[]
  router.map((item: { children?: any,name:any })=>{
    if(typeof item.children !=='undefined'){
      if(item.children.length>0){
        rotuerName(item.children)
      }else{
      nameList.push(item.name)
      }
    }else{
      nameList.push(item.name)
    }
  })
  return nameList
}

/*
@setRotuerName
return去重数组
*/

export function setRotuerName(arr1:Array<string>,arr2:Array<string>){

}
