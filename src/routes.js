import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddSchool from './components/AddSchool/AddSchool';
import stest from './components/SchoolComponents/Test/stest';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/addschool" component={AddSchool} />   
            <Route exact path="/:school"  component={stest}   />
        </Switch>
    </BrowserRouter>
);

export default Routes;