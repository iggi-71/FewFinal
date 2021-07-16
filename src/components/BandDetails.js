import React from 'react';
import data from './metal.json'

function BandDetails(props) {
    const { id } = props.match.parms
    const { band_name, fans, origin, formed } = data[id]

    return (
        <div>
            <div>
                <h1>{band_name}</h1>
                <p>{fans}</p>
                <p>{origin}</p>
                <p>{formed}</p>
            </div>

        </div>
    )
}

export default BandDetails