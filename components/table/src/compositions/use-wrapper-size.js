import { ref, onMounted } from '@vue/composition-api'

export default function (ctx) {
  const width = ref(0)
  const height = ref(0)

  onMounted(() => {
    const wrapper = ctx.refs.wrapper

    width.value = wrapper.offsetWidth
    height.value = wrapper.offsetHeight
  })

  return { width, height }
}
