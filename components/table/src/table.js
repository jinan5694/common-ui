import {
  createComponent,
  createElement as h,
  onMounted,
  ref
} from '@vue/composition-api'
// import useWrapperSize from './compositions/use-wrapper-size'
// import usePhantomPosition from './compositions/usePhantomPosition'

export default createComponent({
  name: 'CTable',
  props: {
    data: Array,
    columns: Array,
    height: { type: Number },
    rowHeight: { type: Number, default: 30 }
  },
  setup (props, ctx) {
    // const { width, height } = useWrapperSize(props)
    // const phantomStyle = usePhantomPosition(props)
    const visibleData = ref([])
    // const visibleColumns = ref([])

    function updateVisibleData () {
      console.log('updateVisibleData', props)
      visibleData.value = props.data.slice(1, 20)
    }
    onMounted(() => {
      updateVisibleData()
    })

    // return { left, top, width, height, visibleData, phantomStyle }
    return () => (
      <div ref="wrapper" class="c-table">table</div>
    )
  },
  methods: {
    handleScroll () {
      console.log('scroll')
    },
    renderRow (row, columns) {
      return (
        <div class="c-table__row">
          {
            columns.map(column => this.renderCell({ column, row }))
          }
        </div>
      )
    },
    renderCell ({ column, row, type }) {
      const content = type === 'header' ? column.label : row[column.prop]
      return <div class="c-table__cell" style={{ width: '200px' }}>{ content }</div>
    }
  },
  render () {
    return (
      <div ref="wrapper" class="c-table" onScroll={this.handleScroll}>
        <div class="c-table__phantom" style={ this.phantomStyle }></div>
        <div class="c-table__content">
          <div class="c-table__header">
            {
              this.columns.map(column => {
                return this.renderCell({ column, type: 'header' })
              })
            }
          </div>
          <div class="c-table__body">
            {
              this.visibleData.map(row => {
                return this.renderRow(row, this.columns)
              })
            }
          </div>
        </div>
        <pre>{this.left}</pre>
      </div>
    )
  }
})
