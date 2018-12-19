"use strict"

import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import TestPage from '../TestPage/TestPage';
import TopNav from '../TopNav/TopNav';
import ThankYou from '../ThankYou/ThankYou';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import "mdbreact/dist/css/mdb.css";
import AdminPage from '../AdminPage/AdminPage';


class Mainpage extends React.Component {
    render() {
        const LoginContainer = () => (
            <div>

                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/login" component={LoginPage} />

            </div>
        )
        const DefaultContainer = () => (
            <div>
                <TopNav></TopNav>
                <Route path="/home" component={HomePage} />
                <Route path="/test" component={TestPage} />
                <Route path="/thankyou" component={ThankYou} />
                <Route path="/admin" component={AdminPage} />
                
            </div>
        )
        return (
               <div>
                    <PrivateRoute path="/home" component={DefaultContainer} />
                    <PrivateRoute path="/test" component={DefaultContainer} />
                    <PrivateRoute path="/thankyou" component={DefaultContainer} />
                    <PrivateRoute path="/admin" component={DefaultContainer} />

                    <Route path="/login" component={LoginContainer} />

                </div>
        )
    }
}
function mapStateToProps(state) {
    return {

    };
}
export default connect(mapStateToProps)(Mainpage);