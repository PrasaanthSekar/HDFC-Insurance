import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';

import ChatBox from './ChatBox/chatbox.js';
import Landing from './Landing/landing.js';
import './App.css';
import Dashboard from './Dashboard/Dashboard.js';
import PolicyInfo from './PolicyInfo/policyinfo.js'

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
      let {currrentPage,dispatch} = this.props;
      let body;
      switch(currrentPage){
        case 'index':
         body = <Landing dispatch={dispatch}/>
         break;
        case 'dashboard':
          body =  <div className='chat_body'><ChatBox /><Dashboard  dispatch={dispatch}/></div>
          break;
        case 'policyInfo':
          body = <PolicyInfo dispatch={dispatch}/>
          break;
      }
    return (
      <div className="Container">
         <AppBar style={styles.appstyle} titleStyle ={styles.titleStyle} title="Insure Tech Hackathon" showMenuIconButton = {false} />
          {body}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { currrentPage } = dashBoardReducers;
  return { currrentPage }
}
export default connect(mapStateToProps)(App);
