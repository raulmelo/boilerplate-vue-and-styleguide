import actions from './actions'
import mutations from './mutations'

const state = {
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
