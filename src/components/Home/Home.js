import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../Slider/Slider";
import ThreeWayGrid from "../ThreeWayGrid/ThreeWayGrid";
import TwoWayGrid from "../TwoWayGrid/TwoWayGrid";
import Parallax from "../Parallax/Parallax";

export default class Home extends Component {
  render() {
    return (
        <Row style={{margin:"0"}}>
          <Col xs={12} >
          <Parallax />
          <Slider />
        <ThreeWayGrid />
        <TwoWayGrid />
          </Col>
        </Row>
    );
  }
}
