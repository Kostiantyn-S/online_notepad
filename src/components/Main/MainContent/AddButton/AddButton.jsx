import React from 'react';
import style from "./AddButton.module.css";

export default class AddButton extends React.Component {
    render() {
        return (
            <div className={style.add_button} onClick={this.showNewNote}>
                <div className={style.plus}></div>
            </div>
        )
    }

    showNewNote = (e) => {
        e.target.parentNode.parentNode.childNodes[1].style.visibility = "visible";
    }
}