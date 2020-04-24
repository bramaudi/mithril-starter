import m from 'mithril'

let count = 0
const increment = () => count++
const decrement = () => count--

const IndexPage = {
  view: () => {
    return m('.box', [
      m('.count', count),
      m('button', { onclick: increment }, '+'),
      m('button', { onclick: () => decrement() }, '-'),
      m('br'),
      m(m.route.Link, { href: '/about' }, 'About Page')
    ])
  }
}

export default IndexPage
