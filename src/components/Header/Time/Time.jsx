import React from 'react';
import  style from "./Time.module.css";

export default class Time extends React.Component {
    render () {
        return (
            <div className={style.time_wrapper}>
                <div className={style.time}>{this.props.time}</div>
            </div>
        )
    }
}