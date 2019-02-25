import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
    <div className="app" >
    <footer className="site-footer">
            <div className="footer-inner bg-white">
                <div className="row">
                    <div className="col-sm-6">
                        Copyright &copy; 2018 Ela Admin
                    </div>
                    <div className="col-sm-6 text-right">
                        Designed by <a href="https://mitra.cash.com">Udaan Communication private Limited</a>
                    </div>
                </div>
            </div>
        </footer>
   </div>
    
    );
  }
}

export default Footer;
