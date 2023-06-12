import React from 'react';
import Navbar from "../components/Navbar";
import LogoBanner from "../components/LogoBanner";
import PopularTopics from "../components/PopularTopics";
import "./css/HomePage.css"

const HomePage = (props) => {
    return (
        <div className="bg-pw-gray-light">
            <Navbar />
            <LogoBanner />
            <PopularTopics />
        </div>
    );
}

export default HomePage;