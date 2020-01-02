import React from 'react';
import  style from "./Help_window.module.css";

export default class Help_window extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.help_window + " check_help_window"} id={"Help_window"} style={{visibility:"hidden"}}>
                <img className={style.help_icon + " check_help_window"} src={require("./Help.png")} alt="Помощь" height="48" width="48" />
                <em className={"check_help_window"}>
                    How to use App
                </em>
                <span className={"check_help_window"}></span>
                <p className={"check_help_window"}>
                    + button or Enter key - create the new note;<br/>
                    <br/>
                    &#x2716; button or Esc key - close the note without saving;<br/>
                    <br/>
                    OK button or Ctrl + S keys - close the note with saving;<br/>
                    <br/>
                    ? button or F1 key - help;<br/>
                </p>
                <span className={"check_help_window"}></span>
                <div className={style.choose_a_path + " check_help_window"}>
                    <img src={require("./Path_for_save.png")} alt="Помощь" height="20" width="20" className={"check_help_window"}/>
                    <div className={"check_help_window"}>button - choose a path for saving notes.</div>
                </div>
            </div>
        )
    }
}