import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userReducer from './reducers/userReducer'
import albumReducer from './reducers/albumReducer'
import photosReducer from './reducers/photosReducer'
import commentsReducer from './reducers/commentsReducer'
import todoReducer from './reducers/todosReducer'
import postsReducer from './reducers/postsReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import indexReducer from './reducers/indexReducer';
import idReducer from './reducers/idReducer';
import indexAlbumReducer from './reducers/indexAlbumReducer';

const rootReducer= combineReducers({
  comments:commentsReducer,
  todos:todoReducer,
  posts:postsReducer,
  photos:photosReducer,
  albums:albumReducer,
  users:userReducer,
  userIndex:indexReducer,
  postId:idReducer,
  albumId:indexAlbumReducer,
})
// store=createStore(todoReducer)
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import {createStore} from 'redux';

//port {combineReducers} from 'redux';

// const rootReducer= combineReducers({
//   comments:combineReducers,
// })
// const store=createStore(commentsReducer)
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
