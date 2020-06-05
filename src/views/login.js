import m from 'mithril'
import Auth from 'models/auth'
import Input from 'components/form/input'
import { prefix as routerPrefix } from '../router/index'

const state = {
  username: '',
  password: '',
  failed: { status: false, message: '' }
}

const model = (field, value) => {
  state[field] = value
}

const handleSubmit = (e) => {
  e.preventDefault()
  const { username, password } = state
  Auth.actions
    .login({ username, password })
    .then((res) => {
      if (res) {
        window.location.href = `${routerPrefix}/admin`
      } else {
        model('failed', {
          status: true,
          message: 'Login failed, invalid credential.'
        })
      }
    })
}

const Component = {

  view: () => {
    return m('.d-center.d-maximize', [
      m('.card', [
        m('h3', 'Login'),
        m('p', 'Demo account:', m('br'), 'admin@admin123'),
        m('form', { onsubmit: handleSubmit }, [
          m(Input, {
            id: 'inp-user',
            label: 'Username',
            control: {
              type: 'text',
              name: 'username',
              oninput: (event) => model('username', event.target.value)
            }
          }),

          m(Input, {
            id: 'inp-pass',
            label: 'Password',
            control: {
              type: 'password',
              name: 'password',
              oninput: (event) => model('password', event.target.value)
            }
          }),

          m('button.btn', 'Login'),

          state.failed.status && m('p', state.failed.message)
        ])
      ])
    ])
  }
}

export default Component
