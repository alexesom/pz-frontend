import React, { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="position-relative d-flex col-6">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control bg-light not-rounded shadow-none border-0"
                placeholder="Szukaj..."
            />
        </div>
    );
};

export default SearchBar;
