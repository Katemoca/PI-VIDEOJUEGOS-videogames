import {
  DELETE_DETAIL_VIDEOGAME,
  GET_ALL_GENRES,
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  RESET_DETAIL_TO_HOME,
  SEARCH_BY_NAME,
} from "./actionTypes";

let initialState = {
  videogames: [],
  videogamesBackUp: [],
  videogameDetail: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        videogamesBackUp: [...action.payload],
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

    case RESET_DETAIL_TO_HOME:
      return {
        ...state,
        videogameDetail: [],
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
