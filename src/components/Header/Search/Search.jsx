import React from 'react';
import  style from "./Search.module.css";

export default class Search extends React.Component {
    render() {
        return (
            <div className={style.search}>
                <input type="text" className={style.searchTerm} placeholder="What are you looking for?"/>
                <button type="submit" className={style.searchButton}>&#128269;</button>
            </div>
        )
    }
}