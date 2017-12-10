import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import insurance from './images/insurance.jpg'
import './policyinfo.css'

class PolicyInfo extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PolicyInfo; 