<template functional>
  <i
    class="close"
    @click.stop="listeners.click"
    :style="{
      '--size': props.size,
      '--color': props.color
    }"
  />
</template>

<script>
  export default {
    props: {
      size: String,
      color: String
    }
  }
</script>

<style scoped lang="less">
  @import url('./main.less');

  .close {
    --size: 20px;
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--color, #000);
    cursor: pointer;
    &:after {transform: rotate(45deg);}
    &:before {transform: rotate(-45deg);}
    &:after, &:before {
      content: '';
      #center;
      width: inherit;
      color: inherit;
      background: currentColor;
      height: ~"calc(var(--size) / 6)";
    }
  }
</style>
