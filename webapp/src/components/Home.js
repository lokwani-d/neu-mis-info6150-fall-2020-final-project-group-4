import React from 'react';


class Home extends React.Component {


    componentDidMount() {

    }

    render(){
      return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"> <span className="glyphicon glyphicon-education"></span> LearnZilla</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#"><span className="glyphicon glyphicon-home"></span> Who We Are</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">

              <li><a href="/login"><span className="glyphicon glyphicon-log-out"></span> LOG IN</a></li>
            </ul>
          </div>
        </nav>
      )
    }
}

export default Home;
