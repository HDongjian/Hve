
import { getClient, on } from './lib'
import Dep from './dep'

let documentElement = document.documentElement
let sizeAuto = () => {
  let { width } = getClient()
  let clientWidth = width < 780 ? width : 780
  documentElement.style.fontSize = clientWidth / 15 + 'px'
}
let rpSize = () => {
  let { width, height } = getClient()
  rp.notify({ width: width, height: height })
}

sizeAuto()
on(document, 'DOMContentLoaded', rpSize)
on(window, 'orientationchange' in window ? 'orientationchange' : 'resize', function () {
  sizeAuto()
  rpSize()
})

export const rp = new Dep()
