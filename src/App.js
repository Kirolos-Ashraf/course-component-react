import React from 'react';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import Course from './pages/course/Course';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import CourseDetails from './pages/courseDetails/CourseDetails';


function App() {
  return (
   
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path={'/'} exact component={Course} /> 
        <Route path={'/courses'} exact component={Course} /> 
        <Route path={'/details/:name'} exact component={CourseDetails} /> 
        <Route path={'*'} exact component={NotFound} /> 
        
      </Switch>
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
