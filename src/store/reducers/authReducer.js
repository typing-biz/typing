import { CHANGE_TOKEN, LOGIN, LOGOUT } from '../actions'

const local = JSON.parse(localStorage.getItem('user'))

const initialState = {
	user: null,
	token: null,
}

export const authReducer = (state = local || initialState, action) => {	
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload,
			}
		case CHANGE_TOKEN:
			return {
				...state,
				token: action.payload,
			}
		case LOGOUT:
			return initialState

		default:
			return state
	}
}
