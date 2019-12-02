import foo from './components/foo'
import bar from './components/bar'

const components = [
  foo,
  bar
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  foo,
  bar
}
