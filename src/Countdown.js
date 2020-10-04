import React, { Component } from "react";
import "./App.css";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTimer: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTimer -10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };

    render() {
        return (
            <div className="Countdown">
                <div className="Countdown-header">Countdown</div>
            </div>
        );
    }
}

export default Countdown;