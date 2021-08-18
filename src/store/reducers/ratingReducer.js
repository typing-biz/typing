
import {RATING , SET_PAGE_INDEX, USER_RATING} from '../actions'

// const local = JSON.parse(localStorage.getItem('user'))

const initialState =  {
	rating:[],
	history:[],
	pageIndex: 1,
	pageSize: 10,
	totalCount: 0,
}

export const ratingReducer = (state =  initialState, action) => {
	// console.log(action)
	switch (action.type) {
		
		case RATING : 
		return {
			...state,
			rating:action.payload,
			totalCount: action.payload
		}
		case USER_RATING:
			return{
				...state,
				history:action.payload
			}
        case SET_PAGE_INDEX: 
		    return{
				...state,
				pageIndex: action.payload
			}
		default:
			return state
	}
}
