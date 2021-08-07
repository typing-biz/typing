import { CHANGE_TOKEN, LOGIN } from '../actions'

const local = JSON.parse(localStorage.getItem('user'))

const initialState = {
	user: 'null',
	token: null,
}

export const authReducer = (state = local || initialState, action) => {
	switch (action.type) {
		case LOGIN:
			console.log(action)
			return {
				...state,
				user: action.payload,
			}
		case CHANGE_TOKEN:
			return {
				...state,
				token: action.payload,
			}

		default:
			return state
	}
}
