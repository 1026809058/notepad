"Print to console": {
"prefix": "v3",
"body": [
"<template>",
"\t<div>",
"\t</div>",
"</template>",
"<script lang=\"ts\">",
"import { defineComponent } from 'vue'",
"export default defineComponent({",
"\tname:'',",
"})",
"</script>"
],
"description": "Log output to console"
}

获取鼠标相对屏幕的坐标
function getMousePos(event) {
var e = event || window.event;//ie 和 chrome
return {'x':e.screenX,'y':screenY}
}

获取鼠标相对浏览器窗口的坐标
function getMousePos(event) {
var e = event || window.event;
return {'x':e.clientX,'y':clientY}
}

获取鼠标相对文档的坐标
function getMousePos(event) {
var e = event || window.event;
var scrollX = document.documentElement.scrollLeft || document.bodyscrollLeft;
var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
var x = e.pageX || e.clientX + scrollX;
var y = e.pageY || e.clientY + scrollY;
//alert('x: ' + x + '\ny: ' + y);
return { 'x': x, 'y': y };
}

error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054
大小限制
git config http.postBuffer 524288000（1024*1024*500）

curl 56 OpenSSL SSL_read:SSL_ERROR_sysCALL
git config http.sslVerify "false"

fatal: refusing to merge unrelated histories
git pull origin master --allow-unrelated-histories

git config --global --unset http.proxy
git config --global --unset https.proxy
