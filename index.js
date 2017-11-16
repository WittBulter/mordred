module.exports = class Mordred {
  constructor() {
    this.plugins = []
  }

  use(plugin) {
    this.plugins.push(plugin)
    return this
  }
}
