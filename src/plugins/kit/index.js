
import components from './components'

export default {
  install (Vue, config) {
    for (let name in components) {
      Vue.component(name, components[name])
    }
  }
}
