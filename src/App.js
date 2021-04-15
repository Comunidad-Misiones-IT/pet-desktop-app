import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    {/* <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/iniciosesión" component={InicioSesion} />
        <Route path="/nosotros" exact component={Nosotros} />
    </Switch> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
