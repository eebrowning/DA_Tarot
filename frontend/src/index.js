import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
// import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/index';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

// The session utility we just created
import { setAuthToken } from './util/session_api_util';

// We have not created this action yet, but will do so in the next step
import { thunkLogout } from './actions/session_actions';






document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(thunkLogout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }

  // Render our root component and pass in the store as a prop
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store} >
        {console.log('store', store)}
        <App />
      </Provider>
    </React.StrictMode>
  );

  // const root = document.getElementById('root');

  // ReactDOM.render(<Root store={store} />, root);
});










// let store = configureStore();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store} >
//       {console.log('store', store)}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
