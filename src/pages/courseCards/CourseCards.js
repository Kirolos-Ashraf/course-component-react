import React, { useState } from "react";
import "./CourseCards.css";
import { Container, Row, Col } from "react-bootstrap";
import CardsCourses from "../../components/cards/CardsCourses";
import programmingPng from "../../components/cards/images/programming.png";
import codingJpg from "../../components/cards/images/coding.jpg";
import testingJpg from "../../components/cards/images/testing.jpg";
import Loader from "../../components/loader/Loader";

export default function CourseCards(props) {
  // const [loader , setLoader ] = useState(true)

  return (
    <>
      <div className="courses-cards bd-light py-5 ">
        <div className="container">
          <h2 className="text-center fs-1 mb-5 mt-4 fw-bold">Courses</h2>

          {/* <Container>

              {
                 loader ? (
                  <Loader />
                ) : (

                { props.filterCourses ?
                  
(
                  props.filterCourses.map((course, index)=> { 
                      return (
                        <Row>
                          <Col md={1}>
                          <CardsCourses courseName={props.name} imagesSrc={course.imagesSrc} courseTitle={course.title}detailsCourse={course.description}/>
                          </Col>
                        </Row>
                      )
                  })
                  )
                  :
                  (
                  props.allCourses.map((course, index)=> { 
                      return (
                        <Row>
                          <Col md={1}>
                          <CardsCourses imagesSrc={course.imagesSrc} courseTitle={course.title}detailsCourse={course.description}/>
                          </Col>
                        </Row>
                      )
                  })
                  )
                }
                )
              }
              </Container> */}

          <Container>
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
              <Col>
                <CardsCourses
                  imagesSrc={programmingPng}
                  courseTitle="Programming Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />
              </Col>
              <Col>
                <CardsCourses
                  imagesSrc={codingJpg}
                  courseTitle="Coding Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
              <Col>
                <CardsCourses
                  imagesSrc={testingJpg}
                  courseTitle="Testing Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <CardsCourses
                  imagesSrc={programmingPng}
                  courseTitle="Programming Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />
              </Col>
              <Col>
                <CardsCourses
                  imagesSrc={codingJpg}
                  courseTitle="Coding Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
              <Col>
                <CardsCourses
                  imagesSrc={testingJpg}
                  courseTitle="Testing Course"
                  detailsCourse="Coding course 1-test 2-test 3-test 4-test"
                />{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
