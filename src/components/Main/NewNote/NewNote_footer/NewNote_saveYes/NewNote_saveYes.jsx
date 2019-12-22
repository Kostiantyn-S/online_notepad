import React from 'react';
import style from "./NewNote_saveYes.module.css";

export default class NewNote_saveYes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={style.button}>Yes</button>
            </div>
        )
    }
}