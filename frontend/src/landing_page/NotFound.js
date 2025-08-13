import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
       <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1>404 Error Not found</h1>
        <p className='text-muted'>
          Sorry, the page you are looking for doesn't exist
        </p>
        <Link to="/">
            <button className="btn btn-primary p-2 fs-5" style={{ width: "15%", margin: "0 auto" }}>
            Go home
            </button>
        </Link>
      </div>
    </div>
    );
}

export default NotFound;