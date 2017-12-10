import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import './animate.min.css';
import single from './images/single.png';
import women from './images/women.png';
import marriedCouple from './images/marriedCouple.png';
import marriedCoupleWithChildren from './images/marriedcouplewithchildren.png';
import marriedcouplewithhouseloan from './images/marriedcouplewithhouseloan.png';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css'

class DashBoard extends Component {
  render() {
    let { parameters ,actionIncomplete} = this.props
    let display = null;
    if (parameters !== null) {
      if (parameters.gender === "male") {
        display = <img src={single} className="animated bounce cartoon_img" />
      } else if (parameters.gender === "female") {
        display = <img src={women} className="animated bounce cartoon_img" />
      }
      if(parameters.status === "married"){
        display = <img src={marriedCouple} className="animated bounce cartoon_img" />
      }
      if(parameters.status === "married"){
        display = <img src={marriedCouple} className="animated bounce cartoon_img" />
      }
      if(parameters.child != "" && parameters.child != null){
        display = <img src={marriedCoupleWithChildren} className="animated bounce cartoon_img" />
      }
      if(parameters.homeloan != "" && parameters.homeloan != null){
        display = <img src={marriedcouplewithhouseloan} className="animated bounce cartoon_img" />
      }
    }

    return (
      <Paper zDepth={1} className='dashboard'>
        {display}
        <Paper zDepth={1} className='info_footer'>
          {actionIncomplete ? null : <RaisedButton label="NEXT" className='next-button' primary={true}  />}
        </Paper>
      </Paper>
    );
  }
}
function mapStateToProps(state) {
  const { dashBoardReducers } = state
  const { parameters ,actionIncomplete} = dashBoardReducers;
  return { parameters,actionIncomplete }
}
export default connect(mapStateToProps)(DashBoard);