import React, { Component } from 'react'
import data from './metal.json'

class MetalMeta extends Component {
    render() {
        return (
            <div>
                {/* added plus one because it starts at 0 */}
                <h3>Total Bands: {Math.max.apply(Math, data.map(function (o) { return o.ID; })) + 1}</h3>
            </div>
        )
    }
}

export default MetalMeta;

const ID = data.map((obj) => {
    return obj.ID
})



console.log(Math.max.apply(Math, data.map(function (o) { return o.ID; })))
