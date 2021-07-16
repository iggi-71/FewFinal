import React from 'react';
import Band from './Band';
import data from './metal.json'
import './BandList.css'

function BandList() {

    const spaces = data.map((obj) => {
        return (
            <Band
                name={obj.band_name}
                formed={obj.formed}
                origin={obj.origin}
                fans={obj.fans}

            />
        )
    })

    return (
        <div className="BandList">
            {spaces}
        </div>
    )
}

const titles = data.map((obj) => {
    return <h1>{obj.title}</h1>
})

export default BandList