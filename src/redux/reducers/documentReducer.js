import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function documentReducer(state = initialState.document, action) {
    // console.log(JSON.stringify(action) +" 8");
    switch (action.type) {
        case actionTypes.SET_SKIN:
            return {
                ...state,
                ...action.document
            }
        case actionTypes.UPDATE_SKIN:
            return {
                ...state,
                ...action.document
            }
        default:
            return state;
    }
}