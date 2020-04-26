import m from 'mithril'
import './input.sass'

const RegulerInput = {
  view: (vnode) => {
    const {
      id,
      label,
      control
    } = vnode.attrs

    return (
      m('.form-group', [
        m('label', { for: id }, label),
        m('input', { ...control })
      ])
    )
  }
}

export default RegulerInput
