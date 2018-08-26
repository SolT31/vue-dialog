<template>
  <div class="dialogs-view">
    <template v-for="({comp, props, _resolve, _reject}, key) in $dialogs">
      <component
        :is="comp"
        v-bind="props"
        @resolve="_resolve"
        @reject="_reject"
        :key="key"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'dialogs-view',
  mounted () {

  }
}
</script>

<style scoped>
  .dialogs-view {
    position: fixed;
    width: 100%;
    height: 100%;
    /* background: #343a40; */
    top: 0px;
    left: 0px;
  }
</style>
