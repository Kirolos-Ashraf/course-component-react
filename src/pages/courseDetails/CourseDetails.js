import React from "react";
import JS from "./images/js.png";
import "./CourseDetails.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CourseDetails() {

  const history = useHistory()
  return (
    <>
      <section className="courseDetails py-5 ">
        <div className="container">

          <div className=" shadow p-1 d-flex justify-content-center m-auto gap-4">


            <div className="imgCard w-50 ">
              <img src={JS} alt="JS" className="w-100 h-100" />
            </div>

            <div className="courseInfo  ">
              <h2>Javascript course</h2>
              <p className="lead my-1">
                JavaScript (often shortened to JS) is a lightweight,
                interpreted, object-oriented language with first-class
                functions,
              </p>
              <div className="h-2-5rem">
                <div className="h-100">
                  <div className="col-md-12 px-0 h-100">
                    <div className="stars h-100">
                      <form action="">
                        {" "}
                        <input
                          className="star star-5"
                          id="star-5"
                          type="radio"
                          name="star"
                        />{" "}
                        <label className="star star-5" htmlFor="star-5"></label>{" "}
                        <input
                          className="star star-4"
                          id="star-4"
                          type="radio"
                          name="star"
                        />{" "}
                        <label className="star star-4" htmlFor="star-4"></label>{" "}
                        <input
                          className="star star-3"
                          id="star-3"
                          type="radio"
                          name="star"
                        />{" "}
                        <label className="star star-3" htmlFor="star-3"></label>{" "}
                        <input
                          className="star star-2"
                          id="star-2"
                          type="radio"
                          name="star"
                        />{" "}
                        <label className="star star-2" htmlFor="star-2"></label>{" "}
                        <input
                          className="star star-1"
                          id="star-1"
                          type="radio"
                          name="star"
                        />{" "}
                        <label className="star star-1" htmlFor="star-1"></label>{" "}
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            <p>created by : Jhon Adelson</p>
          
            <button type="button" className="btn btn-warning" onClick={()=> history.push('/coursename')}>Enroll</button>

            </div>


          </div>
        </div>
      </section>
    </>
  );
}
