import React from "react";
import "./Category.css";
import lufeiSrc from "../../assets/images/lufei.jpg";

import CateItem from "./CategoryItem";
import { Grid} from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions";

class Category extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderGird() {
   return this.props.categories.map((cate) => {
      
      return (
        
        <Grid.Column key={cate._id}>
          <CateItem  image={cate.image} title={cate.name} id={cate._id} />
        </Grid.Column>
      );
    });
  }
  render() {
    return (
      
      <Grid>
        <Grid.Row columns={3}>{this.renderGird()}</Grid.Row>
      </Grid>
      // <div style={{ padding: 20 }} className="category-container">
      //   <h1></h1>
      //   <div className="row">
      //     <CateItem image={lufeiSrc} />
      //     <CateItem image={lufeiSrc} />
      //     <CateItem image={lufeiSrc} />
      //   </div>
      //   <div className="row">
      //     <div className="column">
      //       <img src={lufeiSrc} className="ui image" />
      //     </div>
      //     <div className="column">
      //       <img src={lufeiSrc} className="ui image" />
      //     </div>
      //     <div className="column">
      //       <img src={lufeiSrc} className="ui image" />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.categories),
  };
};

export default connect(mapStateToProps, { fetchCategories })(Category);
