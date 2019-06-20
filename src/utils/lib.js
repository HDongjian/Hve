
const lib = {
  isArray (o) {
    return Object.prototype.toString.call(o) === '[object Array]'
  },

  isObject (o) {
    return Object.prototype.toString.call(o) === '[object Object]'
  },

  isString (o) {
    return Object.prototype.toString.call(o) === '[object String]'
  },

  isNumber (o) {
    return Object.prototype.toString.call(o) === '[object Number]'
  },

  isDate (o) {
    return Object.prototype.toString.call(o) === '[object Date]'
  },

  isRegExp (o) {
    return Object.prototype.toString.call(o) === '[object RegExp]'
  },
  isFunction (o) {
    return Object.prototype.toString.call(o) === '[object Function]'
  },
  getClient () {
    return {
      width: window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth || 0,
      height: window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight || 0
    }
  }
}

export default lib
