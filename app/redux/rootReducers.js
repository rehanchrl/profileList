import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import nav from "./nav";
import profileReducer from "../Profile/reducer";

const rootReducers = combineReducers({
  nav: nav,
  profileReducer,
  form: formReducer
});

export default rootReducers;
