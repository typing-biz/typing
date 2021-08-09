let DEFAULT_URL_PROFILE= 'http://165.22.31.74:4080/account/profile'
let DEFAULT_URL_TEXT = 'http://165.22.31.74:4080/typing/text'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'

export const loginRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_PROFILE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((user) => dispatch(login(user)))
}
export const ratingRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_TEXT, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((rating) => console.log(rating))
}

export const login = (user) => ({
	type: LOGIN,
	payload: user,
})
export const change_token = (token) => ({
	type: CHANGE_TOKEN,
	payload: token,
})

export const logOut = () => ({
	type: LOGOUT,
})
