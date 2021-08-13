let DEFAULT_URL_PROFILE = 'http://165.22.31.74:4080/account/profile'
let DEFAULT_URL_TEXT = 'http://165.22.31.74:4080/typing/text'
let DEFAULT_URL_TESTING = 'http://165.22.31.74:4080/typing/text/complete'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'
export const TEXT = 'TEXT'

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

export const getTextRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_TEXT, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((data) => dispatch(text(data.text, data.id)))
}

export const sendTestingRequest = ({speed, accuracy, fetchedId ,allSeconds}) => (dispatch, getState) => {
	const token = getState().authReducer.token
	fetch(DEFAULT_URL_TESTING, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
		body:JSON.stringify({speed,accuracy,fetchedId,allSeconds})
	})
		.then((response) => response.json())
		.then((finish) => console.log(finish))
}


export const text = (text, id) => ({
	type: TEXT,
	payload: text,
	id
})
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
