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

      let isResponsive = this.props.isResponsive;
      if (isResponsive) {
        return (
          <NavItem key={i} componentClass='span'>
            <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
          </NavItem>)

      }else{
        return (<li key={i} className="nav-item nav-item-education">
                <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
            </li>)
      }
    })
  }

  render() {

    /*role --> student = 0 and admin = 1*/
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

      //
      // if (role === 1){
      //   if (el.role === 2) {
      //     return false
      //   }
      //   return true
      // }
      //
      // if (role === 0) {
      //   if (el.role === 0 || el.role === 2) {
      //     return true;
      //   }
      // }
      // return false
    })

    let finalLinks = this.generateLinks(menuItems)
    console.log(finalLinks);
    // if (isResponsive) {
      return(<Nav>
              {finalLinks}
              <NavItem key="logout" componentClass='span'>
                <Link replace to="/login" onClick={this.logout}>  Logout </Link>
              </NavItem>
            </Nav>
          )

    // }else{
    //
    //   return (
    //       <nav className="col-md-2 hidden-xs hidden-sm sidebar">
    //         <div className="sidebar-sticky">
    //           <ul className="nav flex-column">
    //                   {finalLinks}
    //                   <li key="logout" className="nav-item nav-item-education">
    //                       <a href="/login" onClick={this.logout}>  Logout </a>
    //                   </li>
    //           </ul>
    //         </div>
    //       </nav>
    //   )
    // }
  }
}



const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps, {logoutUser})(Sidebar);
