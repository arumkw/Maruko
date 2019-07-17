import React from 'react';

const SpanCustom = ({value, props_page}) => {
    return (
        <span
        onClick={(e) => props_page(e.target.value)}
        >{value}</span>
    )
}

export default SpanCustom