import { RATING, SET_PAGE_INDEX, USER_RATING } from '../actions'

// const local = JSON.parse(localStorage.getItem('user'))

const initialState = {
	rating: [],
	pageIndex: 1,
	pageSize: 5,
	totalCount: 0,
	history: [],
}

export const ratingReducer = (state = initialState, action) => {
	// console.log(action)
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
		case SET_PAGE_INDEX:
			return {
				...state,
				pageIndex: action.payload,
			}
		default:
			return state
	}
}
