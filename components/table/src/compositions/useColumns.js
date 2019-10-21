import { ref } from '@vue/composition-api'

export function useColumns () {
  const columns = ref([])

  return {
    columns
  }
}
