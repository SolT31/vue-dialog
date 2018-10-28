<template>
  <div @click.stop class="dialog-wrap">
    <div @mousedown="mousedownHandler" class="dialog-head">
      <span>Text</span>
    </div>
    <div class="dialog-content">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '300px'
      },
      height: {
        type: String,
        default: '150px'
      }
    },
    data: () => ({
      taked: false,
      differenceX: 0,
      differenceY: 0,
      position: {}
    }),
    mounted () {
      this.$el.style.setProperty('--width', this.width)
      this.$el.style.setProperty('--height', this.height)
      document.addEventListener('mouseup', this.mouseupHandler, true)
      document.addEventListener('click', this.deactivate)
      this.position = this.$el.getBoundingClientRect()
    },
    beforeDestroy () {
      document.removeEventListener('mouseup', this.mouseupHandler, true)
      document.removeEventListener('click', this.deactivate)
    },
    watch: {
      taked (val) {
        if (val) document.addEventListener('mousemove', this.moveHandler)
        else document.removeEventListener('mousemove', this.moveHandler)
      }
    },
    methods: {
      activate () {
        this.$emit('activate')
      },
      deactivate () {
        this.$emit('deactivate')
      },
      moveHandler ({clientX, clientY}) {
        if (clientY - this.differenceY + this.position.height > window.innerHeight) {
          this.$el.style.setProperty('--top', `${window.innerHeight - this.position.height}px`)
        } else {
          if (clientY - this.differenceY < 0) this.$el.style.setProperty('--top', `0px`)
          else this.$el.style.setProperty('--top', `${clientY - this.differenceY}px`)
        }

        if (clientX - this.differenceX + this.position.width > window.innerWidth) {
          this.$el.style.setProperty('--left', `${window.innerWidth - this.position.width}px`)
        } else {
          if (clientX - this.differenceX < 0) this.$el.style.setProperty('--left', `0px`)
          else this.$el.style.setProperty('--left', `${clientX - this.differenceX}px`)
        }
      },
      mouseupHandler () {
        this.taked = false
        this.position = this.$el.getBoundingClientRect()
      },
      mousedownHandler ({clientX, clientY}) {
        this.activate()
        this.differenceX = clientX - this.position.left
        this.differenceY = clientY - this.position.top
        this.taked = true
      }
    }
  }
</script>

<style>
  .dialog-head {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    user-select: none;
    height: 30px;
    background: #EEE;
    cursor: move;
  }

  .dialog-wrap {
    border-radius: 4px;
    transition: transform 0.2s;
    position: absolute;
    width: var(--width);
    height: var(--height);
    background: #DDD;
    left: var(--left, auto);
    top: var(--top, auto);
    z-index: 0;
    transform: scale(0.98);
  }

  .dialog-wrap.active {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: #FFF;
    z-index: 1;
    transform: scale(1);
  }
</style>
