<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-menu-item index="/play">
              <span slot="title">Play</span>
            </el-menu-item>
            <el-menu-item index="/table">
              <span slot="title">Table</span>
            </el-menu-item>
            <el-menu-item index="/demo">
              <span slot="title">Demo</span>
            </el-menu-item>
            <el-menu-item index="/test">
              <span slot="title">Test</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    console.log('hello')
  },
  setup () {
    console.log('setup')
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fff;
}
</style>
