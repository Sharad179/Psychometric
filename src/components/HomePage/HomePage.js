import React from 'react';
import { withRouter } from 'react-router-dom';
import config from 'config';
// import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Row, Col, FormControl, FormGroup, ControlLabel, InputGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';

// import { userActions } from '../_actions';
class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

        document.body.style.background = "#f4f8fb";
        sessionStorage.setItem("reloading", "true");
    }
    
    

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-8 offset-md-2 col-xs-12 mr-4">
                <div className="row mt-4">
                    <div className="card card-cascade narrower">
                        <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">
                            <a href="" className="white-text mx-3">Test Instructions</a>
                        </div>
                        <div className="card-body">
                            <ul className = "b">
                                <li> Total duration of this test is 15 minutes.</li>
                                <li> A countdown timer at the top of your screen will display the time remaining for you to complete the test.</li>
                                <li>When the clock runs out, the test gets submitted. You can also end the test by yourself at any stage. </li>
                                <li>This test contains 32 MCQ to help us gather the needed information about you.</li>
                            </ul>

                            {/* 4. When the clock runs out, the test gets submitted.
                            5. You will be awarded three marks for each correct answer.
                            6. For the MCQ type questions each wrong answer will attract a penalty of one mark. There will be no negative marking for the non-MCQ type question. */}
                            <div className="row mt-4"><div className="col-md-12" style={{ textAlign: "center" }}><a className="btn btn-default btn-rounded" href="/test">Start the Test</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default withRouter(connect(mapStateToProps)(HomePage));