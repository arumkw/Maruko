import React from 'react';

const SpanCustom = ({value, props_page, classnm}) => {
    if (classnm === 'active'){
        return (
            <span
            onClick={(e) => props_page(e.target.value)}
            className={classnm}
            >{value}</span>
        )
    } else {
        return (
            <span
            onClick={(e) => props_page(e.target.value)}
            >{value}</span>
        )
    }   
}

export default SpanCustom