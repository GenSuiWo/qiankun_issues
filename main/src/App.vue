<template>
  <div class="App-wrap-1">
    <ul class="nav">
      <li :class="{'is-active': router.active}"
          v-for="(router) in menuData"
          :key="router.path"
          @click="handleClickNav(router)">{{router.name}}</li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
      menuData:[
        {
          name: '主应用路由1',
          path:'/',
          active: false
        },
        {
          name: '主应用路由2',
          path:'/router2',
          active: false
        },
        {
          name: '子应用路由1',
          path:'/portal/router1',
          active: false
        },
        {
          name: '子应用路由2',
          path:'/portal/router2',
          active: false
        }
      ]
    }
  },
  computed: {},
  watch: {
    // 深度监听路由变化
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
      },
      deep: true,
      immediate: true
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  beforeDestroy () {},
  methods: {
    handleClickNav(r){
      this.menuData.forEach( item => {
        item.active = false
      })
      r.active = true
      this.$router.push(r.path)
    }
  }
}
</script>

<style scoped>
  .App-wrap{
    width: 100%;
    height: 100%;
  }
  .nav{
    width: 100%;
    background-color: #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav li{
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
  }
  .is-active{
    background: #ffffff;
    color: #000000;
    border-bottom: 2px solid orange;
  }
</style>