// import logo from './logo.svg';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { BrowserRouter, Switch } from 'react-router-dom';
import Athletes from './components/Athletes/Athletes';
import AthleteForm from './components/AthleteForm/AthleteForm';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from "./store/session";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import UserProfilePage from "./components/UserProfile/UserProfilePage";
import './animations/smoke.css'
import Splash from "./components/Splash/splashPage";
import { thunkGetAllAthletes } from "./store/athletes";
// import PerfectScrollbar from 'react-perfect-scrollbar'


function App() {
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // const options = {
  //   scrollSpeed: 2,
  //   // minScrollbarLength: 100,
  //   maxScrollbarLength: 80,
  // };
  useEffect(() => {
    // dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkGetAllAthletes());
    dispatch(sessionActions.getAllUsers())
  }, [dispatch])

  return (
    <div className="App" >

      <div className='app-background'>
        <div className="clouds"></div>
        <div className="logo-pulse">
          <img className="inq-logo" alt='Inquisition logo on a dark background' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59bc2eb0-69b1-42c5-a929-a029c3a783fc/d8atpo0-589deb6a-04fe-49d8-be76-d08411c464cf.png/v1/fill/w_1280,h_720,q_80,strp/dragon_age_inquisition_wallpaper_by_seigner_d8atpo0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNTliYzJlYjAtNjliMS00MmM1LWE5MjktYTAyOWMzYTc4M2ZjXC9kOGF0cG8wLTU4OWRlYjZhLTA0ZmUtNDlkOC1iZTc2LWQwODQxMWM0NjRjZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tfpsWn3m-5bXPCtJxQt0nJ3jswa-rMc_9YL8YCs-d1M'></img>
          <div className='pulse-circle'></div>
        </div>

      </div>

      <BrowserRouter>
        <Navigation />
        <div className='sans-nav'>

          <Switch >
            < Splash exact path='/' />

            < LoginFormPage path='/login' />
            < SignupFormPage path='/signup' />
            <UserProfilePage path='/profile' />
            <AthleteForm path='/create' />
            < Athletes path='/cards' />
          </Switch>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
