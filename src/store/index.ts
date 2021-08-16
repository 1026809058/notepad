
import { createStore } from 'vuex'

interface MODULES {
    [key: string]: any;
}

// const modulesList = require.context("./modules", false, /\.ts$/);
const modulesList = import.meta.globEager("./modules/*.ts")

const modules: MODULES = {}
for (const key in modulesList) {
    const moduleName: string = key.replace(/^\.\/modules\/(.*)\.\w+$/, '$1') //取文件名
    const value: any = modulesList[key] //取文件的内容
    modules[moduleName] = value.default //赋值
}
// modulesList.keys().forEach((modulePath:any) => {
//     const moduleName: string = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') //取文件名
//     const value: any = modulesList(modulePath) //取文件的内容
//     modules[moduleName] = value.default //赋值
// })

const Store = createStore({
    modules,
})

export default Store
