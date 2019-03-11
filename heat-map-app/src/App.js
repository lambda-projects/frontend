import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StickyLayout from "./components/StickyLayout/StickyLayout";
import LoginForm from "./components/LoginForm/LoginForm";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <LoginForm />
        <StickyLayout />
      </Container>
    );
  }
}

export default App;
