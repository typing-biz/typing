
import {RATING , USER_RATING,USER_RECORD} from '../actions'

// const local = JSON.parse(localStorage.getItem('user'))

const initialState =  {
	rating:[],
	history:[],
	record : ""
}

export const ratingReducer = (state =  initialState, action) => {
	// console.log(action)
	switch (action.type) {
		
		case RATING : 
		return {
			...state,
			rating:action.payload,
		}
		case USER_RATING:
			return{
				...state,
				history:action.payload
			}

			case USER_RECORD:
			return{
					...state,
					record:action.payload

				}

		default:
			return state
	}
}
