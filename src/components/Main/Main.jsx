import React from 'react';
import  style from "./Main.module.css";
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.main}>
                <SideBar/>
                <MainContent/>
            </div>
        )
    }
}