<template>
  <div class="c-table">
    <div ref="wrapper" class="c-table-wrapper" @scroll="handleScroll">
      <div class="c-table-phantom" :style="{height: contentHeight, width: contentWidth}"></div>
      <div ref="content" class="c-table-content" :style="{transform: translate3d}">
        <div class="c-table-item" v-for="item in visibleData" :key="item.id">
          <div class="c-table-cell" v-for="column in visibleColumns" :key="column.prop">
            {{item[column.prop]}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './table.scss'
export default {
  name: 'CTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    itemHeight: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      visibleData: [],
      visibleColumns: [],
      tx: 0,
      ty: 0
    }
  },
  computed: {
    contentHeight () {
      return this.data.length * 30 + 'px'
    },
    contentWidth () {
      return this.columns.length * 100 + 'px'
    },
    translate3d () {
      return `translate3d(${this.tx}px, ${this.ty}px, 0)`
    }
  },
  mounted () {
    this.updateVisibleData()
    this.updateVisibleColumns()
  },
  methods: {
    updateVisibleData (scrollTop = 0) {
      console.log('scrollTop', scrollTop)
      const visibleCount = Math.ceil(this.$refs.wrapper.clientHeight / this.itemHeight)
      const start = Math.floor(scrollTop / this.itemHeight)
      const end = start + visibleCount
      this.visibleData = this.data.slice(start, end)
      console.log('start', start)
      this.ty = start * this.itemHeight
    },
    updateVisibleColumns (scrollLeft = 0) {
      const visibleCount = Math.ceil(this.$refs.wrapper.clientWidth / 100)
      const start = Math.floor(scrollLeft / 100)
      const end = start + visibleCount + 1
      this.visibleColumns = this.columns.slice(start, end)
      this.tx = start * 100
    },
    handleScroll () {
      const scrollTop = this.$refs.wrapper.scrollTop
      this.updateVisibleData(scrollTop)

      const scrollLeft = this.$refs.wrapper.scrollLeft
      this.updateVisibleColumns(scrollLeft)
    }
  }
}
</script>

<style>

</style>
