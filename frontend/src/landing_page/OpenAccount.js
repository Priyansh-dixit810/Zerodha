import React from 'react';

function OpenAccount() {
    return (
       <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1>Open a Zerodha account</h1>
        <p className='text-muted'>
          Modern platform and apps, &#8377;0 investment, and flat &#8377;20 intraday  and F&O trades
        </p>
        <button
          className="btn btn-primary p-2 fs-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
    );
}

export default OpenAccount;