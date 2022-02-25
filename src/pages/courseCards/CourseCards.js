import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CourseCards.css";

import { Container, Row, Col } from "react-bootstrap";
import CardsCourses from "../../components/cards/CardsCourses";
import programmingPng from "../../components/cards/images/programming.png";
import codingJpg from "../../components/cards/images/coding.jpg";
import testingJpg from "../../components/cards/images/testing.jpg";
import Loader from "../../components/loader/Loader";

export default function CourseCards(props) {
  const [loader, setLoader] = useState(true);
  const [coursesList, setCoursesList] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/courses")
      .then((req, res) => {
        // console.log(req.data)
        setCoursesList(req.data);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <>
      <div className="courses-cards bd-light py-5 ">
        <div className="container">
          <h2 className="text-center fs-1 mb-5 mt-4 fw-bold">Courses</h2>

          <Container>
          <Row >
            {
              coursesList &&
              coursesList.map((course, index) => {
                
                return (
                  
                    <Col sm={12} md={6} lg={4} className="mb-4" >
                      <CardsCourses
                        courseName={course.name}
                        imagesSrc={course.imageSrc}
                        courseTitle={course.category}
                        detailsCourse={course.description}
                        name={course.name}
                      />
                    </Col>
                 
                )
              })
            }
             </Row>
          </Container>

          {/* <Container>
            <Row className="mb-4">
              <Col sm md>
                <CardsCourses
                  imagesSrc={programmingPng}
                  courseTitle="Programming Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={codingJpg}
                  courseTitle="Coding Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={testingJpg}
                  courseTitle="Testing Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm md>
                <CardsCourses
                  imagesSrc={programmingPng}
                  courseTitle="Programming Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={codingJpg}
                  courseTitle="Coding Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={testingJpg}
                  courseTitle="Testing Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm md>
                <CardsCourses
                  imagesSrc={programmingPng}
                  courseTitle="Programming Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={codingJpg}
                  courseTitle="Coding Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
              <Col sm md>
                <CardsCourses
                  imagesSrc={testingJpg}
                  courseTitle="Testing Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
            </Row>
          </Container> */}
        </div>
      </div>
    </>
  );
}
