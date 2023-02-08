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

import './animations/smoke.css'

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
            < Athletes path='/cards' />
          </Switch>
        </div>
      </BrowserRouter>
      <div className="logo-pulse">
        <img className="inq-logo" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59bc2eb0-69b1-42c5-a929-a029c3a783fc/d8atpo0-589deb6a-04fe-49d8-be76-d08411c464cf.png/v1/fill/w_1280,h_720,q_80,strp/dragon_age_inquisition_wallpaper_by_seigner_d8atpo0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNTliYzJlYjAtNjliMS00MmM1LWE5MjktYTAyOWMzYTc4M2ZjXC9kOGF0cG8wLTU4OWRlYjZhLTA0ZmUtNDlkOC1iZTc2LWQwODQxMWM0NjRjZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tfpsWn3m-5bXPCtJxQt0nJ3jswa-rMc_9YL8YCs-d1M'></img>
        <div className='pulse-circle' ></div>
      </div>
      <div className="clouds"></div>
      <div className='app-background'>

      </div>
    </div >
  );
}

export default App;
