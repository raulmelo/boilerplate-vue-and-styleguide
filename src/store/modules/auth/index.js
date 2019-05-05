import actions 		from './actions'
import mutations from './mutations'

const state = {
  token: localStorage.getItem('token') || '',
  user: {}
}

const getters = {
  isLoggedIn: state => !!state.token
}


export default {
	namespaced: true,
  state,
	actions,
	mutations,
  getters,
}
