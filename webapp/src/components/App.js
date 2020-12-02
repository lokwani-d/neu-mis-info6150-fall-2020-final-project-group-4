import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Authentication/Login';

// const App = () => (
//   <>
//     <NavBar />
//   </>
// );

class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;
