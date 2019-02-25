import React, { Component } from 'react';
import './Home.css';
import Topbar from '.././Topbar/topbar';
import Sidebar from '.././Sidebar/Sidebar';
import Footer from '.././Footer/Footer';
import Dashboard from '.././Dashboard/Dashboard';

class Home extends Component {
  render() {
    return (
      <div className="app" >
          <Sidebar />
          <div id="right-panel" className="right-panel">
              <Topbar />
                <Dashboard />
                <div className="clearfix"></div>
              <Footer />
          </div>
    </div>
    );
  }
}

export default Home;
