<template>
  <div class="Portal-wrap">
    <div id="MountChildAppNode"></div>
  </div>
</template>

<script>
import { start } from 'qiankun';
export default {
  name: 'Portal',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    if (!window.qiankunStarted) { // 避免重复挂载
      window.qiankunStarted = true
      start()
    }
  },
  beforeDestroy () {},
  methods: {}
}
</script>

<style scoped>
  .Portal-wrap{
    width: 100%;
    height: 100%;
    
  }
</style>