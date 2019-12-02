import { computed } from '@vue/composition-api'

export default function ({ data, columns }) {
  const width = computed(() => {
    return columns.reduce((acc, cur) => acc + (cur.value || 100), 0)
  })
  const height = computed(() => data.length * 30)

  const style = computed(() => {
    return {
      width: width.value + 'px',
      height: height.value + 'px'
    }
  })

  return style
}
