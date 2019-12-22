import React from 'react';
import style from "./NewNote_header.module.css";
import NewNote_title from './NewNote_title/NewNote_title';
import NewNote_closeButton from './NewNote_closeButton/NewNote_closeButton';

export default class NewNote_header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.newNote_header}>
                <NewNote_title/>
                <NewNote_closeButton/>
            </div>
        )
    }
}