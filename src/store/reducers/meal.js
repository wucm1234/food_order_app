import _ from "lodash";

import { FETCH_MEALS } from '../action-type'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};
