import React from 'react';
import  style from "./Help_window.module.css";

export default class Help_window extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.help_window}>
                <img src={require("./Help.png")} alt="Помощь" height="48" width="48" />
                <em>
                    Помощь
                </em>
                <span></span>
                <p>
                    Это просто пример того, как сделать подсказки с использованием CSS!
                </p>
            </div>
        )
    }
}