import axios from "axios";
import { GET_ALL_VIDEOGAMES } from "./actionTypes.js";

//Action para traer todos los videojuegos
export const getAllVideogames = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
