import { combineReducers } from 'redux'
import {CHANGE_CURRENT_PAGE} from '../Constants/actionTypes'
function dashBoardReducers(state = {currrentPage:'index'}, action) {
    switch(action.type){
        case CHANGE_CURRENT_PAGE :
        console.log(action)
            return Object.assign({}, state, {
                currrentPage: action.currrentPage
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dashBoardReducers
})

export default rootReducer