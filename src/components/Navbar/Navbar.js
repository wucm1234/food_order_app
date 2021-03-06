import React from "react";
import { Link } from "react-router-dom";




export function Navbar() {
  return (
    <div style={{margin: 0}} className="ui red inverted menu">
      <h2 className="ui item header">Sliceline</h2>
      <Link to='/' className="item active">Home</Link>
      <Link to='/menu' className="item">Menu</Link>
      <a className="item">About Us</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
}
