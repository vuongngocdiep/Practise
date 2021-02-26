import React from 'react'

function Types(props) {
    const {types} = props
    return (
        <div>
            <p>Type</p>
            <div className="types">{types !== undefined && types.map((type,index)=><h5 key={index} className={type}>{type}</h5>)}</div>
            <p>Weeknesses</p>
            {/* <div className="types">{weeknesses.map(type=><h5 className={type}>{type}</h5>)}</div> */}
        </div>
    )
}

export default Types
