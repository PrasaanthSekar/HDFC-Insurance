import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import insurance from './images/insurance.jpg'
import './policyinfo.css'
const API_URL = 'http://localhost:3001/users/policy'
class PolicyInfo extends Component {
    state = {
        data: null
    }
    componentWillMount(){
        let { parameters} = this.props;  
        let self = this;     
        fetch(API_URL, {
            method: 'post',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ parameters }),
          })
          .then(function (response) {
            if (response.status === 200) {
              response.json().then(function(data) {
                self.setState({data})
             })
            }
         })
         .catch(function (error) {
            console.log('Request failed', error);
          })
    }
    render() {
        let {data} = this.state
        let view = null
        if(data !== null){
            view = data.map(function(item,i){
                return <Col key={i} xs={6} md={4}>
                <Thumbnail src={item.imageUrl} alt="242x200">
                    <h3>{item.policyTitle}</h3>
                    <p>{item.policyDesc}</p>
                    <p>
                    </p>
                </Thumbnail>
            </Col>
            })
        }
        return (
            <Grid>
                <Row>
                    {view}
                </Row>
            </Grid>
        )
    }
}

export default PolicyInfo; 