import '../App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Accelerometer from './Accelerometer';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path ="/accelerometer">
            <Accelerometer></Accelerometer>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
