import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import './index.css'

class ChatBox extends Component {
  state = {
    value:'',
    messages: [
      (new Message({ id: 1, message: "I'm the recipient! (The person you're talking to)" })), // Gray bubble
      (new Message({ id: 0, message: "I'm you -- the blue bubble!" })) // Blue bubble
    ]
  }
  onChangeInput(e){
      this.setState({value:e.target.value})    
  }
  clearInput(e){
    let {messages,value} = this.state;
    let self = this;
    var objDiv = document.getElementById("style-2");
    console.log(objDiv.scrollHeight+22);
    objDiv.scrollTop = objDiv.scrollHeight+22;
    fetch("https://api.dialogflow.com/v1/query?v=f15fb805-8fba-4d7a-a3f0-265889c91648", {
      method: 'post',
      headers: {
        "Content-type": "application/json",
				"Authorization": "Bearer " + '01bd43f40a094b8bb016ba95509390d6'
      },
      body: JSON.stringify({ query: value, lang: "en", sessionId: "somerandomthing" }),
    })
    .then(function (response) {
      if (response.status === 200) {
        response.json().then(function(data) {
          self.setState({
              value:'',
              messages:[...messages,(new Message({ id: 0, message: value })),(new Message({ id: 1, message: data.result.fulfillment.speech }))]
            }) 
          });
      }
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
    this.setState({
      value:'',
      messages:[...messages,(new Message({ id: 0, message: value }))]
    }) 


  }
  render() {
    return (
      <Paper className = "chatWindow" zDepth={1} >
        <div id='style-2' className="conversation">
        <div className='clear-fix'>
        <ChatFeed
          messages={this.state.messages} // Boolean: list of message objects
          isTyping={this.state.is_typing} // Boolean: is the recipient typing
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          // JSON: Custom bubble styles
          bubbleStyles={
            {
              text: {
                fontSize: 12
              },
              chatbubble: {
                borderRadius: 10,
                padding: 10
              }
            }
          }

        />
        </div>
        </div>
        <div className='textbox'>
          <TextField
            hintText="Ask something"
            onChange = {this.onChangeInput.bind(this)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.clearInput()
              }
            }}
            value = {this.state.value}
          />
        </div>
      </Paper>
    );
  }
}

export default ChatBox;
