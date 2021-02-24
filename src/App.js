import React from 'react';
import './App.css';
import HomeScreen from './components/Screen/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-dom";
import Login from './components/Screen/Login';

function App() {
  const user = null;
  return (
    <div className="App">
      {!user
        ? (<Login />)
        : (
          <Router>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Router>
        )}

    </div>
  );
}

export default App;
