import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AllGradesContainer from './Grades/AllGradesContainer';
import CourseAssignScores from './Grades/CourseAssignScores';
import Dashboard from './Dashboard';
import FeedBack from './Grades/AssignFeedback';
import GradeAnalytics from './Grades/GradeAnalytics';

class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" key="login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={NavBar} />
            <Route path="/grades" component={AllGradesContainer} />
            <Route path="/HW-scores" component={CourseAssignScores} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/analytics" component={GradeAnalytics} />

        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;

