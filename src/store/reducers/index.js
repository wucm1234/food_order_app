import { combineReducers } from 'redux'

import mealReducer from "./meal";
import categoryReducer from "./category";

export default combineReducers({
  meals: mealReducer,
  categories: categoryReducer,
});