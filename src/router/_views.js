import m from 'mithril'
import Layout from 'components/layout'

// Code-split import function
const views = (fn, layout = true) => ({
  onmatch: () => import('views/' + fn).then(r => r.default),
  render: (component) => layout ? m(Layout, component) : component
})

export default views
