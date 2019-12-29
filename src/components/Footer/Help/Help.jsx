import React from 'react';
import  style from "./Help.module.css";

export default class Help extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.help_wrapper}>
                <div className={style.help}>
                    <p>?</p>
                </div>
            </div>
        )
    }
}