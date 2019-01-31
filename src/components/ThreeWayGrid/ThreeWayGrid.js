import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import rocket from "./images/rocket.jpg";
import rocket2 from "./images/rocket2.jpg";
import rocket3 from "./images/rocket3.jpg";

import "./ThreeWayGrid.css";

export default class ThreeWayGrid extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <div className="data">
              <h1>
                <b>Data Analytics</b>
              </h1>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={12} sm={4} md={4}>
            <div className="info">
              <img width={100} height={100} alt="slide" src={rocket} />
              <h4>
                <b>Awesome design</b>
              </h4>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
          </Col>

          <Col xs={12} sm={4} md={4}>
            <div className="info">
              <img width={100} height={100} alt="slide" src={rocket3} />
              <h4>
                <b>Awesome design</b>
              </h4>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <div className="info">
              <img width={100} height={100} alt="slide" src={rocket2} />
              <h4>
                <b>Awesome design</b>
              </h4>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
                elit libero, a pharetra augue.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
