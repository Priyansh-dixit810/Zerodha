import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="media/images/largestBroker.svg"></img>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stoke broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail volume orders in India daily by trading and investing in: </p>
                    <div className='row mt-5'>
                        <div className='col'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li>
                                    <p>Stockes and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Policies</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <img src="media/images/pressLogos.png" style={{width: "100%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;