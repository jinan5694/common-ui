<template>
  <div class="demo">
    <c-table :data="data" :columns="columns"></c-table>
  </div>
</template>

<script>
import CTable from '@/../components/table'
export default {
  components: {
    CTable
  },
  data () {
    return {

    }
  },
  computed: {
    data () {
      const data = []
      for (let i = 0; i < 100; i++) {
        data.push({
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        })
      }
      return data
    },
    columns () {
      return [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ]
    }
  }
}
</script>

<style>

</style>
