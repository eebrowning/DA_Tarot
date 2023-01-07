// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Athletes from './components/Athletes/Athletes';
import AthleteForm from './components/AthleteForm/AthleteForm';



function App() {

  return (
    <div className="App">
      <>
        <AthleteForm />
        < Athletes />
      </>
    </div>
  );
}

export default App;
