import m from 'mithril'
import Auth from 'models/auth'

const login = () => {
  Auth.actions
    .login()
    .then(() => {
      m.route.set('/about')
    })
}

const IndexPage = {
  view: () => {
    return m('.box', [
      m('button', { onclick: login }, 'Login')
    ])
  }
}

export default IndexPage
