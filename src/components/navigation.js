import m from 'mithril'
import Auth from 'models/auth'

const hideSidebar = () => {
  document.getElementById('js-sidebar').classList.toggle('active')
}

const Links = {
  view: (vnode) => {
    return m('li', {
      onclick: hideSidebar
    }, m(m.route.Link, { href: vnode.attrs.to }, vnode.children))
  }
}

const auth = Auth.state.isLogged

const Navigation = {
  view: () => (
    m('ul.nav-links', [
      m(Links, { to: '/' }, 'Home'),
      !auth && m(Links, { to: '/login' }, 'Login'),
      auth && m(Links, { to: '/admin' }, 'Admin')
    ])
  )
}

export default Navigation
