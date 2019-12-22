import React from 'react';
import style from "./ChoosePath_saveYes.module.css";
import ChoosePath from "../ChoosePath";

export default class ChoosePath_saveYes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={style.button} onClick={this.firstTimeCheck}>Yes</button>
            </div>
        )
    }

    firstTimeCheck = (e) => {
        e.target.parentNode.parentNode.style.visibility = "hidden";
    }
}