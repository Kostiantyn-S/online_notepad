import React from 'react';
import style from "./Footer.module.css";
import Help from "./Help/Help";
import Help_window from "./../Footer/Help_window/Help_window";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footer}>
                <p className={style.sort_description}>Sort for:</p>
                <div className={style.sort_day}><div className={style.sort_link}>Day</div></div>
                <div className={style.sort_week}><div className={style.sort_link}>Week</div></div>
                <div className={style.sort_month}><div className={style.sort_link}>Month</div></div>
                <div className={style.sort_year}><div className={style.sort_link}>Year</div></div>
                <div className={style.sort_dont}><div className={style.sort_link}>Don't sort</div></div>
                <Help/>
                <Help_window/>
            </div>
        )
    }
}