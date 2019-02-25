import React, { Component } from 'react';
import './AddSchool.css';
import Topbar from '.././Topbar/topbar';
import Sidebar from '.././Sidebar/Sidebar';
import Footer from '.././Footer/Footer';
import {insertSchool} from '.././Services/insertSchool';
import {putModule} from '.././Services/putModule';
import {insertAdmin} from '.././Services/insertAdmin';

class AddSchool extends Component {
    constructor(props){
        super(props);
        this.state = 
        {
            domain_url: null,
            schema_name: null,
            school_name: null,
            module: [],
            step: 1,
            userstep: false,
            schoolpk: null,
            username: null,
            email: null,
            password: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.addModule = this.addModule.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
    }

    //addSchool function to send the value of all the form to insertSchool services

    addSchool(){
        //console.log("addSchool  function called ");
        insertSchool('addSchool', this.state)
        .then (
            (result) => {
                let responseJSON = result;
                console.log(responseJSON);
                this.setState({
                    step: 2
                })
                if(responseJSON.id){
                  console.log("New School has been inserted");
                  console.log(responseJSON.id);
                  this.setState({
                      schoolpk: responseJSON.id
                  })
                }
            })
        
    }

    addModule(){

        console.log("okay addModule is called");
        putModule('update', this.state)
        .then (
            (resultm) => {
                let responseJSONm = resultm;
                console.log(responseJSONm);
                this.setState({
                    step: 3
                })
             })
        
        
    }

    addAdmin(){

        insertAdmin('addAdmin', this.state)
        .then(
            (resulta) => {
                let responseJSONa = resulta;
                console.log(responseJSONa);
            }
        )
    }

    handleChange = (e) =>{
        if(e.target.id === 'domain_url'){
              this.setState({
                  [e.target.id] : e.target.value+'.pathsala.com'
              })
            }
    
        if(e.target.id === 'school_name'){
              this.setState({
                  [e.target.id] : e.target.value 
              })
            }
    
        if (e.target.id === 'schema_name'){
              this.setState({
                [e.target.id] : e.target.value 
            })
        }

        if (e.target.id === 'moduleone'){
            this.setState({
                [e.target.id] : e.target.value
            })
        }

        if(e.target.id === 'username'){
            this.setState({
                [e.target.id] : e.target.value
            })
          }
        
        if(e.target.id === 'email'){
            this.setState({
                [e.target.id] : e.target.value
            })
          }  
        
          if(e.target.id === 'password'){
            this.setState({
                [e.target.id] : e.target.value
            })
          }
      }


  render() {
    if(this.state.step == 1){
        return (
            <div className="app" >
            <Sidebar />
            <div id="right-panel" className="right-panel">
                <Topbar />
                <div className="content">
                <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Add School</strong>
                                </div>
                                <div className="card-body">
                                    <div id="pay-invoice">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-center">School Details</h3>
                                            </div>
                                            <hr />
                                            <form>
                                                <div className="form-group text-center">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="form-group">
                                                    <label for="domain_url" className="control-label mb-1">Domain URL</label>
                                                    <input id="domain_url" name="domain_url" type="text" className="form-control" aria-required="true" aria-invalid="false" placeholder="Sainikmahavidyalaya"  onChange= {this.handleChange}/>
                                                    <div className="input-group-addon"><span>{this.state.domain_url}</span></div>
                                                </div>
                                                <div className="form-group has-success">
                                                    <label for="schema_name" className="control-label mb-1">Schema Name</label>
                                                    <input id="schema_name" name="schema_name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the schema name" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name" placeholder="School Schema" onChange= {this.handleChange}/>
                                                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                                </div>
                                                <div className="form-group">
                                                    <label for="school_name" className="control-label mb-1">School Name</label>
                                                    <input id="school_name" name="school_name" type="text" className="form-control" aria-required="true" aria-invalid="false" placeholder="Sainik mahavidhyalaya nepal"  onChange= {this.handleChange}/>
                                                    <div className="input-group-addon"><span>{this.state.school_name}</span></div>
                                                </div>
                                            
                                               
                                                <div>
                                                    <button id="payment-button" type="button" className="btn btn-lg btn-info btn-block" onClick={this.addSchool}>
                                                        <i className="fa fa-lock fa-lg"></i>&nbsp;
                                                        <span id="payment-button-amount">Next >></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div> 

                        </div>
                </div> 
                </div>
                <div className="clearfix"></div>
                
                <Footer />
                </div>
            </div>
            
        );
    }

    if(this.state.step == 2){
        return(
             <div className="app" >
            <Sidebar />
            <div id="right-panel" className="right-panel">
                <Topbar />
                <div className="content">
                <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Select Modules</strong>
                                </div>
                                <div className="card-body">
                                    <div id="pay-invoice">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-center">Modules Details</h3>
                                            </div>
                                            <hr />
                                            <form>
                                                <div className="form-group text-center">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                                    </ul>
                                                </div>
                                                        
                                                <div className="row form-group">
                                                    <div className="col col-md-3"><label className=" form-control-label">Modules</label></div>
                                                    <div className="col col-md-9">
                                                        <div className="form-check">
                                                            <div className="checkbox">
                                                                <label for="moduleone" className="form-check-label ">
                                                                    <input type="checkbox" id="moduleone" name="moduleone" value="option1" className="form-check-input" onChange={this.handleChange}/> Student Management
                                                                </label>
                                                            </div>
                                
                                                        </div>
                                                    </div>
                                                </div>                                        
                                             
                                                <div>
                                                    <button id="payment-button" type="button" className="btn btn-lg btn-info btn-block" onClick={this.addModule}>
                                                        <i className="fa fa-lock fa-lg"></i>&nbsp;
                                                        <span id="payment-button-amount">Next >></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div> 

                        </div>
                </div> 
                </div>
                <div className="clearfix"></div>
                
                <Footer />
                </div>
            </div>
            
        );
    }


    if(this.state.step == 3){
        return(
             <div className="app" >
            <Sidebar />
            <div id="right-panel" className="right-panel">
                <Topbar />
                <div className="content">
                <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <strong className="card-title">Add Admin</strong>
                                </div>
                                <div className="card-body">
                                    <div id="pay-invoice">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3 className="text-center">Fill the Admin Details</h3>
                                            </div>
                                            <hr />
                                            <form>
                                                <div className="form-group text-center">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                                    </ul>
                                                </div>
                                                        
                                                <div className="form-group">
                                                    <label for="username" className="control-label mb-1">Username</label>
                                                    <input id="username" name="username" type="text" className="form-control" aria-required="true" aria-invalid="false" placeholder="Sainikmahavidyalaya"  onChange= {this.handleChange}/>
                                                    <div className="input-group-addon"><span>{this.state.username}</span></div>
                                                </div>
                                                <div className="form-group has-success">
                                                    <label for="email" className="control-label mb-1">Email </label>
                                                    <input id="email" name="email" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the schema name" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name" placeholder="School Schema" onChange= {this.handleChange}/>
                                                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                                </div>
                                                <div className="form-group">
                                                    <label for="password" className="control-label mb-1">password</label>
                                                    <input id="password" name="password" type="text" className="form-control" aria-required="true" aria-invalid="false" placeholder="Sainik mahavidhyalaya nepal"  onChange= {this.handleChange}/>
                                                    <div className="input-group-addon"><span>{this.state.school_name}</span></div>
                                                </div>
                                                                   
                                             
                                                <div>
                                                    <button id="payment-button" type="button" className="btn btn-lg btn-info btn-block" onClick={this.addAdmin} >
                                                        <i className="fa fa-lock fa-lg"></i>&nbsp;
                                                        <span id="payment-button-amount">Submit >></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div> 

                        </div>
                </div> 
                </div>
                <div className="clearfix"></div>
                
                <Footer />
                </div>
            </div>
            
        );
    }
  }
}

export default AddSchool;
