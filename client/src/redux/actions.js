import axios from "axios";
import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  DELETE_DETAIL_VIDEOGAME,
} from "./actionTypes.js";

//Action para traer todos los videojuegos
export const getAllVideogames = () => {
  return async function (dispatch) {
    const URL = "http://localhost:3001/videogames";
    try {
      const response = await axios.get(`${URL}`);
      dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error object:", error);
    }
  };
};

//Action para traer videojuego por ID
export const getVideogameByDetail = (idVideogame) => {
  return async function (dispatch) {
    const URL = "http://localhost:3001/videogames";
    try {
      const response = await axios.get(`${URL}/${idVideogame}`);
      dispatch({
        type: GET_VIDEOGAME_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

//Action para eliminar el detail del videojuego CREADO
export const deleteDetailVideogame = (detailId) => {
  return async function (dispatch) {
    const URL = "http://localhost:3001/videogames";
    try {
      await axios.get(`${URL}/${detailId}`);
      dispatch({ type: DELETE_DETAIL_VIDEOGAME, payload: detailId });
    } catch (error) {
      console.log(error.response);
    }
  };
};
