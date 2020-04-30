import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";


import { BookReducer as reducer } from './reducers/BookReducer';
import BookList from './components/BookList';
import FetchButton from '';



const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Lord of the Rings Books</h1>
        <FetchButton />
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
