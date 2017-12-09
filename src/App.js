import React, { Component } from 'react';
import logo from './logo.svg';
import { ChatFeed, Message } from 'react-chat-ui'
import AppBar from 'material-ui/AppBar';

import ChatBox from './ChatBox/chatbox.js';
import Landing from './Landing/landing.js';
import './App.css';

const styles ={
  appstyle:{
    height:50
  },
  titleStyle:{
    fontSize: 20,
    height:50
  }
}
class App extends Component {
  render() {
    return (
      <div className="Container">
         <AppBar style={styles.appstyle} titleStyle ={styles.titleStyle} title="Insure Tech Hackathon" showMenuIconButton = {false} />
        <div><Landing /></div>
      </div>
    );
  }
}

export default App;
