import React from 'react';
import style from "./NewNote_content.module.css";

export default class NewNote_content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.newNote_content}>
                <textarea></textarea>
            </div>
        )
    }
}