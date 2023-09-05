import {
  DELETE_DETAIL_VIDEOGAME,
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
} from "./actionTypes";

let initialState = {
  videogames: [],
  videogameDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };

    case DELETE_DETAIL_VIDEOGAME:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
