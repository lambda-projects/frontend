import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
      </Container>
    );
  }
}

export default App;
