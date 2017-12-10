import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {changePage} from '../Actions/dashboardAction'
import './landing.css';

const style = {
    height: 100,
    width: 100,
    margin: 30,
    textAlign: 'center',
    display: 'inline-block',
};

class Landing extends Component {
    render() {
        let {dispatch} = this.props;
        return (
            <div className="Container">
                <div className="banner">
                    <div className="banner-text">
                        <span className="banner-heading">Insurance </span><br />
                        <span className="banner-heading">Hackathon</span>

                        <span className="banner-content">Chat with our new interative bot to know more about our insurance policies with our new interactive experience. Click on try now to enter an all new experience</span>
                        <FlatButton className="btn-color" onClick={() => dispatch(changePage('dashboard'))}  label="Try now" />
                    </div>
                </div>
                <div class="main">
                    <Paper className="avatar-left" style={style} zDepth={2} circle={true} />
                    <div class="sub">
                        <div class="font">
                            "We chose Linkerd as the service mesh for Apprenda's Kismatic Toolkit because it brings best-in-breed resilience and visibility to cloud-native applications."
                        </div>
                    </div>
                </div>
                
                <div class="main-right">
                    <Paper className="avatar-right" style={style} zDepth={2} circle={true} />
                    <div class="sub-right">
                        <div class="font">
                            "We chose Linkerd as the service mesh for Apprenda's Kismatic Toolkit because it brings best-in-breed resilience and visibility to cloud-native applications."
                        </div>
                    </div>
                </div>
                <div className="pre-footer">
                    <center className="pre-footer-text">Get started today</center><br />
                    <center><FlatButton className="footer-btn" label="Try now" /></center>
                </div>
                <div className="footer-text">
                    <span className="footer">Terms and Privacy | Third-Party Licenses</span>
                </div>
            </div>
        );
    }
}

export default Landing;