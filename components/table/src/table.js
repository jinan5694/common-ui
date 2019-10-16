import './table.scss'
import { createComponent, onMounted } from '@vue/composition-api'
import useWrapperPosition from './compositions/usePosition'

export default createComponent({
  name: 'CTable',
  props: {
    data: Array,
    columns: Array,
    rowHeight: { type: Number, default: 30 }
  },
  setup (props, ctx) {
    const { x, y, width, height } = useWrapperPosition(ctx)

    onMounted(() => {
      console.log(`table 挂载时间：${width.value}`)
    })

    return { x, y, width, height }
  },
  methods: {
    getRow () {

    },
    getCell () {

    },
    renderMousePosition (ctx) {
      return <span>{ctx.x}|{ctx.y}</span>
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
      <div class="c-table" ref="wrapper">
        <div class="c-table__header">
          {
            this.columns.map(column => {
              return this.renderCell({ column, type: 'header' })
            })
          }
        </div>
        <div class="c-table__body">
          {
            this.data.map(row => {
              return this.renderRow(row, this.columns)
            })
          }
        </div>
      </div>
    )
  }
})
