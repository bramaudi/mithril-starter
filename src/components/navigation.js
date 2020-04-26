import m from 'mithril'

const navLinks = [
  { to: '/', text: 'Index' },
  { to: '/login', text: 'Login' },
  { to: '/admin', text: 'Admin' }
]

const hideSidebar = () => {
  document.getElementById('js-sidebar').classList.toggle('active')
}

const Navigation = {
  view: () => (
    m('ul.nav-links', [

      navLinks.map((nav, key) => (
        m('li', {
          onclick: hideSidebar
        }, m(m.route.Link, { href: nav.to }, nav.text))
      ))

    ])
  )
}

export default Navigation
