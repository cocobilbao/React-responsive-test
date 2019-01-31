import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import computer from "./images/computer.jpg";
import phone from "./images/phone.jpg";

import "./TwoWayGrid.css";

export default class TwoWayGrid extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6} md={6}>
            <img width={400} height={600} alt="slide" src={phone} />
          </Col>

          <Col xs={12} sm={6} md={6}>
            <h2>
              <b>Data Analytics</b>
            </h2>
            <br />
            <Row>
              <div>
                <img width={50} height={50} alt="slide" src={computer} />
                <h4>
                  <b>Awesome design</b>
                </h4>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue.
                </p>
              </div>
            </Row>
            <Row>
              <div>
                <img width={50} height={50} alt="slide" src={computer} />
                <h4>
                  <b>Awesome design</b>
                </h4>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue.
                </p>
              </div>
            </Row>
            <Row>
              <div>
                <img width={50} height={50} alt="slide" src={computer} />
                <h4>
                  <b>Awesome design</b>
                </h4>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Nulla vitae elit libero, a pharetra augue.
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
