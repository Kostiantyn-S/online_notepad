import React from 'react';
import style from "./NewNote_footer.module.css";
import NewNote_saveNo from "./NewNote_saveNo/NewNote_saveNo";
import NewNote_saveYes from "./NewNote_saveYes/NewNote_saveYes";

export default class NewNote_footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.newNote_footer}>
                <NewNote_saveYes/>
                <NewNote_saveNo/>
            </div>
        )
    }
}