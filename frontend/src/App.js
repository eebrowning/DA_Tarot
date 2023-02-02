// import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Athletes from './components/Athletes/Athletes';
import AthleteForm from './components/AthleteForm/AthleteForm';



function App() {

  return (
    <div className="App">
      <BrowserRouter>

        {/* <Switch> */}
        {/* <Route path='/new-athlete' exact={true}> */}
        <AthleteForm />
        {/* </Route> */}
        {/* <Route path='/' exact={true}> */}
        < Athletes />
        {/* </Route> */}
        {/* </Switch> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
