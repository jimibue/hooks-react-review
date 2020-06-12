import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeStyle={{ color: "red" }} to="/">
          home
        </NavLink>
        <NavLink activeStyle={{ color: "red" }} to="/effectCounter">
          effectCounter
        </NavLink>
        <NavLink activeStyle={{ color: "red" }} to="/toggler">
          toggler
        </NavLink>
        <NavLink activeStyle={{ color: "red" }} to="/posts">
          posts
        </NavLink>
      </div>
    );
  }
}
