<template>
  <div class="play">
    <c-table :data="data" :columns="columns"></c-table>
  </div>
</template>

<script>
import CTable from '../../components/table'

export default {
  components: {
    CTable
  },
  data () {
    return {
      columns: [
        { prop: 'a', label: 'aaaaaaa' },
        { prop: 'b', label: 'bbbbbbb' },
        { prop: 'c', label: 'ccccccc' },
        { prop: 'd', label: 'ddddddd' },
        { prop: 'e', label: 'eeeeeee' },
        { prop: 'f', label: 'fffffff' },
        { prop: 'g', label: 'ggggggg' },
        { prop: 'h', label: 'hhhhhhh' },
        { prop: 'i', label: 'iiiiiii' },
        { prop: 'j', label: 'jjjjjjj' }
      ]
    }
  },
  computed: {
    data () {
      const data = []
      for (let index = 0; index < 99999; index++) {
        data.push({
          id: index,
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
          e: 'e',
          f: 'f',
          g: 'g',
          h: 'h',
          i: 'i',
          j: 'j'
        })
      }
      return data
    }
  }
}
</script>

<style>

</style>
