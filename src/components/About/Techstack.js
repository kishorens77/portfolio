import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import {SiKubernetes} from "react-icons/si";
import {SiElasticsearch} from "react-icons/si";
import {SiLogstash} from "react-icons/si";
import {SiKibana} from "react-icons/si";
import {SiApachekafka} from "react-icons/si";
import {SiApachespark} from "react-icons/si";
import {SiTableau} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {SiFlask} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {SiSpringboot} from "react-icons/si"
import {SiDocker} from "react-icons/si"
import {SiAmazonaws} from "react-icons/si"














function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> */}
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
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGithub />
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>  */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col> */}
    
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLogstash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
      </Col> */}

    </Row>
  );
}

export default Techstack;