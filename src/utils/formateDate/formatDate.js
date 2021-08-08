/*
data:
return：当前时间
*/
const newDate = new Date()

/*
data:
return：yyyy(年)2021
*/
const yyyy = (data) => {
  return new Date(data).getFullYear()
}

/*
data:
return：月  01
*/
const MM = (data) => {
  let month = new Date(data).getMonth() + 1
  if (month < 10) {
    return '0' + month
  } else {
    return month
  }
}

/*
data:
return：月  1
*/
const M = (data) => {
  let month = new Date(data).getMonth() + 1
  return month
}
/*
data:
return：日  01
*/
const dd = (data) => {
  let date = new Date(data).getDate()
  if (date < 10) {
    return '0' + date
  } else {
    return date
  }
}

/*
data:
return：日  1
*/
const d = (data) => {
  let date = new Date(data).getDate()
  return date
}
/*
data:
return：h时01(12小时)
*/
const h = (data) => {
  let hours = new Date(data).getHours()
  if (hours > 12) {
    return hours - 12
  } else {
    return hours
  }
}

/*
data:
return：hh时01(12小时)
*/
const hh = (data) => {
  let hours = new Date(data).getHours()
  if (hours > 12) {
    let date = hours - 12
    if (date < 10) {
      return '0' + date
    } else {
      return date
    }
  } else {
    if (hours < 10) {
      return '0' + hours
    } else {
      return hours
    }
  }
}
/*
data:
return：HH时01
*/
const HH = (data) => {
  let hours = new Date(data).getHours()
  if (hours < 10) {
    return '0' + hours
  } else {
    return hours
  }
}

/*
data:
return：H时1
*/
const H = (data) => {
  let hours = new Date(data).getHours()
  return hours
}

/*
data:
return：mm分
*/
const mm = (data) => {
  let minutes = new Date(data).getMinutes()
  if (minutes < 10) {
    return '0' + minutes
  } else {
    return minutes
  }
}

/*
data:
return：m分 1
*/
const m = (data) => {
  let minutes = new Date(data).getMinutes()
  return minutes
}
/*
data:
return：秒  01
*/
const ss = (data) => {
  let seconds = new Date(data).getSeconds()
  if (seconds < 10) {
    return '0' + seconds
  } else {
    return seconds
  }
}

/*
data:
return：秒 1
*/
const s = (data) => {
  let seconds = new Date(data).getSeconds()
  return seconds
}
/*
data:
return：星期一
*/
const W = (data) => {
  let week = new Date(data).getDay()
  switch (week) {
    case 0:
      return '星期天'
    case 1:
      return '星期一'
    case 2:
      return '星期二'
    case 3:
      return '星期三'
    case 4:
      return '星期四'
    case 5:
      return '星期五'
    case 6:
      return '星期六'
    default:
      return
  }
}

/*
data:
return：周一
*/
const WW = (data) => {
  let week = new Date(data).getDay()
  switch (week) {
    case 0:
      return '周日'
    case 1:
      return '周一'
    case 2:
      return '周二'
    case 3:
      return '周三'
    case 4:
      return '周四'
    case 5:
      return '周五'
    case 6:
      return '周六'
    default:
      return
  }
}
export { yyyy, MM, M, W, WW, d, dd, H, HH, h, hh, m, mm, s, ss }
