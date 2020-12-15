import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import CreateCourses from './Courses/CreateCourses';
import EditTeacher from './Teachers/EditTeacher';
import CreateAssignments from './Assignments/CreateAssignments';
import AllGradesContainer from './Grades/AllGradesContainer';
import CourseAssignScores from './Grades/CourseAssignScores';
import Dashboard from './Dashboard';
import GradeAnalytics from './Grades/GradeAnalytics';
import Profile from './Profile/ProfileContainer';
import SuccessPage from './SuccessPage/SuccessPage';

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/grades'>        
            {(props) => <AllGradesContainer {...props}/>}
        </Route> 
        <Route path='/HW-scores'>        
            {(props) => <CourseAssignScores {...props}/>}
        </Route> 
            <Route path="/register" component={Register} />
            <Route path="/courses/create" component={CreateCourses} />
            <Route path="/teachers/edit" component={EditTeacher} />
            <Route path="/assignments/create" component={CreateAssignments} />
            <Route path="/home" component={NavBar} />
            {/* <Route path="/grades" component={AllGradesContainer} /> */}
            {/* <Route path="/HW-scores" component={CourseAssignScores} /> */}
            {/* <Route path="/" component={Home} /> */}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/analytics" component={GradeAnalytics} />
            <Route path="/profile" component={Profile} />
            <Route path="/success" component={SuccessPage} />
            <Route path="/login" key="login" component={Login} />
            <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;
