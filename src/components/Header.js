import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Coins from "./coins";
import News from "./news";
import Markets from "./markets";

class Header extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    console.log(this.state);
    const activeItem = this.state.activeItem;
    return (
      <Menu>
        <Menu.Item header as={Link} to="/">
        Crypto-monnaie
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default Header;
