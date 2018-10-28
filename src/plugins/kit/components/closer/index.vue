<template>
  <div @mouseenter="focused = true" @mouseleave="focused = false" class="closer">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'k-closer',
    props: {
      value: {
        type: Boolean,
        required: true
      }
    },
    data: () => ({
      focused: false
    }),
    mounted () {
      document.addEventListener('click', this.closeHandler, true)
    },
    beforeDestroy () {
      document.removeEventListener('click', this.closeHandler, true)
    },
    methods: {
      closeHandler () {
        if (this.focused) return
        this.$emit('input', false)
      }
    }
  }
</script>
