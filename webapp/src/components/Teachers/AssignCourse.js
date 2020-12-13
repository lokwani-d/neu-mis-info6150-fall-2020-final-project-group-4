import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import { removeError } from '../../store/actions/error.action';

class AssignCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      teachername: '',
      coursename: '',
      teacherList: [],
      courseList: [],
      courseLoaded: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  loadCourses() {
    fetch("/courses", {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            courseLoaded: true,
            courseList: result
          });
        },
        (error) => {
          this.setState({
            courseLoaded: false,
            error
        });
      }
    )
    //console.log(this.state.courseList);
  }

  loadTeachers() {

  }

  componentDidMount() {
    this.loadCourses();
  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
  }

  submitForm(e){
    e.preventDefault();

    alert("Course is added successfully!");
    alert("Redirect to Dashboard");
    this.props.history.push('/dashboard')

  }

  render(){
    //console.log(this.state.courseList);
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.courseLoaded) {
      return <div>Loading...</div>;
      } else {
        return(
          <Form onSubmit={this.submitForm}>
            <FormGroup controlId="teachername">
              <FormLabel>Teacher Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Teacher</option>
                <option>Teacher 1</option>
                <option>Teacher 2</option>
                <option>Teacher 3</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="coursename">
              <FormLabel>Course Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Course</option>
                {this.state.courseList.map((c, index) => <option value={c.id} >{c.coursename}</option>)}
              </FormControl>
            </FormGroup>

            <FormGroup>
              <Button type="submit">Assign Course</Button>
            </FormGroup>
          </Form>
        )
      }
  }
}


export default AssignCourse;
