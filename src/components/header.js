import m from 'mithril'
import BarsIcon from 'assets/icons/bars.svg'

const toggleSidebar = () => {
  document.getElementById('js-sidebar').classList.toggle('active')
}

const Header = {
  view: () => (
    m('header.header', [
      m('.expand-btn', {
        onclick: toggleSidebar
      }, m('img', { src: BarsIcon })),
      'PDD'
    ])
  )
}

export default Header
