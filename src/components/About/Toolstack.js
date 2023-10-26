import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiStackoverflow,
  SiVercel,
  SiMacos,
  SiWindows,
  SiAutodesk,
  SiArcgis,
  SiVisualstudio
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStackoverflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
