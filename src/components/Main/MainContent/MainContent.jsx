import React from 'react';
import  style from "./MainContent.module.css";
import AddButton from './AddButton/AddButton';
import NewNote from './../NewNote/NewNote';
import ChoosePath from './../ChoosePath/ChoosePath';

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.mainContent}>
                <AddButton/>
                <NewNote/>
                <ChoosePath/>
            </div>
        )
    }
}