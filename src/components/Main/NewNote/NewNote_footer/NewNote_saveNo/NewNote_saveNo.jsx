import React from 'react';
import style from "./NewNote_saveNo.module.css";

export default class NewNote_saveNo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={style.button}>NO</button>
            </div>
        )
    }
}