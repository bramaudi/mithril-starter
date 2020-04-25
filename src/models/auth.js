const Auth = {

  state: {
    isLogged: false
  },

  actions: {
    login: () => new Promise((resolve) => {
      Auth.state.isLogged = true
      resolve()
    }),

    logout: () => { Auth.state.isLogged = false }
  }

}

export default Auth
