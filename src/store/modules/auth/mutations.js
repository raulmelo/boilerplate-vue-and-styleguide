
const LOGIN_SUCESS = (state, token) => {
	localStorage.setItem('token', token)
	state.token = token
}


const EXIT_USER = (state) => { 
	state.token = null
}


export default {
	LOGIN_SUCESS,
	EXIT_USER,
}
