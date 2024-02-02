import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kishore Nithin Sridhar  </span>
            from <span className="purple"> Buffalo, New York</span>
            <br />I am pursuing a Master's in Computer Science and Engineering Degree from University at Buffalo.
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Professional Experience <strong className="purple"></strong>
            </h1>

            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">Oracle Corporation, Bangalore, India | Associate Consultant</strong>
            </h5>
            <ul>
              <li>Troubleshoot and deploy expedient fixes for a number of reported bugs in Business Intelligence reports and BICC
Data Warehousing Integrations across various ERP modules like PPM, SCM, FIN, etc.</li>
              <li>Utilized SQL queries, PL/SQL packages, Oracle BI Publisher reports, and the Oracle Integration Cloud to build
various integrations in the Oracle Fusion SCM module.</li>
              <li>Collaborated with the functional team to provide inputs on designing reports and integration and engaged in
numerous face-to-face client interactions while working on multiple bugs and RAIDs for Business Intelligence reports
to understand their requirements and suggest workarounds.
              </li>
              <li>Part of CoP research initiatives to implement areas like AI, ML, and IoT into Oracle Fusion ERP by simulating
customer scenarios.
              </li>
            </ul>
            <br />
            <br />
            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">IndiaMART InterMESH Ltd., Noida, India | Intern</strong>
            </h5>
            <ul>
              <li>Automated web crawlers to scrap a vast volume of HTML data using Python and Selenium framework from a large
number of websites to assist the Pre-sales team in customer acquisition.</li>
              <li>Facilitated large volumes of data transformations in Excel with the help of the Pandas library in Python.</li>
              <li>Audited the data collected to check for their integrity.


              </li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Commit to building things that go beyond the ordinary, making a tangible difference in the world."{" "}
          </p>
          <footer className="blockquote-footer">Kishore</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
