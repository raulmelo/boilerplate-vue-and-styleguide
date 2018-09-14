const Login = (context, payload) => {
  localStorage.setItem('token', token)
  context.commit('LOGIN_SUCESS', payload)
}

const ExitUser = (context) => {
  localStorage.removeItem('token')
  router.push({ name: 'login' })
  context.commit('EXIT_USER', '')
}

export default {
  Login,
  ExitUser
}
