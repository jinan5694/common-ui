<template>
  <div class="demo">
    <c-table :data="data" :columns="columns"></c-table>

    <!-- <div class="c-table">
      <div class="c-table__header">
        <div class="c-table__cell">日期</div>
        <div class="c-table__cell">姓名</div>
        <div class="c-table__cell">地址</div>
      </div>
      <div class="c-table__body">
        <div class="c-table__row">
          <div class="c-table__cell">2016-05-02</div>
          <div class="c-table__cell">王小虎</div>
          <div class="c-table__cell">上海市普陀区金沙江路 1518 弄</div>
        </div>
        <div class="c-table__row">
          <div class="c-table__cell">2016-05-04</div>
          <div class="c-table__cell">王小虎</div>
          <div class="c-table__cell">上海市普陀区金沙江路 1517 弄</div>
        </div>
        <div class="c-table__row">
          <div class="c-table__cell">2016-05-01</div>
          <div class="c-table__cell">王小虎</div>
          <div class="c-table__cell">上海市普陀区金沙江路 1519 弄</div>
        </div>
        <div class="c-table__row">
          <div class="c-table__cell">2016-05-03</div>
          <div class="c-table__cell">王小虎</div>
          <div class="c-table__cell">上海市普陀区金沙江路 1516 弄</div>
        </div>
      </div>
    </div> -->

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
      data: [
        {
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
        }
      ]
    }
  },
  computed: {
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
