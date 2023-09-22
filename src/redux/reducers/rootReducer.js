import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
import documentReducer from "./documentReducer";
import educationReducer from './educationReducer'
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer : contactReducer,
    educationReducer : educationReducer
})
export default rootReducer;
