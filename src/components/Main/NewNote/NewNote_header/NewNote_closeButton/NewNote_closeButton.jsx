import React from 'react';
import  style from "./NewNote_closeButton.module.css";

export default class NewNote_closeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.xbt}>
                <div onClick={this.hide}>
                    &times;
                </div>
            </div>
        )
    }

    hide = (e) => {
        e.target.parentNode.parentNode.parentNode.style.visibility = "hidden";
    }
}