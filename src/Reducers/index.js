import { combineReducers } from 'redux'
import {CHANGE_CURRENT_PAGE,ADD_MESSAGE,CHANGE_IMAGE} from '../Constants/actionTypes'
function dashBoardReducers(state = {currrentPage:'index',messages:[],parameters:null,actionIncomplete:true}, action) {
    switch(action.type){
        case CHANGE_CURRENT_PAGE :
            return Object.assign({}, state, {
                currrentPage: action.currrentPage,
            });
        case ADD_MESSAGE :
            return Object.assign({}, state, {
                messages: action.message,
            });
        case CHANGE_IMAGE:
            return Object.assign({}, state, {
                parameters: action.parameters,
                actionIncomplete:action.actionIncomplete
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dashBoardReducers
})

export default rootReducer