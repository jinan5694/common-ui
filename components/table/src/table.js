import './table.scss'
import { createComponent, ref, onMounted } from '@vue/composition-api'
import useWrapperPosition from './compositions/usePosition'
import { visible } from 'ansi-colors'

export default createComponent({
  name: 'CTable',
  props: {
    data: Array,
    columns: Array
  },
  data () {
    return {
      visibleData: [],
      visibleColumns: []
    }
  },
  setup (props, ctx) {
    const { x, y, width, height } = useWrapperPosition(ctx)

    return { x, y, width, height }
  },
  methods: {
    getRow () {

    },
    getCell () {

    },
    renderMousePosition (ctx) {
      return <span>{ctx.x}|{ctx.y}</span>
    }
  },
  render () {
    return (
      <div class="c-table" ref="wrapper">
        <div>
          {this.x}|{this.y}|{this.width}|{this.height}
        </div>
        <div>
          {this.columns.map(item => <p>{item.label}</p>)}
        </div>
        {this.renderMousePosition(this)}
      </div>
    )
  }
})
