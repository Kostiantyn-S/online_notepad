import React from 'react';
import  style from "./Main.module.css";
import MainContent from './MainContent/MainContent';
import Help_window from "./../Footer/Help_window/Help_window";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.main}>
                <Help_window/>
            </div>
        )
    }
}