import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LoginForm from './components/loginForm';


class App extends Component {

  render() {

    return (
    
      <React.Fragment>
       <Home />
      
        <main className="">
          <Routes>           
               
               <Route path="login" Component={LoginForm  } />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;