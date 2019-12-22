import React from 'react';
import  style from "./NewNote_title.module.css";

export default class NewNote_title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.newNote_title}>
                <input className={style.input} defaultValue={"Title"}/>
            </div>
        )
    }
}