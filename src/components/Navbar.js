import React from 'react';
import NavbarUser from './NavbarUser';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-pw-gray px-1_10 py-0">
            <div className="container-fluid d-flex justify-content-between my-3">
                <div className="d-flex gap-3">
                    <button className="btn text-white bg-pw-gray not-rounded">Start</button>
                    <button className="btn text-white bg-pw-gray not-rounded">Aktualnośći</button>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div className="d-flex gap-3"></div>
                    <SearchBar/>
                    <NavbarUser/>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;