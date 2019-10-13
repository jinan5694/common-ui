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
      data: [
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' },
        { name: 'a', address: 'xxx' }
      ]
    }
  },
  computed: {
    columns () {
      return [
        {
          label: 'name',
          prop: 'name'
        },
        {
          label: 'address',
          prop: 'address'
        }
      ]
    }
  }
}
</script>

<style>

</style>
