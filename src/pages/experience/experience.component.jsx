import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">INTERNSHIPS AND COURSES</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">INTERNSHIPS</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Completed two internships</strong>
                    <br />
                    <strong>The Spark Foundation</strong> Using differnt framework                    <br />
                    <strong>Duration:</strong> June 2019- July 2019
                    <br/>
                    <br/>
                    <strong>Career 360</strong>                     <br />
                    <strong>Duration:</strong> Sept 2019- Oct 2019
                    <br/>
        
                  </Card.Text>
                </div>
                <br/>
                <br/>


                <div>
                  <Card.Title className="text-center">COURSES</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style "></strong>
                  
                    <strong>Introduction to SQL and Relational Database</strong>                   <br />
                    <strong>Duration:</strong> Feb 2020- March 2020
                    <br/>
                    <br/>
                    <strong>Tableau</strong>                     <br />
                    <strong>Duration:</strong> Apr 2020 - May 2020
                    <br/>
                   


                    
                  </Card.Text>
                </div>
  
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
