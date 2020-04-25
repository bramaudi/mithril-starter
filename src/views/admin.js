import m from 'mithril'

const AdminPage = {
  view: () => m('div', [
    'This is just page', m('br'),
    m(m.route.Link, { href: '/index' }, 'Index Page')
  ])
}

export default AdminPage
