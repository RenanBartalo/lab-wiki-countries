import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import countries from './countries.json';
import CountriesLists from './Components/CountriesList/CountriesList';
import Test from './Components/CountryDetails/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesLists list={countries} />

            <Switch>
              <Route
                path="/countrydetails/:id"
                render={(props) => <Test {...props} x={countries} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
