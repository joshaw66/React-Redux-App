import { FETCH_BOOKS, UPDATE_BOOKS, SET_ERROR } from '../actions/action';

const initialState = {
  book: [],
  isFetching: false,
  error: ""
};

export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        isFetching: true,
        book: []
      };
    case UPDATE_BOOKS:
      return {
        ...state,
        book: action.payload,
        isFetching: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};