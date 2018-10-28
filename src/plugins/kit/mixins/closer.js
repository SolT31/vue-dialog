
export default {
  data () {
    return {
      open: false,
      focused: false
    }
  },
  mounted () {
    this.$el.addEventListener('click', e => {
      e.stopPropagation()
      this.$data.open = !this.$data.open
    })
    this.$el.addEventListener('mouseenter', () => { this.$data.focused = true })
    this.$el.addEventListener('mouseleave', () => { this.$data.focused = false })
    document.addEventListener('click', this.$_closeHandler, true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.$_closeHandler, true)
  },
  methods: {
    $_closeHandler () {
      if (this.$data.focused) return
      this.$data.open = false
    }
  }
}
