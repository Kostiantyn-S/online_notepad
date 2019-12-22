import React from 'react';
import style from "./NewNote.module.css";
import NewNote_header from './NewNote_header/NewNote_header';
import NewNote_content from './NewNote_content/NewNote_content';
import NewNote_footer from './NewNote_footer/NewNote_footer';

export default class NewNote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.newNote} id={"newNote"}>
                <NewNote_header/>
                <NewNote_content/>
                <NewNote_footer/>
            </div>
        )
    }
}