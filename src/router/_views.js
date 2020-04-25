import m from 'mithril'

export const Layout = {
  view: (vnode) => m('.layout', [
    m('ul', [
      m('li', m(m.route.Link, { href: '/login' }, 'Login (guest)')),
      m('li', m(m.route.Link, { href: '/guest' }, 'Guest (guest)')),
      m('li', m(m.route.Link, { href: '/about' }, 'About (auth)'))
    ]),
    vnode.children
  ])
}

// Code-split import function
const views = (fn, layout = true) => ({
  onmatch: () => import('views/' + fn).then(r => r.default),
  render: (component) => layout ? m(Layout, component) : component
})

export default views
