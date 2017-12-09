import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import './index.css'

class ChatBox extends Component {
  render() {
    return (
      <Paper zDepth={1} className = 'dashboard'>
        <div className = 'mengif'>
        </div>
      </Paper>
    );
  }
}

export default ChatBox;
