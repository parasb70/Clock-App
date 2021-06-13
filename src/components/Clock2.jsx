import React from 'react';
import moment from 'moment' ;

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();

    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }

    getTime() {
        
        const m = moment(new Date());
        m.subtract(11,'hours').subtract(30,'minutes');
        return {
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            ampm: m.hours() >= 12 ? 'PM ' : 'AM '
        }
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;
        return (
            <div className="clock">
                {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:
                {minutes > 9 ? minutes : `0${minutes}`}:
                {seconds > 9 ? seconds : `0${seconds}`} {ampm}
                MST
            </div>
        );
    }
}
export default Clock2;