import React from 'react';
import { withRouter } from 'react-router-dom';
import config from 'config';
// import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Row, Col, FormControl, FormGroup, ControlLabel, InputGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';

// import { userActions } from '../_actions';
class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tableHeaders: [['Id',"Username","Score"]], tabledatascore: [] }
    }
    componentDidMount() {
        var _this = this;
        document.body.style.background = "#f4f8fb";
        fetch('/api/psychometricScoreAdmin?', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            _this.setState({tabledatascore:body.result})
        });
    }
    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-8 offset-md-2 col-xs-12 mr-4">
                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px" }}>
                    <div className="col-md-12">
                        <div className="card card-cascade narrower">
                            <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">
                                <a href="" className="white-text mx-3">Psychometric Score</a>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover" style={{ overflow: "auto" }}>
                                        <thead>
                                            {this.state.tableHeaders.map((head, index) => {
                                                return <tr key={index}>
                                                    {head.map((cell, index) => {
                                                        return (
                                                            <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                        );
                                                    })}
                                                </tr>
                                            }
                                            )}
                                        </thead>
                                        <tbody>
                                            {this.state.tabledatascore.map((head, index) => {
                                                return <tr key={index}>
                                                    {head.map((cell, index) => {
                                                        return (
                                                            <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                        );
                                                    })}
                                                </tr>
                                            }
                                            )}
                                        </tbody>
                                    </table>
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

export default withRouter(connect(mapStateToProps)(AdminPage));