<template>
  <div id="app">
    <div class="container">
      <k-select label="Select" theme="pjm" v-model="value" caption-key="value">
        <template slot="tools">
          <k-search v-model="search" ref="search"/>
          <i-close @click="value = null"/>
        </template>
        <template v-for="elem in values">
          <k-option :value="elem" :key="elem.id">
            <span>{{elem.value}}</span>
          </k-option>
        </template>
      </k-select>
    </div>
  </div>
</template>

<script>
  import iClose from '../../plugins/kit/icons/close'

  export default {
    name: 'App',
    components: {
      iClose
    },
    data: () => ({
      search: null,
      value: {
        id: 1,
        value: 'one'
      },
      values: [
        {
          id: 1,
          value: 'one'
        },
        {
          id: 2,
          value: 'two'
        },
        {
          id: 3,
          value: 'three'
        },
        {
          id: 4,
          value: 'four'
        }
      ]
    }),
    mounted () {
      setTimeout(() => {
        this.$refs.search.focus()
      }, 2000)
    },
    watch: {
      search (val) {
        console.log(val)
      }
    },
    methods: {
      focus (val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="less">
  @import url('../../assets/styles/k-themes/select/pjm.less');

  * {
    box-sizing: border-box;
  }
  body {
    background: #e9ecef;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .container {
    width: 300px;
  }
</style>
