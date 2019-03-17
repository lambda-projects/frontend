import React, { Component } from 'react';
import { Menu } from "semantic-ui-react";

import '../../App.css';


export default class LoginNavbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="aboutUs"
          active={activeItem === "aboutUs"}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>
      </Menu>
    );
  }
}
