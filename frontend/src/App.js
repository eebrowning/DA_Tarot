// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Athletes from './components/Athletes/Athletes';
import AthleteForm from './components/AthleteForm/AthleteForm';
import Navigation from './components/Navigation';
import * as sessionActions from "./store/session";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation isLoaded={isLoaded} />
        <div className='sans-nav'>

          <Switch >
            < LoginFormPage path='/login' />
            < SignupFormPage path='/signup' />
            <AthleteForm path='/create' />
            {/* </Route> */}
            {/* <Route path='/' exact={true}> */}
            {/* </Route> */}
          </Switch>
        </div>
        < Athletes />
      </BrowserRouter>

    </div >
  );
}

export default App;
