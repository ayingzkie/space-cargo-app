import logo from './logo.svg';
// import './App.css';
import ShipmentsContainer from "./components/web/ShipmentsContainer";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DesktopLayout from "./components/layouts/DesktopLayout";

function App() {
  return (
    <div>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Router>
        <Switch>
          <DesktopLayout exact path="/" component={ShipmentsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
