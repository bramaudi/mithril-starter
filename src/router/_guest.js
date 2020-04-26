import m from 'mithril'
import Layout from 'components/layout'
import Auth from 'models/auth'

// If not meet the requirement then redirect to this
const fallbackRedirect = '/admin'

const auth = (fn, layout = true) => {
  return {
    onmatch: () => {
      if (Auth.state.isLogged) m.route.set(fallbackRedirect)
      else return import('views/' + fn).then(r => r.default)
    },
    render: (component) => layout ? m(Layout, component) : component
  }
}

export default auth
