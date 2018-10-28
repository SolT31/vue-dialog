<template>
  <div :data-theme="theme" class="k-select">
    <label v-if="label">{{label}}</label>
    <div class="main">
      <div class="caption">{{caption}}</div>
      <div class="tools">
        <slot name="tools"/>
      </div>
    </div>
    <div @click.stop="clickHandler" class="options" :class="{'open': $data.open}">
      <slot/>
    </div>
  </div>
</template>

<script>
  import closer from '../../mixins/closer'

  export default {
    name: 'k-select',
    mixins: [closer],
    props: {
      label: String,
      theme: {
        type: String,
        default: 'default'
      },
      captionKey: [String, Number],
      value: {
        default: null
      }
    },
    computed: {
      caption () {
        if (this.value && this.captionKey) return this.value[this.captionKey]
        return this.value
      }
    },
    methods: {
      clickHandler (e) {
        let path = e.path || (e.composedPath && e.composedPath())
        let option = path.find(elem => elem._value)
        if (!option) return
        this.$emit('input', option._value)
        this.open = false
      }
    }
  }
</script>

<style lang="less">
  @import url('./themes/default.less');

  .k-select {
    position: relative;
    .caption { margin-right: auto; }
    .tools {
      display: flex;
      > * { margin: 0 4px; }
    }
    .main {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: flex-end;
    }
    .options {
      position: absolute;
      top: 100%;
      display: none;
      width: 100%;
      &.open {
        display: block;
      }
    }
  }
</style>
