import m from 'mithril'
import Auth from 'models/auth'

const guest = (fn) => ({
  onmatch: () => {
    if (Auth.state.isLoggedin) m.route.set('/about')
    else return import('views/' + fn).then(r => r.default)
  }
})

export default guest
