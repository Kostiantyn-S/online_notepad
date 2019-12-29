import React from 'react';
import style from "./Footer.module.css";
import Help from "./Help/Help";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footer}>
                <p className={style.sort_description}>Sort for:</p>
                <div className={style.sort_day}><div>Day</div></div>
                <div className={style.sort_week}><div>Week</div></div>
                <div className={style.sort_month}><div>Month</div></div>
                <div className={style.sort_year}><div>Year</div></div>
                <div className={style.sort_dont}><div>Don't sort</div></div>
                <Help/>
            </div>
        )
    }
}