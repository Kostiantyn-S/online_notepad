import React from 'react';
import style from "./ChoosePath.module.css";
import ChoosePath_saveYes from "./ChoosePath_saveYes/ChoosePath_saveYes";

export default class ChoosePath extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={style.choosePath} id={"ChoosePath"}>
                <p>Choose a path to save base with notes</p>
                <input defaultValue={"C:/online_notepad"}/>
                <ChoosePath_saveYes/>
            </div>
        )
    }
}