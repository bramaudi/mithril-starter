import m from 'mithril'
import Auth from 'models/auth'
import { prefix as routerPrefix } from '../router/index'

const handleLogout = () => {
  Auth.actions
    .logout()
    .then(() => {
      window.location.reload()
    })
}

const AdminPage = {
  view: () => m('div', [
    'This is just page', m('br'),
    m(m.route.Link, { href: '/index' }, 'Index Page'), ' or ',
    m(m.route.Link, { href: '#', onclick: handleLogout }, 'Logout')
  ])
}

export default AdminPage
