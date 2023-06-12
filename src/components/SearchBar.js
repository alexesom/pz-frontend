import React, { useState } from 'react';
import articleApi from "../api/articleApi";

const SearchBar = ({setSearchResults}) => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        try {
            return await articleApi.searchArticles({
                title: search
            })
        } catch (error) {
            console.error('There was an error with the search', error);
        }
    };

    const handleKeyDown = (event) => {
        handleSearch().then((response) => {
            console.log(response)
            //setSearchResults(response.data);
        });
    };

    return (
        <div className="position-relative d-flex col-6">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className="form-control bg-light not-rounded shadow-none border-0"
                placeholder="Szukaj..."
            />
        </div>
    );
};

export default SearchBar;
