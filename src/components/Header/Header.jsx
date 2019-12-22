import React from 'react';
import  style from "./Header.module.css";
import Time from './Time/Time';
import DateNow from './DateNow/DateNow';
import Search from './Search/Search';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className={style.header}>
                <DateNow dateNow={this.state.date.toLocaleDateString()}/>
                <Search/>
                <Time time={this.state.date.toLocaleTimeString()}/>
            </div>
        )
    }
}