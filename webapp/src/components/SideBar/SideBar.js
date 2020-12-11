import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/user.action';


class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {menu: [
      {name: "Home", url: "/", role: 0},
      // {name: "All Courses", url: "/all-courses", role: 0},
      {name: "My Courses", url: "/my-courses", role: 0},
      {name: "All Users", url: "/all-users", role: 1},
      {name: "Create Course", url: "/create-course", role: 1},
      {name: "Create User", url: "/register", role: 1},
      {name: "Create Assignment", url: "/create-assignment", role: 3},
      {name: "Grade Assignment", url: "/grade-assignment", role: 3},
    ]}

    this.logout = this.logout.bind(this);
}


/** logout is a different function in link list*/
logout(e){
  this.props.logoutUser()
}

/** Generating asll links depending on user role*/
generateLinks(menuItems){
    return menuItems.map((exp,i) => {
        return (
          <NavItem key={i} componentClass='span'>
            <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
          </NavItem>)

    })
  }

  render() {

    //alert(this.props.role);
    /*role --> admin = 1, student = 2, teacher = 3*/

    let role = this.props.role;
    let isResponsive = this.props.isResponsive;
    let menuItems = this.state.menu.filter(el => {

      if (role == "Student") {
        if (el.role === 0 || el.role === 2) {
          return true;
        } else return false;
      }

      if (role == "Teacher") {
        if (el.role === 0 || el.role === 3) {
          return true;
        } else return false;
      }

      if (role == "Admin") {
        if (el.role === 1) {
          return true;
        } else return false;
      }

    })

    let finalLinks = this.generateLinks(menuItems)
    console.log(finalLinks);

      return(<Nav>
              {finalLinks}
              <NavItem key="logout" componentClass='span'>
                <Link replace to="/login" onClick={this.logout}>  Logout </Link>
              </NavItem>
            </Nav>
          )
  }
}



const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps, {logoutUser})(Sidebar);
