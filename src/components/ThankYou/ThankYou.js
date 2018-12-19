import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { userActions } from '../../actions/userActions';

class ThankYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = { score: localStorage.getItem("resultscore") };
        // reset login status

    }
    callInactiveApi() {
        const { user, users } = this.props;
        const userParams = { username: user.username };
        fetch('/api/inactiveuser?', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userParams)
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            if (body.result == "success") {
                setInterval(function(){window.location.href = '/login'},3000);
                
            }
            else {
                alert("Server is down...Please try after sometime");
            }
        });
    }
    componentDidMount() {
        document.body.style.background = "linear-gradient(to right, #0052D4, #65C7F7, #9CECFB)"
        this.callInactiveApi();
    }
    render() {

        return (

            <div className="col-md-6 offset-md-3">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <h3 style={{ textAlign: "center", height: "200px" }}>Thank You for Submiting the Test</h3>
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
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        user,
        users
    };
}


export default withRouter(connect(mapStateToProps)(ThankYou)); 