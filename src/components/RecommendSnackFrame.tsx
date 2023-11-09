import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecommendSnackFrame = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            style={{ height: "250px", maxWidth: "330px" }}
            src="src/assets/images/StinkyTofu.jpg"
          ></img>
        </Col>
        <Col>
          <img
            style={{ height: "250px", maxWidth: "330px" }}
            src="src/assets/images/BigCoverSmall.jpg"
          ></img>
        </Col>
        <Col>
          <img
            style={{ height: "250px", maxWidth: "330px" }}
            src="src/assets/images/BraisedPorkRice.jpg"
          ></img>
        </Col>
      </Row>
    </>
  );
};

export default RecommendSnackFrame;
