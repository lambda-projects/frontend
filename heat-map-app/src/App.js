import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import LoginForm from "./components/LoginForm/LoginForm";
import HomePage from "./components/HomePage/HomePage";
import Alternate from "./components/Alternate/Alternate";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/alternate" component={Alternate} />
      </Container>
    );
  }
}

export default App;
