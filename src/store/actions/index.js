import { ContactsOutlined } from "@material-ui/icons"

let DEFAULT_URL_PROFILE = 'http://165.22.31.74:4080/account/profile'
let DEFAULT_URL_TEXT = 'http://165.22.31.74:4080/api/v1/typing'    //text
let DEFAULT_URL_TESTING = 'http://165.22.31.74:4080/api/v1/typing/complete'     //complete
let DEFAULT_URL_TOP_USERS = 'http://165.22.31.74:4080/api/v1/typing/ratings' 
let DEFAULT_URL_USER = 'http://165.22.31.74:4080/api/v1/typing/ratings/user' 
let DEFAULT_URL_USER__RECORD = 'http://165.22.31.74:4080/api/v1/typing/user/record' 
    
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'
export const TEXT = 'TEXT'
export const RATING = 'RATING'
export const USER_RATING= 'USER_RATING'
export const USER_RECORD = 'USER_RECORD'

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

export const sendTestingRequest = ({speed, accuracy, typingTextId}) => (dispatch, getState) => {
	const token = getState().authReducer.token
	fetch(DEFAULT_URL_TESTING, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
		body:JSON.stringify({speed,accuracy,typingTextId})
	})
		.then((response) => response.json())
		// .then((finish) => console.log(finish))
}

export const getRatingRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_TOP_USERS, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((rating) => dispatch(getRating(rating)) )
}



export const getRatingUserRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_USER, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((history) => dispatch(getUSerRatins(history))) 
		
}


export const getRecordUserRequest = (token) => (dispatch) => {
	fetch(DEFAULT_URL_USER__RECORD, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			id_token: token,
		},
	})
		.then((response) => response.json())
		.then((record) => dispatch(get_record(record)))
		
}

export const get_record = (record) => ({
	type:USER_RECORD , 
	payload:record,
})


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

export const getRating  = (rating) => ({
	type:RATING,
	payload:rating,

})

export const getUSerRatins = (history) => ({
	type:USER_RATING,
	payload:history,

})
