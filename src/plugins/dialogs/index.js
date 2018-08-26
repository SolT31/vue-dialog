import DialogsView from './views/dialogs-view'

export default {
  install (Vue, config) {
    let state = {
      _dialogs: new Proxy({}, {
        get (target, prop) {
          return target[prop]
        },
        set (target, prop, value) {
          Vue.set(target, prop, value)
          return true
        },
        deleteProperty (target, prop) {
          Vue.delete(target, prop)
          return true
        }
      })
    }

    Vue.util.defineReactive(state, '_dialogs')

    Object.defineProperty(Vue.prototype, '$dialogs', {
      get: () => state._dialogs
    })

    Object.defineProperty(Vue.prototype, '$dialog', {
      get: () => ({
        create (comp, props, opt) {
          let _resolve, _reject
          let prommise = new Promise((resolve, reject) => {
            _resolve = resolve
            _reject = reject
          })
          let id = comp.name || Object.keys(state._dialogs).length
          state._dialogs[id] = {comp, props, _resolve, _reject}
          return prommise
        }
      })
    })

    Vue.component('dialogs-view', DialogsView)
  }
}
