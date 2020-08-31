import meals from "../../api/meal";
import meal from "../reducers/meal";

export const fetchCategories = () => async (dispatch) => {
  const response = await meals.get("/category/all");
  //console.log(response);
  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};

export const fetchMealsByCategory = (id) => async (dispatch) => {
  //const response = await meals.get(`?category_id=${id}`);
  const response = await meals.get(`/category/${id}`);
  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};
