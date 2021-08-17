export function dowLoadFile(res, name) {
  /* 下载文件流文件助手函数 */
  const content = res;
  const blob = new Blob([content]);
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const elink = document.createElement("a");
    elink.download = name;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, name);
  }
  this.loadingExport = false;
}
