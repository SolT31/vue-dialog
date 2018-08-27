<template>
  <div class="dialogs-view">
    <template v-for="({comp, props, _resolve, _reject}, key) in $dialogs">
      <dialog-wrap
        :class="{active: active === key}"
        @activate="active = key"
        @deactivate="active = null"
        :key="key"
      >
        <component
          :is="comp"
          v-bind="props"
          @resolve="_resolve"
          @reject="_reject"
        />
      </dialog-wrap>
    </template>
  </div>
</template>

<script>
import dialogWrap from './dialog-wrap'

export default {
  name: 'dialogs-view',
  components: {
    dialogWrap
  },
  data: () => ({
    active: null
  })
}
</script>

<style scoped>
  .dialogs-view {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #343a40;
    top: 0px;
    left: 0px;
  }
</style>
