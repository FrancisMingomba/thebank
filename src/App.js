import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';


class App extends Component {

  render() {

    return (
    
      <React.Fragment>
       <Home />
      
        <main className="">
          <Routes>           
               
               <Route path="/login" Component={LoginForm  } />
               <Route path="/register" Component={ RegisterForm  } />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;