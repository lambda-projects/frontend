import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import LoginForm from "./components/LoginForm/LoginForm";
import Signup from "./components/LoginForm/Signup";
import Home from "./components/Home/Home";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App" style={{ width: '100%' }}>
        <Route 
          exact 
          path="/" 
          render={props => <Home {...props} />} 
        />
        <Route 
          path="/login" 
          render={props => <LoginForm {...props} />} 
        />
        <Route 
          path="/signup" 
          render={props => <Signup {...props} />}
        />
      </Container>
    );
  }
}

export default App;
