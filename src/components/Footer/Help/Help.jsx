import React from 'react';
import  style from "./Help.module.css";

export default class Help extends React.Component {
    constructor(props) {
        super(props);
        document.addEventListener("click", this.help_window_handler.bind(this));
    }

    render() {
        return (
            <div className={style.help_wrapper} id={"Help"}>
                <div className={style.help + " check_help_button"}>
                    <p className={"check_help_button"}>?</p>
                </div>
            </div>
        )
    }

    help_window_handler(e) {
        var help_window = document.getElementById("Help_window");
        if (e.target.className.indexOf("check_help_window") == -1 && help_window.style.visibility == "visible") {
            help_window.style.visibility = "hidden";
            return;
        }

        if (e.target.className.indexOf("check_help_button") != -1 && help_window.style.visibility == "hidden") {
            help_window.style.visibility = "visible";
            return;
        }

        if (e.target.className.indexOf("check_help_button") != -1 && help_window.style.visibility == "visible") {
            help_window.style.visibility = "hidden";
            return;
        }
    }
}