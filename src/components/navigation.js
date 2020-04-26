import m from 'mithril'

const navLinks = [
  { to: '/login', text: 'Login' },
  { to: '/admin', text: 'Admin' },
  { to: '/', text: 'Index' }
]

const Navigation = {
  view: () => (
    m('ul.nav-links', [

      navLinks.map((nav, key) => (
        m('li', m(m.route.Link, { href: nav.to }, nav.text))
      ))

    ])
  )
}

export default Navigation
