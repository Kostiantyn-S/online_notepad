import React from 'react';
import  style from "./SideBar.module.css";
import FilterButton from './FilterButton/FilterButton';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.sideBar}>
                <FilterButton value={'Day'}/>
                <FilterButton value={'Week'}/>
                <FilterButton value={'Month'}/>
                <FilterButton value={'Year'}/>
                <FilterButton value={'Off'}/>
            </div>
        )
    }
}