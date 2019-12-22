import React from 'react';
import  style from "./Footer.module.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.footer}>Created by Kostiantyn S.</div>
        )
    }
}