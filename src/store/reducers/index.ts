import { combineReducers } from "redux";
import authReducer from "./authReducer";
import todolistReducer from "./todolistReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todolist: todolistReducer,
});

export default rootReducer;
