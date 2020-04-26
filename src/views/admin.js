import m from 'mithril'
import Auth from 'models/auth'

const handleLogout = () => {
  Auth.actions
    .logout()
    .then(() => {
      window.location.href = '/login'
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
