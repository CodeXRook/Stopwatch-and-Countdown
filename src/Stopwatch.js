import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTimer: 0
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