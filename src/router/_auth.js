import m from 'mithril'
import { Layout } from './_views'
import Auth from 'models/auth'

const auth = (fn, layout = true) => {
  return {
    onmatch: () => {
      if (!Auth.state.isLogged) m.route.set('/login')
      else return import('views/' + fn).then(r => r.default)
    },
    render: (component) => layout ? m(Layout, component) : component
  }
}

export default auth
