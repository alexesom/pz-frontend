import React from 'react';

const PopularTopics = () => {
    return (
        <div className="container-fluid bg-white" id="popular-topics__container">
            <div className="row">
                <h2 className="" id="popular-topics__title">Popularne tematy</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 not-rounded border-0">
                        <div className="card-body bg-pw-gray-light px-4 py-4">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTopics;