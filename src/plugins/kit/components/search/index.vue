<script>
  export default {
    functional: true,
    name: 'k-search',
    render (h, c) {
      let icon = h('i', {class: 'icon'})
      let input = h('input', {
        ref: c.data.ref,
        attrs: {
          placeholder: c.props.placeholder
        },
        on: {
          ...c.data.on,
          input: e => c.listeners.input(e.target.value)
        }
      })
      return h('div', { class: ['search'] }, [input, icon])
    }
  }
</script>

<style scoped lang="less">
  .search {
    height: 20px;
    display: flex;
    input {
      outline: none;
      margin: 0px;
    }
    .icon {
      box-sizing: border-box;
      display: block;
      height: 20px;
      width: 20px;
      padding: 2px;
      background: url(./icon.svg) no-repeat;
      background-position: center;
    }
  }
</style>
