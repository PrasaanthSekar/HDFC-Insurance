import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import './animate.min.css';

import './index.css'

class DashBoard extends Component {
  render() {
    let { parameters } = this.props
    console.log(parameters);
    let display = null;
    if (parameters !== null) {
      if (parameters.gender === "male") {
        display = <div className='singlemale bounceIn'></div>
      } else if (parameters.gender === "female") {
        display = <div className='singlefemale'></div>
      }
      if (parameters.status !== "Children" && parameters.Loanstatus !== "Loan" && parameters.status === "married") {
        display = <div className='marriedCouple'></div>
      }
    }

    return (
      <Paper zDepth={1} className='dashboard'>
        {display}
      </Paper>
    );
  }
}
function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { parameters } = dashBoardReducers;
  return { parameters }
}
export default connect(mapStateToProps)(DashBoard);