
const LOGIN_SUCESS = (state, token) => {
	localStorage.setItem('token', token)
	state.token = token
	state.LoggedIn = true
}


const EXIT_USER = (state) => { 
	state.token = null
	state.LoggedIn = false	
}


export default {
	LOGIN_SUCESS,
	EXIT_USER,
}
