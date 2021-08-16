
import {RATING , USER_RATING} from '../actions'

// const local = JSON.parse(localStorage.getItem('user'))

const initialState =  {
	rating:[],
}

export const ratingReducer = (state =  initialState, action) => {
	// console.log(action)
	switch (action.type) {
		
		case RATING : 
		return {
			...state,
			rating:action.payload,
		}

		default:
			return state
	}
}
