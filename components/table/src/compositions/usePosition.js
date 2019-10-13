import { ref, onMounted } from '@vue/composition-api'

export default function (ctx) {
  const x = ref(0)
  const y = ref(0)

  const width = ref(0)
  const height = ref(0)

  onMounted(() => {
    const wrapper = ctx.refs.wrapper
    x.value = wrapper.offsetLeft
    y.value = wrapper.offsetTop
    width.value = wrapper.offsetWidth
    height.value = wrapper.offsetHeight
  })

  return { x, y, width, height }
}
