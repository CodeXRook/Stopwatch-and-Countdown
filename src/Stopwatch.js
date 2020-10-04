import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTimer: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTimer
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    render() {
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
            </div>
        );
    }
}

export default Stopwatch;