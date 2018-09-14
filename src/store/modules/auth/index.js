import actions 		from './actions'
import mutations from './mutations'

const state = {
  user: {
    nome: ''

  },
  LoggedIn: false,
  token: '',
  errorForm: {
    type: '',
    text: ''
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
