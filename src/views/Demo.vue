<template>
  <div class="demo">
    <div class="list">
      <div class="item" v-for="item in 100" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
.list {
  height: 300px;
  width: 200px;
  overflow-y: auto;
}
.item {
  height: 40px;
}
</style>
