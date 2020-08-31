import React from "react";
import FoodItem from "./Food/FoodItem";
import FoodList from "./Food/FoodList";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/meal";

class Menu extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderGrid() {
    return this.props.categories.map((cate) => {
      return (
        <div key={cate._id}>
          <FoodList  category={cate} />
        </div>
      );
    });
  }
  render() {
    console.log(this.props.categories);
    return <div>{this.renderGrid()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
  };
};
export default connect(mapStateToProps, { fetchCategories })(Menu);
