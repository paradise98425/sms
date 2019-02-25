import React, { Component } from 'react';
import './stest.css';
//import {insertSchool} from '.././Services/insertSchool';

class AddSchool extends Component {
    constructor(props){
        super(props);
        this.state = ({
            schoolName: window.location.pathname +'.pathsala.com'
        })

    }


  render() {
        return (
           <h1>Hello {this.state.schoolName}</h1>
        );
    
  }
}

export default AddSchool;
