class Dep {
  constructor () {
    this.subs = []
  }

  addSub (watcher) {
    this.subs.push(watcher)
  }

  notify (params) {
    this.subs.forEach(sub => {
      sub(params)
    })
  }
}

export default Dep
