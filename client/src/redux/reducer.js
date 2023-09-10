/* eslint-disable no-case-declarations */
import {
  DELETE_DETAIL_VIDEOGAME,
  GET_ALL_GENRES,
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  RESET_DETAIL_TO_HOME,
  SEARCH_BY_NAME,
  RESET_FILTERS,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  FILTER_BY_ORDER,
  FILTER_BY_RATING,
} from "./actionTypes";

let initialState = {
  videogames: [],
  videogamesBackUp: [],
  videogameDetail: [],
  genres: [],
  filteredVideogames: "ALL",
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

    case RESET_FILTERS:
      return {
        ...state,
        filteredVideogames: "ALL",
      };

    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames: state.videogamesBackUp.filter((game) => {
          return game.genres?.includes(action.payload);
        }),
      };

    case FILTER_BY_ORIGIN:
      if (action.payload === "api") {
        const apiVideogame = [...state.videogames].filter(
          (game) => game.createdVideoGame !== true
        );
        return { ...state, videogames: apiVideogame };
      } else if (action.payload === "db") {
        const dbVideogames = [...state.videogames].filter(
          (game) => game.createdVideoGame === true
        );
        return { ...state, videogames: dbVideogames };
      } else {
        return { ...state, videogames: state.videogamesBackUp };
      }

    case FILTER_BY_ORDER:
      let copyVideogames = [...state.videogames];
      let orderedGames;

      switch (action.payload) {
        case "a-z":
          orderedGames = copyVideogames.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
          break;

        case "z-a":
          orderedGames = copyVideogames.sort((a, b) =>
            b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
          );
          break;

        default:
          orderedGames = copyVideogames;
      }

      return {
        ...state,
        videogames: orderedGames,
      };

    case FILTER_BY_RATING:
      let copyVideoRating = [...state.videogames];
      let ratingGames;

      switch (action.payload) {
        case "1-9":
          ratingGames = copyVideoRating.sort((a, b) => {
            if (a.rating > b.rating) {
              return 1;
            }
            if (b.rating > a.rating) {
              return -1;
            }
            return 0;
          });
          break;

        case "9-1":
          ratingGames = copyVideoRating.sort((a, b) => {
            if (a.rating > b.rating) {
              return -1;
            }
            if (b.rating > a.rating) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          ratingGames = copyVideoRating;
      }

      return {
        ...state,
        videogames: ratingGames,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
