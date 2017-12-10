
import { Message } from 'react-chat-ui'
import {
    CHANGE_CURRENT_PAGE,
    ADD_MESSAGE,
    CHANGE_IMAGE
} from '../Constants/actionTypes'

const API_URL = 'https://api.dialogflow.com/v1/query?v=f15fb805-8fba-4d7a-a3f0-265889c91648';
const API_KEY = '01bd43f40a094b8bb016ba95509390d6';
const SESSION_ID = Math.random().toString(36).substring(10);

export function changePage(currrentPage) {
    return {
        type: CHANGE_CURRENT_PAGE,
        currrentPage
    }
}

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

function changeImage(actionIncomplete,parameters){
    return {
        type: CHANGE_IMAGE,
        parameters,
        actionIncomplete
    }
}
export function sendMessage(message,value){
    console.log(value)
    return (dispatch) =>{
    console.log(message)
    dispatch(addMessage([...message,new Message({ id: 0, message: value })]))
    fetch(API_URL, {
        method: 'post',
        headers: {
          "Content-type": "application/json",
                  "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify({ query: value, lang: "en", sessionId: SESSION_ID }),
      })
      .then(function (response) {
        if (response.status === 200) {
          response.json().then(function(data) {
            let actionIncomplete = true;
            if(data.result.action === "policyInfo"){
                actionIncomplete = data.result.actionIncomplete === true ;
            }
            
            dispatch(addMessage([...message,new Message({ id: 0, message: value }),new Message({ id: 1, message: data.result.fulfillment.speech })]))
            dispatch(changeImage(actionIncomplete,data.result.parameters))
         })
        }
     })
     .catch(function (error) {
        console.log('Request failed', error);
      })
    }
}