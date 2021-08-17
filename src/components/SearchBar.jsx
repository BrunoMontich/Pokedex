import React from 'react';
import './SearchBar.css'


const searchBar = () => {
    return (
        <>
            <div className="search-box-container">
                <input type="text" placeholder="Digite o pokemon" className="search-bar" />
                <input type="button" value="Procurar" className="search-bar-button" />

            </div>
        </>
    );
}

export default searchBar;