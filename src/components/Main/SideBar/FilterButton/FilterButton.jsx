import React from 'react';
import  style from "./FilterButton.module.css";

export  default class FilterButton extends React.Component {
    render() {
        return (
            <div className={style.filterButton}><p>{this.props.value}</p></div>
        )
    }
}