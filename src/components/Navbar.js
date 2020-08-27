import React from "react";



export function Navbar() {
  return (
    <div style={{margin: 0}} class="ui red inverted menu">
      <h2 class="ui item header">Sliceline</h2>
      <a class="item active">Home</a>
      <a class="item">Menu</a>
      <a class="item">Friends</a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
}
