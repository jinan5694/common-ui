<template>
  <div class="c-table">
    <div class="c-table__header">
      header
    </div>
    <div class="c-table__body">
      body
    </div>
    <div class="c-table__footer">
      footer
    </div>
  </div>
</template>

<script>

export default {
  name: 'CTable',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      columns: [
        {prop: 'date', label: '日期', width: 180},
        {prop: 'name', label: '名称', width: 180},
        {prop: 'address', label: '地址'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-table {
  border: 1px solid red;
}
</style>
