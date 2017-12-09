import React, { Component } from 'react';
import logo from './logo.svg';
import { ChatFeed, Message } from 'react-chat-ui'
import AppBar from 'material-ui/AppBar';

import ChatBox from './ChatBox'
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
         <AppBar style={styles.appstyle} titleStyle ={styles.titleStyle} title="INSURE TECH" showMenuIconButton = {false} />
        <div><ChatBox /></div>
      </div>
    );
  }
}

export default App;
