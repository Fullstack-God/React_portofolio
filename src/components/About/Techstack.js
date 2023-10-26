import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRuby
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCsharp,
  SiMicrosoftsqlserver
} from "react-icons/si";
import {
  BiLogoVuejs,
  BiLogoAngular,
  BiLogoWordpress,
  BiLogoUnity
} from "react-icons/bi"
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoWordpress />
      </Col>
     
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      
     
      
    </Row>
  );
}

export default Techstack;
