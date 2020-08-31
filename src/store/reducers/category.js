import _ from "lodash";
import { FETCH_CATEGORIES } from '../action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    
    default:
      return state;
  }
};
