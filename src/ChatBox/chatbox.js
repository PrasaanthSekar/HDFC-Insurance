import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {sendMessage} from '../Actions/dashboardAction'
import './index.css'

class ChatBox extends Component {
  state = {
    value:''
  }
  onChangeInput(e){
      this.setState({value:e.target.value})    
  }
  clearInput(){
    let {value} = this.state;
    let {dispatch,messages} = this.props;
    dispatch(sendMessage(messages,value));
    var objDiv = document.getElementById("style-2");
    objDiv.scrollTop = objDiv.scrollHeight+22;
    this.setState({
      value:'',
    }) 
  }
  render() {
    let {messages} = this.props;
    console.log(messages)
    return (
      <Paper className = "chatWindow" zDepth={1} >
        <div id='style-2' className="conversation">
        <div className='clear-fix'>
        <ChatFeed
          messages={messages} // Boolean: list of message objects
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

function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { messages } = dashBoardReducers;
  return { messages }
}
export default connect(mapStateToProps)(ChatBox);