import React from 'react';
import  style from "./DateNow.module.css";

export default class DateNow extends React.Component {
    render () {
        return (
            <div className={style.date_wrapper}>
                <div className={style.date}>{this.props.dateNow}</div>
            </div>
        )
    }
}