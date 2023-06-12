import React from 'react';
import logo from '../logo.png';

const LogoBanner = () => {
    return (
        <div className="container-fluid d-flex justify-content-center my-4 mx-0 px-0 py-4 bg-white">
            <img className="img-fluid" id="logo-banner" src={logo} alt="Portal studencki" />
        </div>
    );
};

export default LogoBanner;
