import m from 'mithril'
import 'styles/layout.sass'
import Header from 'components/header'
import Navigation from 'components/navigation'

const Layout = {
  view: (vnode) => m('.layout', [
    m('nav.sidebar', [
      m('.nav-header', 'PDD'),
      m(Navigation)
    ]),

    m('main.mainbar', [
      m(Header),
      m('.main-content', vnode.children)
    ])
  ])
}

export default Layout
