import React from "react";
import { connect } from "react-redux";
import { fetchMealsByCategory } from "../store/actions";
import FoodList from "./Food/FoodList"

class CategoryMenu extends React.Component {
  componentDidMount() {
    this.props.fetchMealsByCategory(this.props.match.params.id);
  }
  renderGrid() {
    return (
      <div key={this.props.category._id}>
        <FoodList category={this.props.category} />
      </div>
    );
  }
  render() {
    return <div>{this.renderGrid()}</div>;
  }
}

const mapStateToProps = (state, owmProps) => {
  console.log(state);
  return {
    category: state.categories[owmProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchMealsByCategory })(CategoryMenu);
