// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../network/axiosConfig";
import CourseCards from "../courseCards/CourseCards";
import Footer from "../footer/Footer";
import "./Course.css";

export default function Course() {
  const [coursesList, setCoursesList] = useState([]);
  const [clicked , setClicked ] = useState(false)
  const [filterCourses, setFilterCourses] = useState([])
  const params = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:4000/courses')
      .then((req, res) => {
        // console.log(req.data)
        setCoursesList(req.data)
        
      })
      .catch((err) => console.log(err));
  }, []);
  
  // console.log(coursesList)
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000//courses/:${params.courseCat}&${params.search}`)
  //     .then((res) => setFilterCourses(res.data))
  //     .catch((err) => console.log(err));
  // }, [clicked]);

  return (
    <>
      <section className="course bg-light">
        <div className="container h-100">
          <div className="searchBar d-flex justify-content-center align-items-center w-100 h-100">
            <form className="d-flex w-75 justify-content-center">
         
              <input
                type="search"
                className="w-50 px-2 py-2 mx-2"
                name="search"
              />

              <button className="btn btn-light px-3 py-2 bg-dark text-white"
              
              > 
              {/* // onChange={()=> { setClicked(true)}} */}
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <CourseCards /> 

      <Footer />
    </>
  );
}
