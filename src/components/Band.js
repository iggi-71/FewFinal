import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './Band.css'
import Like from './Like';

function Band(props) {
    const { name, formed, origin, fans, id } = props
    return (
        <BrowserRouter>
            <div className='Band'>
                <Link to={`/details/${id}`}>
                </Link>
                <h1>
                    <Link to={`/details/${id}`}>
                        {name}
                    </Link>
                </h1>
                <div>
                    <p>formed: {formed}</p>
                </div>
                <div>
                    <p>origin: {origin}</p>
                </div>
                <div>
                    <p>fans: {fans}</p>
                </div>
                <div>
                    <Like />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Band