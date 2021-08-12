import React from 'react';
import './SearchBar.css'


const searchBar = () => {
    return (
        <>
        <div className="search-box-container">
        <input type="text" placeholder="Digite o pokémon" className="search-bar"/>
        <input type="button" value="Procurar" />

        </div>
        </>
    );
}

export default searchBar;