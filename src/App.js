import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'


import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";
//import { fetchColors } from "./helpers/fetchColors";



function App() {

  const logout = (e) => {
    localStorage.removeItem('token')
    window.location.href= '/'

  }
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={logout}  href='/'>logout</a>
        </header> 

        <Route exact path="/" component={Login} />

        <PrivateRoute  path='/bubble'>
          <BubblePage/>
        </PrivateRoute>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.