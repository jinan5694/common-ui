<script>
import { createComponent, ref, reactive } from '@vue/composition-api'

export default createComponent({
  setup () {
    // const h = createElement
    const count = ref(0)
    const object = reactive({ foo: 'bar' })

    return () => (
      <div>{count}{object}</div>
    )
  }
})
</script>

<style>

</style>
