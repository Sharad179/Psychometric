import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./TestPage.css";
import $ from 'jquery';
import {
    Carousel, CarouselInner, CarouselItem, Container, Progress, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
    Button
} from "mdbreact";
class TestPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            questions: [],
            result: [],
            currentValue: [],
            currentIndex: 2,
            controlview: true,
            progress: 0,
            reloadTimes: 0,
            time: { m: 0, s: 0 }, seconds: 900, index: 0, direction: null
        };
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectedAnswer = this.selectedAnswer.bind(this);
        this.handleCarouselClick = this.handleCarouselClick.bind(this);

    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }
    componentWillMount() {
        var _this = this;
        fetch('/api/psychometricQuestions?', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            return response.json()
        }).then(function (body) {

            _this.state.questions = body.resp;

        });
    }
    componentDidMount() {

        var _this = this;
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }

        window.onload = function () {
            var reloading = sessionStorage.getItem("reloading");
            if (reloading) {
                sessionStorage.removeItem("reloading");
            }
            else {
                _this.callPostApi(_this.state.result);
            }
        }



    }
    componentDidUpdate() {

        var _this = this;
        if (document.getElementsByClassName('fa-chevron-right').length > 0) {
            document.getElementsByClassName('fa-chevron-right')[0].innerHTML = "<p class='font-box'>Next</p>"
            $(document).ready(function () {
                $('input[type="radio"]').keydown(function (e) {
                    var arrowKeys = [37, 38, 39, 40];
                    if (arrowKeys.indexOf(e.which) !== -1) {
                        $(this).blur();
                        return false;
                    }
                });
                $(".fa-chevron-left").hide();
                $(".fa-chevron-right").hide();
                if (_this.state.currentValue.length != 0) {
                    $(".fa-chevron-right").show();
                }
            })
        }
    }

    selectedAnswer(e, qid, ques, ans, score) {
        const { user, users } = this.props;
        this.state.currentValue = [user.username, qid, ques, ans, score];
    }
    handleCarouselClick(e) {

        if (e.target.className === 'fa fa-chevron-right' || e.target.className === 'font-box') {
            $(".fa-chevron-right").hide();
            this.state.progress = Math.round(this.state.currentIndex * 100 / 33, 2);
            this.state.currentIndex = this.state.currentIndex + 1
            if (this.state.currentValue.length != 0) {
                this.state.result.push(this.state.currentValue)
                this.state.currentValue = [];
            }
            if (this.state.currentIndex == 33) {
                this.state.controlview = false;
            }
        }
    }
    handleSubmit(e) {
        this.state.progress = Math.round(this.state.currentIndex * 100 / 33, 2);
        this.state.currentIndex = this.state.currentIndex + 1
        if (this.state.currentValue.length != 0) {
            this.state.result.push(this.state.currentValue)
            this.state.currentValue = [];
        }
        this.callPostApi(this.state.result);
    }

    callPostApi(answerArray) {
        fetch('/api/psychometric?', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answerArray)
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            if (body.result == "success") {
                window.location.href = "/thankyou";
            }
            else {
                alert("Server is down...Please try after sometime");
            }
        });
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        if (seconds == 0) {
            this.callPostApi(this.state.result);

        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-1 text-center mt-4">
                        <Progress value={this.state.progress} height="20px" color="success" animated>
                            {this.state.progress}%
                       </Progress>
                        <div className="row mt-2">
                            <div className="col-md-10 offset-md-1"> <i style={{ color: "#3498db", fontWeight: 600 }}>Progress Status</i></div>

                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 offset-md-3 text-center mb20 mt-1">
                        <div className="card">
                            <div className="card-header">
                                <i style={{ color: "#3498db", fontWeight: 600 }}> Time Left:  {this.state.time.m}m&nbsp;:&nbsp;{this.state.time.s}s</i>
                            </div>

                        </div>
                    </div>



                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <Container>
                            {this.state.questions.length > 0 ? <Carousel id="myCarousel" activeItem={this.state.currentIndex - 1} length={this.state.questions.length} interval={false} slide={true} showControls={this.state.controlview} showIndicators={false} onClick={this.handleCarouselClick} multiItem>
                                <CarouselInner>
                                    <Row>

                                        {this.state.questions.map((head, index) => {
                                            return <CarouselItem itemId={index + 1} key={index}>
                                                <Col md="12">
                                                    <Card>

                                                        <CardBody style={{ border: "3px solid #007fbe" }}>
                                                            <div className="questions mb-4">Q{index + 1}.&nbsp;{head["Ques"]}</div>
                                                            <ul className="answerList" style={{ listStyle: "none" }}>
                                                                {head["Ans"].map((headcol, indexcol) => {
                                                                    return <li key={indexcol}>
                                                                        <label>
                                                                            <input type="radio" name="answerGroup" value={indexcol} id={indexcol} tabIndex={indexcol} onClick={(e) => this.selectedAnswer(e, head["Id"], head["Ques"], headcol["value"], headcol["score"], index + 1)} />&nbsp;&nbsp;{headcol["value"]}</label>
                                                                    </li>

                                                                })}
                                                            </ul>


                                                        </CardBody>
                                                    </Card>


                                                </Col>

                                            </CarouselItem>

                                        })}
                                    </Row>
                                </CarouselInner>
                            </Carousel> : <div className="col-md-3 offset-md-5"><div className="loader"></div></div>}
                        </Container>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "90px", textAlign: "center" }}>
                    <div className="col-md-4 offset-md-4">
                        {!this.state.controlview ?
                            <button className="btn btn-info col-md-4 offset-md-2" onClick={this.handleSubmit}>Submit</button>
                            : ''}
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

export default withRouter(connect(mapStateToProps)(TestPage));
