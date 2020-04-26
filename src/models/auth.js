const Auth = {

  state: {
    isLogged: !!localStorage.getItem('token')
  },

  actions: {
    login: (payload) => new Promise((resolve) => {
      const { username, password } = payload
      let response
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('token', 'its just example')
        response = true
      } else {
        response = false
      }
      resolve(response)
    }),

    logout: () => {
      return new Promise((resolve) => {
        localStorage.removeItem('token')
        resolve()
      })
    }
  }

}

export default Auth
