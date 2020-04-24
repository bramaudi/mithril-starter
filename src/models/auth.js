const Auth = {

  state: {
    isLoggedin: false
  },

  actions: {
    login: () => new Promise((resolve) => {
      Auth.state.isLoggedin = true
      resolve()
    }),

    logout: () => { Auth.state.isLoggedin = false }
  }

}

export default Auth
