export const isArray = o => {
  return Object.prototype.toString.call(o) === '[object Array]'
}

export const isObject = o => {
  return Object.prototype.toString.call(o) === '[object Object]'
}

export const isString = o => {
  return Object.prototype.toString.call(o) === '[object String]'
}

export const isNumber = o => {
  return Object.prototype.toString.call(o) === '[object Number]'
}

export const isDate = o => {
  return Object.prototype.toString.call(o) === '[object Date]'
}

export const isRegExp = o => {
  return Object.prototype.toString.call(o) === '[object RegExp]'
}
export const isFunction = o => {
  return Object.prototype.toString.call(o) === '[object Function]'
}
export const getClient = () => {
  return {
    width: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || 0,
    height: window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || 0
  }
}

/* istanbul ignore next */
export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
