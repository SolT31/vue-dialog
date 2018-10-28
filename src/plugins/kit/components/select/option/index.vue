
<script>
  export default {
    functional: true,
    name: 'k-option',
    props: {
      active: Boolean,
      value: {
        required: true
      }
    },
    render (h, c) {
      let params = {
        domProps: {
          _value: c.props.value
        },
        class: {
          option: true,
          active: c.props.active,
          disabled: c.props.disabled
        }
      }
      return h('div', params, c.children)
    }
  }
</script>
