import m from 'mithril'
import Auth from 'models/auth'

const auth = (fn) => ({
  onmatch: () => {
    if (!Auth.state.isLoggedin) m.route.set('/login')
    else return import('views/' + fn).then(r => r.default)
  }
})

export default auth
