import { CHANGE_TOKEN, LOGIN, LOGOUT, TEXT} from '../actions'

const local = JSON.parse(localStorage.getItem('user'))

const initialState = local || {
	user: {
		thumbnail: '',
		fullName: 'user user',
		email: 'aza12@gmail.com'

	},
	token: '',
	text: '',
}

export const authReducer = (state =  initialState, action) => {
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
		case TEXT: 
		return {
			...state,
			text: action.payload,
		}

		default:
			return state
	}
}
