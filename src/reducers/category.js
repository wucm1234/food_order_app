import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    
    default:
      return state;
  }
};
