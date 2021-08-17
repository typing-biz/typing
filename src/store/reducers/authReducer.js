import { CHANGE_TOKEN, LOGIN, LOGOUT, TEXT, RATING } from "../actions";

const local = JSON.parse(localStorage.getItem("user"));

const initialState = local || {
  user: {
    thumbnail: "",
    fullName: "user user",
    email: "aza12@gmail.com",
    isAuth: false,
  },
  rating: [],
  token: "",
  text: "",
  id: "",
};

export const authReducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          thumbnail: action.payload.thumbnail,
          fullName: action.payload.fullName,
          email: action.payload.email,
          isAuth: true,
        },
      };
    case CHANGE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          thumbnail: "",
          fullName: "",
          email: "",
	    	  isAuth: false,
        },
        token: "",
        text: "",
        id: "",
      };
    case TEXT:
      return {
        ...state,
        text: action.payload,
        id: action.id,
      };
    case RATING:
      return {
        ...state,
        rating: [action.payload],
      };

    default:
      return state;
  }
};
