import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import comments from './reducers/commentsReducer';
// import rootReducer from './reducers/rootreducer';
import albums from './reducers/albumReducer'
import todos from './reducers/todoReducer';
// import comments from './reducers/commentsReducer';
// import albumsReducer from './reducers/albumReducer';
import users from './reducers/userReducer'
// const rootReducer=combineReducers({
//   comments, 
//   albums
// })

const store= createStore(todos)
ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
