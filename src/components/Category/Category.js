import React from "react";
import './Category.css';
import lufeiSrc from '../../assets/images/lufei.jpg'

class Category extends React.Component {
  render() {
    return (
      <div style={{padding: 20}} class="category-container">
        <div class="row">
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
        </div>
        <div class="row">
          
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
          <div class="column">
            <img
              src={lufeiSrc}
              class="ui image"
            />
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default Category;
