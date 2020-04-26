import m from 'mithril'
import 'assets/styles/layout.sass'
import Header from 'components/header'
import Navigation from 'components/navigation'

const Layout = {
  view: (vnode) => m('.layout', [
    m('nav.sidebar', { id: 'js-sidebar' }, [
      m('.nav-header', 'Menu'),
      m(Navigation)
    ]),

    m('main.mainbar', [
      m(Header),
      m('.main-content', vnode.children)
    ])
  ])
}

export default Layout
