import React from 'react';
import  style from "./Footer.module.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footer}>
                <p>Sort for:</p>
                <div><div>Day</div></div>
                <div><div>Week</div></div>
                <div><div>Month</div></div>
                <div><div>Year</div></div>
                <div><div>Don't sort</div></div>
            </div>
        )
    }
}