import {
    CHANGE_CURRENT_PAGE
} from '../Constants/actionTypes'

export function changePage(currrentPage) {
    console.log(currrentPage)
    return {
        type: CHANGE_CURRENT_PAGE,
        currrentPage
    }
}