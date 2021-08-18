import { CHANGE_TOKEN, LOGIN, LOGOUT, TEXT } from '../actions'

const local = JSON.parse(localStorage.getItem('user'))

const initialState = local || {
	user: {
		thumbnail: '',
		fullName: '',
		email: '',
		isAuth: false,
	},
	token: '',
	text: '',
	id: '',
}

export const authReducer = (state = initialState, action) => {
	// console.log(action)
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: {
					thumbnail: action.payload.thumbnail,
					fullName: action.payload.fullName,
					email: action.payload.email,
					isAuth: true,
				},
			}
		case CHANGE_TOKEN:
			return {
				...state,
				token: action.payload,
			}
		case LOGOUT:
			return {
				...state,
				user: {
					thumbnail: '',
					fullName: '',
					email: '',
					isAuth: false,
				},
				token: '',
				text: '',
				id: '',
			}
		case TEXT:
			return {
				...state,
				text: action.payload,
				id: action.id,
			}
		default:
			return state
	}
}
