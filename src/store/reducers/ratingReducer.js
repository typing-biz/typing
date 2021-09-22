import { RATING, USER_RATING, USER_RECORD,SET_ALL_USERS_COUNT } from '../actions'

const initialState = {
	rating: [],
	history: [],
	record: '',
	all_users_count: null,
}

export const ratingReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case RATING:
			return {
				...state,
				rating: action.payload,
				pageIndex: action.pageIndex,
				pageSize: action.pageSize,
				totalCount: action.totalCount,
			}
		case USER_RATING:
			return {
				...state,
				history: action.payload,
			}
		case USER_RECORD:
			return {
				...state,
				record: action.payload,
			}
		case SET_ALL_USERS_COUNT: 
		return {
			...state,
			all_users_count: action.payload
		}
		default:
			return state
	}
}
