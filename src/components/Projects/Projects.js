import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Stock from "../../Assets/stock.jpeg";
import pothole from "../../Assets/pothole.png";
import email from "../../Assets/email.svg";
import linux from "../../Assets/linux.png";
// import airbnb from "../../Assets/airbnb.png";
import bookstore from "../../Assets/bookstore.webp";
import task from "../../Assets/task.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Tracking Application"
              description="Designed and developed a Task Tracking micro-service full stack application with login, create, update, and delete tasks.
              Implemented REST APIs following MVC architecture and JWT Authentication.
              Containerized the services using Docker and deployed it on a Kubernetes cluster."
              ghLink="https://github.com/kishorens77/TaskTrackingApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Automatic Email Classifier"
              description="Created Email Classification system using Decision Tree classifier with Accuracy of 88%.
              Integrated ChatGPT for unknown labeling.
              Integrated the results with React frontend and backend in Python Flask, utilized JWT for authentication and MongoDB for storage.
              Containerized the modules and created docker images, docker compose setup for easy deployment."
              ghLink="https://github.com/kishorens77/EmailLabellerBackend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Book Store Application"
              description="Developed a full - stack web application with CRUD operations using the MERN stack, combining both back-end and front-end technologies to create a seamless and efficient platform for book enthusiasts."
              ghLink="https://github.com/kishorens77/BookStoreApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linux}
              isBlog={false}
              title="Encrypted File System"
              description="Designed and implemented an encrypted file system in Java using SHA256 hashing for password validation, encryption of file chunks, and HMAC generation for data integrity. Optimized file operations for efficient read/write performance and encryption/decryption."
              ghLink="https://github.com/kishorens77/Encrypted-File-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stock}
              isBlog={false}
              title="Live Stock Market Prediction"
              description="Developed a Long Short-Term Memory (LSTM) model for stock market analysis using Yahoo time series data.
              Utilized Yahoo API to stream live stock data to Kafka topic for real-time prediction and training.
              Utilized Matplotlib to visualize the actual and predicted stock values obtained from the LSTM model for stock market analysis."
              ghLink="https://github.com/kishorens77/"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pothole}
              isBlog={false}
              title="Pothole Detection and Mapping Android Application"
              description="Developed an android application that detects the presence of potholes using Inception V3 and Transfer Learning and plots the location of the detected potholes in maps.
              The android application can also notify the local authorities."
              ghLink="https://github.com/kishorens77/PotholeDetector"
                           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
