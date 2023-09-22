import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function contactReducer(state = initialState.contactSection, action) {
    console.log(JSON.stringify(action) +" 8");
    switch (action.type) {
        case actionTypes.ADD_EDUCATION:
            return {
                ...state,
                ...action.education
            }
        default:
            return state;
    }
}