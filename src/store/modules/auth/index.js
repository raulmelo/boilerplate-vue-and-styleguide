import actions 		from './actions'
import mutations from './mutations'

const state = {
  API: process.env.VUE_APP_API,
  token: localStorage.getItem('token') || '',
  status: true,
  user: {},
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
}


export default {
	namespaced: true,
  	state,
	actions,
	mutations,
  getters,
}
