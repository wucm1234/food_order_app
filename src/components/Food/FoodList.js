import React from "react";

import { Grid} from "semantic-ui-react";
import CateItem from "../Food/FoodItem";
class FoodList extends React.Component {

  renderGird() {
    return this.props.category.meals.map((meal) => {
       
       return (
         
         <Grid.Column key={meal._id}>
           <CateItem  meal={meal} />
         </Grid.Column>
       );
     });
   }
  render() {
    const cateInfo = this.props.category;
    return (
    <div>
      <h1>{cateInfo.name}</h1>
      <Grid>
        <Grid.Row columns={4}>{this.renderGird()}</Grid.Row>
      </Grid>
      </div>
    );
  }

}


export default FoodList;
