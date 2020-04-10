import React, { Component } from "react";
// import ReactDOM from 'react-dom'
import { Row, Col } from "react-bootstrap";
import rocket from "./images/rocket.png";
import rocket2 from "./images/rocket2.png";
import "./Parallax.css"




export default class Parallax extends Component {

    componentDidMount() {

            let parallaxElements = document.querySelectorAll('.parallax');
            let speedVertical = 0;
            let speedHorizontal = 0;
      
        document.addEventListener("scroll", apply2DEffects)
    
    
        function apply2DEffects() {
            parallaxElements.forEach( function(element) {
        
            if (element.dataset.direction === "vertical") {
               speedVertical = element.dataset.speed * element.getBoundingClientRect().top;
                }
                else {
                    speedVertical = 0;
                }
            if (element.dataset.direction === "horizontal") {
                speedHorizontal = element.dataset.speed * element.getBoundingClientRect().top;
            } else {
                speedHorizontal= 0;
            }
            element.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`
                        })

          
        }
    }
    render() {


    return (
        <Row style={{margin:"0"}}>
          <Col xs={12} className="text-center">
          <h1>Parallax</h1>
          </Col>
          <Col xs={12} className="first-col">
          <div className="div-style-small parallax" data-direction="horizontal" data-speed="-0.05"></div>
              <img width={100} height={100} alt="" src={rocket} style={{ zIndex: "999"}} className="parallax" data-direction="vertical" data-speed="-0.2"/>
              <div className="div-style parallax" data-direction="horizontal" data-speed="0.2"></div>
              </Col>
              <Col xs={12} className="first-col">
              <div className="div-style parallax" data-direction="horizontal" data-speed="-0.2"></div>
              <img width={100} height={100} alt="" src={rocket2} style={{ zIndex: "999"}} className="parallax" data-direction="vertical" data-speed="-0.2"/>
              <div className="div-style-small parallax" data-direction="horizontal" data-speed="0.3"></div>
              </Col>
        </Row>
    );
  }
}
