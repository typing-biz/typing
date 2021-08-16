import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ratingReducer } from "./ratingReducer";


export default combineReducers({
      authReducer,
      ratingReducer
})