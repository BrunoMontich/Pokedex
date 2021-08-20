import React from 'react';
import './SearchBar.css'


const searchBar = ({setSearch}) => {

    
    return (
        <>
            <div className="search-box-container">
                <input type="search"
                 placeholder="Digite o pokemon"
                  className="search-bar"
                  onChange={(ev)=>{setSearch(ev.target.value)}}
                  
                   />
            

            </div>
        </>
    );
}

export default searchBar;