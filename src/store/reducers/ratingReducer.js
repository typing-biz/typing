import { RATING, USER_RATING, USER_RECORD } from '../actions'

const initialState = {
	rating: [],
	pageIndex: 1,
	pageSize: 1,
	totalCount: 0,
	history: [],
	record: '',
}

export const ratingReducer = (state = initialState, action) => {
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
		default:
			return state
	}
}
