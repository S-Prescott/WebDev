import React from 'react'
import doggo from './ruhoh.png'

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img src={doggo} />
            <div id="info">
                <h3>This page could not be found</h3>
            </div>
        </div>
    )
}

export default PageNotFound;