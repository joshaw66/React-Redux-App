// u8E_CG_G7yVyiGLS9295 LOTR API AUTHORIZATION CODE //

import axios from "axios";

export const FETCH_BOOKS = "FETCH_BOOKS";
export const UPDATE_BOOKS = "UPDATE_BOOKS";
export const SET_ERROR = "SET_ERROR";
export const getBookData = () => dispatch => {
 
    dispatch({ type: FETCH_BOOKS });
  
  axios
    .get("https://the-one-api.herokuapp.com/v1/book")
    .then(res => {
      dispatch({ type: UPDATE_BOOKS, payload: res.data.docs});
    })
    .catch(err => {
      console.error("error fetching data from book API, err:", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from API" });
    });
};