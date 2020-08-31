import React from "react";
import { Link } from "react-router-dom";



export function Navbar() {
  return (
    <div style={{margin: 0}} className="ui red inverted menu">
      <h2 className="ui item header">Sliceline</h2>
      <a className="item active">Home</a>
      <Link to='/menu' class="item">Menu</Link>
      <a ClassName="item">Friends</a>
      <div ClassName="right menu">
        <div ClassName="item">
          <div ClassName="ui icon input">
            <input type="text" placeholder="Search..." />
            <i ClassName="search link icon"></i>
          </div>
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
}
