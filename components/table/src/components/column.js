import { createComponent, createElement } from '@vue/composition-api'
export default createComponent({
  name: 'CTableColumn',
  props: {},
  setup (props, ctx) {
    console.log(props, ctx)

    const h = createElement
    return () => h('div', {
      class: {
        'c-table-column': true
      }
    }, 'column')
  }
})
