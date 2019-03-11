import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import LoginForm from "./components/LoginForm/LoginForm";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <LoginForm />
      </Container>
    );
  }
}

export default App;
