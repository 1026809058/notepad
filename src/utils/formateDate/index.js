/*@format->
yyyy:年 2021
M：月 1
MM：月  01
W：周 星期一
WW：周  周日
d：日 1
dd：日  01
H：时 1
HH：时  01
h：时（12小时） 1
hh：时（12小时）  01
m：分 1
mm：分  01
s：秒 1
ss：秒  01
yyyy-MM-dd：2021-01-01
yyyy-M-d：2021-1-1
yyyy年M月d日：2021年1月1日
yyyy-MM-dd HH:mm:ss：2021-01-01 10:06:30
yyyy年M月d日 H小时m分s秒： 2021年1月1日 10小时6分30秒
HH:mm:ss：10:06:30

@use->
formatDate-val:正确日期格式
import formatDate from '@/utils/formateDate'
formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')//2021-07-30 12:09:02
*/
import {
  yyyy,
  MM,
  M,
  W,
  WW,
  d,
  dd,
  H,
  HH,
  h,
  hh,
  m,
  mm,
  s,
  ss,
} from './formatDate.js'

const formatDate = (val, format) => {
  switch (format) {
    case 'yyyy':
      return yyyy(val)
    case 'M':
      return M(val)
    case 'MM':
      return MM(val)
    case 'W':
      return W(val)
    case 'WW':
      return WW(val)
    case 'd':
      return d(val)
    case 'dd':
      return dd(val)
    case 'H':
      return H(val)
    case 'HH':
      return HH(val)
    case 'h':
      return h(val)
    case 'hh':
      return hh(val)
    case 'm':
      return m(val)
    case 'mm':
      return mm(val)
    case 's':
      return s(val)
    case 'ss':
      return ss(val)
    case 'yyyy-MM-dd':
      return `${yyyy(val)}-${MM(val)}-${dd(val)}`
    case 'yyyy-M-d':
      return `${yyyy(val)}-${M(val)}-${d(val)}`
    case 'yyyy年M月d日':
      return `${yyyy(val)}年${M(val)}月${d(val)}日`
    case 'yyyy-MM-dd HH:mm:ss':
      return `${yyyy(val)}-${MM(val)}-${dd(val)} ${HH(val)}:${mm(val)}:${ss(
        val
      )}`
    case 'yyyy年M月d日 H小时m分s秒':
      return `${yyyy(val)}年${M(val)}月${d(val)}日 ${H(val)}时${m(val)}分${s(
        val
      )}秒`
    case 'HH:mm:ss':
      return `${HH(val)}:${mm(val)}:${ss(val)}`
    default:
      console.error('formatDate传入参数 ' + format + ' 格式错误')
  }
}

export default formatDate
