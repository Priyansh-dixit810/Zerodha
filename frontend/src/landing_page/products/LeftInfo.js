import React from 'react';

 function LeftInfo({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, Appstore}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageUrl} alt="Image"/>
                </div>
                <div className='col-6 p-3'>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: 'none'}}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: 'none'}}>
                        Learn More
                        </a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img  src='media/images/googlePlayBadge.svg'/></a>
                        <a href={Appstore} className='mx-3'><img  src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
 }
 
 export default LeftInfo;